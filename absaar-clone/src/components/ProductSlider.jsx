import React, { useState, useEffect, useRef } from 'react'
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.jpg'
import product4 from '../assets/images/product4.jpg'

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isHoveringLeft, setIsHoveringLeft] = useState(false)
  const [isHoveringRight, setIsHoveringRight] = useState(false)
  const intervalRef = useRef(null)

  const products = [
    { 
      title: "Schweißgerät MIG 90A", 
      image: product1,
      description: "Professional inverter welding technology for industrial applications",
      features: ["Digital display", "Portable design", "Advanced cooling"]
    },
    { 
      title: "Battery Charger Pro 8", 
      image: product2,
      description: "High-performance polishing equipment for automotive professionals",
      features: ["Variable speed", "Ergonomic grip", "Dust collection"]
    },
    { 
      title: "Schweißgerät MAG 160A", 
      image: product3,
      description: "Intelligent charging system with multi-stage technology",
      features: ["Smart charging", "LED indicators", "Safety protection"]
    },
    { 
      title: "Smart Charger Pro 8", 
      image: product4,
      description: "Advanced microprocessor-controlled charging solution",
      features: ["Auto detection", "Temperature compensation", "Maintenance mode"]
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
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Engineered to Perform
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Discover our comprehensive range of power solutions, each designed with German precision and built to exceed expectations.
          </p>
        </div>

        {/* Product Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain sm:object-cover transition-all duration-300 hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/600x400/ef4444/ffffff?text=${encodeURIComponent(product.title)}`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {product.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                              <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="https://nexa.lu/collections/absaar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                        >
                          View Product
                        </a>
                        <a
                          href="#contact"
                          className="bg-white hover:bg-gray-50 text-red-600 font-semibold py-3 px-6 rounded-lg border border-red-600 transition-colors duration-200 text-center"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={handleLeftHoverEnter}
            onMouseLeave={handleHoverLeave}
            className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 ${
              isHoveringLeft ? 'opacity-80 scale-110' : ''
            }`}
            aria-label="Previous product"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={handleRightHoverEnter}
            onMouseLeave={handleHoverLeave}
            className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 ${
              isHoveringRight ? 'opacity-80 scale-110' : ''
            }`}
            aria-label="Next product"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-red-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-red-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View Full Catalog CTA */}
        <div className="text-center mt-16">
          <a
            href="https://nexa.lu/collections/absaar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Full Catalog
            <svg className="ml-2 w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProductSlider
