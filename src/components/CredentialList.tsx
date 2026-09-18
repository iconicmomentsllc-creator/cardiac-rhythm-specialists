import { practice } from '../data/practice'

export function CredentialList() {
  return (
    <section aria-labelledby="credentials-heading">
      <h2 id="credentials-heading" className="font-serif text-2xl font-semibold text-navy">
        Professional credentials
      </h2>
      <p className="physician-name mt-4 text-xl font-semibold leading-snug text-navy">
        {practice.physician}
      </p>
      <p className="mt-3 text-lg leading-relaxed text-navy">
        These designations appear after Dr. Polosajian’s name. They describe medical training,
        professional fellowship, and cardiac device certification.
      </p>
      <ul className="mt-6 grid gap-4">
        {practice.credentials.map((item) => (
          <li
            key={item.abbr}
            className="rounded-2xl border border-navy/10 px-6 py-5"
          >
            <p className="text-lg font-semibold tracking-wide text-navy">{item.abbr}</p>
            <p className="mt-1 text-lg leading-relaxed text-navy">{item.meaning}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
