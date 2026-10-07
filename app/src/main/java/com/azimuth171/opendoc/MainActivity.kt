package com.azimuth171.opendoc

import android.annotation.SuppressLint
import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.ClipData
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.provider.OpenableColumns
import android.util.Base64
import android.webkit.JavascriptInterface
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.FileProvider
import androidx.webkit.WebViewAssetLoader
import org.json.JSONObject
import java.io.File

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var incomingDir: File

    private var pageReady = false
    private var filePathCallback: ValueCallback<Array<Uri>>? = null

    private val fileChooserLauncher =
        registerForActivityResult(
            ActivityResultContracts.StartActivityForResult()
        ) { result ->

            val files =
                if (result.resultCode == Activity.RESULT_OK) {
                    WebChromeClient.FileChooserParams.parseResult(
                        result.resultCode,
                        result.data
                    )
                } else {
                    null
                }

            filePathCallback?.onReceiveValue(files)
            filePathCallback = null
        }

    @SuppressLint(
        "SetJavaScriptEnabled",
        "JavascriptInterface"
    )
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)

        incomingDir = File(filesDir, "incoming").apply {
            mkdirs()
        }

        val assetLoader =
            WebViewAssetLoader.Builder()
                .addPathHandler(
                    "/assets/",
                    WebViewAssetLoader.AssetsPathHandler(this)
                )
                .addPathHandler(
                    "/incoming/",
                    WebViewAssetLoader.InternalStoragePathHandler(
                        this,
                        incomingDir
                    )
                )
                .build()

        webView.webViewClient =
            object : WebViewClient() {

                override fun shouldInterceptRequest(
                    view: WebView?,
                    request: WebResourceRequest?
                ): WebResourceResponse? {

                    return request?.url?.let {
                        assetLoader.shouldInterceptRequest(it)
                    }
                }

                override fun onPageFinished(
                    view: WebView?,
                    url: String?
                ) {
                    super.onPageFinished(view, url)

                    if (
                        url?.contains(
                            "/assets/index.html"
                        ) == true
                    ) {
                        pageReady = true
                        handleIncomingIntent(intent)
                    }
                }
            }

        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            allowContentAccess = true
        }

        /*
         * Мост:
         * JavaScript OpenDoc -> Android
         */
        webView.addJavascriptInterface(
            AndroidShareBridge(),
            "AndroidShare"
        )

        webView.webChromeClient =
            object : WebChromeClient() {

                override fun onShowFileChooser(
                    webView: WebView?,
                    newFilePathCallback:
                    ValueCallback<Array<Uri>>?,
                    fileChooserParams:
                    FileChooserParams?
                ): Boolean {

                    filePathCallback?.onReceiveValue(null)
                    filePathCallback = newFilePathCallback

                    return try {

                        val chooserIntent =
                            fileChooserParams?.createIntent()
                                ?: Intent(
                                    Intent.ACTION_OPEN_DOCUMENT
                                ).apply {

                                    addCategory(
                                        Intent.CATEGORY_OPENABLE
                                    )

                                    type = "*/*"
                                }

                        fileChooserLauncher.launch(
                            chooserIntent
                        )

                        true

                    } catch (
                        e: ActivityNotFoundException
                    ) {

                        filePathCallback?.onReceiveValue(null)
                        filePathCallback = null

                        false
                    }
                }
            }

        webView.loadUrl(
            "https://appassets.androidplatform.net/assets/index.html"
        )
    }

    override fun onNewIntent(
        newIntent: Intent
    ) {
        super.onNewIntent(newIntent)

        setIntent(newIntent)

        if (pageReady) {
            handleIncomingIntent(newIntent)
        }
    }

    /*
     * OPEN WITH OPENDOC
     */
    private fun handleIncomingIntent(
        sourceIntent: Intent?
    ) {

        if (
            sourceIntent?.action !=
            Intent.ACTION_VIEW
        ) {
            return
        }

        val sourceUri =
            sourceIntent.data ?: return

        importUri(
            sourceUri,
            sourceIntent.type
        )
    }

    private fun importUri(
        sourceUri: Uri,
        suppliedMimeType: String?
    ) {

        val fileName =
            getDisplayName(sourceUri)
                ?: "document"

        val mimeType =
            suppliedMimeType
                ?: contentResolver.getType(sourceUri)
                ?: "application/octet-stream"

        val lowerName =
            fileName.lowercase()

        val extension =
            lowerName
                .substringAfterLast('.', "")
                .takeIf {

                    lowerName.contains('.') &&
                            it.matches(
                                Regex("[a-z0-9]{1,10}")
                            )
                }
                ?.let {
                    ".$it"
                }
                ?: ""

        clearIncomingDirectory()

        val localFile =
            File(
                incomingDir,
                "incoming_${System.currentTimeMillis()}$extension"
            )

        try {

            contentResolver
                .openInputStream(sourceUri)
                ?.use { input ->

                    localFile
                        .outputStream()
                        .use { output ->

                            input.copyTo(output)
                        }
                }
                ?: return

        } catch (_: Exception) {
            return
        }

        val targetInput =
            when {

                mimeType == "application/pdf" ||
                        lowerName.endsWith(".pdf") ->
                    "pdfInput"

                mimeType.startsWith("image/") ->
                    "imageInput"

                else ->
                    "convertInput"
            }

        sendFileToOpenDoc(
            localFile,
            fileName,
            mimeType,
            targetInput
        )
    }

    private fun sendFileToOpenDoc(
        localFile: File,
        fileName: String,
        mimeType: String,
        targetInput: String
    ) {

        val incomingUrl =
            "https://appassets.androidplatform.net/incoming/${localFile.name}"

        val js =
            """
            (function waitForOpenDocBridge(n) {

                if (window.openIncomingFile) {

                    window.openIncomingFile(
                        ${JSONObject.quote(incomingUrl)},
                        ${JSONObject.quote(fileName)},
                        ${JSONObject.quote(mimeType)},
                        ${JSONObject.quote(targetInput)}
                    );

                } else if (n < 50) {

                    setTimeout(
                        function() {
                            waitForOpenDocBridge(n + 1);
                        },
                        100
                    );
                }

            })(0);
            """.trimIndent()

        webView.evaluateJavascript(
            js,
            null
        )

        /*
         * Не открывать тот же файл второй раз
         * при следующем запуске.
         */
        setIntent(
            Intent(
                this,
                MainActivity::class.java
            )
        )
    }

    private fun clearIncomingDirectory() {

        incomingDir
            .listFiles()
            ?.forEach {
                it.delete()
            }
    }

    private fun getDisplayName(
        uri: Uri
    ): String? {

        if (uri.scheme == "content") {

            contentResolver.query(
                uri,
                arrayOf(
                    OpenableColumns.DISPLAY_NAME
                ),
                null,
                null,
                null
            )?.use { cursor ->

                val index =
                    cursor.getColumnIndex(
                        OpenableColumns.DISPLAY_NAME
                    )

                if (
                    index >= 0 &&
                    cursor.moveToFirst()
                ) {
                    return cursor.getString(index)
                }
            }
        }

        return uri.lastPathSegment
    }

    /*
     * OPENDOC -> ANDROID SHARE
     */
    inner class AndroidShareBridge {

        @JavascriptInterface
        fun shareBase64(
            base64Data: String,
            fileName: String,
            mimeType: String
        ) {

            try {

                val cleanBase64 =
                    if (base64Data.contains(",")) {
                        base64Data.substringAfter(",")
                    } else {
                        base64Data
                    }

                val bytes =
                    Base64.decode(
                        cleanBase64,
                        Base64.DEFAULT
                    )

                val safeFileName =
                    fileName
                        .replace(
                            Regex("""[\\/:*?"<>|]"""),
                            "_"
                        )
                        .ifBlank {
                            "OpenDoc_file"
                        }

                val shareDir =
                    File(
                        cacheDir,
                        "shared"
                    ).apply {

                        mkdirs()

                        listFiles()
                            ?.forEach {
                                it.delete()
                            }
                    }

                val shareFile =
                    File(
                        shareDir,
                        safeFileName
                    )

                shareFile.writeBytes(
                    bytes
                )

                val shareUri =
                    FileProvider.getUriForFile(
                        this@MainActivity,
                        "${packageName}.fileprovider",
                        shareFile
                    )

                runOnUiThread {

                    val shareIntent =
                        Intent(
                            Intent.ACTION_SEND
                        ).apply {

                            type =
                                mimeType.ifBlank {
                                    "application/octet-stream"
                                }

                            putExtra(
                                Intent.EXTRA_STREAM,
                                shareUri
                            )

                            clipData =
                                ClipData.newRawUri(
                                    shareFile.name,
                                    shareUri
                                )

                            addFlags(
                                Intent.FLAG_GRANT_READ_URI_PERMISSION
                            )
                        }

                    startActivity(
                        Intent.createChooser(
                            shareIntent,
                            "Share with"
                        )
                    )
                }

            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }
}