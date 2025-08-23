import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import product1 from '../assets/images/slide3.png'
import product2 from '../assets/images/slide4.jpg'
import product3 from '../assets/images/slide1.jpg'
import product4 from '../assets/images/slide2.png'

const ProductSlider = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isHoveringLeft, setIsHoveringLeft] = useState(false)
  const [isHoveringRight, setIsHoveringRight] = useState(false)
  const intervalRef = useRef(null)

  const products = [
    { 
      title: t('productSlider.products.welding90A.title'), 
      image: product1,
      description: t('productSlider.products.welding90A.description'),
      features: t('productSlider.products.welding90A.features')
    },
    { 
      title: t('productSlider.products.batteryCharger.title'), 
      image: product2,
      description: t('productSlider.products.batteryCharger.description'),
      features: t('productSlider.products.batteryCharger.features')
    },
    { 
      title: t('productSlider.products.welding160A.title'), 
      image: product3,
      description: t('productSlider.products.welding160A.description'),
      features: t('productSlider.products.welding160A.features')
    },
    { 
      title: t('productSlider.products.smartCharger.title'), 
      image: product4,
      description: t('productSlider.products.smartCharger.description'),
      features: t('productSlider.products.smartCharger.features')
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-navigation handlers
  const handleLeftHoverEnter = () => {
    setIsHoveringLeft(true)
    // Move to previous slide immediately on hover
    prevSlide()
  }

  const handleRightHoverEnter = () => {
    setIsHoveringRight(true)
    // Move to next slide immediately on hover
    nextSlide()
  }

  const handleHoverLeave = () => {
    setIsHoveringLeft(false)
    setIsHoveringRight(false)
  }

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <section id="products" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            {t('productSlider.badge')}
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6">
            {t('productSlider.title')}
          </h2>
          <p className="body-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('productSlider.description')}
          </p>
        </div>

        {/* Product Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-900 shadow-xl sm:shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out mobile-scroll-smooth"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden order-2 lg:order-1">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain lg:object-cover transition-all duration-300 hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/600x400/ef4444/ffffff?text=${encodeURIComponent(product.title)}`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/10 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center order-1 lg:order-2">
                      <h3 className="heading-md text-gray-900 dark:text-white mb-3 sm:mb-4">
                        {product.title}
                      </h3>
                      <p className="body-md text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-6 sm:mb-8">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                          {t('productSlider.keyFeatures')}
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm sm:text-base text-gray-600 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a
                          href="https://nexa.lu/collections/absaar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-red w-full sm:w-auto text-center interactive-element"
                        >
                          {t('productSlider.viewProduct')}
                        </a>
                        <a
                          href="#contact"
                          className="btn-secondary w-full sm:w-auto text-center interactive-element"
                        >
                          {t('productSlider.getQuote')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Mobile Optimized */}
          <button
            onClick={prevSlide}
            onMouseEnter={handleLeftHoverEnter}
            onMouseLeave={handleHoverLeave}
            className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white touch-target rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 interactive-element ${
              isHoveringLeft ? 'opacity-80 scale-110' : ''
            }`}
            aria-label="Previous product"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={handleRightHoverEnter}
            onMouseLeave={handleHoverLeave}
            className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white touch-target rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 interactive-element ${
              isHoveringRight ? 'opacity-80 scale-110' : ''
            }`}
            aria-label="Next product"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Dots Indicator - Mobile Optimized */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`touch-target transition-all duration-200 ${
                  index === currentSlide
                    ? 'w-4 h-4 sm:w-3 sm:h-3 bg-red-600 scale-125'
                    : 'w-3 h-3 sm:w-2.5 sm:h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-red-400'
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View Full Catalog CTA - Mobile Optimized */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://nexa.lu/collections/absaar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl touch-target"
          >
            <span>{t('productSlider.viewFullCatalog')}</span>
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductSlider
