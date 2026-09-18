# Accessibility review

This site targets WCAG 2.2 AA-oriented implementation in the code and content. An accessibility widget is optional and is not the accessibility solution. This document is not a legal certification and does not claim ADA compliance.

## Built into the pages

- Semantic HTML5 landmarks: skip link, emergency `aside`, `header`/`nav`, `main`, `footer`
- One H1 per page; form headings are H2 on Contact and Appointment pages and H3 in the homepage contact section
- Keyboard-operable header, mobile menu with Escape and Tab focus wrap, forms, booklet pager, and video facades
- Visible `:focus-visible` indicators, large tap targets, 18px base type, comfortable line height
- `scroll-padding` / `scroll-margin` so focused elements are not hidden under the sticky header or the fixed accessibility button (WCAG 2.2 focus not obscured)
- Form labels, `aria-invalid`, error summaries (`role="alert"`), and success messages (`role="status"`)
- Honeypot field excluded from the accessibility tree (`hidden`, `inert`, `aria-hidden`) while remaining in the DOM for bot detection
- Meaningful alt text; decorative UI from the old Flash chrome was not reused
- Reduced-motion support via `prefers-reduced-motion` and the optional widget
- Breadcrumbs and a 404 page with useful paths
- No Flash requirement

## Widget (optional)

Text size, contrast, enhanced links, and reduced motion remain available. The native `dialog` traps focus. The site is usable if the widget is never opened. Do not treat the widget as WCAG or ADA compliance.

## Known limitations / manual checks still recommended

- Google Maps embed is not fully accessible; a directions alternative is provided
- YouTube players depend on YouTube’s caption availability
- Recovered booklet images need physician-approved clinical captions
- Archived FLV files are not playable; current videos are YouTube
- Color contrast should be rechecked after any future palette change
- Keyboard-only, screen-reader, 200% zoom, and mobile reflow passes should be repeated in staging after deploy
- Form delivery requires server environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`, `FROM_EMAIL`); if unset, the form tells the user to call the office instead of pretending a message was sent

## Forms

Contact and appointment requests collect only basic scheduling fields, include emergency and non-guarantee notices, and post to `/api/inquiry`, which emails `CONTACT_EMAIL` (set to `info@crsmdinc.com` in Vercel). See `FORMS_SETUP.md`.
