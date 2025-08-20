import React, { useState, useEffect } from 'react'

// Import local images
import weldingImage from '../assets/images/Welding-Equipment.jpg'
import jumpStartersImage from '../assets/images/jump-starters2.jpg'
import polishersImage from '../assets/images/Polishers.jpg'
import solarSolutionsImage from '../assets/images/Solar-Solutions.jpg'
import energySystemsImage from '../assets/images/Energy-Systems.jpg'

const ProductCategories = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const categories = [
    {
      title: 'Welding Equipment',
      description: 'Professional welding solutions for industrial applications with cutting-edge technology',
      features: ['MIG/TIG Welding', 'Industrial Grade', 'German Engineering'],
      link: '#',
      image: weldingImage,
      gradient: 'from-orange-500 via-red-600 to-pink-600',
      bgGradient: 'from-orange-500/20 to-red-600/20',
      icon: '⚡',
      badge: 'Professional',
      stats: '50+ Models',
      featured: true
    },
    {
      title: 'Jump Starters',
      description: 'Reliable power solutions for automotive emergencies and professional use',
      features: ['12V/24V Support', 'Fast Charging', 'Emergency Ready'],
      link: 'https://nexa.lu/collections/battery-chargers-jump-starters',
      image: jumpStartersImage,
      gradient: 'from-blue-500 via-purple-600 to-indigo-700',
      bgGradient: 'from-blue-500/20 to-purple-600/20',
      icon: '🔋',
      badge: 'Bestseller',
      stats: '12V-24V'
    },
    {
      title: 'Polishers',
      description: 'High-performance polishing equipment for automotive and industrial professionals',
      features: ['Variable Speed', 'Ergonomic Design', 'Professional Results'],
      link: 'https://nexa.lu/collections/absaar-polisher',
      image: polishersImage,
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      bgGradient: 'from-emerald-500/20 to-teal-600/20',
      icon: '✨',
      badge: 'Premium',
      stats: 'Pro Grade'
    },
    {
      title: 'Solar Solutions',
      description: 'Sustainable energy systems for residential and commercial applications',
      features: ['Eco-Friendly', 'High Efficiency', 'Smart Technology'],
      link: 'https://nexa.lu/collections/absaar-solar-kits',
      image: solarSolutionsImage,
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
      bgGradient: 'from-yellow-400/20 to-orange-500/20',
      icon: '☀️',
      badge: 'Eco',
      stats: 'Eco-Friendly',
      featured: true
    },
    {
      title: 'Energy Systems',
      description: 'Complete power management solutions for modern energy requirements',
      features: ['Smart Control', 'Modular Design', 'Future Ready'],
      link: 'https://nexa.lu/collections/absaar',
      image: energySystemsImage,
      gradient: 'from-violet-500 via-purple-600 to-fuchsia-700',
      bgGradient: 'from-violet-500/20 to-purple-600/20',
      icon: '⚙️',
      badge: 'Innovation',
      stats: 'Complete'
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="products" className="relative section-padding overflow-hidden">
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
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm text-red-600 dark:text-red-400 border border-red-500/30 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            🏭 GERMAN ENGINEERING EXCELLENCE
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 dark:from-white dark:via-red-400 dark:to-purple-400 bg-clip-text text-transparent">
              Pioneering Power Technology
            </span>
            <br />
            <span className="text-3xl lg:text-4xl text-gray-600 dark:text-gray-300">
              Since 1969
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            We design and engineer the future of power solutions in Germany. From automotive charging to professional welding equipment, our technology powers Europe with uncompromising quality and relentless innovation.
          </p>
          
          <div className="mt-8 flex justify-center animate-slide-up animation-delay-400">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
              {/* Glassmorphism Card */}
              <div className="relative h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                
                {/* Magnetic Cursor Effect */}
                {hoveredCard === index && (
                  <div 
                    className="absolute w-32 h-32 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-300 z-10"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                )}

                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm transition-all duration-500 ${
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
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/ef4444/ffffff?text=${encodeURIComponent(category.title)}`
                    }}
                  />
                  
                  {/* Dynamic Gradient Overlay - Removed for clearer images */}
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {category.icon}
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                    {category.stats}
                  </div>

                  {/* Category Title Overlay */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-4 sm:p-6 lg:p-8 relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl sm:rounded-b-3xl`}></div>
                  
                  <div className="relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed transition-colors duration-500">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {category.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-all duration-300"
                          >
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1 sm:mr-2"></span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <a
                      href={category.link}
                      target={category.link.startsWith('http') ? '_blank' : '_self'}
                      rel={category.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="group/btn inline-flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                    >
                      <span className="mr-2">Explore Series</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110"
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

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10 blur-xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-12 sm:mt-16 animate-slide-up animation-delay-600">
          <div className="flex flex-col sm:flex-row items-center gap-4 px-4 sm:px-8 py-4 bg-gradient-to-r from-red-600/10 to-purple-600/10 backdrop-blur-sm border border-red-500/20 rounded-xl sm:rounded-2xl">
            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base text-center sm:text-left">
              Discover our complete product ecosystem
            </span>
            <a
              href="https://nexa.lu/collections/absaar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
