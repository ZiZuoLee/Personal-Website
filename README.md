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
