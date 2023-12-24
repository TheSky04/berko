import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hello: "Hello World",
      content: "Content",
      About: "About",
      Home: "Home",
      Contact: "Contact",
      Products: "Products",
      Production: "Production",
      FooterTitle: "Our Products",
      FooterLeftText:
        "As Berko Ambalaj, we produce special packaging materials so that brands can express themselves in the best way.",
      PackagingMaterialsTitle: "Packaging Materials",
      PackagingMaterialsText:
        "Affordable prices and quality products in packaging materials. Duct tape, Masking tape, Double-sided tape types, Stretch, Meto and Motex label types.",
      TextileConsumablesTitle: "Textile Consumables",
      TextileConsumablesText:
        "You can obtain all the auxiliary materials needed in ready-made clothing production. With affordable price and quality guarantee.",
      StationaryTitle: "Stationary",
      StationaryText:
        "Affordable prices on stationery products. Textile pens, photocopy paper, scissors types, chrome cardboard, tissue paper, folder types",
      ContactInformation: "Contact Information",
      Address: "Oruçreis Mah. Giyimkent 9.Sokak No:72/A Esenler/İstanbul",
      PhoneNumber1: "0532 012 7185",
      PhoneNumber2: "0212 630 2904",
      PhoneNumber3: "0212 630 2915",
      Email: "satis@berkomoda.com",
    },
  },
  tr: {
    translation: {
      About: "Hakkımızda",
      Home: "Ana Sayfa",
      Contact: "İletişim",
      Products: "Ürünler",
      Production: "Üretim",
      FooterTitle: "Ürünlerimiz",
      FooterLeftText:
        "Berko ambalaj olarak, markaların kendilerini en iyi şekilde ifade edebilmeleri için özel ambalaj malzemeleri üretiyoruz.",
      PackagingMaterialsTitle: "Ambalaj Malzemeleri",
      PackagingMaterialsText:
        "Ambalaj malzemelerinde uygun fiyat ve kaliteli ürünler. Koli bandı,Maskeleme bandı,Çifttaraflı bant çeşitleri,Streç,Meto ve Moteks etiket çeşitleri.",
      TextileConsumablesTitle: "Tekstil Sarf Malzemeleri",
      TextileConsumablesText:
        "Hazır giyim üretiminde ihtiyaç duyulan tüm yardımcı malzemeleri temin edebilirsiniz. Uygun fiyat ve kalite garantisiyle.",
      StationaryTitle: "Kırtasiye Ürünleri",
      StationaryText:
        "Kırtasiye ürünlerinde uygun fiyat. Tekstil kalemleri,Fotokopi kağıdı,Makas çeşitleri,Kroma karton,Pelür kağıdı,Klasör çeşitleri",
      ContactInformation: "İletişim Bilgileri",
      Address: "Oruçreis Mah. Giyimkent 9.Sokak No:72/A Esenler/İstanbul",
      PhoneNumber1: "0532 012 7185",
      PhoneNumber2: "0212 630 2904",
      PhoneNumber3: "0212 630 2915",
      Email: "satis@berkomoda.com",
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
