const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    // Set correct MIME types for JavaScript files
    if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Set correct MIME types for CSS files
    else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Set correct MIME types for font files
    else if (filePath.endsWith('.woff2')) {
      res.setHeader('Content-Type', 'font/woff2');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    else if (filePath.endsWith('.woff')) {
      res.setHeader('Content-Type', 'font/woff');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    else if (filePath.endsWith('.ttf')) {
      res.setHeader('Content-Type', 'font/ttf');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Set correct MIME types for images
    else if (filePath.endsWith('.svg')) {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    else if (filePath.endsWith('.webp')) {
      res.setHeader('Content-Type', 'image/webp');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Security headers middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Handle client-side routing (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} to view your app`);
});
