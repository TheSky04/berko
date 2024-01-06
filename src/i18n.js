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
      FAQ: "Frequently Asking Questions",
      ExtraQuestion: "Do you have any questions?",
      Question1: "What is the minimum production quantity?",
      Question2: "How many colors can you produce at most?",
      Question3: "What is the maximum production size?",
      Question4: "What is the delivery time?",
      Question1Text:
        "The minimum production quantity is usually set at 1000 units. However, we can be flexible with this number depending on the complexity of your project and your specific requirements. Please contact us for more information.",
      Question2Text:
        "The production technology of our labels usually allows for up to 8 colors. This allows us to offer a wide range of color options to match your brand's color palette and design needs.",
      Question3Text:
        "We offer great flexibility in terms of production sizes. In general, we can easily produce labels up to 20 cm in width. However, we can also produce labels for your special projects. Please contact us to specify your requirements.",
      Question4Text:
        "Delivery time can vary depending on the production quantity, dimensions and complexity of the project. Typically, we offer lead times of 2 days for orders of 1000 pieces, extending up to a maximum of 1 week as the order quantity increases. If you have special requirements or need an urgent delivery, you can contact our team to help you with this. For more information about delivery times, please contact us.",
      ContactUs: "Contact Us",
      ContactForm: "Contact Form",
      ContactInputNameSurname: "Name and Surname",
      ContactInputMail: "Mail Address",
      ContactInputTopic: "Communication Topic",
      ContactInputPhone: "Phone",
      ContactInputMessage: "Your Message",
      ContactButton: "Send Your Message",
      GalleryTitle: "Our Gallery",
      GallerySubTitle: "Some Pictures in our Office",
      ContactInformation1: "Contact Information",
      ContactInformation2: "Address",
      ContactInformation3: "E-Mail",
      Phone: "Phone",
      Whatsapp: "Whatsapp",
      mapText: "Our Location",
      mapTitle: "Where Are We ?",
      WeAreHereText: "We are here!",
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
      FAQ: "Sıkça Sorulan Sorular",
      ExtraQuestion: "Herhangi bir sorunuz mu var ?",
      Question1: "Minimum üretim adedi nedir?",
      Question2: "En fazla kaç renk üretim yapabiliyorsunuz?",
      Question3: "En Fazla üretim ebatları nedir?",
      Question4: "Teslimat süresi nedir?",
      Question1Text:
        "Minimum üretim adedi, genellikle 1000 adet olarak belirlenmiştir. Ancak projenizin karmaşıklığına ve özel gereksinimlerinize bağlı olarak bu sayıda esneklik sağlayabiliriz. Daha fazla bilgi için lütfen bizimle iletişime geçin.",
      Question2Text:
        "Etiketlerimizin üretim teknolojisi, genellikle 8 renge kadar müsade etmektedir. Bu, markanızın renk paletine ve tasarım ihtiyaçlarına uyum sağlayacak geniş bir yelpazede renk seçeneği sunmamıza olanak tanır.",
      Question3Text:
        "Üretim ebatları konusunda büyük bir esneklik sunuyoruz. Genel olarak, en 20 cm'ye kadar olan etiketleri rahatlıkla üretebiliyoruz. Ancak, özel projeleriniz için etiketler üretebiliriz. İhtiyaçlarınızı belirtmek için lütfen bizimle iletişime geçin.",
      Question4Text:
        "Teslimat süresi, üretim adedi, boyutlar ve projenin karmaşıklığına bağlı olarak değişebilir. Genellikle, 1000 adetlik siparişler için 2 günken, sipariş miktarı arttıkça en fazla 1 haftaya kadar uzayabilen süreler sunuyoruz. Özel gereksinimleriniz varsa veya acil bir teslimat gerekiyorsa, bu konuda size yardımcı olmak için ekibimizle iletişime geçebilirsiniz. Teslimat süreleri hakkında daha fazla bilgi almak için lütfen bize ulaşın.",
      ContactUs: "Bize Ulaşın",
      ContactForm: "İletişim Formu",
      ContactInputNameSurname: "Adınız Soyadınız",
      ContactInputMail: "Mail Adresiniz",
      ContactInputTopic: "İletişim Konusu",
      ContactInputPhone: "Telefon",
      ContactInputMessage: "Mesajınız",
      ContactButton: "Mesajı Gönder",
      GalleryTitle: "Galerimiz",
      GallerySubTitle: "Ofisimizden Kareler",
      ContactInformation1: "İletişim Bilgilerimiz",
      ContactInformation2: "Adresimiz",
      ContactInformation3: "Mail Adresimiz",
      Phone: "Telefon",
      Whatsapp: "Whatsapp",
      mapText: "Konumumuz",
      mapTitle: "Neredeyiz ?",
      WeAreHereText: "Buradayız !",
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
