# The Wiradarma Group — Website

Next.js 16 (App Router, JavaScript) + Tailwind CSS 4.

```bash
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | File |
| --- | --- |
| All site copy (hero, doctrine, capabilities, principal, terms, form options) | `src/content/site.js` |
| Colors & fonts — light/dark theme tokens (`surface`, `fg`, `line`, …), EB Garamond + Inter | `src/app/globals.css`, `src/app/layout.js` |
| Theme toggle (light default, choice saved in `localStorage` as `wg-theme`) | `src/components/ThemeToggle.js` |
| Sections | `src/components/*.js` |
| Contact form submit (**placeholder**) | `src/lib/submitInquiry.js` |
| Photography (CC0, see `CREDITS.md`) | `src/assets/images/` — registered in `index.js`, rendered via `src/components/Photo.js` |

## Hooking up the inquiry API

`src/lib/submitInquiry.js` currently just waits ~1s and resolves. Replace the body with
your API call. It receives `{ name, entity, aum, nature, message, website }`, must resolve
on success and throw on failure — the form handles the loading / success / error states.

## Hero video

Put a dark-toned loop in `public/media/` (create the folder) and set `site.heroVideo` (and optionally
`site.heroPoster`) in `src/content/site.js`. Until then the hero shows the
structural-steel photograph.

## Swapping photos

Drop a new file into `src/assets/images/`, point the matching entry in `src/assets/images/index.js`
at it, and keep the `alt` text accurate. `<Photo>` applies the grayscale + navy tint automatically.
