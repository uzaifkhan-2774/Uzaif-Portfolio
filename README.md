# Uzaif Khan — Portfolio 

## ⚡ Quick Start (bas yahi 3 commands!)

```bash
npm install
npm run dev
```

Browser mein open hoga: http://localhost:5173

## 📦 Build for Production

```bash
npm run build
npm run preview
```

Project Structure

```
uzaif-portfolio/
├── index.html                  ← Vite entry point
├── vite.config.js              ← Vite config
├── package.json                ← Dependencies
└── src/
    ├── App.jsx                 ← Root component
    ├── index.jsx               ← ReactDOM render
    ├── styles/
    │   └── globals.css         ← All CSS (variables + styles)
    ├── hooks/
    │   └── useReveal.js        ← Scroll-trigger reveal hook
    └── components/
        ├── Cursor.jsx          ← Custom animated cursor
        ├── WaterCanvas.jsx     ← Rain drops + ripple canvas
        ├── Noise.jsx           ← Film grain overlay
        ├── Navbar.jsx          ← Fixed nav with active tracking
        ├── Hero.jsx            ← Hero section (entrance animations)
        ├── HeroCard.jsx        ← Stats card with count-up
        ├── Marquee.jsx         ← Infinite scrolling tech ticker
        ├── Divider.jsx         ← Horizontal rule
        ├── SkillCard.jsx       ← Single skill card
        ├── Skills.jsx          ← Skills grid section
        ├── TimelineItem.jsx    ← Single experience entry
        ├── Experience.jsx      ← Timeline section
        ├── FlipCard.jsx        ← 3D flip project card
        ├── Projects.jsx        ← Swiper carousel of FlipCards
        ├── Education.jsx       ← Education section
        └── Footer.jsx          ← Contact footer

@ Tech Stack
- React 18
- Vite 5
- Swiper 11
- Pure CSS (no Tailwind needed)

@ hosting link : https://uzaif-portfolio.vercel.app/
```
