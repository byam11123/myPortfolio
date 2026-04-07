# 🚀 Building a Portfolio with Astro - Step by Step Guide

This document explains **why** each file exists and **what** it does in an Astro-based portfolio website.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Configuration Files](#configuration-files)
3. [Source Files](#source-files)
4. [Public Assets](#public-assets)
5. [Deployment & GitHub Workflows](#deployment--github-workflows)

---

## 🎯 Project Overview

**Goal:** Create a modern, fast portfolio website using Astro + React + Tailwind CSS

**Tech Stack:**

- **Astro v6** - Static site generator (ships zero JS by default → blazing fast)
- **React v19** - For interactive components (only loaded when needed)
- **Tailwind CSS v4** - Utility-first CSS framework
- **Node.js >=22.12.0** - Required runtime

**Why this stack?**

- Astro = Best for content-focused sites (blogs, portfolios)
- React = Add interactivity only where needed
- Tailwind = Rapid, consistent styling without custom CSS files

---

## ⚙️ Configuration Files

### 1. `package.json`

**What is it?** The heart of any Node.js project.

**Key sections:**

- `name`: Project identifier (we used `"byamkeshkaiwartya-portfolio"`)
- `type: "module"`: Enables modern `import/export` syntax
- `engines`: Specifies minimum Node.js version
- `scripts`: Shortcuts for common commands
  - `pnpm dev` → Starts dev server at `localhost:4321`
  - `pnpm build` → Creates optimized production files
  - `pnpm preview` → Tests the build before deploying
- `dependencies`: Libraries the project needs to run
- `devDependencies`: Tools only needed during development

**Why it matters:** Without this file, you can't install dependencies or run the project.

---

### 2. `astro.config.mjs`

**What is it?** Main configuration file for Astro.

**Key sections:**

```javascript
site: "https://byamkeshkaiwartya.com";
```

- Sets the production domain
- Used for generating absolute URLs in sitemaps & SEO
- **Why it matters:** Search engines use this to index your site

```javascript
integrations: [
  react(),      // Enables .jsx/.tsx components
  sitemap({...}) // Auto-generates XML sitemap for SEO
]
```

**Sitemap config explained:**

- `customPages`: Explicitly adds your homepage
- `changefreq: 'weekly'` → Tells search engines "this site updates weekly"
- `priority`: Homepage = 1.0 (highest), others = 0.8
- `lastmod`: Timestamp for when page was last updated

```javascript
vite: {
  plugins: [tailwindcss()];
}
```

- Vite = The build tool Astro uses
- This enables Tailwind CSS processing

**Why it matters:** This file controls how Astro builds, bundles, and optimizes your site.

---

### 3. `tsconfig.json`

**What is it?** TypeScript configuration file.

**Why it matters:** Even if you're not writing TypeScript, Astro uses it for:

- Better autocomplete in VS Code
- Type checking for Astro components
- Path aliases (shorter imports)

---

### 4. `.gitignore`

**What is it?** Tells Git which files/folders to NOT track.

**Typical contents:**

- `node_modules/` → Dependencies (can be reinstalled)
- `dist/` → Build output (can be regenerated)
- `.astro/` → Astro cache files

**Why it matters:** Keeps your repository clean and avoids committing generated files.

---

### 5. `pnpm-lock.yaml`

**What is it?** Lockfile that ensures consistent dependency versions.

**Why it matters:** Guarantees everyone who installs the project gets the exact same dependency tree (no "works on my machine" issues).

---

## 📁 Source Files (`src/`)

### 6. `src/data/profile.json`

**What is it?** Your personal information stored as JSON.

**Contains:**

- Name, title, email
- Social media links
- Short bio

**Why it matters:** Single source of truth for your identity. Change it once, updates everywhere.

---

### 7. `src/data/projects.json`

**What is it?** Array of your projects/work.

**Contains per project:**

- Title, description, image
- GitHub/demo links
- Tech stack used
- Date

**Why it matters:** Easy to add/remove projects without touching HTML.

---

### 8. `src/data/blog.json`

**What is it?** List of blog posts you've written.

**Why it matters:** Centralized blog post management.

---

### 9. `src/data/skills.json`

**What is it?** Your technical skills & proficiency levels.

**Why it matters:** Used to render the skills section on your portfolio.

---

### 10. `src/data/experience.json`

**What is it?** Your work history & experience.

**Why it matters:** Timeline of your career progression.

---

### 11. `src/layouts/Layout.astro`

**What is it?** The master template that wraps every page.

**Contains:**

- HTML `<head>` with meta tags, SEO
- Navigation header
- Footer
- JSON-LD schema for search engines
- Global styles

**Why it matters:** Change the layout once, every page updates. This is where we reference `site: "https://byamkeshkaiwartya.com"` for SEO.

---

### 12. `src/pages/index.astro`

**What is it?** Your homepage (the first thing visitors see).

**Contains:**

- Hero section with your name & title
- Skills showcase
- Featured projects
- Contact info

**Why it matters:** This is your digital business card. First impressions matter.

---

### 13. `src/components/*`

**What is it?** Reusable UI pieces (header, footer, project cards, etc.)

**Why it matters:**

- Don't repeat yourself
- Change a component once, updates everywhere it's used
- Easier to maintain

---

### 14. `src/styles/global.css`

**What is it?** Global CSS imports & Tailwind directives.

**Why it matters:** Sets up Tailwind CSS and any custom styles.

---

## 🌐 Public Assets (`public/`)

### 15. `public/robots.txt`

**What is it?** Instructions for search engine crawlers.

**Contains:**

```
User-agent: *
Allow: /
Sitemap: https://byamkeshkaiwartya.com/sitemap-index.xml
```

**Why it matters:** Tells Google/Bing where to find your sitemap for better indexing.

---

### 16. `public/favicon-*.png`, `public/android-*.png`

**What is it?** Favicons for browsers and app icons for mobile.

**Why it matters:**

- Browser tabs show your favicon
- Mobile bookmarks use app icons
- Professional look & feel

---

## 🚀 Deployment & GitHub Workflows

### 17. `.github/workflows/*`

**What is it?** GitHub Actions for CI/CD.

**Why it matters:** Automates building and deploying when you push code.

---

### 18. `.vscode/*`

**What is it?** VS Code workspace settings.

**Contains:**

- Recommended extensions
- Debug configurations
- Editor preferences

**Why it matters:** Better developer experience out of the box.

---

## 🔄 Process Summary

**Step-by-step we:**

1. ✅ Created new project folder
2. ✅ Copied `package.json` (renamed project)
3. ✅ Created `astro.config.mjs` with updated domain
4. ✅ Created `.gitignore` (ignores build artifacts & secrets)
5. ✅ Created `tsconfig.json` (TypeScript + React JSX config)
6. ✅ Created `README.md` (project documentation)
7. ✅ Created `public/` folder with assets (favicons, images, robots.txt)
8. ✅ Created `src/data/` files:
   - `profile.json` - Your personal info ✅ Updated with your details
   - `projects.json` - Template (replace with your projects)
   - `blog.json` - Template (add your articles later)
   - `skills.json` - Template (add your tech stack)
   - `experience.json` - Template (add your work history)
   - `education.json` - Template (add your education)
9. 🔄 Continue with remaining files...
10. ✅ Created `src/layouts/Layout.astro` with all domain references updated
11. ✅ Created `src/pages/index.astro` (homepage structure)
12. ✅ Created `src/styles/global.css` (neobrutalism design system)
13. 🔄 Creating components...
14. ✅ Created all components:
    - `Navbar.astro` - Fixed navigation with mobile menu
    - `Hero.astro` - Bold hero section with dynamic headline from profile.json
    - `About.astro` - Bio + interests display
    - `Experience.astro` - Work history timeline
    - `Education.astro` - Academic background cards
    - `Projects.astro` - Project showcase grid
    - `Skills.astro` - Skills tag mosaic
    - `Blog.astro` - Article cards linking to external posts
    - `Contact.astro` - Contact info + form (fixed hardcoded names)
    - `Footer.astro` - Minimal footer with your name from profile.json
    - `MobileMenu.tsx` - React hamburger menu for mobile

---

## ✅ Project Structure Complete!

```
portfolio_byamkeshkaiwartya/
├── public/              # Static assets (favicons, images, robots.txt)
├── src/
│   ├── components/      # Reusable UI pieces (11 files)
│   ├── data/           # Your personal information (JSON files)
│   ├── layouts/        # Master HTML template
│   ├── pages/          # Route files (index.astro = homepage)
│   └── styles/         # Global CSS & Tailwind
├── .gitignore          # Files to exclude from Git
├── astro.config.mjs    # Astro configuration
├── BUILD_PROCESS.md    # This file - learning documentation
├── package.json        # Dependencies & scripts
├── README.md           # Project documentation
└── tsconfig.json       # TypeScript configuration
```

---

## 📝 Your Action Items Before Launch

1. **Update data files with your real info:**
   - `skills.json` - Add your actual tech stack
   - `experience.json` - Add your work history
   - `education.json` - Add your education details
   - `projects.json` - Replace placeholders with your projects
   - `profile.json` - Review the `about` section

2. **Replace images:**
   - `public/profile.png` - Your actual profile photo
   - `public/og_image.png` - Social sharing image

3. **Install dependencies & test:**

   ```bash
   pnpm install
   pnpm dev
   ```

4. **Deploy:**
   - Push to GitHub
   - Connect domain on Vercel/Netlify
   - Update DNS to point to `byamkeshkaiwartya.com`

**Key principle:** Each file has a specific purpose. Don't just copy - understand WHY it exists.

---

## 📝 Next Steps

- [ ] Continue copying remaining config files
- [ ] Set up data files with your info
- [ ] Create layouts and pages
- [ ] Add components
- [ ] Install dependencies & test
- [ ] Deploy to production

---

**Created:** April 7, 2026  
**Project:** byamkeshkaiwartya-portfolio  
**Based on:** portfolio_new (original)
