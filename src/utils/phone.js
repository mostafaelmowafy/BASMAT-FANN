import { COUNTRY_CODE, site } from '../data/site'

/** يحوّل 0589771483 إلى 971589771483 */
export const toInternational = (phone) => {
  const digits = phone.replace(/\D/g, '')
  return digits.startsWith('0') ? COUNTRY_CODE + digits.slice(1) : digits
}

/** 0589771483 -> 058 977 1483 */
export const formatPhone = (phone) =>
  phone.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3')

export const telLink = (phone) => `tel:+${toInternational(phone)}`

export const whatsappLink = (phone, message = site.whatsappMessage) =>
  `https://wa.me/${toInternational(phone)}?text=${encodeURIComponent(message)}`

/** الأرقام بدون تكرار (لو الرقمين نفس الرقم يظهر مرة واحدة) */
export const uniquePhones = () => [...new Set(site.phones)]
