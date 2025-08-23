import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import jumpStartersImage from '../assets/images/jump-starters-pro.png'
import mainWeldingVideo from '../assets/images/main-welding-background.mp4'

const ProductShowcase = () => {
  const { t } = useTranslation()
  
  // Error handler for video background fallback
  const handleVideoError = (e) => {
    console.error('Error loading video background:', e)
    // Hide video and show fallback background
    e.target.style.display = 'none'
    e.target.parentElement.style.backgroundImage = 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop&crop=center)'
  }

  return (
    <div className="relative">
      {/* Professional Welding Technology Section with Enhanced Design */}
      <section className="relative min-h-screen overflow-hidden pt-16 sm:pt-20 lg:pt-24 safe-top">
        {/* Video Background with Enhanced Overlay */}
        <div className="absolute inset-0 bg-gray-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={handleVideoError}
            poster="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop&crop=center"
          >
            <source src={mainWeldingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>

        {/* Enhanced Welding Spark Effects */}
        <div className="absolute inset-0 opacity-30 hidden sm:block">
          {/* Main sparks */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-ping shadow-lg shadow-orange-400/50"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-pulse animation-delay-200 shadow-md shadow-yellow-300/50"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-red-400 rounded-full animate-bounce animation-delay-400 shadow-lg shadow-red-400/50"></div>
          
          {/* Additional atmospheric effects */}
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping animation-delay-300"></div>
          <div className="absolute bottom-1/4 right-2/3 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse animation-delay-500"></div>
          <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-bounce animation-delay-600"></div>
        </div>

        {/* Professional Content Layout */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white container-custom py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto w-full">
            
            {/* Professional Header Section */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/90 to-orange-600/90 backdrop-blur-md text-white rounded-full text-sm font-bold mb-6 animate-fade-in border border-red-400/30 shadow-lg shadow-red-600/25">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                {t('productShowcase.weldingSection.badge')}
                <div className="w-2 h-2 bg-white rounded-full animate-pulse animation-delay-200"></div>
              </div>
              
              {/* Enhanced Main Heading */}
              <h2 className="heading-xl mb-6 animate-slide-up animation-delay-200">
                <span className="block mb-4 text-white font-black tracking-tight">{t('productShowcase.weldingSection.title1')}</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent font-black tracking-tight">
                  {t('productShowcase.weldingSection.title2')}
                </span>
              </h2>
              
              {/* Professional Description */}
              <p className="body-lg mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-up animation-delay-400 font-medium">
                {t('productShowcase.weldingSection.description')}
              </p>

              {/* Technical Specifications Bar */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 animate-slide-up animation-delay-500">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-semibold">MIG/MAG/TIG</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-semibold">IGBT Technology</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm font-semibold">IP21 Protection</span>
                </div>
              </div>
            </div>

            {/* Professional Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 animate-slide-up animation-delay-600">
              
              {/* Feature Card 1 - Inverter Technology */}
              <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-red-600/20">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  {/* Professional Inverter Technology Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg group-hover:text-red-300 transition-colors duration-300">
                    {t('productShowcase.weldingSection.inverterTech.title')}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {t('productShowcase.weldingSection.inverterTech.description')}
                  </p>
                  {/* Technical Detail */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">Advanced IGBT Control</span>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 - Portable Design */}
              <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-red-600/20">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  {/* Professional Portable Design Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg group-hover:text-red-300 transition-colors duration-300">
                    {t('productShowcase.weldingSection.portableDesign.title')}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {t('productShowcase.weldingSection.portableDesign.description')}
                  </p>
                  {/* Technical Detail */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">Lightweight Design</span>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 - Professional Grade */}
              <div className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-red-400/50 transition-all duration-500 hover:transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-red-600/20 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  {/* Professional Grade Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg group-hover:text-red-300 transition-colors duration-300">
                    {t('productShowcase.weldingSection.professionalGrade.title')}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {t('productShowcase.weldingSection.professionalGrade.description')}
                  </p>
                  {/* Technical Detail */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">Industrial Grade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional CTA Section */}
            <div className="text-center animate-slide-up animation-delay-700">
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>CE Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>German Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>50+ Years Experience</span>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://nexa.lu/collections/absaar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-auto bg-gradient-to-r from-red-600 via-red-700 to-orange-600 hover:from-red-700 hover:via-red-800 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 backdrop-blur-sm text-base touch-target overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{t('productShowcase.weldingSection.exploreWelding')}</span>
                </a>
                <a
                  href="#contact"
                  className="group relative w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-red-400 text-white hover:text-red-300 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-md text-base touch-target overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{t('productShowcase.weldingSection.getProfessionalQuote')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Separator/Spacing */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('productShowcase.separatorSection.title')}</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t('productShowcase.separatorSection.description')}
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-8"></div>
          </div>
        </div>
      </div>

      {/* Jump Starters Section with Image Background */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed py-16 md:py-20 lg:py-24"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${jumpStartersImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-400"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-block px-6 py-2 bg-red-600/80 backdrop-blur-sm text-red-100 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            {t('productShowcase.jumpStartersSection.badge')}
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up animation-delay-200">
            <span className="block mb-2">{t('productShowcase.jumpStartersSection.title1')}</span>
            <span className="block text-red-400">{t('productShowcase.jumpStartersSection.title2')}</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
            {t('productShowcase.jumpStartersSection.description')}
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-up animation-delay-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">12V/24V</div>
              <p className="text-sm text-gray-300">{t('productShowcase.jumpStartersSection.multiVoltage')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">LED</div>
              <p className="text-sm text-gray-300">{t('productShowcase.jumpStartersSection.emergencyLighting')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">USB</div>
              <p className="text-sm text-gray-300">{t('productShowcase.jumpStartersSection.deviceCharging')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">Safe</div>
              <p className="text-sm text-gray-300">{t('productShowcase.jumpStartersSection.safetyProtection')}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-600">
            <a
              href="https://nexa.lu/collections/battery-chargers-jump-starters"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              {t('productShowcase.jumpStartersSection.shopJumpStarters')}
            </a>
            <a
              href="#products"
              className="bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              {t('productShowcase.jumpStartersSection.viewAllProducts')}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="animate-slide-up animation-delay-600">
            <p className="text-sm text-gray-400 mb-4">{t('productShowcase.jumpStartersSection.trustedByProfessionals')}</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs">{t('productShowcase.jumpStartersSection.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-xs">{t('productShowcase.jumpStartersSection.unitsSold')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-xs">{t('productShowcase.jumpStartersSection.countries')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductShowcase
