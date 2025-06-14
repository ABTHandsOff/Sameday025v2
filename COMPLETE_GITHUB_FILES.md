# Complete GitHub Upload Instructions

Follow these exact steps in your GitHub repository:

## File 1: index.html
**Click "Add file" → "Create new file"**
**File name:** `index.html`
**Content:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SameDay025 - Same Day Appointment Booking</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File 2: vite.config.simple.js
**File name:** `vite.config.simple.js`
**Content:**
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
    },
  },
});
```

## File 3: src/main.tsx
**File name:** `src/main.tsx`
**Content:**
```typescript
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

## File 4: src/App.tsx
**File name:** `src/App.tsx`
**Content:**
```typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetch(queryKey[0] as string);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      },
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4">
            <h1 className="text-3xl font-bold text-gray-900">SameDay025</h1>
            <p className="text-gray-600">Same-day appointment booking</p>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 px-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to SameDay025</h2>
            <p className="text-gray-600">Your appointment booking platform is being deployed.</p>
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}
```

## File 5: src/index.css
**File name:** `src/index.css`
**Content:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}
```

## After Upload Complete

1. Go to Cloudflare Pages
2. Update build settings:
   - Framework preset: Vite
   - Build command: `npx vite build --config vite.config.simple.js`
   - Build output directory: `dist`
3. Retry deployment

Your site will be live at sameday025.com once deployed.