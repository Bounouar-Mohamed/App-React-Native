import i18n from "i18next";
import { initReactI18next, Translation } from 'react-i18next';
import translationEN from './locales/en/translationEN.json'
import translationFR from './locales/fr/translationFR.json'



i18n

  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: translationEN
      },
      fr: {
        translation: translationFR
      },
    }
  });

export function changeLanguage(lng: string | undefined) {
  return i18n.changeLanguage(lng);
}

export default i18n;
