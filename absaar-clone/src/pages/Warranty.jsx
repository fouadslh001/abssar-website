import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Warranty = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
              LEGAL
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Warranty Information
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive warranty coverage for ABSAAR products
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Warranty Overview</h2>
              <p className="mb-4">
                ABSAAR stands behind the quality and reliability of our products. We provide comprehensive warranty coverage to ensure your confidence in our German-engineered power solutions.
              </p>
              <p>
                This warranty covers defects in materials and workmanship under normal use and conditions. Our warranty terms vary by product category and are designed to provide you with peace of mind and protection for your investment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Warranty Periods by Product Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Battery Chargers</h3>
                  <p className="mb-2"><strong>Standard Warranty:</strong> 2 years</p>
                  <p className="mb-2"><strong>Professional Series:</strong> 3 years</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Covers all electronic components and charging circuits</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Jump Starters</h3>
                  <p className="mb-2"><strong>Standard Warranty:</strong> 18 months</p>
                  <p className="mb-2"><strong>Battery Replacement:</strong> 12 months</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Includes internal battery and electronic components</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Welding Equipment</h3>
                  <p className="mb-2"><strong>Standard Warranty:</strong> 2 years</p>
                  <p className="mb-2"><strong>Professional Series:</strong> 3 years</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Covers inverter technology and control systems</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Solar Solutions</h3>
                  <p className="mb-2"><strong>Standard Warranty:</strong> 2 years</p>
                  <p className="mb-2"><strong>Panel Warranty:</strong> 10 years</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Includes charge controllers and inverters</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Contact Information</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Warranty Support</h3>
                    <p className="mb-2">
                      <strong>Email:</strong> <a href="mailto:warranty@absaar.com" className="text-primary-600 dark:text-primary-400 hover:underline">warranty@absaar.com</a>
                    </p>
                    <p className="mb-2"><strong>Phone:</strong> +352 [Warranty Hotline]</p>
                    <p className="mb-2"><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM CET</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Service Center</h3>
                    <p className="mb-2">ABSAAR Service Center</p>
                    <p className="mb-2">9 Rue du chemin de Fer</p>
                    <p className="mb-2">8057 Bertrange, Luxembourg</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <a
              href="/"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Warranty
