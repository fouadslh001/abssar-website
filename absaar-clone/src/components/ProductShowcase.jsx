import React from 'react'
import jumpStartersImage from '../assets/images/jump-starters2.jpg'

const ProductShowcase = () => {
  // Error handler for video background fallback
  const handleVideoError = (e) => {
    console.error('Error loading video background:', e)
    // Hide video and show fallback background
    e.target.style.display = 'none'
    e.target.parentElement.style.backgroundImage = 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop&crop=center)'
  }

  return (
    <div className="relative">
      {/* Welding Technology Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
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
            <source src="https://cdn.pixabay.com/vimeo/459761333/welding-59308.mp4?width=1280&hash=b0e0b0e0b0e0b0e0b0e0b0e0b0e0b0e0b0e0b0e0" type="video/mp4" />
            <source src="https://player.vimeo.com/external/459761333.hd.mp4?s=7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b&profile_id=175" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse animation-delay-200"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block px-6 py-2 bg-red-600/80 backdrop-blur-sm text-red-100 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              PROFESSIONAL WELDING SOLUTIONS
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up animation-delay-200">
              <span className="block mb-2">Welding</span>
              <span className="block text-red-500">Technology</span>
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
              Experience the power and precision of German-engineered welding equipment. Built for professionals who demand excellence in every weld.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-slide-up animation-delay-600">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                <h4 className="font-semibold text-red-300 mb-2">Inverter Technology</h4>
                <p className="text-sm text-gray-300">Advanced digital control systems</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                <h4 className="font-semibold text-red-300 mb-2">Portable Design</h4>
                <p className="text-sm text-gray-300">Lightweight yet powerful performance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                <h4 className="font-semibold text-red-300 mb-2">Professional Grade</h4>
                <p className="text-sm text-gray-300">Industrial-strength reliability</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
              <a
                href="https://nexa.lu/collections/absaar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                Explore Welding Equipment
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Get Professional Quote
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Professional Separator/Spacing */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional Power Solutions</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From precision welding to reliable automotive power, discover German-engineered excellence across our complete product range.
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
            AUTOMOTIVE POWER SOLUTIONS
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up animation-delay-200">
            <span className="block mb-2">Jump</span>
            <span className="block text-red-400">Starters</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
            Reliable power solutions to kick-start your automotive emergencies. German engineering meets automotive reliability in every unit.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slide-up animation-delay-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">12V/24V</div>
              <p className="text-sm text-gray-300">Multi-voltage compatibility</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">LED</div>
              <p className="text-sm text-gray-300">Built-in emergency lighting</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">USB</div>
              <p className="text-sm text-gray-300">Device charging capability</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">Safe</div>
              <p className="text-sm text-gray-300">Reverse polarity protection</p>
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
              Shop Jump Starters
            </a>
            <a
              href="#products"
              className="bg-transparent border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              View All Products
            </a>
          </div>

          {/* Trust indicators */}
          <div className="animate-slide-up animation-delay-600">
            <p className="text-sm text-gray-400 mb-4">Trusted by professionals across Europe</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-xs">Units Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-xs">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductShowcase
