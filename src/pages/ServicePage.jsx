import { Navigate, useParams } from 'react-router-dom'
import ServiceBanner from '../components/service/ServiceBanner'
import ServiceDetails from '../components/service/ServiceDetails'
import OtherServices from '../components/service/OtherServices'
import { getServiceBySlug } from '../data/services'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  useDocumentTitle(service?.title)

  if (!service) return <Navigate to="/404" replace />

  return (
    <>
      {/* key: عند الانتقال لخدمة تانية الحالة (الصورة الحالية) تبدأ من جديد */}
      <ServiceBanner key={service.slug} service={service} />
      <ServiceDetails service={service} />
      <OtherServices currentSlug={service.slug} />
    </>
  )
}
