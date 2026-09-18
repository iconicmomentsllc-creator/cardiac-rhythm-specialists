import { FAQ_ITEMS } from '../data/faq'
import { ContentLayout } from '../components/ContentLayout'

export function FaqPage() {
  return (
    <ContentLayout
      path="/faq"
      eyebrow="Common questions"
      title="Heart rhythm and office FAQ"
      intro="These answers are for general education. They are not a diagnosis and they do not replace a visit with a physician."
      showDisclaimer
    >
      <dl className="space-y-8">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question}>
            <dt>
              <h2 className="font-serif text-2xl font-semibold text-navy">{item.question}</h2>
            </dt>
            <dd className="mt-3">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </ContentLayout>
  )
}
