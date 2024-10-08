import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "TEN HR Consulting":"TEN HR Consulting",
      "Services": "Services",
      "Pricing": "Pricing",
      "Resources": "Resources",
      "Contact Us": "Contact Us",
      "About": "About",
      "PEO&EoR": "PEO&EoR",
      "Recruitment": "Recruitment",
      "HR Consulting": "HR Consulting",
      "Managed Services": "Managed Services",
      "Job Vacancies": "Job Vacancies",
      "English": "English",
      "Hindi": "Hindi",
      "French": "French",
      "Welcome to Ten HR Consulting":"Welcome to Ten HR Consulting",
    }
  },
  hi: {
    translation: {
      "TEN HR Consulting":"टेन एचआर कंसल्टिंग",
      "Services": "सेवाएँ",
      "Pricing": "मूल्य निर्धारण",
      "Resources": "संसाधन",
      "Contact Us": "संपर्क करें",
      "About": "हमारे बारे में",
      "PEO&EoR": "पीईओ और ईओआर",
      "Recruitment": "भर्ती",
      "HR Consulting": "एचआर परामर्श",
      "Managed Services": "प्रबंधित सेवाएं",
      "Job Vacancies": "नौकरी रिक्तियाँ",
      "English": "अंग्रेज़ी",
      "Hindi": "हिंदी",
      "French": "फ़्रेंच",
      "Welcome to Ten HR Consulting":"टेन एचआर कंसल्टिंग में आपका स्वागत है",
    }
  },
  fr: {
    translation: {
      "TEN HR Consulting":"TEN Conseil RH",
      "Services": "Services",
      "Pricing": "Tarification",
      "Resources": "Ressources",
      "Contact Us": "Nous contacter",
      "About": "À propos",
      "PEO&EoR": "PEO & EOR",
      "Recruitment": "Recrutement",
      "HR Consulting": "Consulting RH",
      "Managed Services": "Services gérés",
      "Job Vacancies": "Offres d'emploi",
      "English": "Anglais",
      "Hindi": "Hindi",
      "French": "Français",
      "Welcome to Ten HR Consulting":"Bienvenue chez Ten HR Consulting",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
