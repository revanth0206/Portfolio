# Revanth Bethu — Portfolio Website

A modern, production-ready portfolio website built with React + TypeScript + Tailwind CSS.

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## Add Your Assets

### Headshot Photo
Place your headshot image at:
```
public/images/headshot.jpg
```
The site will show a placeholder until you add it.

### CV / Resume
Place your CV PDF at:
```
public/Revanth_Bethu_CV.pdf
```
This powers the "Download CV" button in the navbar.

### Project Screenshots
Already included in `public/images/`:
- `project-support-dashboard.png`
- `project-marketing-dashboard.png`
- `project-sales-dashboard.png`

### OG Image (for social sharing)
Create a 1200×630px image and save as:
```
public/images/og-image.png
```

## Deploy to Netlify

### Option 1: GitHub + Netlify (Recommended)
1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Select your repo
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Manual Deploy
```bash
npm run build
# Then drag the `dist` folder to Netlify's deploy page
```

## Custom Domain
After deploying on Netlify:
1. Go to Site settings → Domain management
2. Add your custom domain (e.g., revanthbethu.com)
3. Update the OG URL in `index.html` to match

## Tech Stack
- **React 18** + TypeScript
- **Vite** (fast builds)
- **Tailwind CSS** (utility-first styling)
- **No unnecessary dependencies** — only 3 runtime deps (react, react-dom, react-router-dom)

## Project Structure
```
src/
├── components/
│   ├── Navbar.tsx        # Fixed nav with scroll detection
│   ├── Hero.tsx          # Landing section with stats
│   ├── About.tsx         # Bio, photo, AI journey, certs
│   ├── Impact.tsx        # Key metrics (top 5)
│   ├── Projects.tsx      # 3 projects with screenshots
│   ├── Experience.tsx    # Work timeline with impact headlines
│   ├── Skills.tsx        # Grouped skills + tools
│   ├── Contact.tsx       # Contact info + social links
│   └── ScrollReveal.tsx  # Scroll animation wrapper
├── hooks/
│   └── useScrollReveal.ts
├── pages/
│   ├── Index.tsx         # Main page
│   └── NotFound.tsx      # 404 page
├── index.css             # Design system + custom styles
├── main.tsx              # Entry point
└── App.tsx               # Router
```
