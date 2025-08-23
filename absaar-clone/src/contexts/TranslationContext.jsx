import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const TranslationContext = createContext()

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Get saved language from localStorage or default to English
    return localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', currentLanguage)
  }, [currentLanguage])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // Fallback to English if translation not found
    if (!value && currentLanguage !== 'en') {
      value = translations.en
      for (const k of keys) {
        value = value?.[k]
      }
    }
    
    return value || key
  }

  const changeLanguage = (language) => {
    setCurrentLanguage(language)
  }

  const value = {
    currentLanguage,
    changeLanguage,
    t
  }

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}
