import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from '../contexts/TranslationContext'

const StatsSection = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    countries: 0,
    products: 0,
    partners: 0,
    years: 0
  })
  
  const sectionRef = useRef(null)

  const stats = [
    { 
      key: 'countries',
      label: t('statsSection.stats.countries.label'), 
      value: 28, 
      suffix: "+",
      description: t('statsSection.stats.countries.description')
    },
    { 
      key: 'products',
      label: t('statsSection.stats.products.label'), 
      value: 500, 
      suffix: "k+",
      description: t('statsSection.stats.products.description')
    },
    { 
      key: 'partners',
      label: t('statsSection.stats.partners.label'), 
      value: 8000, 
      suffix: "+",
      description: t('statsSection.stats.partners.description')
    },
    { 
      key: 'years',
      label: t('statsSection.stats.years.label'), 
      value: 54, 
      suffix: "",
      description: t('statsSection.stats.years.description')
    }
  ]

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Counter animation
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach(stat => {
      let currentCount = 0
      const increment = stat.value / steps

      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= stat.value) {
          currentCount = stat.value
          clearInterval(timer)
        }
        
        setCounts(prev => ({
          ...prev,
          [stat.key]: Math.floor(currentCount)
        }))
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            {t('statsSection.badge')}
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4 sm:mb-6">
            {t('statsSection.title')}
          </h2>
          <p className="body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('statsSection.description')}
          </p>
        </div>

        {/* Stats Grid - Mobile Optimized */}
        <div className="grid-responsive-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Stat Card - Mobile Optimized */}
              <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 card-interactive">
                {/* Number */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text block">
                    {counts[stat.key]}{stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 line-clamp-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative line */}
                <div className="mt-3 sm:mt-4 w-8 sm:w-10 lg:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-14 lg:group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info - Mobile Optimized */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
              {/* Map Placeholder */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 h-48 sm:h-56 lg:h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🌍</div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {t('statsSection.globalPresence.title')}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {t('statsSection.globalPresence.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Markets */}
              <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
                <h4 className="heading-sm text-gray-900 dark:text-white mb-4 sm:mb-6">
                  {t('statsSection.keyMarkets')}
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {['Germany', 'Luxembourg', 'France', 'Belgium', 'Netherlands'].map((country, index) => (
                    <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{country}</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
