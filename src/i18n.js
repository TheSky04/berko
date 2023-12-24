import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hello: "Hello World",
      content: "Content",
      About: "About",
      Home: "Home",
      Communication: "Communication",
      Products: "Products",
      Production: "Production",
    },
  },
  tr: {
    translation: {
      About: "Hakkımızda",
      Home: "Ana Sayfa",
      Communication: "İletişim",
      Products: "Ürünler",
      Production: "Üretim",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
