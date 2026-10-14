export default function SectionHeading({ title, text, light = false, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      <span className="mt-3 block h-1 w-14 rounded-full bg-gold-500" aria-hidden="true" />
      {text && (
        <p className={`mt-4 text-base leading-8 ${light ? 'text-navy-100' : 'text-navy-900/75'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
