import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductShowcase from '../components/ProductShowcase'
import ProductCategories from '../components/ProductCategories'
import InnovationSection from '../components/InnovationSection'
import EngineeringExcellence from '../components/EngineeringExcellence'
import HeritageTimeline from '../components/HeritageTimeline'
import StatsSection from '../components/StatsSection'
import CertificationSection from '../components/CertificationSection'
import ProductSlider from '../components/ProductSlider'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>
        
        <ProductShowcase />
        <ProductSlider />
        <ProductCategories />
        <Hero />
        <InnovationSection />
        <EngineeringExcellence />
        <HeritageTimeline />
        <StatsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default Home
