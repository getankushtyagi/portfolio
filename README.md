# Portfolio Website

Multi-page professional portfolio for Ankush Tyagi built with plain HTML, CSS, and JavaScript.

## Pages
- `index.html` (Home)
- `about.html`
- `projects.html`
- `experience.html`
- `skills.html`
- `contact.html` (with working contact form)
- `resume.html` (with downloadable role-specific resumes)

## Features
✓ Dark theme (default) + Light theme toggle
✓ Fully responsive for mobile/tablet/desktop
✓ Optimized animations using Intersection Observer
✓ Contact form with Netlify Forms integration
✓ Resume download buttons (Django, Node.js, Laravel)
✓ Accessible ARIA labels and semantic HTML
✓ Theme persistence using localStorage
✓ Touch-friendly form inputs and buttons

## Run Locally
Option 1 - Quick Open:
```
open index.html
```

Option 2 - With Live Server (Recommended):
1. Install VS Code extension "Live Server"
2. Right-click `index.html` → "Open with Live Server"
3. Automatically opens at `http://localhost:5500`

## Deploy

### Netlify (Recommended - Free)
1. Sign up at netlify.com
2. Connect your GitHub repo or drag-drop the folder
3. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: . (current folder)
4. Contact form works automatically on Netlify

### Vercel (Alternative Free)
1. Sign up at vercel.com
2. Import project
3. Deploy (no config needed)

### VPS / Self-Hosted
1. Copy all files to your server:
   ```
   scp -r /Users/ankushtyagi/Documents/website/* user@server:/var/www/html/
   ```
2. Serve with Nginx or Apache
3. For contact form, use a backend service (Formspree, EmailJS, or serverless function)

### Contact Form Setup
- **Netlify**: Works automatically with `netlify` attribute in form
- **Other hosts**: Replace with formspree.io or EmailJS integration

## File Structure
```
/
├── index.html
├── about.html
├── projects.html
├── experience.html
├── skills.html
├── resume.html
├── contact.html
├── styles.css
├── script.js
├── README.md
└── /assets
    ├── Ankush_Tyagi_Resume_Django.pdf
    ├── Ankush_Tyagi_Resume_NodeJS.pdf
    └── Ankush_Tyagi_Resume_Laravel.pdf
```

## Customization

### Update Colors
Edit `styles.css`:
```css
:root {
  --bg: #0d1217;
  --accent: #f58a4b;
  --accent-2: #38c2b2;
}
```

### Update Resume Links
If you host PDFs elsewhere, update `resume.html`:
```html
<a href="YOUR_PDF_URL" class="btn" download>Download PDF</a>
```

## Performance Metrics
- First Contentful Paint: < 1s
- Total file size: < 200KB (without PDFs)
- Mobile-optimized with 100% CSS responsive design
- No external dependencies (Google Fonts via CDN only)

## Browser Support
✓ Chrome/Edge 90+
✓ Firefox 88+
✓ Safari 14+
✓ Mobile browsers (iOS Safari, Chrome Mobile)

## License
© 2026 Ankush Tyagi. All rights reserved.
