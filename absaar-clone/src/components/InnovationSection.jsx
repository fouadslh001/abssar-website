import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import germanEngineeringImg from '../assets/images/German-Engineering.jpg'
import reliablePerformanceImg from '../assets/images/Reliable-Performance.jpg'
import futureTechnologiesImg from '../assets/images/Future-Technologies.jpg'

const InnovationSection = () => {
  const { t } = useTranslation()
  
  const innovations = [
    {
      title: t('innovation.germanEngineering.title'),
      description: t('innovation.germanEngineering.description'),
      image: germanEngineeringImg
    },
    {
      title: t('innovation.reliablePerformance.title'),
      description: t('innovation.reliablePerformance.description'),
      image: reliablePerformanceImg
    },
    {
      title: t('innovation.futureTechnologies.title'),
      description: t('innovation.futureTechnologies.description'),
      image: futureTechnologiesImg
    }
  ]

  return (
    <section id="innovation" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
            {t('innovation.badge')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              {t('innovation.title')}
            </span>
          </h2>
        </div>

        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {innovations.map((item, index) => (
            <div
              key={index}
              className="group relative text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-red-200 dark:hover:border-red-800 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Professional Icon Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index === 0 && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Image with red gradient overlay */}
              <div className="mb-6 overflow-hidden rounded-xl relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>

              {/* Enhanced decorative line with red theme */}
              <div className="mt-6 w-20 h-1.5 bg-gradient-to-r from-red-600 via-red-700 to-red-800 mx-auto rounded-full group-hover:w-32 group-hover:h-2 transition-all duration-300 shadow-md"></div>
              
              {/* Additional red accent dots */}
              <div className="flex justify-center mt-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                <div className="w-2 h-2 bg-red-800 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InnovationSection
