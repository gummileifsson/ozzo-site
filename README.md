# OZZO — Cinematography Website

## Quick Start (Local Development)

1. Make sure you have **Node.js 18+** installed → https://nodejs.org
2. Open a terminal in this folder
3. Run these commands:

```
npm install
npm run dev
```

4. Open http://localhost:5173 in your browser — you'll see the site live.

---

## Deploy to Vercel (Free)

### Option A: Drag & Drop (Easiest)
1. Run `npm install` then `npm run build` in this folder
2. Go to https://vercel.com and sign up (free)
3. Click "Add New" → "Project"
4. Drag the `dist` folder (created by the build) onto the page
5. Done — Vercel gives you a live URL

### Option B: Connect GitHub (Auto-deploys on every change)
1. Push this folder to a GitHub repository
2. Go to https://vercel.com → "Add New" → "Project"
3. Import your GitHub repo
4. Vercel auto-detects Vite — just click "Deploy"
5. Every time you push changes to GitHub, the site updates automatically

---

## How to Edit Content

Open `src/App.jsx` in any text editor. All your content is in the
`SITE_CONFIG` object at the very top of the file.

- Change text between the quote marks: `"like this"`
- To add a project: copy an existing `{ ... }` block and paste it below
- To remove something: delete the entire `{ ... }` block

### Adding Images

1. Put your image files in the `public/images/` folder
2. In the config, reference them as: `image: "/images/your-photo.jpg"`

Examples:
```js
// Hero background
hero: {
  image: "/images/hero-bg.jpg",
  ...
}

// Project thumbnail
{
  title: "Highland Horizons",
  image: "/images/highland.jpg",
  video: "https://vimeo.com/123456789",
  ...
}

// Equipment photo
{ name: "Sony FX6", image: "/images/sony-fx6.jpg", ... }
```

### Adding Videos

Paste any YouTube or Vimeo URL into the `video` field:

```js
video: "https://vimeo.com/906691739"
video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
video: "https://youtu.be/dQw4w9WgXcQ"
```

The site auto-detects the platform and creates the right embed.

---

## Connecting Your Domain (ozzo.is)

1. In Vercel dashboard → your project → Settings → Domains
2. Add `ozzo.is`
3. Vercel shows you DNS records to add
4. Go to your domain registrar and update the DNS records
5. Wait a few minutes — your site is live at ozzo.is

---

## Folder Structure

```
ozzo-site/
├── index.html          ← HTML entry point
├── package.json        ← Dependencies
├── vite.config.js      ← Build configuration
├── public/
│   ├── favicon.svg     ← Browser tab icon
│   └── images/         ← PUT YOUR IMAGES HERE
│       └── (your photos go here)
└── src/
    ├── main.jsx        ← React bootstrap (don't edit)
    └── App.jsx         ← YOUR WEBSITE (edit this!)
```
