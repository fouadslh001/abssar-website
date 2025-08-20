import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Imprint = () => {
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
              Imprint
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Legal information and company details
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Company Information</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Company Name</h3>
                    <p className="text-lg font-medium">ABSAAR</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Legal Form</h3>
                    <p>Limited Liability Company</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Registered Address</h3>
                    <p>
                      9 Rue du chemin de Fer<br />
                      8057 Bertrange<br />
                      Luxembourg
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Registration</h3>
                    <p>
                      Commercial Register: Luxembourg<br />
                      Registration Number: [Registration Number]<br />
                      VAT ID: LU[VAT Number]
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">General Contact</h3>
                    <p>
                      <strong>Email:</strong> <a href="mailto:info@absaar.com" className="text-primary-600 dark:text-primary-400 hover:underline">info@absaar.com</a><br />
                      <strong>Phone:</strong> +352 [Phone Number]<br />
                      <strong>Fax:</strong> +352 [Fax Number]
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Management</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <p>
                  <strong>Managing Director:</strong> [Managing Director Name]<br />
                  <strong>Authorized Representative:</strong> [Representative Name]
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Regulatory Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Industry Regulations</h3>
                  <p>
                    ABSAAR operates in compliance with European Union regulations for electrical equipment and power solutions. Our products meet all applicable safety standards including CE marking requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality Standards</h3>
                  <p>
                    Our manufacturing processes are certified under ISO 9001:2015 quality management standards. All products undergo rigorous testing and quality assurance procedures.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Environmental Compliance</h3>
                  <p>
                    ABSAAR is committed to environmental responsibility and complies with RoHS (Restriction of Hazardous Substances) directives and WEEE (Waste Electrical and Electronic Equipment) regulations.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Intellectual Property</h2>
              <p className="mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of ABSAAR or its content suppliers and is protected by international copyright laws.
              </p>
              <p>
                The ABSAAR name and logo are trademarks of ABSAAR. All other trademarks mentioned on this website are the property of their respective owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Disclaimer</h2>
              <p className="mb-4">
                The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information.
              </p>
              <p>
                Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage arising from the use of this website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes arising from the use of this website or our services shall be governed by Luxembourg law. The courts of Luxembourg shall have exclusive jurisdiction over any such disputes.
              </p>
              <p>
                For consumer disputes, we are committed to participating in alternative dispute resolution procedures as required by applicable consumer protection laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Website Technical Information</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p>
                  <strong>Website Design & Development:</strong> ABSAAR Technical Team<br />
                  <strong>Hosting:</strong> [Hosting Provider]<br />
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
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

export default Imprint
