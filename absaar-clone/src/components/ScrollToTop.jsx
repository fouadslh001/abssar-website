import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    setIsScrolling(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    // Reset scrolling state after animation completes
    setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToTop()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        className={`
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
          ${isScrolling ? 'animate-pulse' : ''}
          bg-accent-600 hover:bg-accent-700 active:bg-accent-800 
          dark:bg-accent-500 dark:hover:bg-accent-600 dark:active:bg-accent-700
          text-white shadow-lg hover:shadow-xl
          rounded-full p-3 sm:p-4 lg:p-4
          transition-all duration-300 ease-in-out
          transform hover:scale-110 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2
          dark:focus:ring-accent-400 dark:focus:ring-offset-gray-900
          touch-target interactive-element
          group
        `}
        aria-label="Scroll to top"
        title="Scroll to top"
        tabIndex={isVisible ? 0 : -1}
      >
        {/* Arrow Up Icon */}
        <svg
          className={`
            w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6
            transition-transform duration-200
            ${isScrolling ? 'animate-bounce' : 'group-hover:-translate-y-0.5'}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        
        {/* Ripple effect on click */}
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150"></span>
      </button>
    </div>
  )
}

export default ScrollToTop
