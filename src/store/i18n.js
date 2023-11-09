import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend"

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HTTPApi)
  .init({
    supportedLngs: ['en', 'fr', 'esp'],
    fallbackLng: "en",
    detection:{
        order:['htmlTag','querystring', 'cookie', 'localStorage','path', 'subdomain', 'sessionStorage','navigator'],
        caches: ['cookie'],
    },
    backend:{
        loadPath: './src/pages/index.tsx'
    },
    react: {useSuspense:false},
  });



  export default i18next