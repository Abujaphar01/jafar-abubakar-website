# Jafar Abubakar — Personal Brand Website

Official personal website for **Jafar Abubakar — AI Engineer & Entrepreneur**.

> *"Building intelligent technology that creates real-world value."*

---

## 1. Architecture & Technology Stack

- **Framework:** Next.js 14 (App Router) with React 18 & TypeScript
- **Styling:** Tailwind CSS (`tailwind.config.ts`) with custom editorial design tokens
- **Typography:**
  - *Display / Editorial Serif:* `Newsreader`
  - *Primary Interface Sans:* `Plus Jakarta Sans`
  - *Technical Metadata Mono:* `JetBrains Mono`
- **Content Architecture:** Centralized, strongly-typed configuration in [`src/data/siteContent.ts`](./src/data/siteContent.ts) for effortless updates over the next 5–10 years.

---

## 2. Running Locally

Open a terminal inside `c:\Users\jafar\Desktop\Antigravity\My website` and run:

```bash
# Install dependencies (already installed)
npm.cmd install

# Start the local development server on http://localhost:3000
npm.cmd run dev
```

For production build and verification:

```bash
npm.cmd run build
npm.cmd run start
```

---

## 3. Updating Content, Projects & Email

All website copy, experience details, projects, skills, and links live in a single file:
**`src/data/siteContent.ts`**

### A. Direct Email & WhatsApp Configuration
Configured in `src/data/siteContent.ts` under `contact`:
```ts
email: "abujaphar01@gmail.com",
whatsapp: {
  url: "https://wa.me/2347048105795",
  display: "+234 704 810 5795",
},
formspreeEndpoint: "", // Optional: Add a Formspree endpoint URL for direct server delivery
```

### B. Adding a New Public Project or Venture
In `src/data/siteContent.ts`, append a new entry to `projects.items`:
```ts
{
  id: "your-new-project",
  index: "05",
  title: "Project Name",
  subtitle: "Short Positioning Subtitle",
  category: "AI & Automation", // "Operating Venture" | "AI & Automation" | "Machine Learning" | "AgriTech & Ventures"
  visibility: "Public",
  status: "Live Production System",
  summary: "Concise factual description of what the project does.",
  details: [
    "Key architectural or operational responsibility #1.",
    "Key architectural or operational responsibility #2.",
  ],
  tags: ["Python", "AI Automation", "APIs"],
  link: {
    label: "View Project",
    url: "https://...",
  },
}
```

### C. Updating Your Portrait Photograph
Replace `/public/images/jafar-abubakar.jpg` (4:5 portrait ratio recommended) and `/public/images/jafar-abubakar-full.jpg`.

---

## 4. Deployment Instructions (Vercel / Netlify / Cloudflare)

1. Push this directory (`My website`) to a GitHub repository under `@Abujaphar01`.
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. Keep the default Next.js build settings (`npm run build`).
4. Connect your custom domain (e.g., `jafarabubakar.com`) and update `siteContent.meta.siteUrl` in `src/data/siteContent.ts`.
