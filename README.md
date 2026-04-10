# Cloud Cook - Recipe Finder

Static recipe discovery website built with plain HTML, CSS, and JavaScript.

## Files

- `index.html` - main single-page site
- `style.css` - responsive styles and dark mode
- `script.js` - recipe data, filtering, modal popup, and UI interactions

## GitHub

1. Create a new empty GitHub repository.
2. In this folder, run:

```powershell
git add .
git commit -m "Create Cloud Cook recipe finder"
git remote add origin <your-github-repo-url>
git push -u origin main
```

## AWS S3 Static Hosting

1. Upload `index.html`, `style.css`, and `script.js` to your S3 bucket.
2. Enable static website hosting for the bucket.
3. Set `index.html` as the index document.
4. If needed, allow public read access or serve through CloudFront.
