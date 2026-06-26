# Delien Technologies PNG — Website

A clean static website built with plain HTML, CSS, and JavaScript.
No database, no backend, no build step — just open and go.

---

## Folder Structure

```
delien/
├── index.html        ← The entire website (Home, About, Services, Media, Contact)
├── css/
│   └── main.css       ← All styles
├── js/
│   └── main.js         ← Navigation, hero slider, tabs, contact form
├── images/             ← All site images (hero photos, gallery, news, thumbnails)
│   └── README.txt      ← Lists every expected filename
└── videos/             ← All site videos
    └── README.txt      ← Lists expected filenames
```

---

## How to Use

### Open it locally
Just double-click `index.html` — it opens directly in any browser. No server required.

### Pages included
- **Home** — hero slider, services preview, stats, about strip, newsletter
- **About** — company story, principles, team
- **Services** — full breakdown of all 6 service categories
- **Media** — news, photo gallery, video library, press releases
- **Contact** — contact details + working contact form (front-end only — see below)

All navigation menu items, footer links, and buttons link correctly between pages using JavaScript-based page switching (no reloads).

---

## Replacing Images & Videos

Drop your own files into `/images/` and `/videos/` using the **same filenames** already referenced in `index.html` — placeholders are included so nothing looks broken out of the box.

See `images/README.txt` and `videos/README.txt` for the full list of expected filenames and recommended sizes.

To use different filenames, open `index.html`, search for the old filename (e.g. `hero-1.jpg`), and replace it with your new one.

---

## Contact Form Note

The contact form in `index.html` / `js/main.js` currently **simulates** a submission (shows a success message but doesn't actually send anywhere). To make it functional, you have two simple no-backend options:

**Option A — Formspree (easiest)**
1. Sign up free at formspree.io
2. Replace the `<form>` tag's `id="contact-form"` setup in `index.html` with:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Remove the `submitContact` JS handler — Formspree handles delivery directly

**Option B — mailto fallback**
Change the submit button to a `mailto:` link pre-filled with form data (works but opens the user's email client).

For a fully custom backend (Node.js + database), that's a separate setup outside this static package.

---

## Hosting

This is a static site — upload the entire `delien/` folder as-is to:
- Any standard web host (GoDaddy, Namecheap hosting, etc.)
- Cloudflare Pages (drag and drop deploy)
- Netlify / Vercel (drag and drop deploy)
- GitHub Pages

No build step, no `npm install`, no server config needed.
