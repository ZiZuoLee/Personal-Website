# Personal Website

Modern responsive portfolio website for Zi Zuo Lee.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content editing

Most portfolio content lives in:

```txt
src/lib/content.ts
```

Resume PDFs live in:

```txt
public/resume/
```

Replace the PDFs there when the resume is updated.

Optional profile photo:

```txt
public/profile/avatar.jpg
```

If this file exists, the site renders it in the hero profile card. If it does not exist, the site renders the built-in `ZZ` fallback identity card.

For production SEO URLs, set:

```txt
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without this environment variable, the site falls back to the current placeholder configured in `src/lib/content.ts`.

## Routes

- `/`
- `/projects`
- `/projects/[slug]`
- `/experience`
- `/resume`
- `/about`
- `/contact`
- `/zh`
- `/zh/projects`
- `/zh/projects/[slug]`
