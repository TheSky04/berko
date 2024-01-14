import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { configs } from "./config";

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
      Email: "satis@berkoambalaj.com",
      FAQ: "Frequently Asking Questions",
      ExtraQuestion: "Do you have any questions ?",
      Question1: "How many days is the delivery time ?",
      Question2: "Are your stationery products for schools or workplaces ?",
      Question3: "What is a textile consumable ?",
      Question4: "How many types of tapes are there ?",
      Question5: "How many types of masking tape are there ?",
      Question6:
        "What is the production quantity and delivery date for printed tape ?",
      Question1Text:
        "We deliver on the same day for standard products, and within a maximum of 10 days for special size or printed products.",
      Question2Text:
        "Our stationery products can be used for both school and workplace. Although we are mostly preferred by the administrative units of companies, we also receive great interest in this field from schools and private educational institutions.",
      Question3Text:
        'These are auxiliary materials used in production or product development in the textile field. We are a company responsible for supplying these auxiliary materials to you. "I wonder if this product exists?" Do not think like that, call us :)',
      Question4Text:
        "Packaging tape is separated by 4 types of adhesives. Hot-melt duct tape: It has an efficient usage area, especially for parcel and paper surface packaging processes. Acrylic tape; Provides high efficiency in nylon, polyethylene and metal surface applications. Natural rubber band provides excellent use on all surfaces and weather conditions. Silicone glue tape is used especially in applications requiring high temperatures.",
      Question5Text:
        "Masking tape has 3 different carrier surfaces and 5 different adhesive properties and can be used for different purposes. It is produced from paper, polyethylene and polyester films as a surface. Additionally, it is also produced from fabric-derived products. It has acrylic, solvent acrylic, natural rubber, hot melt and UV silicone glue derivatives as adhesives. It varies according to usage area, surface, temperature differences and duration.",
      Question6Text:
        "Our production date is at least 10 days and our printing quantity is at least 326 pieces.",
      ContactUs: "Contact Us",
      ContactForm: "Contact Form",
      ContactInputNameSurname: "Name and Surname",
      ContactInputMail: "Mail Address",
      ContactInputTopic: "Communication Topic",
      ContactInputPhone: "Phone",
      ContactInputMessage: "Your Message",
      ContactButton: "Send Your Message",
      GalleryHomeTitle: "Our Gallery",
      GalleryHomeSubTitle: "Scenes from our office",
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
      SuccessMessage: "We received your message successfully!",
      ErrorMessage: "An error occured.",
      WarningMessage: "Please Fill the all fields.",
      packageMaterialsTitle: "Packaging Materials",
      packagingMaterialText:
        "Designed to maximize the value of your excellent products and give confidence to your customers, our packaging materials offer strong, durable and aesthetic solutions. With our wide range of products, from transparent foils to custom printed boxes, we provide the appropriate packaging for all your products.",
      packageMaterialsTitle2: "Why Us ?",
      packageMaterialsText21:
        "Variety: A wide range of packaging materials to meet your customers' expectations.",
      packageMaterialsText22:
        "Quality: Solutions produced with durable materials and prioritizing product safety and protection.",
      packageMaterialsText23:
        "Customization: Special printing and design options that highlight your brand.",
      packageMaterialsText24:
        "Fast Delivery: We bring your order to your door quickly and safely.",
      packageMaterialsTitle3: "How Can I Order ?",
      packageMaterialsText3:
        "Choose the packaging materials that suit your needs, choose special design or printing options, call us at the number on our website or contact us via WhatsApp. Wait for your products to arrive at your door with our fast and reliable delivery.",
      packageMaterialsTitle4: "We would like to see you among us !",
      packageMaterialsText4: `Contact us at ${configs.contactWhatsappNumber} or ${configs.email2}. We will be happy to help you find the most suitable packaging solutions for you. Berko is with you to strengthen your business and deliver your products safely! `,
      PackageGalleryTitle: "Our Packaging Products",
      textileTitle: "Textile consumables",
      textileText:
        "Berko is a brand that specializes in textile consumables and offers various and customizable solutions. Our products, designed to make each of your products special and impress your customers, will take your business one step forward.",
      textileTitle2: "Why Us ? ",
      textileText21:
        "Textile Focused Solutions: Various packaging and consumables specially designed for all your textile products.",
      textileText22:
        "Creative Designs: Creative and customizable packaging options that define your products.",
      textileText23:
        "Eco-Friendly Materials: We offer a sustainable option by combining quality and environmentally friendly materials.",
      textileText24:
        "Fast and Flexible Service: Customize your order as you wish, do not waste time with our fast and flexible delivery.",
      textileTitle3: "How to Place Your Order ?",
      textileText3:
        "Choose the textile consumables that suit your needs, call us at the number on our website or contact us via WhatsApp. Wait for your products to arrive at your door with our fast and reliable delivery.",
      textileTitle4: "Contact Us!",
      textileText4: `Have any questions or special requests? Contact us at ${configs.contactWhatsappNumber} or ${configs.email2}. 
      We look forward to making your business more special and impressive together with you !`,
      textileTitle5: "Discover the Textile of Your Dreams, Berko helps !",
      textileText5:
        "You design it, we protect it! Berko is here to support your creativity in the textile world and take your products one step forward. Every stitch, every piece of fabric tells a story, and we add elegance and confidence to that story.",
      TextileGalleryTitle: "Our Textile Consumables",
      Survey: "Survey",
      SurveyQuestion1: "1- Did you find our site visually sufficient ?",
      SurveyQuestion2:
        "2- Did you find the information about the products on our site sufficient ?",
      SurveyQuestion3: "3- Did you find the products you were looking for ?",
      SurveyQuestion4: "4- Have you ordered from us before ?",
      SurveyQuestion5: "5- How many points would you give to Berko packaging ?",
      SurveyComment: "Your comment",
      SurveyAnswerYes: "Yes",
      SurveyAnswerNo: "No",
      SurveyChoose: "Choose the option",
      SubmitForm: "Submit",
      SurveyText:
        "In order to further improve our company's service quality and better respond to the needs of our valued customers, we are organizing a short survey. This survey will help us understand your experiences and improve our products and services.",
    },
  },
  tr: {
    translation: {
      About: "Hakkımızda",
      Home: "Ana Sayfa",
      Contact: "İletişim",
      Products: "Ürünlerimiz",
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
      Email: "satis@berkoambalaj.com",
      FAQ: "Sıkça Sorulan Sorular",
      ExtraQuestion: "Herhangi bir sorunuz mu var ?",
      Question1: "Teslimat süresi kaç gündür ?",
      Question2:
        "Kırtasiye ürünleriniz okula mı yoksa işyerine mi yöneliktir ?",
      Question3: "Tekstil sarf malzemesi nedir ?",
      Question4: "Kaç çeşit bant vardır ?",
      Question5: "Maskeleme bandı kaç çeşittir ?",
      Question6: "Baskılı bant için üretim adedi ve teslim tarihi nedir ?",

      Question1Text:
        "Standart ürünlerde aynı gün, özel ölçü veya baskılı ürünlerde ise maksimum 10 gün süreyle teslim ediyoruz.",
      Question2Text:
        "Kırtasiye ürünlerimiz hem okul hem de işyeri için kullanılabilir. Daha çok şirketlerin idari birimleri tarafından tercih edilsekte okullar ve özel eğitim kurumları tarafından da bu alanda yoğun ilgi görmekteyiz.",
      Question3Text:
        'Tekstil alanında üretim veya ürün geliştirmede kullanılan yardımcı malzemelerdir. Bizlerde bu yardımcı malzemeleri size tedarik etmekle görevli bir şirketiz. "Acaba bu ürün var mıdır ?" diye düşünmeyin bizi arayın :)',
      Question4Text:
        "Ambalaj bandı 4 yapıştırıcı çeşidi ile ayrılır. Hot-melt koli bandı: Özellikle koli ve kağıt yüzeyli ambalajlama işlemleri için verimli kullanım alanına sahiptir. Akrilik bant; naylon, polietilen ve metal yüzey uygulamalarında yüksek verim sağlar. Doğal kauçuk bant, bütün yüzeylerde ve hava koşullarında mükemmel kullanım sağlar. Silikon tutkallı bant, özellikle yüksek ısı derecesi gerektiren uygulamalarda kullanılır.",
      Question5Text:
        "Maskeleme bandı 3 farklı özelliğe sahip taşıyıcı yüzeye ve 5 farklı yapışkan özellikte amaca göre kullanılmaktadır. Yüzey olarak kağıt, polietilen ve polyester filmlerden üretilmektedir. Ekstra olarak da kumaş türevi mamüllerden de üretilmektedir. Yapışkan olarak akrilik, solvent akrilik, doğal kauçuk, hot melt ve uv silikon tutkal türevlerine sahiptir. Kullanım alanı, yüzey, ısı farklılıkları ve süresine göre çeşitlilik göstermektedir.",
      Question6Text:
        "Üretim tarihimiz en az 10 gün, baskı adedimiz ise en az 326 adettir.",
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
        "Ürünlerinizi güvenle saklamak ve mükemmel sunumlar için doğru adres! Ambalaj malzemelerimizle hem estetik hem de fonksiyonel çözümler sunuyoruz. Ürünleriniz için en uygun ambalajı bizimle bulun.",
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
      SuccessMessage: "Mesajını başarıyla aldık!",
      ErrorMessage: "Bir hata oluştu.",
      WarningMessage: "Lütfen tüm alanları doldurunuz.",
      packageMaterialsTitle: "Ambalaj Malzemeleri",
      packagingMaterialText:
        "Mükemmel ürünlerinizin değerini en üst düzeye çıkarmak ve müşterilerinize güven vermek için tasarlanan ambalaj malzemelerimiz, güçlü, dayanıklı ve estetik çözümler sunar. Şeffaf folyolardan özel baskılı kutulara kadar geniş bir ürün yelpazemizle, her türlü ürününüz için uygun ambalajı sağlıyoruz.",
      packageMaterialsTitle2: "Neden Biz?",
      packageMaterialsText21:
        "Çeşitlilik: Müşterilerinizin beklentilerini karşılamak için geniş bir ambalaj malzeme yelpazesi.",
      packageMaterialsText22:
        "Kalite: Dayanıklı malzemelerle üretilmiş, ürün güvenliği ve korumasını ön planda tutan çözümler.",
      packageMaterialsText23:
        "Özelleştirme: Markanızı öne çıkaran özel baskı ve tasarım seçenekleri.",
      packageMaterialsText24:
        "Hızlı Teslimat: Siparişinizi hızlı ve güvenli bir şekilde kapınıza getiriyoruz.",
      packageMaterialsTitle3: "Nasıl Sipariş Verebilirim?",
      packageMaterialsText3:
        "İhtiyacınıza uygun ambalaj malzemelerini seçin, özel tasarım veya baskı seçeneklerini belirleyin, sitemizde bulunan numaradan bizi arayın veya whatsapp üzerinden bizimle iletişime geçin. Hızlı ve güvenilir teslimatımız ile ürünlerinizin kapınıza gelmesini bekleyin.",
      packageMaterialsTitle4: "Sizi Aramızda Görmek İsteriz!",
      packageMaterialsText4: `${configs.contactWhatsappNumber} veya ${configs.email2} üzerinden bizimle iletişime geçin. Size en uygun ambalaj çözümlerini bulmamıza yardımcı olmaktan memnuniyet duyarız. İşinizi güçlendirmek ve ürünlerinizi güvenle teslim etmek için Berko yanınızda!`,
      PackageGalleryTitle: "Ambalaj Ürünlerimiz",
      textileTitle: "Tekstil sarf malzemeleri",
      textileText:
        "Berko, tekstil sarf malzemeleri konusunda uzmanlaşmış, çeşitli ve özelleştirilebilir çözümler sunan bir markadır. Her ürününüzü özel kılmak ve müşterilerinizi etkilemek için tasarlanmış ürünlerimiz, işinizi bir adım öne taşıyacak.",
      textileTitle2: "Neden Biz?",
      textileText21:
        "Tekstil Odaklı Çözümler: Her türlü tekstil ürününüz için özel tasarlanmış çeşitli ambalaj ve sarf malzemeleri.",
      textileText22:
        "Yaratıcı Tasarımlar: Ürünlerinizi tanımlayan yaratıcı ve özelleştirilebilir ambalaj seçenekleri.",
      textileText23:
        "Çevre Dostu Malzemeler: Kaliteyi ve çevre dostu malzemeleri bir araya getirerek sürdürülebilir bir seçenek sunuyoruz.",
      textileText24:
        "Hızlı ve Esnek Hizmet: Siparişinizi istediğiniz gibi özelleştirin, hızlı ve esnek teslimatımızla zaman kaybetmeyin.",
      textileTitle3: "Siparişinizi Nasıl Verebilirsiniz?",
      textileText3:
        "İhtiyacınıza uygun tekstil sarf malzemelerini seçin, sitemizde bulunan numaradan bizi arayın veya whatsapp üzerinden bizimle iletişime geçin. Hızlı ve güvenilir teslimatımız ile ürünlerinizin kapınıza gelmesini bekleyin.",
      textileTitle4: "Bizimle İletişime Geçin!",
      textileText4: `Herhangi bir sorunuz veya özel talebiniz mi var? ${configs.contactWhatsappNumber} veya ${configs.email2} ile bizimle iletişime geçin. Sizinle birlikte işinizi daha özel ve etkileyici kılmak için sabırsızlanıyoruz!`,
      textileTitle5: "Hayalinizdeki Tekstili Keşfedin, Berko yardımcı olur!",
      textileText5:
        "Siz tasarlayın, biz koruyalım! Berko, tekstil dünyasındaki yaratıcılığınıza destek olmak ve ürünlerinizi bir adım öne çıkarmak için burada. Her dikiş, her kumaş parçası bir hikaye anlatır, biz de o hikayeye şıklık ve güven katarız.",
      TextileGalleryTitle: "Tekstil Sarf Ürünlerimiz",
      Survey: "Anket",
      SurveyQuestion1: "1- Sitemizi görsel olarak yeterli buldunuz mu ?",
      SurveyQuestion2:
        "2- Sitemizdeki ürünlerin bilgilerini yeterli buldunuz mu ?",
      SurveyQuestion3: "3- Aradığınız ürünlere ulaşabildiniz mi ?",
      SurveyQuestion4: "4- Daha önce bizden sipariş verdiniz mi ?",
      SurveyQuestion5: "5- Berko ambalaja kaç puan verirsiniz ?",
      SurveyComment: "Yorumunuz",
      SurveyAnswerYes: "Evet",
      SurveyAnswerNo: "Hayır",
      SurveyChoose: "Seçenek işaretleyin",
      SubmitForm: "Gönder",
      SurveyText:
        "Firmamızın hizmet kalitesini daha da artırmak ve siz değerli müşterilerimizin ihtiyaçlarına daha iyi cevap verebilmek adına, kısa bir anket düzenliyoruz. Bu anket, sizin deneyimlerinizi anlamamıza ve ürün ve hizmetlerimizi geliştirmemize yardımcı olacaktır.",
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
