import React, { useState, useEffect, useRef } from 'react'

const StatsSection = () => {
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
      label: "Countries", 
      value: 28, 
      suffix: "+",
      description: "Global market presence"
    },
    { 
      key: 'products',
      label: "Products Sold Yearly", 
      value: 500, 
      suffix: "k+",
      description: "Units delivered annually"
    },
    { 
      key: 'partners',
      label: "Retail Partners", 
      value: 8000, 
      suffix: "+",
      description: "Worldwide distribution network"
    },
    { 
      key: 'years',
      label: "Years of Excellence", 
      value: 54, 
      suffix: "",
      description: "Decades of innovation"
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
            INTERNATIONAL REACH
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted Worldwide
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            For over five decades, ABSAAR has expanded from our German origins to power vehicles and equipment across Europe and beyond.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Stat Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Number */}
                <div className="mb-4">
                  <span className="text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-red-600 to-red-700 bg-clip-text">
                    {counts[stat.key]}{stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Map Placeholder */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌍</div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Global Presence
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Serving customers across Europe and beyond
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Markets */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Markets
                </h4>
                <div className="space-y-3">
                  {['Germany', 'Luxembourg', 'France', 'Belgium', 'Netherlands'].map((country, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">{country}</span>
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
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
