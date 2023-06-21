"use client"
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Newsletter from '@/components/Newsletter'
import BasicStatistics from '@/components/Statistics'
import Testimonials from '@/components/Testimonials'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container maxW={'1280px'}>
      <HeroSection />
      <BasicStatistics />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Container>
  )
}
