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
      GalleryHomeTitle: "Our Gallery",
      GalleryHomeSubTitle: "Some Pictures in our Office",
      ContactInformation1: "Contact Information",
      ContactInformation2: "Address",
      ContactInformation3: "E-Mail",
      Phone: "Phone",
      Whatsapp: "Whatsapp",
      mapText: "Our Location",
      mapTitle: "Where Are We ?",
      WeAreHereText: "We are here!",
      AboutMainTitle: "Who Are We and What Do We Produce? ",
      AboutSubTitle: "About Us",
      AboutTitle1:
        "We are Environmentally Friendly: A Vision to Protect Nature and the Future",
      AboutTitle2: "We Support Recycling: Sustainable Production Concept",
      AboutTitle3:
        "Stationery Supplies: Indispensable for the Business and Education World",
      AboutTitle4:
        "Packaging Materials: The Art of Protecting and Promoting Your Products",
      AboutTitle5:
        "Textile Consumables: A Journey to Improve the Quality of Production",
      AboutText1:
        "As Berko Ambalaj, we attach great importance to the protection of nature and the future. We develop various strategies and practices to minimize our environmental impact and act with a sustainable production process. By encouraging recycling, we ensure the reuse of waste and aim to minimize the damage we cause to nature.",
      AboutText2:
        "Recycling is a principle at the heart of our production processes. We develop effective solutions for waste management and ensure that used materials are reprocessed and incorporated into production processes. In this way, we both protect natural resources and contribute to the economy.",
      AboutText3:
        "Our stationery products, which appeal to a wide range of users from offices to schools, combine functionality and aesthetics. With our stationery products designed to make your daily work easier, you can find all the consumables you need for your offices and educational institutions under one roof.",
      AboutText4:
        "Our packaging materials, designed to protect the safety and aesthetics of your products, offer solutions that meet the needs of the industry. We produce special packaging solutions for our customers from different sectors and ensure that your products are presented to consumers in a safe and impressive way.",
      AboutText5:
        "We make our production more efficient and of higher quality with our consumables suitable for the dynamic structure of the textile industry. With our high quality and durable materials, we offer the products you need at the most affordable prices at every stage of textile production.",
      ProductsSubTitle: "Our Products",
      ProductsMainTitle: "What Do We Produce ?",
      Stationary: "Stationary Products",
      TextileConsumableProducts: "Textile Consumable Products",
      packagingMaterials: "Packaging Materials",
      ProductStationaryText:
        "The address of quality in stationery materials! With our innovative designs, we offer ideal products for everyone, from students to professionals. Make your work easier with quality and durable stationery products. Click to Discover!",
      ProductTextileConsumableText:
        "The best quality consumables are here for those who seek perfection in the textile industry! Whether you own a large workshop or produce projects at home, you will find everything you need with us. Choose us for quality and diversity. Click now to discover!",
      ProductPackagingMaterialsText:
        "The right address for storing your products safely and perfect presentations! We offer both aesthetic and functional solutions with our packaging materials. Find the most suitable packaging for your products with us. Click now to meet and discover quality and affordable prices!",
      Discover: " Click to discover !",
      StationaryPageMainText:
        "We need stationery in our lives, from education to business life, from daily routine to special projects. These tools undertake many functions, from expressing our thoughts to organizing our ideas. However, in addition to the right tools, quality, speed and trust are also important. While we help you complete your projects without any disruptions with our quality products, we also enable you to use your time more effectively with our fast delivery. We offer solutions that suit your needs with our wide product range. We are with you in your search for quality and reliability!",
      StationaryPageSubTitle1:
        "Product Quality: Guarantee Your Success with Quality Stationery!",
      StationaryPageSubText1:
        "We choose only the best among stationery supplies. Each of our products is produced with carefully selected materials to be long-lasting and useful. Trust our quality and complete your work with the best equipment.",
      StationaryPageSubTitle2:
        "Fast Delivery: Don't Disrupt Your Work with On-Time Delivery!",
      StationaryPageSubText2:
        "From the moment you place your order, your stationery items are packaged and shipped as quickly as possible. Thanks to our fast delivery approach, avoid disruptions in your work and complete your projects on time.",
      StationaryPageSubTitle3:
        "Reliability: The Stationery Brand You Trust: Berko!",
      StationaryPageSubText3:
        "Customer satisfaction is of paramount importance to us. We are here to meet your stationery needs for a reliable shopping experience. Join our thousands of satisfied customers and enjoy shopping.",
      StationaryPageSubTitle4:
        "Wide Product Range: Stationery Suitable for Every Need",
      StationaryPageSubText4:
        "All kinds of stationery you may need for office, school or home are here! We meet all your stationery needs with our wide range of products, from pens to notebooks, from files to labels.",
      StationaryGalleryTitle: "Our Stationery Products",
      StationaryGallerySubTitle: "Our products",
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
      GalleryHomeTitle: "Galerimiz",
      GalleryHomeSubTitle: "Ofisimizden Kareler",
      ContactInformation1: "İletişim Bilgilerimiz",
      ContactInformation2: "Adresimiz",
      ContactInformation3: "Mail Adresimiz",
      Phone: "Telefon",
      Whatsapp: "Whatsapp",
      mapText: "Konumumuz",
      mapTitle: "Neredeyiz ?",
      WeAreHereText: "Buradayız !",
      AboutMainTitle: "Biz Kimiz ve Ne Üretiyoruz ? ",
      AboutSubTitle: "Hakkımızda",
      AboutTitle1: "Çevre Dostuyuz: Doğayı ve Geleceği Koruma Vizyonu",
      AboutTitle2:
        "Geri Dönüşümü Destekliyoruz: Sürdürülebilir Üretim Anlayışı",
      AboutTitle3:
        "Kırtasiye Malzemeleri: İş ve Eğitim Dünyasının Vazgeçilmezi",
      AboutTitle4: "Ambalaj Malzemeleri: Ürünlerinizi Koruma ve Tanıtma Sanatı",
      AboutTitle5:
        "Tekstil Sarf Malzemeleri: Üretimin Kalitesini Artırma Yolculuğu",
      AboutText1:
        "Berko Ambalaj olarak, doğanın ve geleceğin korunmasına büyük bir önem veriyoruz. Çevresel etkimizi en aza indirgemek ve sürdürülebilir bir üretim süreciyle hareket etmek için çeşitli stratejiler ve uygulamalar geliştiriyoruz. Geri dönüşümü teşvik ederek, atıkların yeniden kullanılmasını sağlıyor ve doğaya verdiğimiz zararı en aza indirgemeyi hedefliyoruz.",
      AboutText2:
        "Geri dönüşüm, üretim süreçlerimizin merkezinde bulunan bir ilkedir. Atık yönetimi konusunda etkin çözümler geliştiriyor, kullanılmış malzemelerin yeniden işlenerek üretim süreçlerine kazandırılmasını sağlıyoruz. Bu sayede hem doğal kaynakları koruyor hem de ekonomiye katkı sağlıyoruz.",
      AboutText3:
        "Ofislerden okullara kadar geniş bir kullanıcı kitlesine hitap eden kırtasiye ürünlerimiz, fonksiyonelliği ve estetiği bir araya getiriyor. Günlük işlerinizi kolaylaştırmak için tasarlanan kırtasiye ürünlerimizle, ofisleriniz ve eğitim kurumlarınız için ihtiyaç duyduğunuz tüm sarf malzemelerini tek bir çatı altında bulabilirsiniz.",
      AboutText4:
        "Ürünlerinizin güvenliğini ve estetiğini korumak için tasarlanan ambalaj malzemelerimiz, sektörün ihtiyaçlarına uygun çözümler sunar. Farklı sektörlerden müşterilerimize özel ambalaj çözümleri üretiyor, ürünlerinizin hem güvenli hem de etkileyici bir şekilde tüketicilere sunulmasını sağlıyoruz.",
      AboutText5:
        "Tekstil sektörünün dinamik yapısına uygun sarf malzemelerimizle, üretimimizi daha verimli ve kaliteli hale getiriyoruz. Yüksek kaliteli ve dayanıklı malzemelerimizle, tekstil üretiminin her aşamasında ihtiyaç duyduğunuz ürünleri en uygun fiyatlarla sunuyoruz.",
      ProductsSubTitle: "Ürünlerimiz",
      ProductsMainTitle: "Ne Üretiyoruz ?",
      Stationary: "Kırtasiye Malzemeleri",
      TextileConsumableProducts: "Tekstil Sarf Malzemeleri",
      packagingMaterials: "Ambalaj Malzemeleri",
      ProductStationaryText:
        "Kırtasiye malzemelerinde kalitenin adresi! Yenilikçi tasarımlarımızla öğrencilerden profesyonellere kadar herkes için ideal ürünler sunuyoruz. Siz de kaliteli ve dayanıklı kırtasiye ürünleriyle işlerinizi kolaylaştırın.",
      ProductTextileConsumableText:
        "Tekstil sektöründe mükemmeliyet arayışında olanlar için en kaliteli sarf malzemeleri burada! İster büyük bir atölye sahibi olun, isterse evde projeler üretin, ihtiyacınız olan her şeyi bizde bulacaksınız. Kalite ve çeşitlilik için bizi tercih edin.",
      ProductPackagingMaterialsText:
        "Ürünlerinizi güvenle saklamak ve mükemmel sunumlar için doğru adres! Ambalaj malzemelerimizle hem estetik hem de fonksiyonel çözümler sunuyoruz. Ürünleriniz için en uygun ambalajı bizimle bulun. Kalite ve uygun fiyatlarla tanışmak ve",
      Discover: " Keşfetmek için Tıklayın !",
      StationaryPageMainText:
        "Hayatımızda eğitimden iş yaşamına, günlük rutinden özel projelere kadar kırtasiye malzemelerine ihtiyaç duyarız. Bu araçlar, düşüncelerimizi ifade etmekten, fikirlerimizi organize etmeye kadar birçok işlevi üstlenir. Ancak, doğru araçların yanı sıra kalite, hız ve güven de önemlidir. Biz, kaliteli ürünlerimizle, projelerinizin aksamadan tamamlanmasına yardımcı olurken, hızlı teslimatımızla da zamanınızı daha etkili kullanmanızı sağlıyoruz. Geniş ürün yelpazemizle ihtiyaçlarınıza uygun çözümler sunuyoruz. Kalite ve güvenilirlik arayışınızda, yanınızdayız!",
      StationaryPageSubTitle1:
        "Ürün Kalitesi: Kaliteli Kırtasiye Malzemeleriyle Başarınızı Garantileyin!",
      StationaryPageSubText1:
        "Kırtasiye malzemeleri arasında sadece en iyisini seçiyoruz. Her bir ürünümüz, uzun ömürlü ve kullanışlı olması için özenle seçilmiş malzemelerle üretilmektedir. Kalitemize güvenin ve işlerinizi en iyi ekipmanlarla tamamlayın.",
      StationaryPageSubTitle2:
        "Hızlı Teslimat: Zamanında Teslimatla İşlerinizi Aksatmayın!",
      StationaryPageSubText2:
        "Sipariş verdiğiniz andan itibaren, kırtasiye malzemeleriniz en hızlı şekilde paketlenip kargoya verilir. Hızlı teslimat anlayışımız sayesinde, işlerinizdeki aksaklıkları önleyin ve projelerinizi zamanında tamamlayın.",
      StationaryPageSubTitle3:
        "Güvenilirlik: Güvendiğiniz Kırtasiye Markası: Berko!",
      StationaryPageSubText3:
        "Müşteri memnuniyeti bizim için her şeyden önemlidir. Güvenilir bir alışveriş deneyimi için, kırtasiye ihtiyaçlarınızı karşılamak üzere buradayız. Siz de binlerce memnun müşterimiz arasına katılın ve alışverişin keyfini çıkarın.",
      StationaryPageSubTitle4:
        "Geniş Ürün Yelpazesi: Her İhtiyaca Uygun Kırtasiye Malzemeleri",
      StationaryPageSubText4:
        "Ofis, okul ya da ev için ihtiyaç duyabileceğiniz her türlü kırtasiye malzemesi burada! Kalemlerden defterlere, dosyalardan etiketlere kadar geniş ürün yelpazemizle, tüm kırtasiye ihtiyaçlarınızı karşılıyoruz.",
      StationaryGalleryTitle: "Kırtasiye Ürünlerimiz",
      StationaryGallerySubTitle: "Ürünlerimiz",
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
