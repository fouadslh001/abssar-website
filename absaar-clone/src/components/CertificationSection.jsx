import React from 'react'

const CertificationSection = () => {
  const certifications = [
    {
      name: "CE Certified",
      description: "All products meet strict European safety, health and environmental regulations.",
      badge: "CE"
    },
    {
      name: "TÜV Certified",
      description: "Products tested and certified by Germany's leading technical inspection association.",
      badge: "TÜV"
    },
    {
      name: "RoHS Compliant",
      description: "All products meet strict standards restricting hazardous substances.",
      badge: "RoHS"
    },
    {
      name: "ISO 9001:2015",
      description: "Manufacturing processes meet international quality management standards.",
      badge: "ISO"
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-full text-sm font-semibold mb-4">
            RECOGNITION
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Awards & Certifications
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders worldwide.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                {cert.badge}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {cert.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Quality Commitment */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Uncompromising Quality Standards
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Every ABSAAR product undergoes rigorous testing and quality assurance processes. Our certifications aren't just badges – they represent our unwavering commitment to safety, reliability, and excellence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">Rigorous testing protocols</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">International compliance standards</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">Continuous quality improvement</span>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="text-center">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                  <div className="text-6xl mb-4">🏆</div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Quality First
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    54+ years of trusted excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationSection
