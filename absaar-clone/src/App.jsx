import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import { TranslationProvider } from './contexts/TranslationContext'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Imprint from './pages/Imprint'
import TermsOfService from './pages/TermsOfService'
import Warranty from './pages/Warranty'

function App() {
  return (
    <ErrorBoundary>
      <TranslationProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/warranty" element={<Warranty />} />
          </Routes>
          {/* Global Scroll to Top Button */}
          <ScrollToTop />
        </Router>
      </TranslationProvider>
    </ErrorBoundary>
  )
}

export default App
