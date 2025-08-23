import React, { useState, useEffect } from 'react'
import { useTranslation } from '../contexts/TranslationContext'

// Import local images
import weldingImage from '../assets/images/Welding-Equipment.jpg'
import jumpStartersImage from '../assets/images/jump-starters2.jpg'
import polishersImage from '../assets/images/Polishers.jpg'


const ProductCategories = () => {
  const { t } = useTranslation()
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const categories = [
    {
      title: t('productCategories.welding.title'),
      description: t('productCategories.welding.description'),
      features: t('productCategories.welding.features'),
      link: '#',
      image: weldingImage,
      gradient: 'from-orange-500 via-red-600 to-pink-600',
      bgGradient: 'from-orange-500/20 to-red-600/20',
      icon: '⚡',
      badge: t('productCategories.welding.badge'),
      stats: t('productCategories.welding.stats'),
      featured: true
    },
    {
      title: t('productCategories.jumpStarters.title'),
      description: t('productCategories.jumpStarters.description'),
      features: t('productCategories.jumpStarters.features'),
      link: 'https://nexa.lu/collections/battery-chargers-jump-starters',
      image: jumpStartersImage,
      gradient: 'from-blue-500 via-purple-600 to-indigo-700',
      bgGradient: 'from-blue-500/20 to-purple-600/20',
      icon: '🔋',
      badge: t('productCategories.jumpStarters.badge'),
      stats: t('productCategories.jumpStarters.stats')
    },
    {
      title: t('productCategories.polishers.title'),
      description: t('productCategories.polishers.description'),
      features: t('productCategories.polishers.features'),
      link: 'https://nexa.lu/collections/absaar-polisher',
      image: polishersImage,
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      bgGradient: 'from-emerald-500/20 to-teal-600/20',
      icon: '✨',
      badge: t('productCategories.polishers.badge'),
      stats: t('productCategories.polishers.stats')
    }
    
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce animation-delay-400"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-600"></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm text-red-600 dark:text-red-400 border border-red-500/30 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in">
            {t('productCategories.badge')}
          </div>
          
          <h2 className="heading-xl mb-4 sm:mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 dark:from-white dark:via-red-400 dark:to-purple-400 bg-clip-text text-transparent">
              {t('productCategories.title')}
            </span>
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-600 dark:text-gray-300">
              {t('productCategories.subtitle')}
            </span>
          </h2>
          
          <p className="body-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            {t('productCategories.description')}
          </p>
          
          <div className="mt-6 sm:mt-8 flex justify-center animate-slide-up animation-delay-400">
            <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid-responsive">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 transform hover:scale-105 animate-slide-up"
              style={{
                animationDelay: `${index * 150}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glassmorphism Card - Mobile Optimized */}
              <div className="relative h-full min-h-[320px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 card-interactive">

                {/* Magnetic Cursor Effect - Hidden on Mobile */}
                {hoveredCard === index && (
                  <div 
                    className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-300 z-10 hidden sm:block"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                )}

                {/* Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
                  <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm transition-all duration-500 ${
                    category.badge === 'Eco' ? 'bg-green-500/80' :
                    category.badge === 'Bestseller' ? 'bg-blue-500/80' :
                    category.badge === 'Professional' ? 'bg-purple-500/80' :
                    category.badge === 'Premium' ? 'bg-emerald-500/80' :
                    'bg-red-500/80'
                  }`}>
                    {category.badge}
                  </span>
                </div>

                {/* Image Container with Enhanced Effects */}
                <div className="relative h-40 sm:h-48 lg:h-56 xl:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/ef4444/ffffff?text=${encodeURIComponent(category.title)}`
                    }}
                  />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {category.icon}
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    {category.stats}
                  </div>

                  {/* Category Title Overlay */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white group-hover:text-red-300 transition-colors duration-300 line-clamp-2">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-3 sm:p-4 lg:p-6 xl:p-8 relative flex-1 flex flex-col">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl sm:rounded-b-2xl lg:rounded-b-3xl`}></div>
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed transition-colors duration-500 line-clamp-3">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="mb-3 sm:mb-4 lg:mb-6 flex-1">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2">
                        {category.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-flex items-center px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-all duration-300"
                          >
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full mr-1 sm:mr-2"></span>
                            <span className="truncate">{feature}</span>
                          </span>
                        ))}
                        {category.features.length > 3 && (
                          <span className="inline-flex items-center px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                            +{category.features.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <a
                      href={category.link}
                      target={category.link.startsWith('http') ? '_blank' : '_self'}
                      rel={category.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="group/btn inline-flex items-center justify-center w-full px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 text-xs sm:text-sm lg:text-base touch-target"
                    >
                      <span className="mr-1 sm:mr-2">{t('common.exploreSeries')}</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect - Hidden on Mobile */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden sm:block">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10 blur-xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Mobile Optimized */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 animate-slide-up animation-delay-600">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600/10 to-purple-600/10 backdrop-blur-sm border border-red-500/20 rounded-lg sm:rounded-xl lg:rounded-2xl">
            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base text-center sm:text-left flex-1">
              {t('productCategories.bottomCta')}
            </span>
            <a
              href="https://nexa.lu/collections/absaar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base whitespace-nowrap touch-target"
            >
              {t('common.viewAllProducts')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
