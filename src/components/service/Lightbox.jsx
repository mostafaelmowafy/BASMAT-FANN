import { useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '../ui/Icons'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'

/**
 * عرض الصورة مكبّرة.
 * الكيبورد: Esc للإغلاق — السهم الأيسر للتالي والأيمن للسابق (لأن الموقع RTL).
 */
export default function Lightbox({ images, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const total = images.length
  const image = images[index]

  useLockBodyScroll(true)

  const next = () => onChange((index + 1) % total)
  const prev = () => onChange((index - 1 + total) % total)

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onChange((index + 1) % total)
      if (e.key === 'ArrowRight') onChange((index - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, total, onClose, onChange])

  const arrow =
    'absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30'

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-navy-950/95"
      role="dialog"
      aria-modal="true"
      aria-label="عرض الصورة"
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4 text-white">
        <span className="text-sm" dir="ltr">
          {index + 1} / {total}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="إغلاق"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/30"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
        <img
          src={image.src}
          alt={image.alt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full rounded-lg object-contain"
        />
        {total > 1 && (
          <>
            <button
              type="button"
              className={`${arrow} right-2 sm:right-5`}
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="الصورة السابقة"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              className={`${arrow} left-2 sm:left-5`}
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="الصورة التالية"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      <p
        className="mx-auto max-w-2xl p-5 text-center text-base leading-7 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {image.caption}
      </p>
    </div>
  )
}
