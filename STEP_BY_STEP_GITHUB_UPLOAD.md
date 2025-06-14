# GitHub Upload - Exact Steps

## Step 1: Create index.html
1. In your GitHub repo, click "Add file" → "Create new file"
2. File name: `index.html`
3. Copy this content:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SameDay025 - Same Day Appointment Booking</title>
    <meta name="description" content="Book same-day appointments with local service providers in Ohio. AI-powered matching for plumbers, electricians, HVAC, and more." />
    <meta property="og:title" content="SameDay025 - Same Day Appointments" />
    <meta property="og:description" content="Connect with local service providers instantly. Same-day booking guaranteed." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sameday025.com" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Step 2: Create vite.config.simple.js
1. Click "Add file" → "Create new file"
2. File name: `vite.config.simple.js`
3. Copy this content:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@shared": path.resolve("shared"),
      "@assets": path.resolve("attached_assets"),
    },
  },
});
```

## Step 3: Create Essential React Files

### src/main.tsx
File name: `src/main.tsx`
Content: (I'll provide this next)

### src/App.tsx  
File name: `src/App.tsx`
Content: (I'll provide this next)

### src/index.css
File name: `src/index.css`
Content: (I'll provide this next)

After creating these 5 files, your Cloudflare build will work.

## Cloudflare Settings
Framework preset: Vite
Build command: npx vite build --config vite.config.simple.js
Build output directory: dist