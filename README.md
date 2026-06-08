# Star 23 Technologies — Website

One-page marketing website for **Star 23 Technologies** (star23tech.com).

Built with **Next.js 14 · TypeScript · Tailwind CSS · React**.

---

## Getting Started

### Prerequisites

- Node.js 18.17+ (required by Next.js 14)
- npm 9+

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
star23tech/
├── public/
│   └── logo.png              # Star 23 Technologies logo
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles, CSS variables, utility classes
│   │   ├── layout.tsx        # Root layout with metadata & Google Fonts
│   │   └── page.tsx          # Page — assembles all section components
│   └── components/
│       ├── Header.tsx        # Sticky nav with mobile menu
│       ├── Hero.tsx          # Hero section with logo visual
│       ├── Services.tsx      # Service cards grid
│       ├── Problems.tsx      # Business problems grid
│       ├── Solutions.tsx     # Featured solutions
│       ├── WhyStar23.tsx     # Why Star 23 / value props (dark section)
│       ├── Process.tsx       # 3-step process
│       ├── FAQ.tsx           # Accordion FAQ
│       ├── Contact.tsx       # Contact form with validation
│       └── Footer.tsx        # Footer with branding
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Sections

| Section | ID | Description |
|---|---|---|
| Header | — | Sticky nav · logo · CTA button |
| Hero | — | Headline · subheadline · CTAs · logo visual |
| Services | `#services` | 7 service cards |
| Problems | — | 7 business problem cards |
| Solutions | `#solutions` | 4 featured solution cards |
| Why Star 23 | — | Value props on navy background |
| Process | `#process` | 3-step Discover → Build → Improve |
| FAQ | `#faq` | Accordion with 7 questions |
| Contact | `#contact` | Form with validation + success state |
| Footer | — | Logo · links · copyright |

---

## Contact Form Integration

The form currently logs submissions to the console. To wire up a real backend, replace the `handleSubmit` body in `src/components/Contact.tsx`:

### Option A: Formspree

```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify(form),
});
```

### Option B: Resend (via Next.js API Route)

Create `src/app/api/contact/route.ts`:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  await resend.emails.send({
    from: "contact@star23tech.com",
    to: "contact@star23tech.com",
    subject: `New inquiry from ${body.name}`,
    text: JSON.stringify(body, null, 2),
  });
  return Response.json({ ok: true });
}
```

Then in the form:
```ts
await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

---

## Deployment to Vercel

### One-click

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Click **Deploy** — no additional config required

### CLI

```bash
npm install -g vercel
vercel --prod
```

### Environment Variables (if using API route)

Set in Vercel Dashboard → Project → Settings → Environment Variables:

| Key | Value |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |

---

## Brand

| Token | Value |
|---|---|
| Navy | `#1a3a6b` |
| Red | `#c8102e` |
| White | `#ffffff` |
| Display font | Barlow Condensed |
| Body font | DM Sans |

---

## SEO

Metadata is set in `src/app/layout.tsx`:

- **Title**: Star 23 Technologies | Technology Solutions for Small Business
- **Description**: Websites, software development, SEO, automation, and AI-powered business tools for small and medium-sized businesses.
- **Open Graph** title + description
- **Keywords**: small business technology solutions, website development, custom software, SEO and online presence, AI automation

To add a favicon, place `favicon.ico` or `favicon.png` in the `/public` directory and reference it in `layout.tsx`:

```tsx
<link rel="icon" href="/favicon.ico" />
```
