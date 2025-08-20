import React from 'react'
import { Link } from 'react-router-dom'
import { articlesData } from '../data/articles'

const EngineeringExcellence = () => {
  // Get the first 4 articles for display
  const articles = articlesData.slice(0, 4)

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-full text-sm font-semibold mb-4">
            FEATURED ARTICLES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Engineering Insights
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Stay updated with the latest developments in engineering, technology, and innovation. Our expert team shares insights, research findings, and industry trends that shape the future of power solutions.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-accent-600"
            >
              {/* Article Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400 rounded-full text-sm font-semibold">
                  {article.category}
                </span>
                {article.featured && (
                  <span className="inline-block px-3 py-1 bg-accent-600 text-white rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Article Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent-600 transition-colors duration-300">
                {article.title}
              </h3>

              {/* Article Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                {article.description}
              </p>

              {/* Article Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-sm text-gray-500 dark:text-gray-400 gap-1 sm:gap-0">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>

              {/* Read More Link */}
              <div className="flex items-center justify-between">
                <Link
                  to={`/articles/${article.slug}`}
                  className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold transition-colors duration-200 group-hover:translate-x-2 transform transition-transform"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <div className="w-12 h-1 bg-accent-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Explore All Engineering Articles
            </h3>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Dive deeper into our comprehensive library of technical articles, research papers, and industry insights. Stay ahead with the latest in engineering innovation.
            </p>
            <Link
              to="/articles"
              className="inline-block bg-white text-accent-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineeringExcellence
