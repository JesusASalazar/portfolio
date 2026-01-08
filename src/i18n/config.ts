/* import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { resources } from './resources'  // ← Un solo import

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,  // ← Directamente
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    defaultNS: 'common',
    ns: ['common', 'home', 'projects', 'about'],
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false
    },
    debug: false,
    react: {
      useSuspense: false
    }
  })

export default i18n */