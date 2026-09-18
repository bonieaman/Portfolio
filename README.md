# Nabon Amanuel Portfolio

Production-ready personal portfolio for Nabon Amanuel, built with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide icons.

## Run Locally

```bash
npm install
npm run dev
```

The local scripts use Webpack because this Windows machine's native Next SWC package reports a local binding warning. Vercel/Linux deployments can build the same app normally.

## Verify

```bash
npm run typecheck
npm run lint
npm run build
```

## Edit Content

Most personal and portfolio information is centralized:

- `config/site.ts` - name, title, bio, availability, résumé path
- `config/social.ts` - GitHub, LinkedIn, email, future social links
- `content/projects.ts` - project and case-study data
- `content/project-media.ts` - configured project screenshot filenames and captions
- `content/experience.ts` - verified timeline entries
- `content/skills.ts` - technology categories
- `content/about.ts` - about and leadership copy
- `content/writing.ts` - article/draft outlines
- `content/testimonials.ts` - optional testimonials

## Résumé

Place the verified PDF here:

```text
public/resume/nabon-amanuel-resume.pdf
```

Until it exists, the site routes résumé links to `/resume` and explains what to add.

## Project Screenshots

Place verified screenshots in the project asset folders under `public/projects` and update `content/project-media.ts` when filenames change. The UI only renders configured screenshots, so missing galleries stay hidden instead of showing broken images.

## Contact Form

The contact API validates input, includes a honeypot, and applies basic rate limiting. To send email through Resend, configure:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

Without those variables, the API validates the message but reports that delivery is not connected yet.

## GitHub Repositories

To show selected repositories, configure:

```env
GITHUB_USERNAME=bonieaman
GITHUB_TOKEN=
```

The repository section stays hidden until GitHub data is configured and available.
