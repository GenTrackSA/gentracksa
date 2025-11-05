# GenTrack SA — Website

A Next.js (App Router) site with Tailwind, blog, and a contact form that emails `gentracksa@gmail.com` via Nodemailer.

## Quick start

```bash
npm install
cp .env.local.example .env.local
# edit SMTP_USER/SMTP_PASS (use Gmail App Password or any SMTP)
npm run dev
```

## Deploy

- domains.co.za (Node hosting) or Vercel/Netlify.
- Ensure `.env` variables are set in the hosting provider.

## Editing content

- Home sections are in `app/page.tsx` and `components/`.
- Blog lives in `app/blog/*` — add new posts by creating a folder with `page.tsx`.
- Logo is `public/logo.png`.
