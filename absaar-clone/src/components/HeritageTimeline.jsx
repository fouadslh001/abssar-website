import React from 'react'

const HeritageTimeline = () => {
  const timelineEvents = [
    {
      year: "1969",
      title: "Foundation",
      description: "Founded in Altforweiler, Saarland, Germany – specialized in the development and manufacturing of battery chargers. Our journey began with a commitment to quality and innovation that continues to this day.",
      highlight: true
    },
    {
      year: "2005",
      title: "Global Expansion",
      description: "Acquired by SEVIC Group, an international company, boosting technological and financial resources for future growth. This partnership expanded our reach across European markets and beyond.",
      highlight: false
    },
    {
      year: "2009",
      title: "Product Revolution",
      description: "Release of a comprehensive product catalog including chargers, jump starters, testers, and accessories. This period marked significant technological advancements in our charging technologies and solutions.",
      highlight: false
    },
    {
      year: "2024",
      title: "Reinvention",
      description: "Brand acquisition by DSP Invest (Luxembourg) – marks a strategic relaunch with a focus on modernization and international expansion. This new chapter brings fresh innovation and market opportunities.",
      highlight: true
    }
  ]

  return (
    <section id="heritage" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm font-semibold mb-4">
            OUR LEGACY
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            A History of Innovation
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From our founding to today, ABSAAR has led the industry with powerful innovations and strategic growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-500 to-accent-700 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${
                    event.highlight 
                      ? 'bg-accent-700' 
                      : 'bg-accent-600'
                  } shadow-lg`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    index % 2 === 0 ? 'ml-8 lg:ml-0' : 'ml-8 lg:ml-0'
                  }`}>
                    {/* Year Badge */}
                    <div className={`inline-block px-4 py-2 rounded-full text-white font-bold text-lg mb-4 ${
                      event.highlight 
                        ? 'bg-accent-700' 
                        : 'bg-accent-600'
                    }`}>
                      {event.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Decorative Element */}
                    <div className={`mt-6 w-16 h-1 rounded-full ${
                      event.highlight 
                        ? 'bg-accent-700' 
                        : 'bg-accent-600'
                    }`}></div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-accent-800 via-accent-700 to-accent-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              WE POWER THE FUTURE
            </h3>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in building a world powered by innovation
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-gray-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeritageTimeline
