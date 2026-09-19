const STEPS = [
  {
    title: 'Call Our Office',
    body: 'Speak with our staff. We will help you start the appointment request.',
  },
  {
    title: 'Insurance Verification',
    body: 'Staff review insurance information before a visit is scheduled. Please also confirm your coverage and benefits with your insurer. Verification does not guarantee coverage or payment.',
  },
  {
    title: 'Appointment Scheduled',
    body: 'Staff set the appointment and confirm the details with you.',
  },
] as const

export function AppointmentProcess() {
  return (
    <section className="mt-14" aria-labelledby="appointment-process-heading">
      <h2
        id="appointment-process-heading"
        className="font-serif text-2xl font-semibold text-navy"
      >
        How appointments are made
      </h2>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy">
        This process is straightforward. Calling first allows our team to help with scheduling and
        insurance information before a visit is set.
      </p>
      <ol className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
        {STEPS.map((step, index) => (
          <li
            key={step.title}
            className="flex min-w-0 flex-1 flex-col lg:flex-row lg:items-stretch"
          >
            <div className="flex-1 rounded-2xl border border-navy/10 bg-white px-5 py-6">
              <p className="text-base font-semibold tracking-wide text-gold">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-serif text-xl font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-navy">{step.body}</p>
            </div>
            {index < STEPS.length - 1 ? (
              <span
                className="flex shrink-0 items-center justify-center py-1 text-2xl font-semibold text-gold lg:px-3 lg:py-0"
                aria-hidden="true"
              >
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:inline">→</span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}
