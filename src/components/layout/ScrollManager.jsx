import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * بعد كل تنقل (حتى لو الضغط على نفس الرابط): انزل للـ #anchor لو موجود، أو ارجع لأول الصفحة.
 * الاعتماد على location.key هو اللي بيخلي الضغط المتكرر على "من نحن" يشتغل كل مرة.
 */
export default function ScrollManager() {
  const { key, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [key, hash])

  return null
}
