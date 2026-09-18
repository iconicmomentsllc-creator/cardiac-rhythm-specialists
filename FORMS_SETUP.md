# Form delivery setup (Vercel + Resend)

Contact and appointment requests are the only public forms. Both use `InquiryForm` and POST only to `/api/inquiry`. The API sends mail to `process.env.CONTACT_EMAIL` (set this to `info@crsmdinc.com` in Vercel). Recipients cannot be set from the browser.

## Where secrets are used

| Variable | Used in | Client bundle |
| --- | --- | --- |
| `RESEND_API_KEY` | `api/inquiry.ts` only | No |
| `CONTACT_EMAIL` | `api/inquiry.ts` only | No |
| `FROM_EMAIL` | `api/inquiry.ts` only | No |
| `VITE_*` variables | Frontend SEO/analytics | Yes — do not put Resend secrets here |

Vite only exposes variables that start with `VITE_` to the browser. Never name these `VITE_RESEND_API_KEY`, `VITE_CONTACT_EMAIL`, or `VITE_FROM_EMAIL`.

## Vercel (production forms)

Forms work on the Vercel production origin (`www.crsmdinc.com`). GitHub Pages has no serverless `/api/inquiry` route and is not used as production.

1. Open the Vercel project for this repo.
2. Go to **Settings → Environment Variables**.
3. Add `RESEND_API_KEY` for **Production** and **Preview**. Paste the API key from Resend (not the client/public token).
4. Add `CONTACT_EMAIL` for **Production** and **Preview**. Use `info@crsmdinc.com`.
5. Add `FROM_EMAIL` for **Production** and **Preview**. Use the verified sender:
   `Cardiac Rhythm Specialists <website@crsmdinc.com>`
6. In Resend, verify the sending domain (or at least the from-address) before expecting delivery.
7. Redeploy after saving variables. Existing deployments do not pick up new secrets until a new deploy.

If any of the three variables is missing, or if `CONTACT_EMAIL` is not a valid address, `/api/inquiry` returns **503** with a message telling the visitor to call the office. The site does not fake a successful send.

## Local development

Copy `.env.example` to `.env.local` for Vite public values. Serverless email still needs the Resend variables in the Vercel (or local API) environment, not in frontend code.

## What the API does

- Accepts POST JSON from Contact (`formType: "contact"`) and Appointment (`formType: "appointment"`)
- Sends mail to `process.env.CONTACT_EMAIL`
- Sends from `process.env.FROM_EMAIL`
- Uses `reply_to` as the visitor’s email
- Requires `preferredContact` on the server, matching the client form
- Treats a filled honeypot field (`website`) as a bot and returns a silent success
- Rate-limits by client IP
