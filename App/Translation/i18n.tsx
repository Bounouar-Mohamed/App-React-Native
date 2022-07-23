import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import En from './locales/en/translation.json'
import Fr from './locales/fr/translation.json'
import i18n from "i18next";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // this will log errors with loading translations 
    fallbackLng: 'en',
    defaultNS: 'common',
    react: { useSuspense: false },


    resources: {
      en: {
        common: En
      },
      fr: {
        common: Fr
      },
    },
  });

export default i18n;