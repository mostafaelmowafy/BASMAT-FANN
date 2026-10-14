import Hero from '../components/home/Hero'
import About from '../components/home/About'
import ServicesPreview from '../components/home/ServicesPreview'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle()
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
    </>
  )
}
