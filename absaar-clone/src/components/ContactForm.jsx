import React, { useState } from 'react'
import { useTranslation } from '../contexts/TranslationContext'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../config/emailConfig'

const ContactForm = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Initialize EmailJS with public key
      emailjs.init(emailConfig.publicKey)

      // Prepare template parameters with exact variable names
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Salhane Fouad',
        to_email: emailConfig.toEmail,
        reply_to: formData.email
      }

      console.log('Sending email with params:', templateParams)

      // Send email using EmailJS
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )

      console.log('Email sent successfully:', result)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }


  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            {t('contactForm.badge')}
          </div>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4 sm:mb-6">
            {t('contactForm.title')}
          </h2>
          <p className="body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contactForm.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Contact Information - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="heading-md text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t('contactForm.conversationTitle')}
              </h3>
              <p className="body-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                {t('contactForm.conversationDescription')}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {t('contactForm.address')}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Nº191, Hay Tichka<br />
                    45800 Tinghir Morocco
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {t('contactForm.email')}
                  </h4>
                  <a 
                    href="mailto:salhanefouad@gmail.com" 
                    className="text-sm sm:text-base text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200 interactive-element"
                  >
                    info@dspinvest.ma
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {t('contactForm.businessHours')}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {t('contactForm.mondayFriday')}<br />
                    {t('contactForm.saturday')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile Optimized */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t('contactForm.nameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 text-sm sm:text-base touch-target"
                  placeholder={t('contactForm.namePlaceholder')}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t('contactForm.emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 text-sm sm:text-base touch-target"
                  placeholder={t('contactForm.emailPlaceholder')}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t('contactForm.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 resize-vertical text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                  placeholder={t('contactForm.messagePlaceholder')}
                />
              </div>

              {/* Submit Button - Mobile Optimized */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base touch-target ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contactForm.sending')}
                  </span>
                ) : (
                  t('contactForm.sendMessage')
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 text-center font-medium">
                    {t('contactForm.successMessage')}
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 text-center font-medium">
                    There was an issue sending your message. Please try again or contact us directly at salhanefouad@gmail.com
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
