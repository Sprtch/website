import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: require("./en.json"),
    },
    lng: "en",
    debug: true,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
