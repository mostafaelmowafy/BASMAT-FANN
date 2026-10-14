import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { ServiceIcon } from '../ui/Icons'
import { services } from '../../data/services'

export default function OtherServices({ currentSlug }) {
  const others = services.filter((s) => s.slug !== currentSlug)
  return (
    <section className="border-t border-navy-100 bg-white py-12">
      <Container>
        <h2 className="text-2xl font-bold text-navy-900">خدمات أخرى</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="flex items-center gap-3 rounded-xl bg-paper p-4 ring-1 ring-navy-100 transition-colors hover:bg-navy-900 hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </span>
              <span className="text-lg font-bold">{s.title}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
