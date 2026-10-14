import { PhoneIcon, WhatsAppIcon } from './Icons'
import { formatPhone, telLink, uniquePhones, whatsappLink } from '../../utils/phone'

/**
 * زرّين لكل رقم: اتصال + واتساب.
 * variant: "onDark" للخلفيات الكحلية، "onLight" للخلفيات الفاتحة
 */
const styles = {
  onDark: {
    call: 'bg-gold-500 text-navy-950 hover:bg-gold-400',
    wa: 'bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20',
  },
  onLight: {
    call: 'bg-navy-900 text-white hover:bg-navy-800',
    wa: 'bg-[#25D366] text-navy-950 hover:bg-[#20bd5a]',
  },
}

export default function ContactButtons({ variant = 'onLight', className = '' }) {
  const s = styles[variant]
  const phones = uniquePhones()
  const btn =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors sm:text-base'

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {phones.map((phone) => (
        <div key={phone} className="flex flex-wrap gap-3">
          <a href={telLink(phone)} className={`${btn} ${s.call}`}>
            <PhoneIcon className="h-5 w-5" />
            <span>اتصل الآن</span>
            <bdi dir="ltr" className="font-medium">{formatPhone(phone)}</bdi>
          </a>
          <a
            href={whatsappLink(phone)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn} ${s.wa}`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>واتساب</span>
          </a>
        </div>
      ))}
    </div>
  )
}
