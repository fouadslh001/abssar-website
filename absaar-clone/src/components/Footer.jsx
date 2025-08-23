import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../contexts/TranslationContext'
import logoWhite from '../assets/images/logo_white.png'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: t('footer.productLinks.weldingEquipment'), href: '#' },
      { name: t('footer.productLinks.jumpStarters'), href: 'https://nexa.lu/collections/battery-chargers-jump-starters' },
      { name: t('footer.productLinks.polishers'), href: 'https://nexa.lu/collections/absaar-polisher' },
      { name: t('footer.productLinks.solarSolutions'), href: 'https://nexa.lu/collections/absaar-solar-kits' },
    ],
    company: [
      { name: t('footer.companyLinks.aboutUs'), href: '#heritage' },
      { name: t('footer.companyLinks.ourHeritage'), href: '#heritage' },
      { name: t('footer.companyLinks.innovation'), href: '#innovation' },
      { name: t('footer.companyLinks.contact'), href: '#contact' },
    ],
    legal: [
      { name: t('footer.legalLinks.privacyPolicy'), href: '/privacy-policy', isRoute: true },
      { name: t('footer.legalLinks.imprint'), href: '/imprint', isRoute: true },
      { name: t('footer.legalLinks.termsOfService'), href: '/terms-of-service', isRoute: true },
      { name: t('footer.legalLinks.warranty'), href: '/warranty', isRoute: true },
    ]
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img 
                  src={logoWhite} 
                  alt="ABSAAR Logo" 
                  className="h-20 mb-4 hover:opacity-80 transition-opacity duration-200"
                />
              </Link>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('footer.tagline')}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                <span className="font-semibold">{t('footer.address')}</span><br />
                Nº191, Hay Tichka<br />
                45800 Tinghir Morocco
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">{t('footer.email')}</span><br />
                <a href="mailto:info@absaar.com" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">
                  info@dspinvest.ma
                </a>
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.products')}</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Shop CTA */}
            <div>
              <a
                href="https://nexa.lu/collections/absaar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-200 transform hover:scale-105 text-sm"
              >
                {t('footer.visitShop')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} ABSAAR. {t('footer.copyright')}
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {/* Facebook */}
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z"/>
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                {/* TikTok */}
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
            >
              <span>{t('footer.backToTop')}</span>
              <svg 
                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600"></div>
    </footer>
  )
}

export default Footer
