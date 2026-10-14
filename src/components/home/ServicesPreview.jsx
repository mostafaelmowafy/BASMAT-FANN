import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { ArrowLeftIcon, ServiceIcon } from '../ui/Icons'
import { services } from '../../data/services'

function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy-100 transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
        <img
          src={service.images[0].src}
          alt={service.images[0].alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 end-3 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-400">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl font-bold text-navy-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-7 text-navy-900/75">{service.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-600">
          تفاصيل الخدمة
          <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export default function ServicesPreview() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="خدماتنا"
          text="لكل خدمة صفحة بصور من أعمالنا وتفاصيل ما نقدمه فيها، تنفيذاً وصيانة."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </section>
  )
}
