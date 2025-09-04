# Electron + React (Vite + TypeScript) Starter Template 🚀

A step-by-step guide for setting up a desktop application with Electron and React (Vite + TypeScript).

---

## Step 1: Initialize React Project with Vite

```bash
npm create vite@latest .
npm install
```

- **Framework:** react
- **Variant:** typescript

> Sets up a modern React project with TypeScript.

---

## Step 2: Organize Project Structure

1. Inside `src`, create a folder: `UI`
2. Move all existing files/folders from `src` → `src/UI`
3. Update `index.html` script path:

```html
<script type="module" src="/src/UI/main.tsx"></script>
```

4. Delete `public/` folder (not needed for desktop app)

> Keeps React UI separate from Electron code.

---

## Step 3: Configure Vite Build Output

`vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist-react' },
})
```

Test build:

```bash
npm run build
```

- Add `dist-react` to `.gitignore`

---

## Step 4: Install & Setup Electron

```bash
npm install --save-dev electron
```

- Ensure `package.json` has `"type": "module"`

---

## Step 5: Create Electron Main Process

- Folder: `src/electron`
- File: `main.js` (later convert to `main.ts`)
- Add basic Electron code to create a window and load React build from `dist-react`

---

## Step 6: Configure `package.json` Scripts

```json
"main": "dist-electron/main.js",
"scripts": {
  "dev:electron": "cross-env NODE_ENV=development electron ."
}
```

---

## Step 7: Convert Electron Main Process to TypeScript

1. Create `src/electron/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "outDir": "../../dist-electron"
  }
}
```

2. Rename `main.js` → `main.ts`
3. Add transpile script:

```json
"scripts": {
  "transpile:electron": "tsc --project src/electron/tsconfig.json"
}
```

- Add `dist-electron` to `.gitignore`

---

## Step 8: Set Up Electron Builder

```bash
npm install --save-dev electron-builder
```

- Config file: `electron-builder.json`
- Build script:

```json
"scripts": {
  "dist:win": "npm run transpile:electron && npm run build && electron-builder"
}
```

> Packages your app into executable files (.exe, .dmg)

---

## Step 9: Improve Developer Experience (DX)

```bash
npm install --save-dev cross-env npm-run-all
```

- Fixed Vite port (e.g., 5123)
- Load `http://localhost:5123` in dev, `dist-react/index.html` in production

Combined dev script:

```json
"scripts": {
  "dev:react": "vite",
  "dev:electron": "cross-env NODE_ENV=development electron .",
  "dev": "npm-run-all --parallel dev:react dev:electron"
}
```

Run development environment:

```bash
npm run dev
```

---

✅ Done! Your **Electron + React + TypeScript setup** is ready for development and packaging.

