# GitHub File Upload Guide - Step by Step

## Method 1: Create Files One by One (Recommended)

In your GitHub repository, click "Add file" → "Create new file" for each:

### Step 1: Create index.html
**File name:** `index.html`
**Content:** Copy from the index.html file I created in this project

### Step 2: Create vite.config.simple.js  
**File name:** `vite.config.simple.js`
**Content:** Copy from the vite.config.simple.js file I created

### Step 3: Create src folder structure
Create files with these exact names (GitHub will create folders automatically):

**File name:** `src/main.tsx`
**File name:** `src/App.tsx`
**File name:** `src/index.css`

### Step 4: Create essential components
**File name:** `src/components/ui/button.tsx`
**File name:** `src/components/ui/dialog.tsx`
**File name:** `src/components/ui/input.tsx`
**File name:** `src/components/ui/card.tsx`

### Step 5: Create main pages
**File name:** `src/pages/home.tsx`
**File name:** `src/pages/search.tsx`
**File name:** `src/pages/booking.tsx`

## Method 2: Bulk Upload via Git Clone (Advanced)

1. Download this entire Replit project as ZIP
2. Extract it locally
3. Use Git commands to push to your repository

## After Upload Complete

Update Cloudflare Pages build settings:
```
Framework preset: Vite
Build command: npx vite build --config vite.config.simple.js
Build output directory: dist
```

Then retry the deployment.