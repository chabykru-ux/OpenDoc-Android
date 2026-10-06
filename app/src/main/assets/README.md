# OpenDoc PWA v0.2.5

OpenDoc is a lightweight, free, open-source, local-first utility for everyday document tasks.

## Main functions
- Open and view PDF files
- Print one selected page or the whole document
- Delete unwanted pages and save the remaining pages as PDF
- Export PDF text to TXT or DOCX; OCR is used for image-only pages when needed
- Convert TXT, DOCX and legacy Word 97–2003 DOC files to PDF
- Scan from camera or image library with four-corner crop, perspective correction and A4 fitting
- Create a simple new text document and save it as PDF, DOCX or TXT
- English and Russian interface switch from the header; the selected language is remembered

## PWA
Upload the contents of this folder to a static HTTPS host such as Cloudflare. The app can then be installed as a PWA where the browser supports installation.

## Privacy
Document processing is performed in the browser. The application itself does not upload documents to an application server. Some open-source runtime libraries and OCR language data are loaded from public CDNs, so first use of some functions may require internet access.

## License
OpenDoc source in this package is released under Apache License 2.0. Third-party notices are listed in `THIRD_PARTY_NOTICES.md`.


## v0.2.5 session resilience
- Prevents Android/Chrome pull-to-refresh from accidentally resetting an installed PWA during normal scrolling.
- Stores the current workflow and working pages locally in IndexedDB.
- If the WebView/browser actually reloads or the OS recreates it, OpenDoc restores the last open section and available working data.
- No document data is uploaded for this feature; the recovery snapshot stays on the device.
