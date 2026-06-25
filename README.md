# HISEN — Hispanic Inclusion & Support Network (PWA)

A bilingual (English / Spanish) Progressive Web App for **HISEN**, a nonprofit that
accompanies, guides, and strengthens Hispanic families in Alberta.

This version is a **static, design-complete site with no backend database**. It keeps
all pages, sections, and the admin dashboard UI, but runs entirely on in-memory /
static content so it can be deployed anywhere as a static-friendly Next.js app.

## Features

- ⚡️ **Next.js 15** (App Router) + **React 18** + **TypeScript**
- 🎨 **Tailwind CSS** + **shadcn/ui** (Radix primitives) with a custom dark theme
- 🌐 **Bilingual** EN/ES with a language toggle
- 📱 **Installable PWA** — web app manifest, service worker, offline page, app icons
- 📨 **Contact form** posts directly to [Formspree](https://formspree.io/) (no database)
- 🗂️ **Admin dashboard UI** (PIN: `1234`) running on local/session state only
- 🧩 Sections: Hero, Mission, Values, Blog, Services, Events, Testimonials, FAQ, Sponsors, Donate, Contact

> **Note:** Firebase / Firestore has been fully removed. The contact form still
> submits to Formspree. The admin dashboard's edits (events, messages, donations)
> live only in the current browser session and reset on refresh.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:9002](http://localhost:9002).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables required.
4. Click **Deploy**.

The PWA service worker only registers in production builds, so installability and
offline support work automatically once deployed over HTTPS.

## Configuration

- **Contact form endpoint:** update the Formspree URL in
  `src/app/(main)/contact/page.tsx` and `src/components/sections/contact-preview-section.tsx`.
- **Content / data:** edit `src/lib/data.tsx` (nav links, events, testimonials, FAQ, sponsors, services, blog posts).
- **Theme colors:** `src/app/globals.css` and the `theme_color` in `public/manifest.json`.

## Project structure

```
src/
  app/            # App Router pages (main site + /admin)
  components/     # UI components, layout, sections
  context/        # Language provider
  hooks/          # use-toast, use-mobile
  lib/            # static data, types, utils
public/           # PWA manifest, service worker, icons, offline page
```
