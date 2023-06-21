import Features from '@/components/Features'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Newsletter from '@/components/Newsletter'
import BasicStatistics from '@/components/Statistics'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <BasicStatistics />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}
