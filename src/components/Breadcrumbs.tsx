import { Link } from 'react-router-dom'
import type { Crumb } from '../seo/structuredData'

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length < 2) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-navy">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.path} className="inline-flex min-h-11 items-center">
              {index > 0 ? (
                <span aria-hidden="true" className="mr-2 text-navy">
                  /
                </span>
              ) : null}
              {last ? (
                <span aria-current="page" className="font-semibold">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="font-semibold underline underline-offset-4">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
