import { useCallback, useEffect, useRef, useState } from 'react'
import Container from '../ui/Container'
import Lightbox from './Lightbox'
import { ChevronLeftIcon, ChevronRightIcon, ServiceIcon, ZoomIcon } from '../ui/Icons'

const AUTOPLAY_MS = 5000

/**
 * بانر الخدمة: صور بتتنقل تلقائياً، والوصف تحت الصورة مباشرة.
 * الضغط على الصورة بيفتح اللايت بوكس.
 */
export default function ServiceBanner({ service }) {
  const { images, title, icon } = service
  const total = images.length

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStart = useRef(null)

  const go = useCallback((i) => setIndex((i + total) % total), [total])

  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // تشغيل تلقائي — بيقف مع الوقوف بالماوس أو فتح الصورة أو لو المستخدم مفعّل تقليل الحركة
  useEffect(() => {
    if (total < 2 || paused || lightboxOpen || reducedMotion) return
    const t = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [total, paused, lightboxOpen, reducedMotion])

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const dx = e.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(dx) < 50) return
    // الموقع RTL: السحب لليمين = التالي
    go(dx > 0 ? index + 1 : index - 1)
  }

  const arrow =
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-950/60 text-white transition-colors hover:bg-navy-950/85'

  return (
    <section aria-roledescription="carousel" aria-label={`صور خدمة ${title}`} className="bg-navy-950">
      <Container className="pt-5 sm:pt-6">
        <h1 className="mb-4 flex items-center gap-3 px-1 text-3xl font-bold text-white sm:text-4xl">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-navy-950">
            <ServiceIcon name={icon} className="h-6 w-6" />
          </span>
          {title}
        </h1>

        <div
          className="relative h-[48vh] min-h-[300px] max-h-[540px] overflow-hidden bg-navy-900 rounded-2xl sm:rounded-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
              aria-hidden={i !== index}
            >
              {/* خلفية مموهة من نفس الصورة عشان الصور الطولية تملأ البانر */}
              <img
                src={img.src}
                alt=""
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
              />
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                tabIndex={i === index ? 0 : -1}
                aria-label={`تكبير الصورة: ${img.alt}`}
                className="group absolute inset-0 flex cursor-zoom-in items-center justify-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full max-w-full object-contain"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <span className="absolute bottom-4 start-4 flex items-center gap-2 rounded-full bg-navy-950/70 px-3 py-2 text-xs font-medium text-white sm:text-sm">
                  <ZoomIcon className="h-4 w-4" />
                  اضغط للتكبير
                </span>
              </button>
            </div>
          ))}

          {total > 1 && (
            <>
              <button type="button" className={`${arrow} right-3`} onClick={() => go(index - 1)} aria-label="الصورة السابقة">
                <ChevronRightIcon className="h-6 w-6" />
              </button>
              <button type="button" className={`${arrow} left-3`} onClick={() => go(index + 1)} aria-label="الصورة التالية">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* الوصف تحت الصورة مباشرة + المصغرات */}
        <div className="px-1 py-5 text-white">
          <p className="min-h-[3.5rem] text-lg leading-8 sm:text-xl" aria-live="polite">
            {images[index].caption}
          </p>

          {total > 1 && (
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1" role="tablist" aria-label="اختيار الصورة">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`الصورة ${i + 1}`}
                  onClick={() => go(i)}
                  className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                    i === index ? 'ring-gold-500' : 'opacity-60 ring-transparent hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>
      </Container>

      {lightboxOpen && (
        <Lightbox
          images={images}
          index={index}
          onChange={go}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  )
}
