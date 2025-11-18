# OCR Tester

This is a small standalone Expo project to test the OCR screen in isolation.

How to run

1. From project root or inside `frontend` folder, open a terminal:

```bash
cd frontend/ocr-tester
npm install
npx expo start
```

2. Start the app on web / Android / iOS. The tester app imports the existing `OCRScreen` from the main project (`../src/ocr/OCRScreen`) and renders it directly.

Notes
- The tester uses the OCR endpoint configured in `frontend/src/ocr/api.js` (Render backend). If you want to test against a local backend, edit `frontend/src/ocr/api.js` and set `OCR_API_BASE`.
- This tester relies on `expo-camera` and `expo-media-library`. Ensure they are installed by running `npx expo install expo-camera expo-media-library` if needed.
