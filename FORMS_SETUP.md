# Email (Resend)

Public patient contact and appointment forms have been removed. The website does not collect appointment requests, free-text messages, or other patient-submitted information.

Appointments are requested by telephone. Staff can help with scheduling and insurance information. Patients should confirm their own coverage and benefits with their insurer.

`api/inquiry.ts` no longer sends mail. If the route is called, it returns **410** and tells the visitor to call the office. It does not read a request body and does not call Resend.

## Resend may remain for non-PHI business email

Do **not** remove Resend from the Vercel project solely because public forms are gone. The API key and verified sending domain may stay in place for future **non-PHI** practice or business email.

Do **not** use Resend to send:

- appointment requests
- symptoms, diagnoses, or treatment questions
- medical records or other patient-identifiable health information

## Where secrets are used

| Variable | Used in | Client bundle |
| --- | --- | --- |
| `RESEND_API_KEY` | Reserved for future non-PHI server email. Not called by the public website while patient forms are disabled. | No |
| `CONTACT_EMAIL` | Same. Documented recipient for office email (`info@crsmdinc.com`). | No |
| `FROM_EMAIL` | Same. Verified sender: `Cardiac Rhythm Specialists <website@crsmdinc.com>` | No |
| `VITE_*` variables | Frontend SEO/analytics | Yes — do not put Resend secrets here |

Vite only exposes variables that start with `VITE_` to the browser. Never name these `VITE_RESEND_API_KEY`, `VITE_CONTACT_EMAIL`, or `VITE_FROM_EMAIL`.
