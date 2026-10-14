import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import ContactButtons from '../ui/ContactButtons'
import Fingerprint from '../ui/Fingerprint'
import { services } from '../../data/services'
import { site } from '../../data/site'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy-900 text-white">
      <Fingerprint className="pointer-events-none absolute -start-24 -top-16 h-96 w-96 text-gold-500/15" />

      <Container className="relative py-14 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            عندك شغل محتاج تنفيذ أو صيانة؟
          </h2>
          <p className="mt-3 text-base leading-8 text-navy-100">
            كلمنا واتساب أو اتصال، ونرد عليك ونحدد معك الخطوة التالية.
          </p>
          <ContactButtons variant="onDark" className="mt-6" />
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">{site.nameAr}</p>
            <p className="mt-1 text-sm text-navy-200">{site.nameEn}</p>
            <p className="mt-3 text-sm text-navy-200">{site.country}</p>
          </div>

          <nav aria-label="الخدمات">
            <p className="text-sm font-semibold text-gold-300">خدماتنا</p>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-navy-100 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-gold-300">الصفحات</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="text-sm text-navy-100 hover:text-white">الرئيسية</Link>
              </li>
              <li>
                <Link to="/#about" className="text-sm text-navy-100 hover:text-white">من نحن</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-xs text-navy-200">
          © {new Date().getFullYear()} {site.nameAr}. جميع الحقوق محفوظة.
        </p>
      </Container>
    </footer>
  )
}
