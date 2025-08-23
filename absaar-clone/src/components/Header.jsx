import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from '../contexts/TranslationContext'
import logoWhite from '../assets/images/logo_white.png'
import logoBlack from '../assets/images/logo_black.png'

const Header = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#products', label: t('nav.products') },
    { href: '#innovation', label: t('nav.innovation') },
    { href: '#heritage', label: t('nav.heritage') },
    { href: '#contact', label: t('nav.contact') },
  ]

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-top ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 z-10">
              <Link to="/" className="flex items-center interactive-element">
                {/* Light mode logo (black) */}
                <img 
                  src={logoBlack} 
                  alt="ABSAAR Logo" 
                  className="h-12 sm:h-14 lg:h-20 xl:h-24 w-auto block dark:hidden transition-all duration-300"
                />
                {/* Dark mode logo (white) */}
                <img 
                  src={logoWhite} 
                  alt="ABSAAR Logo" 
                  className="h-12 sm:h-14 lg:h-20 xl:h-24 w-auto hidden dark:block transition-all duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 font-medium transition-all duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 interactive-element"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://nexa.lu/collections/absaar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red text-sm lg:text-base"
              >
                {t('nav.shopNow')}
              </a>
              <div className="flex items-center space-x-3">
                <LanguageSelector />
                <DarkModeToggle />
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2 z-10">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <LanguageSelector />
                <DarkModeToggle />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="touch-target text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200 ml-2"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{
                    transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl animate-slide-left safe-top safe-bottom">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('nav.menu')}
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="touch-target text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-1 px-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center px-4 py-4 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200 touch-target animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                    >
                      <span className="text-base">{link.label}</span>
                      <svg className="ml-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>

                {/* Shop Now Button */}
                <div className="px-4 mt-6">
                  <a
                    href="https://nexa.lu/collections/absaar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 animate-slide-up animation-delay-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{t('nav.shopNow')}</span>
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    © 2024 ABSAAR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
