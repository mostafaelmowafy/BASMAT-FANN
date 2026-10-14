import Container from '../ui/Container'
import { CheckIcon } from '../ui/Icons'

function Column({ title, note, items, accent }) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-navy-100 sm:p-8">
      <h3 className="text-2xl font-bold text-navy-900">{title}</h3>
      <p className="mt-1 text-sm leading-7 text-navy-900/65">{note}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-navy-900/85">
            <span
              className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accent}`}
            >
              <CheckIcon className="h-4 w-4" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServiceDetails({ service }) {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <p className="max-w-3xl text-lg leading-9 text-navy-900/85">{service.intro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Column
            title="تنفيذ من الصفر"
            note="نبدأ العمل من البداية حتى التسليم."
            items={service.fromScratch}
            accent="bg-gold-500 text-navy-950"
          />
          <Column
            title="صيانة وإصلاح"
            note="حتى لو الأعمال لم ننفذها نحن."
            items={service.maintenance}
            accent="bg-navy-900 text-white"
          />
        </div>
      </Container>
    </section>
  )
}
