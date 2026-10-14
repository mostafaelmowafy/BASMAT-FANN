import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('الصفحة غير موجودة')
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold text-navy-900">الصفحة غير موجودة</h1>
      <p className="mt-3 text-navy-900/70">الرابط ده مش موجود أو اتغير.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-navy-800"
      >
        الرجوع للرئيسية
      </Link>
    </Container>
  )
}
