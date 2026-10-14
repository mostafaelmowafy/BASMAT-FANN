const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const PhoneIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
)

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const ChevronRightIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
)

export const ChevronLeftIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
)

export const ArrowLeftIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)

export const CheckIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export const ZoomIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-4.2-4.2M11 8.5v5M8.5 11h5" />
  </svg>
)

const serviceIcons = {
  plumbing: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3s6 6.3 6 10.5a6 6 0 1 1-12 0C6 9.300 12 3 12 3z" />
      <path d="M9.500 14a2.500 2.500 0 0 0 2.500 2.500" />
    </svg>
  ),
  painting: (p) => (
    <svg {...base} {...p}>
      <rect x="4" y="3.500" width="13" height="5.500" rx="1.200" />
      <path d="M17 6h2.500a.5.500 0 0 1 .5.500V11a1 1 0 0 1-1 1h-6.500a1 1 0 0 0-1 1v2" />
      <rect x="10" y="15" width="3" height="6" rx="1" />
    </svg>
  ),
  electrical: (p) => (
    <svg {...base} {...p}>
      <path d="M13 2.500L5 13.500h6l-1 8 8-11h-6l1-8z" />
    </svg>
  ),
  tiling: (p) => (
    <svg {...base} {...p}>
      <rect x="3.500" y="3.500" width="7" height="7" rx="1" />
      <rect x="13.500" y="3.500" width="7" height="7" rx="1" />
      <rect x="3.500" y="13.500" width="7" height="7" rx="1" />
      <rect x="13.500" y="13.500" width="7" height="7" rx="1" />
    </svg>
  ),
}

export const ServiceIcon = ({ name, ...props }) => {
  const Icon = serviceIcons[name]
  return Icon ? <Icon {...props} /> : null
}
