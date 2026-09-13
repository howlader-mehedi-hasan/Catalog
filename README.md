# Catalogue IT — Technology & Marketing Agency

A high-performance digital marketing and web technology platform built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Node.js**.

Designed to take traditional businesses from offline to online with world-class web systems, bespoke branding, and high-ROI digital acquisition engines.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack & Webpack support)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with modern glassmorphism & cyber-blue design tokens
- **Icons:** [Lucide React](https://lucide.dev/)
- **Backend / APIs:** Next.js Node.js Route Handlers (`/api/contact`)
- **Database Architecture:** Modular storage adapter (`src/lib/contact-service.ts`) — works 100% standalone out-of-the-box, with plug-and-play Cloud Firestore support
- **Deployment Target:** [Vercel](https://vercel.com/) (Edge-optimized)

---

## 📁 Project Structure

```text
catalogue-it/
├── public/
│   └── assets/                  # Production-optimized web assets (Logos, 3D sculptures, widgets)
│       ├── logo.svg             # Vector brand logo
│       ├── logo-current.svg     # Theme-adaptive vector logo
│       ├── hero-card.png        # Seated entrepreneur hero visual
│       ├── sculpture-loop.png   # 3D cyber loop accent
│       ├── sculpture-grid.png   # 3D mint grid sculpture
│       ├── widget-conversion.png# 400% conversion metric card
│       ├── widget-revenue.png   # $63,921 revenue growth card
│       ├── glow-horizon.png     # Ambient blue planet horizon flare
│       ├── banner-quote.png     # Quote banner
│       └── tech-stack.png       # Tech partner badges
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/         # Lead capture API endpoint (POST /api/contact)
│   │   │       └── route.ts
│   │   ├── globals.css          # Design tokens, typography & glassmorphism
│   │   ├── layout.tsx           # SEO metadata, font definitions & root HTML
│   │   └── page.tsx             # Interactive landing page assembly
│   ├── components/
│   │   ├── Navbar.tsx           # Pill navigation & mobile drawer
│   │   ├── HeroSection.tsx      # Main hero with editorial serif typography & 3D sculpture
│   │   ├── Transformation.tsx   # "Traditional Business -> Digital Business" cards
│   │   ├── GrowthProof.tsx      # "Can People Find You Online?" + live floating widgets
│   │   ├── ServicesSection.tsx  # "Nothing will work unless you do" banner & 5 service cards
│   │   ├── DifferenceSection.tsx# 3D grid sculpture & direct verified contact card
│   │   ├── PackagesSection.tsx  # Transparent investment tiers (Starter, Growth, Scale)
│   │   ├── ContactModal.tsx     # Full consultation & lead capture modal
│   │   └── Footer.tsx           # Agency footer with verified hotlines & legal links
│   └── lib/
│       └── contact-service.ts   # Lead submission handler & Firebase Firestore adapter
├── .gitignore                   # Production Git ignore rules
├── package.json                 # Project scripts & dependencies
├── tsconfig.json                # TypeScript compiler configuration
└── README.md                    # Project documentation
```

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally in Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

1. Push this repository to your **GitHub** account.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `catalogue-it` repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"** — your live site will be ready within ~45 seconds!

---

## 🔌 Optional: Connecting Firebase Firestore

The contact service in `src/lib/contact-service.ts` is configured with a plug-and-play adapter. To persist inquiries directly to Firebase Firestore, simply add these environment variables in Vercel or in your local `.env.local`:

```env
FIREBASE_PROJECT_ID="your-project-id"
FIREBASE_CLIENT_EMAIL="your-service-account-email"
FIREBASE_PRIVATE_KEY="your-private-key"
```

If these keys are omitted, the website runs seamlessly in standalone mode.

---

## 📞 Contact Details (Catalogue IT)

- **Hotline / WhatsApp:** [+8801710663301](tel:+8801710663301)
- **Official Email:** [NWU@GMAIL.COM](mailto:NWU@GMAIL.COM)
- **Offices:** Khulna / Dhaka, Bangladesh (Serving Clients Globally)
