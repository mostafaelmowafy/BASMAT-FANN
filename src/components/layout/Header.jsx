import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from '../ui/Container'
import { CloseIcon, MenuIcon, PhoneIcon } from '../ui/Icons'
import { services } from '../../data/services'
import { site } from '../../data/site'
import { telLink, uniquePhones } from '../../utils/phone'

const links = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/#about', label: 'من نحن', hash: true },
  ...services.map((s) => ({ to: `/services/${s.slug}`, label: s.title })),
]

const linkClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-[15px] font-medium transition-colors ${
    isActive ? 'bg-navy-900 text-white' : 'text-navy-900 hover:bg-navy-50'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // اقفل القائمة عند الانتقال لصفحة تانية
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link to="/" aria-label={`${site.nameAr} - الرئيسية`} className="shrink-0">
          <img
            src={site.logo}
            alt={site.nameAr}
            className="h-12 w-auto sm:h-16"
            width="90"
            height="64"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {links.map((l) =>
            l.hash ? (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3 py-2 text-[15px] font-medium text-navy-900 transition-colors hover:bg-navy-50"
              >
                {l.label}
              </Link>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink(uniquePhones()[0])}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>اتصل بنا</span>
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy-900 hover:bg-navy-50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-navy-100 bg-white lg:hidden"
          aria-label="القائمة"
        >
          <Container className="flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-navy-50"
              >
                {l.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
