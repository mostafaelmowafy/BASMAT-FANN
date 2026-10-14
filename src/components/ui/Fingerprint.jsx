/**
 * زخرفة "البصمة" — مستوحاة من شعار الشركة.
 * خطوط متداخلة بتقطيع مختلف لكل خط عشان تبان زي بصمة الإصبع.
 */
const RIDGES = 15
const dashes = ['none', '120 14', '200 10 40 12', '90 16', 'none', '160 12 30 10']

export default function Fingerprint({ className = '', stroke = 'currentColor' }) {
  const cx = 200
  const cy = 215
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {Array.from({ length: RIDGES }, (_, i) => {
        const r = 16 + i * 12.5
        const ry = r * 1.12
        const d = `M ${cx - r} ${cy + 150 - i * 4} L ${cx - r} ${cy} A ${r} ${ry} 0 0 1 ${cx + r} ${cy} L ${cx + r} ${cy + 150 - i * 4}`
        return <path key={i} d={d} strokeDasharray={dashes[i % dashes.length]} />
      })}
    </svg>
  )
}
