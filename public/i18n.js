import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "TEN HR Consulting":"TEN HR Consulting",
      "Articles":"Articles",
      "Services": "Services",
      "Calculator":"Calculator",
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
      "Engage Workforce in India Without Company Registration":"Engage Workforce in India Without Company Registration",
      "Skip the complexities of launching your own business just to hire local talent. With our PEO solution, you can begin immediately!":"Skip the complexities of launching your own business just to hire local talent. With our PEO solution, you can begin immediately!",
      "Let’s Talk":"Let’s Talk",
      "Advantages of Choosing Recruitindo's PEO/EOR Solutions":"Advantages of Choosing Recruitindo's PEO/EOR Solutions",
      "Benefits of Using Recruitindo's PEO / EOR Service":"Benefits of Using Recruitindo's PEO / EOR Service",
      "PRICING":"PRICING",
      "per employee per month":"per employee per month",
      "Starting from":"Starting from",
      "PEO / EOR Price Sheet":"PEO / EOR Price Sheet",
      "Resources and Articles":"Resources and Articles",
      "Resources":"Resources",
      "PEO & EOR":"PEO & EOR",
      "See Our Resources":"See Our Resources",
      "Includes":"Includes",
      //cards
      "The Ultimate Guide to Executive Search in Indonesia: Analysing the Financial and Cultural Impact of Wrong Hires":"The Ultimate Guide to Executive Search in Indonesia: Analysing the Financial and Cultural Impact of Wrong Hires",
      "Introduction In today’s competitive business landscape, finding and retaining top executive talent is crucial.":"Introduction In today’s competitive business landscape, finding and retaining top executive talent is crucial.",
      "Managing Remote Teams in Indonesia: Essential Tools and Strategies via PEO/EOR Services":"Managing Remote Teams in Indonesia: Essential Tools and Strategies via PEO/EOR Services",
      "Introduction In the age of globalisation and digital transformation, the ability to manage remote teams effectively":"Introduction In the age of globalisation and digital transformation, the ability to manage remote teams effectively",
      "Strategic Executive Search Solutions for Indonesia’s Top Businesses":"Strategic Executive Search Solutions for Indonesia’s Top Businesses",
      "In today’s fiercely competitive business landscape, finding the right talent to lead your organisation is more":"In today’s fiercely competitive business landscape, finding the right talent to lead your organisation is more",

      // Resources Page data
    }
  },
  hi: {
    translation: {
      "TEN HR Consulting":"टेन एचआर कंसल्टिंग",
      "Articles":"सामग्री",
      "Services": "सेवाएँ",
      "Calculator":"कैलकुलेटर",
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
      "Engage Workforce in India Without Company Registration":"भारत में बिना कंपनी पंजीकरण के कार्यबल को शामिल करें",
      "Skip the complexities of launching your own business just to hire local talent. With our PEO solution, you can begin immediately!":"स्थानीय प्रतिभाओं को नियुक्त करने के लिए अपना खुद का व्यवसाय शुरू करने की जटिलताओं को छोड़ें। हमारे PEO समाधान के साथ, आप तुरंत शुरू कर सकते हैं!",
      "Let’s Talk":"चलो बात करते हैं",
      "Advantages of Choosing Recruitindo's PEO/EOR Solutions":"रिक्रूटिंडो के पीईओ/ईओआर समाधान चुनने के लाभ",
      "Benefits of Using Recruitindo's PEO / EOR Service":"रिक्रूटिंडो की पीईओ / ईओआर सेवा का उपयोग करने के लाभ",
      "PRICING":"कीमत",
      "per employee per month":"प्रति कर्मचारी प्रति माह",
      "Starting from":"से शुरू",
      "PEO / EOR Price Sheet":"पीईओ / ईओआर मूल्य पत्रक",
      "Resources and Articles":"संसाधन और लेख",
      "Resources":"संसाधन",
      "PEO & EOR":"पीईओ और ईओआर",
      "See Our Resources":"हमारे संसाधन देखें",
      "Includes":"शामिल",
      "The Ultimate Guide to Executive Search in Indonesia: Analysing the Financial and Cultural Impact of Wrong Hires":"इंडोनेशिया में कार्यकारी खोज के लिए अंतिम गाइड: गलत नियुक्तियों के वित्तीय और सांस्कृतिक प्रभाव का विश्लेषण",
      "Introduction In today’s competitive business landscape, finding and retaining top executive talent is crucial.":"परिचय आज के प्रतिस्पर्धी व्यावसायिक परिदृश्य में, शीर्ष कार्यकारी प्रतिभा को खोजना और बनाए रखना महत्वपूर्ण है।",
      "Managing Remote Teams in Indonesia: Essential Tools and Strategies via PEO/EOR Services":"इंडोनेशिया में दूरस्थ टीमों का प्रबंधन: PEO/EOR सेवाओं के माध्यम से आवश्यक उपकरण और रणनीतियाँ",
      "Introduction In the age of globalisation and digital transformation, the ability to manage remote teams effectively":"परिचय वैश्वीकरण और डिजिटल परिवर्तन के युग में, दूरस्थ टीमों को प्रभावी ढंग से प्रबंधित करने की क्षमता",
      "Strategic Executive Search Solutions for Indonesia’s Top Businesses":"इंडोनेशिया के शीर्ष व्यवसायों के लिए रणनीतिक कार्यकारी खोज समाधान",
      "In today’s fiercely competitive business landscape, finding the right talent to lead your organisation is more":"आज के बेहद प्रतिस्पर्धी कारोबारी परिदृश्य में, अपने संगठन का नेतृत्व करने के लिए सही प्रतिभा को ढूंढना अधिक कठिन है।",

    }
  },
  fr: {
    translation: {
      "TEN HR Consulting":"TEN Conseil RH",
      "Articles":"Articles",
      "Services": "Services",
      "Calculator":"calculatrice",
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
      "Engage Workforce in India Without Company Registration":"Engager la main-d'œuvre en Inde sans enregistrement d'entreprise",
      "Skip the complexities of launching your own business just to hire local talent. With our PEO solution, you can begin immediately!":"Évitez les complexités liées au lancement de votre propre entreprise simplement pour embaucher des talents locaux. Avec notre solution PEO, vous pouvez commencer immédiatement !",
      "Let’s Talk":"Parlons",
      "Advantages of Choosing Recruitindo's PEO/EOR Solutions":"Avantages de choisir les solutions PEO/EOR de Recruitindo",
      "Benefits of Using Recruitindo's PEO / EOR Service":"Avantages de l'utilisation des services de recrutement PEO / EOR",
      "PRICING":"Tarifs",
      "per employee per month":"par employé et par mois",
      "Starting from":"À partir de",
      "PEO / EOR Price Sheet":"Grille tarifaire PEO / EOR",
      "Resources and Articles":"Ressources et articles",
      "Resources":"Ressources",
      "PEO & EOR":"PEO et EOR",
      "See Our Resources":"Voir nos ressources",
      "Includes":"Comprend",
      "The Ultimate Guide to Executive Search in Indonesia: Analysing the Financial and Cultural Impact of Wrong Hires":"The Ultimate Guide to Executive Search in Indonesia: Analysing the Financial and Cultural Impact of Wrong Hires",
      "Introduction In today’s competitive business landscape, finding and retaining top executive talent is crucial.":"Introduction Dans le paysage commercial concurrentiel d’aujourd’hui, il est essentiel de trouver et de retenir les meilleurs talents en matière de direction.",
      "Managing Remote Teams in Indonesia: Essential Tools and Strategies via PEO/EOR Services":"Gestion des équipes à distance en Indonésie : outils et stratégies essentiels via les services PEO/EOR",
      "Introduction In the age of globalisation and digital transformation, the ability to manage remote teams effectively":"Introduction À l’ère de la mondialisation et de la transformation numérique, la capacité à gérer efficacement des équipes à distance",
      "Strategic Executive Search Solutions for Indonesia’s Top Businesses":"Solutions de recherche stratégique de cadres pour les plus grandes entreprises indonésiennes",
      "In today’s fiercely competitive business landscape, finding the right talent to lead your organisation is more":"Dans le paysage commercial extrêmement concurrentiel d’aujourd’hui, trouver les bons talents pour diriger votre organisation est plus qu’une simple tâche",
    
    }
  }
};

i18n
    .use(initReactI18next) // Bind i18next to React
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en', // Use saved language from localStorage, default is 'en'
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false // React already escapes values
        }
    });
export default i18n;
