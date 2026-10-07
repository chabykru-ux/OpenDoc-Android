# Third-Party Open-Source Notices — OpenDoc v0.2.5

OpenDoc itself is distributed under Apache License 2.0 (see `LICENSE`). This PWA loads pinned third-party open-source runtime packages from jsDelivr. They remain licensed by their respective authors/projects.

## Mozilla PDF.js / pdfjs-dist — 5.4.296
- Purpose: PDF parsing, page rendering and text extraction.
- License: Apache License 2.0.
- Project: https://github.com/mozilla/pdf.js

## pdf-lib — 1.17.1
- Purpose: direct PDF creation and page copying.
- License: MIT.
- Project: https://github.com/Hopding/pdf-lib

## Tesseract.js — 7.0.0
- Purpose: OCR for image-only PDF pages when exporting to TXT/DOCX.
- License: Apache License 2.0.
- Project: https://github.com/naptha/tesseract.js
- Note: Tesseract.js uses additional OCR runtime/language components. A public release should preserve all notices shipped by the exact runtime/language distributions used.

## JSZip — 3.10.1
- Purpose: dependency used by DOCX browser rendering.
- License: MIT.
- Project: https://github.com/Stuk/jszip

## docx-preview — 0.4.1
- Purpose: read-only DOCX rendering in the browser for DOCX -> PDF conversion.
- License: Apache License 2.0.
- Project: https://github.com/VolodymyrBaydalka/docxjs

## html2canvas — 1.4.1
- Purpose: capture rendered DOCX pages for PDF output.
- License: MIT.
- Project: https://github.com/niklasvh/html2canvas

## docx — 9.8.1
- Purpose: create DOCX files from new text documents and PDF text export.
- License: MIT.
- Project: https://github.com/dolanmiu/docx

## Dependency policy
Before adding any runtime dependency, verify its license. Prefer Apache-2.0, MIT, BSD-2-Clause and BSD-3-Clause. Do not add copyleft/commercial dual-license dependencies to the core application without deliberate review.

This notice is informational and does not replace the original license texts/notices of third-party projects.


## JSDoc legacy DOC parser — current main build used by this prototype
- Purpose: browser-side reading of legacy Microsoft Word 97–2003 binary `.doc` files.
- License: 0BSD.
- Project: https://github.com/Alpaq92/JSDoc
- Notes: exact page layout is not reconstructed; complex legacy DOC formatting may be simplified during conversion.

0BSD is a permissive, public-domain-equivalent license and is allowed by this project's dependency policy.
