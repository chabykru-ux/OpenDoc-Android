# OpenDoc for Android

OpenDoc is a free, open-source, local-first Android utility for everyday document work.

The Android app wraps the OpenDoc web/PWA interface in a native Android shell and adds system integration such as **Open with OpenDoc** and **Share**.

## Current release

**v0.2.5**  
Android package: `com.azimuth171.opendoc`  
Minimum Android version: **Android 8.0 (API 26)**

## Main features

- Open and preview PDF files
- Print one selected page or the whole document
- Delete unwanted PDF pages and save the remaining pages
- Export PDF text to TXT or DOCX; OCR is used for image-only pages when needed
- Convert TXT, DOCX and legacy Word 97–2003 DOC files to PDF
- Scan from camera or image library with four-corner crop, perspective correction and A4 fitting
- Create a simple text document and save it as PDF, DOCX or TXT
- **Open with OpenDoc** from Android for PDF, DOC/DOCX, TXT and images
- **Share** documents from OpenDoc through the Android system share sheet
- English and Russian interface

## Privacy and local processing

OpenDoc processes document content locally on the device. The application itself does not upload documents to an application server.

Some open-source runtime libraries and OCR language data are loaded from public CDNs, so an internet connection may be required for first use of some functions.

## Android architecture

The existing OpenDoc HTML/CSS/JavaScript application is bundled in `app/src/main/assets` and loaded in an Android `WebView` through `WebViewAssetLoader`.

Native Android code provides:

- Android file picker integration
- `ACTION_VIEW` / **Open with OpenDoc** handling
- Android `FileProvider` support
- Android system sharing for generated documents

## Build

Open the project in Android Studio and build the `app` module.

## Release APK

Prebuilt signed APK files can be published separately under **GitHub Releases**. Signing keys are not included in this repository.

## License

OpenDoc source code is released under the **Apache License 2.0**. See [LICENSE](LICENSE).

Third-party open-source notices are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
