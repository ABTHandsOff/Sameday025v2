# Connect GitHub to Cloudflare Pages - Step by Step

## Step 1: Connect Repository to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit dash.cloudflare.com
   - Navigate to "Pages" in the left sidebar

2. **Create New Project**
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose "GitHub"
   - Authorize Cloudflare to access your GitHub account
   - Select repository: `ABTHandsOff/sameday025`

3. **Configure Build Settings**
   ```
   Project name: sameday025
   Production branch: main
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist/public
   Root directory: / (leave empty)
   ```

## Step 2: Add Environment Variables

In Cloudflare Pages → Settings → Environment Variables, add these:

**Production Environment Variables:**
```
NODE_ENV=production
DATABASE_URL=[Get from Neon dashboard - connection string]
TWILIO_ACCOUNT_SID=[From console.twilio.com]
TWILIO_AUTH_TOKEN=[From console.twilio.com]
TWILIO_PHONE_NUMBER=[Your Twilio phone number]
OPENAI_API_KEY=[From platform.openai.com]
ELEVENLABS_API_KEY=[From elevenlabs.io]
SESSION_SECRET=[Generate 32 random characters at random.org]
```

## Step 3: Configure Custom Domain

1. **In Cloudflare Pages → Custom domains**
   - Click "Set up a custom domain"
   - Enter: `sameday025.com`
   - Click "Continue"

2. **DNS Configuration**
   - Go to Cloudflare DNS settings
   - Add CNAME record:
     - Name: `@` (or sameday025.com)
     - Target: `sameday025.pages.dev`
     - Proxy: Orange cloud (Proxied)
   
   - Add CNAME record:
     - Name: `www`
     - Target: `sameday025.com`
     - Proxy: Orange cloud (Proxied)

## Step 4: SSL and Security

1. **SSL/TLS Settings**
   - Go to SSL/TLS → Overview
   - Set encryption mode: "Full (strict)"
   - Enable "Always Use HTTPS"

2. **Security Settings**
   - Go to Security → WAF
   - Enable managed rules
   - Set security level: Medium

## Step 5: Deploy and Test

1. **Initial Deployment**
   - Cloudflare Pages will automatically build and deploy
   - Wait for build to complete (5-10 minutes)

2. **Test URLs**
   - https://sameday025.com
   - https://www.sameday025.com
   - https://sameday025.com/search/plumbing

## Your Environment Variable Sources:

**DATABASE_URL:** 
- Login to neon.tech
- Go to your project dashboard
- Copy connection string from "Connection Details"

**TWILIO Credentials:**
- Login to console.twilio.com
- Account SID: Found on main dashboard
- Auth Token: Found on main dashboard (click to reveal)
- Phone Number: Go to Phone Numbers → Manage → Active numbers

**OPENAI_API_KEY:**
- Login to platform.openai.com
- Go to API keys section
- Create new key or copy existing

**ELEVENLABS_API_KEY:**
- Login to elevenlabs.io
- Go to Profile → API Key
- Copy the key

**SESSION_SECRET:**
- Visit random.org
- Generate 32 random characters
- Or use: openssl rand -base64 32

## Expected Timeline:
- Repository connection: 2 minutes
- Environment variables: 5 minutes
- Domain configuration: 3 minutes
- SSL activation: 2 minutes
- First deployment: 10 minutes

Total: ~20 minutes to live production site

## Verification Checklist:
- [ ] GitHub repository connected
- [ ] All environment variables added
- [ ] Custom domain configured
- [ ] SSL enabled
- [ ] Site loads at sameday025.com
- [ ] Location detection works
- [ ] Phone calls connect
- [ ] Database queries successful