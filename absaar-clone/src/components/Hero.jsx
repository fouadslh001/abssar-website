import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-black py-16 md:py-20">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-800/30"></div>
        
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Subtle Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border border-red-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-red-400/15 rounded-lg rotate-45 animate-pulse animation-delay-400"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border border-red-600/25 rounded-full animate-pulse animation-delay-200"></div>
        </div>

        {/* Professional Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-pulse animation-delay-600"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-red-600/20 backdrop-blur-sm border border-red-500/40 rounded-full text-red-300 text-sm font-semibold mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
            GERMAN ENGINEERING EXCELLENCE
            <span className="w-2 h-2 bg-red-400 rounded-full ml-3 animate-pulse animation-delay-200"></span>
          </div>

          {/* Main Heading with Red Accent */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
            <span className="block text-white mb-4">POWERING</span>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              EUROPE
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-red-400 font-light mt-4">
              Since 1969
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-slide-up animation-delay-200">
            Leading European manufacturer of professional power solutions. From automotive jump starters to industrial welding equipment, we deliver German-engineered quality that professionals trust worldwide.
          </p>

          {/* Enhanced Feature Cards with Red Theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-slide-up animation-delay-400">
            <div className="group">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:bg-red-900/40 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Power Solutions</h3>
                <p className="text-gray-300 text-base leading-relaxed">Advanced battery chargers and jump starters engineered for reliability</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:bg-red-900/40 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Welding Technology</h3>
                <p className="text-gray-300 text-base leading-relaxed">Professional inverter welding systems for industrial applications</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:bg-red-900/40 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quality Assured</h3>
                <p className="text-gray-300 text-base leading-relaxed">German engineering standards with 50+ years of excellence</p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with Red Theme */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animation-delay-600">
            <a
              href="https://nexa.lu/collections/absaar"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25"
            >
              <span>EXPLORE PRODUCTS</span>
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#innovation"
              className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              <span>OUR INNOVATION</span>
              <svg className="w-6 h-6 ml-3 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">100K+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">30+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center text-red-400 hover:text-red-300 transition-colors cursor-pointer group">
            <span className="text-xs mb-3 tracking-wider font-semibold uppercase">Discover More</span>
            <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center group-hover:border-red-300">
              <div className="w-1.5 h-4 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
