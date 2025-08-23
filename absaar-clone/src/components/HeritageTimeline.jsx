import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'

const HeritageTimeline = () => {
  const { t } = useTranslation()
  
  const timelineEvents = [
    {
      year: t('heritage.timeline.foundation.year'),
      title: t('heritage.timeline.foundation.title'),
      description: t('heritage.timeline.foundation.description'),
      highlight: true
    },
    {
      year: t('heritage.timeline.globalExpansion.year'),
      title: t('heritage.timeline.globalExpansion.title'),
      description: t('heritage.timeline.globalExpansion.description'),
      highlight: false
    },
    {
      year: t('heritage.timeline.productRevolution.year'),
      title: t('heritage.timeline.productRevolution.title'),
      description: t('heritage.timeline.productRevolution.description'),
      highlight: false
    },
    {
      year: t('heritage.timeline.reinvention.year'),
      title: t('heritage.timeline.reinvention.title'),
      description: t('heritage.timeline.reinvention.description'),
      highlight: true
    }
  ]

  return (
    <section id="heritage" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            {t('heritage.badge')}
          </div>
          <h2 className="heading-lg mb-4 sm:mb-6 text-gray-900 dark:text-white">
            {t('heritage.title')}
          </h2>
          <p className="body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('heritage.description')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-500 to-accent-700 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot - Repositioned for mobile */}
                <div className="absolute left-4 sm:left-6 lg:left-1/2 transform lg:-translate-x-1/2 z-10 top-8">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full border-2 sm:border-3 lg:border-4 border-white dark:border-gray-900 ${
                    event.highlight 
                      ? 'bg-accent-700' 
                      : 'bg-accent-600'
                  } shadow-lg`}></div>
                </div>

                {/* Mobile Timeline Line */}
                <div className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-accent-700"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    index % 2 === 0 ? 'ml-12 sm:ml-16 lg:ml-0' : 'ml-12 sm:ml-16 lg:ml-0'
                  }`}>
                    {/* Year Badge */}
                    <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 ${
                      event.highlight 
                        ? 'bg-accent-700' 
                        : 'bg-accent-600'
                    }`}>
                      {event.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Decorative Element */}
                    <div className={`mt-4 sm:mt-6 w-12 sm:w-16 h-1 rounded-full ${
                      event.highlight 
                        ? 'bg-accent-700' 
                        : 'bg-accent-600'
                    }`}></div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-accent-800 via-accent-700 to-accent-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="heading-md mb-3 sm:mb-4">
              {t('heritage.ctaTitle')}
            </h3>
            <p className="body-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              {t('heritage.ctaDescription')}
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base touch-target"
            >
              {t('heritage.getInTouch')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeritageTimeline
