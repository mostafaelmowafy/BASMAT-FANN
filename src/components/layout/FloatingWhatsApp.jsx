import { WhatsAppIcon } from '../ui/Icons'
import { uniquePhones, whatsappLink } from '../../utils/phone'

/** أيقونة واتساب عائمة ثابتة في كل الصفحات — تفتح محادثة على أول رقم */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(uniquePhones()[0])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 sm:h-16 sm:w-16"
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden"
        aria-hidden="true"
      />
      <WhatsAppIcon className="relative h-8 w-8 sm:h-9 sm:w-9" />
    </a>
  )
}
