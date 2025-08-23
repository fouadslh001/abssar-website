import React from 'react'
import { useTranslation } from '../contexts/TranslationContext'

const Hero = () => {
  const { t } = useTranslation()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 safe-top">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/src/assets/images/Planet-Earth2-poster.jpg"
        >
          <source src="/src/assets/images/Planet-Earth2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for text readability - stronger on mobile */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>
        
        {/* Subtle red gradient overlay to maintain brand theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-transparent to-red-800/30 sm:from-red-900/30 sm:to-red-800/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-red-600/20 backdrop-blur-sm border border-red-500/40 rounded-full text-red-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            {t('hero.badge')}
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full ml-2 sm:ml-3 animate-pulse animation-delay-200"></span>
          </div>

          {/* Main Heading with Red Accent - Mobile Optimized */}
          <h1 className="heading-xl mb-6 sm:mb-8 animate-slide-up">
            <span className="block text-white mb-2 sm:mb-4">{t('hero.title1')}</span>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
            <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-400 font-light mt-2 sm:mt-4">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Enhanced Description - Mobile Optimized */}
          <p className="body-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 animate-slide-up animation-delay-200">
            {t('hero.description')}
          </p>

          {/* Enhanced Feature Cards with Red Theme - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 animate-slide-up animation-delay-400">
            <div className="group">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:bg-red-900/40 hover:scale-105 card-interactive">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{t('hero.powerSolutions.title')}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{t('hero.powerSolutions.description')}</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:bg-red-900/40 hover:scale-105 card-interactive">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{t('hero.weldingTechnology.title')}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{t('hero.weldingTechnology.description')}</p>
              </div>
            </div>
            
            <div className="group sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:bg-red-900/40 hover:scale-105 card-interactive">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{t('hero.qualityAssured.title')}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{t('hero.qualityAssured.description')}</p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with Red Theme - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up animation-delay-600 px-4">
            <a
              href="https://nexa.lu/collections/absaar"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-red-500/25 touch-target"
            >
              <span>{t('common.exploreProducts')}</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#innovation"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target"
            >
              <span>{t('common.ourInnovation')}</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Stats Section - Mobile Optimized */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 animate-slide-up animation-delay-600">
            <div className="text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1 sm:mb-2">50+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider leading-tight">{t('hero.stats.yearsExperience')}</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1 sm:mb-2">100K+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider leading-tight">{t('hero.stats.productsSold')}</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1 sm:mb-2">30+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider leading-tight">{t('hero.stats.countries')}</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider leading-tight">{t('hero.stats.support')}</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-600 safe-bottom">
          <div className="flex flex-col items-center text-red-400 hover:text-red-300 transition-colors cursor-pointer group touch-target">
            <span className="text-xs sm:text-sm mb-2 sm:mb-3 tracking-wider font-semibold uppercase hidden sm:block">{t('common.discoverMore')}</span>
            <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-current rounded-full flex justify-center group-hover:border-red-300 transition-colors duration-300">
              <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
