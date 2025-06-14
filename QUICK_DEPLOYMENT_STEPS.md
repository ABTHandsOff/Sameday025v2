# SameDay025 - Quick Deployment Fix

## The Problem
Build failed with: `Could not resolve entry module "client/index.html"`

## The Solution
The vite configuration needs to be corrected for Cloudflare Pages.

## Immediate Steps

### 1. Update Cloudflare Build Settings
In your Cloudflare Pages project settings, change to:
```
Framework preset: Vite
Build command: npx vite build --config vite.config.simple.js
Build output directory: dist
Root directory: (leave empty)
```

### 2. Alternative if Above Fails
Try these settings instead:
```
Framework preset: Static sites
Build command: npm install && cd client && npx vite build --outDir ../dist
Build output directory: dist
Root directory: (leave empty)
```

### 3. Upload Build Configuration (Recommended)
Upload these files to your GitHub repository:

**File: vite.config.production.js**
```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve("client/src"),
      "@shared": path.resolve("shared"),
      "@assets": path.resolve("attached_assets"),
    },
  },
});
```

Then use build command: `npx vite build --config vite.config.production.js`

### 4. Test Locally First
Before deploying, test the build locally:
```bash
cd client
npx vite build --outDir ../dist
```

### 5. After Successful Build
Add environment variables in Cloudflare Pages:
- DATABASE_URL
- TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN
- TWILIO_PHONE_NUMBER
- OPENAI_API_KEY
- ELEVENLABS_API_KEY
- SESSION_SECRET (generate random string)
- NODE_ENV=production

### 6. Configure Custom Domain
- Add sameday025.com in Custom Domains
- Add www.sameday025.com for redirect
- Wait for SSL provisioning (5-10 minutes)

## Expected Result
Your app will be live at https://sameday025.com once the build completes successfully.