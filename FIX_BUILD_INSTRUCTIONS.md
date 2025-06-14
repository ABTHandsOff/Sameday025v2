# Fix Cloudflare Build Error - Quick Steps

## The Problem
The build failed because of a wrangler.toml configuration file that's incompatible with Cloudflare Pages.

## Solution Steps

### 1. Remove wrangler.toml from GitHub
**Go to your GitHub repository:** github.com/ABTHandsOff/sameday025

**Delete the file:**
1. Click on `wrangler.toml` in the file list
2. Click the trash can icon (Delete this file)
3. Commit message: "Remove incompatible wrangler.toml"
4. Click "Commit changes"

### 2. Trigger New Build in Cloudflare
**In your Cloudflare Pages dashboard:**
1. Go to your sameday025 project
2. Click "View details" on the failed deployment
3. Click "Retry deployment" or "Trigger new build"

### 3. Correct Build Settings
Make sure these are set correctly in Cloudflare Pages:
```
Framework preset: Vite
Build command: npm run build
Build output directory: dist/public
Root directory: (leave empty)
```

### 4. Alternative: Simple Build Settings
If it still fails, try these simpler settings:
```
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: client
```

### 5. Environment Variables (Add After Build Success)
Once the build succeeds, add these in Pages Settings → Environment Variables:
- DATABASE_URL
- TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN
- TWILIO_PHONE_NUMBER
- OPENAI_API_KEY
- ELEVENLABS_API_KEY
- SESSION_SECRET
- NODE_ENV=production

## Expected Result
After removing wrangler.toml and retriggering the build, your site should deploy successfully to a .pages.dev URL, then we can configure the custom domain.