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
      packageMaterialsText4: `Contact us at ${configs.contactWhatsappNumber} or ${configs.email2}. We will be happy to help you find the most suitable packaging solutions for you. Berko is with you to strengthen your business and deliver your products safely! `,
      textileText4: `Have any questions or special requests? Contact us at ${configs.contactWhatsappNumber} or ${configs.email2}. 
      We look forward to making your business more special and impressive together with you !`,
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
      SurveyChoose: "Seçenek seçin",
      SubmitForm: "Gönder",
      SurveyText:
        "Firmamızın hizmet kalitesini daha da artırmak ve siz değerli müşterilerimizin ihtiyaçlarına daha iyi cevap verebilmek adına, kısa bir anket düzenliyoruz. Bu anket, sizin deneyimlerinizi anlamamıza ve ürün ve hizmetlerimizi geliştirmemize yardımcı olacaktır.",
      packageMaterialsText4: `${configs.contactWhatsappNumber} veya ${configs.email2} üzerinden bizimle iletişime geçin. Size en uygun ambalaj çözümlerini bulmamıza yardımcı olmaktan memnuniyet duyarız. İşinizi güçlendirmek ve ürünlerinizi güvenle teslim etmek için Berko yanınızda!`,
      textileText4: `Herhangi bir sorunuz veya özel talebiniz mi var? ${configs.contactWhatsappNumber} veya ${configs.email2} ile bizimle iletişime geçin. Sizinle birlikte işinizi daha özel ve etkileyici kılmak için sabırsızlanıyoruz!`,
    },
  },
  de: {
    translation: {
      hello: "Hallo Welt",
      content: "Inhalt",
      About: "Über uns",
      Home: "Startseite",
      Contact: "Kontakt",
      Products: "Produkte",
      Production: "Produktion",
      FooterTitle: "Unsere Produkte",
      FooterLeftText:
        "Als Berko Ambalaj stellen wir spezielle Verpackungsmaterialien her, damit Marken sich bestmöglich ausdrücken können.",
      PackagingMaterialsTitle: "Verpackungsmaterialien",
      PackagingMaterialsText:
        "Erschwingliche Preise und Qualitätsprodukte im Bereich Verpackungsmaterialien. Klebeband, Abdeckband, doppelseitiges Klebeband, Stretch, Meto und Motex Etikettentypen.",
      TextileConsumablesTitle: "Textilverbrauchsmaterialien",
      TextileConsumablesText:
        "Sie können alle Hilfsmaterialien, die für die Konfektionsproduktion benötigt werden, erhalten. Mit erschwinglichen Preisen und Qualitätsgarantie.",
      StationaryTitle: "Bürobedarf",
      StationaryText:
        "Erschwingliche Preise für Bürobedarf. Textilstifte, Kopierpapier, Scherentypen, Chromkarton, Taschentuchpapier, Ordnerarten",
      ContactInformation: "Kontaktinformation",
      Address: "Oruçreis Mah. Giyimkent 9. Sokak Nr. 72/A Esenler/Istanbul",
      PhoneNumber1: "0532 012 7185",
      PhoneNumber2: "0212 630 2904",
      PhoneNumber3: "0212 630 2915",
      Email: "satis@berkoambalaj.com",
      FAQ: "Häufig gestellte Fragen",
      ExtraQuestion: "Haben Sie Fragen?",
      Question1: "Wie viele Tage beträgt die Lieferzeit?",
      Question2:
        "Sind Ihre Bürobedarfsprodukte für Schulen oder Arbeitsplätze?",
      Question3: "Was ist ein textiler Verbrauchsstoff?",
      Question4: "Wie viele Arten von Klebebändern gibt es?",
      Question5: "Wie viele Arten von Abdeckbändern gibt es?",
      Question6:
        "Was ist die Produktionsmenge und Lieferzeit für bedrucktes Klebeband?",
      Question1Text:
        "Wir liefern am selben Tag für Standardprodukte und innerhalb von maximal 10 Tagen für Sondergrößen oder bedruckte Produkte.",
      Question2Text:
        "Unsere Bürobedarfsprodukte können sowohl für Schulen als auch für Arbeitsplätze verwendet werden. Obwohl wir von den Verwaltungseinheiten von Unternehmen am meisten bevorzugt werden, erhalten wir auch großes Interesse in diesem Bereich von Schulen und privaten Bildungseinrichtungen.",
      Question3Text:
        'Dies sind Hilfsmaterialien, die in der Produktion oder Produktentwicklung im textilen Bereich verwendet werden. Wir sind ein Unternehmen, das dafür verantwortlich ist, Ihnen diese Hilfsmaterialien zu liefern. "Frage mich, ob dieses Produkt existiert?" Denken Sie nicht so, rufen Sie uns an :)',
      Question4Text:
        "Verpackungsklebeband wird durch 4 Arten von Klebstoffen getrennt. Heißschmelz-Klebeband: Es hat eine effiziente Anwendungsfläche, besonders für Paket- und Papieroberflächenverpackungsprozesse. Acrylband; Bietet hohe Effizienz bei Nylon-, Polyethylen- und Metalloberflächenanwendungen. Naturlatexband bietet eine ausgezeichnete Verwendung auf allen Oberflächen und Wetterbedingungen. Silikonklebeband wird besonders bei Anwendungen mit hohen Temperaturen verwendet.",
      Question5Text:
        "Abdeckband hat 3 verschiedene Trägerflächen und 5 verschiedene Klebeeigenschaften und kann für verschiedene Zwecke verwendet werden. Es wird aus Papier, Polyethylen und Polyesterfolien als Oberfläche hergestellt. Zusätzlich wird es auch aus stoffabgeleiteten Produkten hergestellt. Es hat Acryl, lösungsmittelhaltiges Acryl, Naturlatex, Heißschmelz- und UV-Silikonkleberderivate als Klebstoffe. Es variiert je nach Verwendungsbereich, Oberfläche, Temperaturunterschieden und Dauer.",
      Question6Text:
        "Unser Produktionsdatum beträgt mindestens 10 Tage und unsere Druckmenge beträgt mindestens 326 Stück.",
      ContactUs: "Kontaktiere uns",
      ContactForm: "Kontaktformular",
      ContactInputNameSurname: "Name und Nachname",
      ContactInputMail: "E-Mail-Adresse",
      ContactInputTopic: "Kommunikationsthema",
      ContactInputPhone: "Telefon",
      ContactInputMessage: "Deine Nachricht",
      ContactButton: "Ihre Nachricht senden",
      GalleryHomeTitle: "Unsere Galerie",
      GalleryHomeSubTitle: "Szenen aus unserem Büro",
      ContactInformation1: "Kontaktinformation",
      ContactInformation2: "Adresse",
      ContactInformation3: "E-Mail",
      Phone: "Telefon",
      Whatsapp: "Whatsapp",
      mapText: "Unser Standort",
      mapTitle: "Wo sind wir?",
      WeAreHereText: "Wir sind hier!",
      AboutMainTitle: "Wer sind wir und was produzieren wir?",
      AboutSubTitle: "Über uns",
      AboutTitle1:
        "Wir sind umweltfreundlich: Eine Vision zum Schutz von Natur und Zukunft",
      AboutTitle2:
        "Wir unterstützen Recycling: Nachhaltiges Produktionskonzept",
      AboutTitle3:
        "Bürobedarf: Unverzichtbar für die Geschäfts- und Bildungswelt",
      AboutTitle4:
        "Verpackungsmaterialien: Die Kunst des Schutzes und der Förderung Ihrer Produkte",
      AboutTitle5:
        "Textilverbrauchsmaterialien: Eine Reise zur Verbesserung der Produktionsqualität",
      AboutText1:
        "Als Berko Ambalaj legen wir großen Wert auf den Schutz von Natur und Zukunft. Wir entwickeln verschiedene Strategien und Praktiken, um unseren ökologischen Fußabdruck zu minimieren, und handeln mit einem nachhaltigen Produktionsprozess. Durch Förderung des Recyclings gewährleisten wir die Wiederverwendung von Abfällen und streben an, den Schaden, den wir der Natur zufügen, zu minimieren.",
      AboutText2:
        "Recycling steht im Mittelpunkt unserer Produktionsprozesse. Wir entwickeln effektive Lösungen für das Abfallmanagement und stellen sicher, dass gebrauchte Materialien wiederaufbereitet und in Produktionsprozesse integriert werden. Auf diese Weise schützen wir natürliche Ressourcen und tragen zur Wirtschaft bei.",
      AboutText3:
        "Unsere Bürobedarfsprodukte, die eine breite Palette von Benutzern von Büros bis Schulen ansprechen, vereinen Funktionalität und Ästhetik. Mit unseren Bürobedarfsprodukten, die darauf abzielen, Ihre tägliche Arbeit zu erleichtern, finden Sie alle Verbrauchsmaterialien, die Sie für Ihre Büros und Bildungseinrichtungen unter einem Dach benötigen.",
      AboutText4:
        "Unsere Verpackungsmaterialien, die darauf ausgelegt sind, die Sicherheit und Ästhetik Ihrer Produkte zu schützen, bieten Lösungen, die den Anforderungen der Industrie gerecht werden. Wir produzieren spezielle Verpackungslösungen für unsere Kunden aus verschiedenen Branchen und sorgen dafür, dass Ihre Produkte sicher und beeindruckend präsentiert werden.",
      AboutText5:
        "Wir machen unsere Produktion mit unseren Verbrauchsmaterialien, die sich für die dynamische Struktur der Textilindustrie eignen, effizienter und qualitativ hochwertiger. Mit unseren hochwertigen und strapazierfähigen Materialien bieten wir Ihnen die Produkte, die Sie in jedem Stadium der Textilproduktion zu den erschwinglichsten Preisen benötigen.",
      ProductsSubTitle: "Unsere Produkte",
      ProductsMainTitle: "Was produzieren wir?",
      Stationary: "Bürobedarf",
      TextileConsumableProducts: "Textilverbrauchsmaterialprodukte",
      packagingMaterials: "Verpackungsmaterialien",
      ProductStationaryText:
        "Die Adresse für Qualität in Bürobedarfsmaterialien! Mit unseren innovativen Designs bieten wir ideale Produkte für jeden, vom Studenten bis zum Profi. Erleichtern Sie sich die Arbeit mit qualitativ hochwertigen und langlebigen Bürobedarfsprodukten. Klicken Sie, um zu entdecken!",
      ProductTextileConsumableText:
        "Die besten Qualitätsverbrauchsmaterialien sind hier für diejenigen, die Perfektion in der Textilindustrie suchen! Egal, ob Sie eine große Werkstatt besitzen oder Projekte zu Hause produzieren, bei uns finden Sie alles, was Sie brauchen. Wählen Sie uns für Qualität und Vielfalt. Klicken Sie jetzt, um zu entdecken!",
      ProductPackagingMaterialsText:
        "Die richtige Adresse für die sichere Aufbewahrung Ihrer Produkte und perfekte Präsentationen! Wir bieten sowohl ästhetische als auch funktionale Lösungen mit unseren Verpackungsmaterialien. Finden Sie mit uns die passende Verpackung für Ihre Produkte. Klicken Sie jetzt, um Qualität und erschwingliche Preise zu entdecken!",
      Discover: "Klicken Sie, um zu entdecken!",
      StationaryPageMainText:
        "Wir brauchen Bürobedarf in unserem Leben, von der Bildung bis zum Geschäftsleben, vom täglichen Ablauf bis zu speziellen Projekten. Diese Werkzeuge übernehmen viele Funktionen, vom Ausdruck unserer Gedanken bis zur Organisation unserer Ideen. Neben den richtigen Werkzeugen sind auch Qualität, Geschwindigkeit und Vertrauen wichtig. Während wir Ihnen mit unseren Qualitätsprodukten helfen, Ihre Projekte ohne Unterbrechungen abzuschließen, ermöglichen wir es Ihnen auch, Ihre Zeit mit unserer schnellen Lieferung effektiver zu nutzen. Wir bieten Lösungen, die Ihren Bedürfnissen mit unserem breiten Produktsortiment entsprechen. Wir sind bei Ihrer Suche nach Qualität und Zuverlässigkeit an Ihrer Seite!",
      StationaryPageSubTitle1:
        "Produktqualität: Garantieren Sie Ihren Erfolg mit qualitativ hochwertigen Büroartikeln!",
      StationaryPageSubText1:
        "Wir wählen nur das Beste aus Bürobedarfsartikeln aus. Jedes unserer Produkte wird mit sorgfältig ausgewählten Materialien hergestellt, um langlebig und nützlich zu sein. Vertrauen Sie auf unsere Qualität und vervollständigen Sie Ihre Arbeit mit der besten Ausrüstung.",
      StationaryPageSubTitle2:
        "Schnelle Lieferung: Stören Sie Ihre Arbeit nicht mit pünktlicher Lieferung!",
      StationaryPageSubText2:
        "Von dem Moment an, an dem Sie Ihre Bestellung aufgeben, werden Ihre Büroartikel so schnell wie möglich verpackt und verschickt. Dank unserer schnellen Lieferansatz vermeiden Sie Störungen bei der Arbeit und vervollständigen Ihre Projekte rechtzeitig.",
      StationaryPageSubTitle3:
        "Zuverlässigkeit: Die Bürobedarfsmarke, der Sie vertrauen: Berko!",
      StationaryPageSubText3:
        "Die Kundenzufriedenheit hat für uns oberste Priorität. Wir sind hier, um Ihre Bürobedürfnisse für ein zuverlässiges Einkaufserlebnis zu erfüllen. Schließen Sie sich unseren Tausenden zufriedener Kunden an und genießen Sie das Einkaufen.",
      StationaryPageSubTitle4:
        "Breites Produktsortiment: Bürobedarf für jeden Bedarf geeignet",
      StationaryPageSubText4:
        "Alle Arten von Bürobedarf, die Sie für Büro, Schule oder Zuhause benötigen, sind hier! Wir decken alle Ihre Bürobedürfnisse mit unserer breiten Palette von Produkten, von Stiften bis zu Notizbüchern, von Dateien bis zu Etiketten.",
      StationaryGalleryTitle: "Unsere Bürobedarfsprodukte",
      StationaryGallerySubTitle: "Unsere Produkte",
      SuccessMessage: "Wir haben Ihre Nachricht erfolgreich erhalten!",
      ErrorMessage: "Ein Fehler ist aufgetreten.",
      WarningMessage: "Bitte füllen Sie alle Felder aus.",
      packageMaterialsTitle: "Verpackungsmaterialien",
      packagingMaterialText:
        "Entworfen, um den Wert Ihrer hervorragenden Produkte zu maximieren und Ihren Kunden Vertrauen zu schenken, bieten unsere Verpackungsmaterialien starke, strapazierfähige und ästhetische Lösungen. Mit unserer breiten Palette von Produkten, von transparenten Folien bis zu individuell bedruckten Boxen, bieten wir die geeignete Verpackung für alle Ihre Produkte.",
      packageMaterialsTitle2: "Warum wir?",
      packageMaterialsText21:
        "Vielfalt: Eine breite Palette von Verpackungsmaterialien, um die Erwartungen Ihrer Kunden zu erfüllen.",
      packageMaterialsText22:
        "Qualität: Lösungen, die mit langlebigen Materialien hergestellt werden und Produktsicherheit und -schutz priorisieren.",
      packageMaterialsText23:
        "Individualisierung: Spezielle Druck- und Designoptionen, die Ihre Marke hervorheben.",
      packageMaterialsText24:
        "Schnelle Lieferung: Wir bringen Ihre Bestellung schnell und sicher zu Ihnen nach Hause.",
      packageMaterialsTitle3: "Wie kann ich bestellen?",
      packageMaterialsText3:
        "Wählen Sie die Verpackungsmaterialien, die Ihren Anforderungen entsprechen, wählen Sie besondere Design- oder Druckoptionen, rufen Sie uns unter der auf unserer Website angegebenen Nummer an oder kontaktieren Sie uns über WhatsApp. Warten Sie auf die Lieferung Ihrer Produkte an Ihre Tür mit unserer schnellen und zuverlässigen Lieferung.",
      packageMaterialsTitle4: "Wir würden uns freuen, Sie bei uns zu sehen!",
      PackageGalleryTitle: "Unsere Verpackungsprodukte",
      textileTitle: "Textilverbrauchsmaterialien",
      textileText:
        "Berko ist eine Marke, die sich auf Textilverbrauchsmaterialien spezialisiert hat und verschiedene anpassbare Lösungen bietet. Unsere Produkte, die darauf abzielen, jedes Ihrer Produkte besonders zu machen und Ihre Kunden zu beeindrucken, bringen Ihr Geschäft einen Schritt weiter.",
      textileTitle2: "Warum wir?",
      textileText21:
        "Textilfokussierte Lösungen: Verschiedene Verpackungs- und Verbrauchsmaterialien, die speziell für alle Ihre Textilprodukte entwickelt wurden.",
      textileText22:
        "Kreative Designs: Kreative und anpassbare Verpackungsoptionen, die Ihre Produkte definieren.",
      textileText23:
        "Umweltfreundliche Materialien: Wir bieten eine nachhaltige Option, indem wir Qualität und umweltfreundliche Materialien kombinieren.",
      textileText24:
        "Schneller und flexibler Service: Passen Sie Ihre Bestellung nach Ihren Wünschen an, verschwenden Sie keine Zeit mit unserer schnellen und flexiblen Lieferung.",
      textileTitle3: "Wie kann ich bestellen?",
      textileText3:
        "Wählen Sie die Textilverbrauchsmaterialien, die Ihren Anforderungen entsprechen, rufen Sie uns unter der auf unserer Website angegebenen Nummer an oder kontaktieren Sie uns über WhatsApp. Warten Sie auf die Lieferung Ihrer Produkte an Ihre Tür mit unserer schnellen und zuverlässigen Lieferung.",
      textileTitle4: "Kontaktieren Sie uns!",
      textileTitle5: "Entdecken Sie die Textilien Ihrer Träume, Berko hilft!",
      textileText5:
        "Sie entwerfen es, wir schützen es! Berko unterstützt Ihre Kreativität in der Textilwelt und bringt Ihre Produkte einen Schritt weiter. Jeder Stich, jedes Stück Stoff erzählt eine Geschichte, und wir fügen Eleganz und Selbstbewusstsein zu dieser Geschichte hinzu.",
      TextileGalleryTitle: "Unsere Textilverbrauchsmaterialien",
      Survey: "Umfrage",
      SurveyQuestion1:
        "1- Haben Sie unsere Website visuell ausreichend gefunden?",
      SurveyQuestion2:
        "2- Haben Sie ausreichende Informationen zu den Produkten auf unserer Website gefunden?",
      SurveyQuestion3:
        "3- Haben Sie die Produkte gefunden, nach denen Sie gesucht haben?",
      SurveyQuestion4: "4- Haben Sie bereits bei uns bestellt?",
      SurveyQuestion5: "5- Wie viele Punkte würden Sie Berko Packaging geben?",
      SurveyComment: "Ihr Kommentar",
      SurveyAnswerYes: "Ja",
      SurveyAnswerNo: "Nein",
      SurveyChoose: "Option wählen",
      SubmitForm: "Absenden",
      SurveyText:
        "Um die Servicequalität unseres Unternehmens weiter zu verbessern und besser auf die Bedürfnisse unserer geschätzten Kunden einzugehen, veranstalten wir eine kurze Umfrage. Diese Umfrage wird uns helfen, Ihre Erfahrungen zu verstehen und unsere Produkte und Dienstleistungen zu verbessern.",
      packageMaterialsText4:
        "Kontaktieren Sie uns unter 0532 012 71 85 oder info@berkoambalaj.com. Wir helfen Ihnen gerne, die für Sie am besten geeigneten Verpackungslösungen zu finden. Berko steht Ihnen zur Seite, um Ihr Geschäft zu stärken und Ihre Produkte sicher zu liefern!",
      textileText4:
        "Haben Sie Fragen oder besondere Wünsche? Kontaktieren Sie uns unter 0532 012 71 85 oder info@berkoambalaj.com. Wir freuen uns darauf, Ihr Geschäft gemeinsam mit Ihnen noch spezieller und beeindruckender zu gestalten!",
    },
  },
  ru: {
    translation: {
      hello: "Привет, мир",
      content: "Содержание",
      About: "О нас",
      Home: "Главная",
      Contact: "Контакты",
      Products: "Продукция",
      Production: "Производство",
      FooterTitle: "Наши продукты",
      FooterLeftText:
        "Мы производим специальные упаковочные материалы, чтобы бренды могли лучше выражать себя.",
      PackagingMaterialsTitle: "Упаковочные материалы",
      PackagingMaterialsText:
        "Доступные цены и качественные продукты в упаковочных материалах. Типы клейкой ленты: скотч, маскировочная лента, двухсторонняя лента, стрейч, ярлыки Meto и Motex.",
      TextileConsumablesTitle: "Текстильные расходные материалы",
      TextileConsumablesText:
        "Вы можете получить все вспомогательные материалы, необходимые для производства готовой одежды. По доступной цене и с гарантией качества.",
      StationaryTitle: "Канцелярия",
      StationaryText:
        "Доступные цены на канцелярские товары. Текстильные ручки, ксерокопировальная бумага, различные виды ножниц, хромированный картон, тканевая бумага, различные виды папок.",
      ContactInformation: "Контактная информация",
      Address: "Махалле Оруджрейс, улица Гийимкент 9, № 72/A, Эсенлер, Стамбул",
      PhoneNumber1: "0532 012 7185",
      PhoneNumber2: "0212 630 2904",
      PhoneNumber3: "0212 630 2915",
      Email: "satis@berkoambalaj.com",
      FAQ: "Часто задаваемые вопросы",
      ExtraQuestion: "У вас есть вопросы?",
      Question1: "Каков срок поставки?",
      Question2:
        "Ваши канцелярские товары предназначены для школ или рабочих мест?",
      Question3: "Что такое текстильный расходный материал?",
      Question4: "Сколько видов клеящих лент существует?",
      Question5: "Сколько видов маскировочной ленты существует?",
      Question6:
        "Каковы объем производства и срок поставки для печатной ленты?",
      Question1Text:
        "Мы доставляем стандартные продукты в тот же день, а для специальных размеров или напечатанных продуктов - в течение максимум 10 дней.",
      Question2Text:
        "Наши канцелярские товары могут использоваться как для школ, так и для рабочих мест. Хотя мы в основном предпочитаем административные подразделения компаний, мы также получаем большой интерес в этой области со стороны школ и частных образовательных учреждений.",
      Question3Text:
        "Это вспомогательные материалы, используемые в производстве или разработке продукции в текстильной отрасли. Мы предоставляем эти вспомогательные материалы вам. 'Существует ли такой продукт?' Не думайте так, позвоните нам :)",
      Question4Text:
        "Клейкая лента разделяется на 4 типа клеев. Скотч на основе термоплавкого клея: эффективен, особенно для упаковки посылок и бумажных поверхностей. Акриловая лента; Обеспечивает высокую эффективность в нейлоне, полиэтилене и на металлических поверхностях. Лента на основе натурального каучука отлично подходит для использования на всех поверхностях и в любых погодных условиях. Лента с клеем на основе силикона используется особенно в приложениях, требующих высокой температуры.",
      Question5Text:
        "Маскировочная лента имеет 3 различных поверхности подложки и 5 различных свойств клея и может использоваться для различных целей. Она производится из бумаги, полиэтилена и полиэфирных пленок в качестве поверхности. Кроме того, она также производится из тканевых материалов. Она имеет акриловые, растворители на основе акрила, натуральный резиновый, термоплавкий и УФ-силиконовый клеи в качестве клеев. Они различаются в зависимости от области применения, поверхности, температурных различий и продолжительности.",
      Question6Text:
        "Дата начала производства - не менее 10 дней, а минимальное количество печати - 326 штук.",
      ContactUs: "Свяжитесь с нами",
      ContactForm: "Форма обратной связи",
      ContactInputNameSurname: "Имя и фамилия",
      ContactInputMail: "Адрес электронной почты",
      ContactInputTopic: "Тема общения",
      ContactInputPhone: "Телефон",
      ContactInputMessage: "Ваше сообщение",
      ContactButton: "Отправить ваше сообщение",
      GalleryHomeTitle: "Наша галерея",
      GalleryHomeSubTitle: "Сцены из нашего офиса",
      ContactInformation1: "Контактная информация",
      ContactInformation2: "Адрес",
      ContactInformation3: "Электронная почта",
      Phone: "Телефон",
      Whatsapp: "Whatsapp",
      mapText: "Наше местоположение",
      mapTitle: "Где мы находимся?",
      WeAreHereText: "Мы здесь!",
      AboutMainTitle: "Кто мы и что мы производим?",
      AboutSubTitle: "О нас",
      AboutTitle1:
        "Мы заботимся о окружающей среде: Видение по защите природы и будущего",
      AboutTitle2:
        "Мы поддерживаем переработку: Концепция устойчивого производства",
      AboutTitle3:
        "Канцелярские товары: Незаменимые для бизнеса и образовательного мира",
      AboutTitle4:
        "Упаковочные материалы: Искусство защиты и продвижения ваших продуктов",
      AboutTitle5:
        "Текстильные расходные материалы: Путешествие к улучшению качества производства",
      AboutText1:
        "Как Berko Ambalaj, мы придаем большое значение охране природы и будущего. Мы разрабатываем различные стратегии и практики для минимизации нашего воздействия на окружающую среду и действуем с устойчивым производственным процессом. Способствуя переработке, мы обеспечиваем повторное использование отходов и стремимся минимизировать ущерб, который мы причиняем природе.",
      AboutText2:
        "Переработка - это принцип, лежащий в основе наших производственных процессов. Мы разрабатываем эффективные решения для управления отходами и обеспечиваем восстановление использованных материалов в производственных процессах. Таким образом, мы не только защищаем природные ресурсы, но и вносим вклад в экономику.",
      AboutText3:
        "Наши канцелярские товары, которые привлекают широкий круг пользователей от офисов до школ, сочетают в себе функциональность и эстетику. С нашими канцелярскими товарами, разработанными для облегчения вашей повседневной работы, вы можете найти все расходные материалы, необходимые для ваших офисов и образовательных учреждений, под одной крышей.",
      AboutText4:
        "Наши упаковочные материалы, разработанные для защиты безопасности и эстетики ваших продуктов, предлагают решения, отвечающие потребностям отрасли. Мы производим специальные упаковочные решения для наших клиентов из различных секторов и обеспечиваем представление ваших продуктов потребителям безопасным и впечатляющим способом.",
      AboutText5:
        "Мы делаем наше производство более эффективным и высококачественным с помощью наших расходных материалов, подходящих для динамичной структуры текстильной промышленности. С нашими материалами высокого качества и долговечными мы предлагаем вам продукты, необходимые на каждом этапе текстильного производства, по самым доступным ценам.",
      ProductsSubTitle: "Наши продукты",
      ProductsMainTitle: "Что мы производим?",
      Stationary: "Канцелярские товары",
      TextileConsumableProducts: "Текстильные расходные материалы",
      packagingMaterials: "Упаковочные материалы",
      ProductStationaryText:
        "Адрес качества в канцелярских материалах! С нашими инновационными дизайнами мы предлагаем идеальные продукты для всех, от студентов до профессионалов. Сделайте свою работу легче с качественными и прочными канцелярскими товарами. Щелкните, чтобы узнать!",
      ProductTextileConsumableText:
        "Лучшие расходные материалы здесь для тех, кто ищет совершенство в текстильной промышленности! Независимо от того, владеете ли вы большим цехом или производите проекты дома, вы найдете все необходимое у нас. Выберите нас за качество и разнообразие. Нажмите сейчас, чтобы узнать!",
      ProductPackagingMaterialsText:
        "Правильный адрес для хранения ваших продуктов безопасно и идеальных презентаций! Мы предлагаем как эстетические, так и функциональные решения с нашими упаковочными материалами. Найдите самую подходящую упаковку для ваших продуктов у нас. Нажмите сейчас, чтобы встретить и открыть для себя качество и доступные цены!",
      Discover: " Щелкните, чтобы открыть!",
      StationaryPageMainText:
        "Нам нужны канцелярские товары в нашей жизни, от образования до деловой жизни, от повседневной рутины до специальных проектов. Эти инструменты выполняют множество функций, от выражения наших мыслей до организации наших идей. Однако, помимо правильных инструментов, важны также качество, скорость и доверие. Мы помогаем вам завершить ваши проекты без сбоев с нашими качественными продуктами и позволяем вам использовать свое время более эффективно с нашей быстрой доставкой. Мы предлагаем решения, которые соответствуют вашим потребностям с нашим широким ассортиментом продукции. Мы с вами в поиске качества и надежности!",
      StationaryPageSubTitle1:
        "Качество продукции: Гарантия вашего успеха с качественными канцелярскими товарами!",
      StationaryPageSubText1:
        "Мы выбираем только лучшее из канцелярских товаров. Каждый из наших продуктов производится из тщательно выбранных материалов для долговечности и полезности. Доверьтесь нашему качеству и завершите свою работу с лучшим оборудованием.",
      StationaryPageSubTitle2:
        "Быстрая доставка: Не сбивайте свою работу с вовремя доставляемыми товарами!",
      StationaryPageSubText2:
        "С момента размещения вашего заказа ваши канцелярские товары упаковываются и отправляются как можно быстрее. Благодаря нашему подходу к быстрой доставке избегайте сбоев в работе и завершите свои проекты вовремя.",
      StationaryPageSubTitle3:
        "Надежность: Торговая марка канцелярских товаров, которой вы доверяете: Berko!",
      StationaryPageSubText3:
        "Удовлетворение клиента для нас имеет первостепенное значение. Мы здесь, чтобы удовлетворить ваши потребности в канцелярских товарах для надежного опыта покупок. Присоединяйтесь к нашим тысячам довольных клиентов и наслаждайтесь покупками.",
      StationaryPageSubTitle4:
        "Широкий ассортимент продукции: Канцелярские товары подходящие для каждой потребности",
      StationaryPageSubText4:
        "Все виды канцелярских товаров, которые вам могут понадобиться для офиса, школы или дома, здесь! Мы удовлетворяем все ваши потребности в канцелярских товарах нашим широким ассортиментом продукции, от ручек до блокнотов, от файлов до этикеток.",
      StationaryGalleryTitle: "Наши канцелярские товары",
      StationaryGallerySubTitle: "Наши продукты",
      SuccessMessage: "Мы успешно получили ваше сообщение!",
      ErrorMessage: "Произошла ошибка.",
      WarningMessage: "Пожалуйста, заполните все поля.",
      packageMaterialsTitle: "Упаковочные материалы",
      packagingMaterialText:
        "Разработанные для максимизации ценности ваших отличных продуктов и придания уверенности вашим клиентам, наши упаковочные материалы предлагают прочные, долговечные и эстетические решения. С нашим широким ассортиментом продукции, от прозрачных пленок до индивидуально напечатанных коробок, мы предоставляем подходящую упаковку для всех ваших продуктов.",
      packageMaterialsTitle2: "Почему мы?",
      packageMaterialsText21:
        "Разнообразие: Широкий ассортимент упаковочных материалов, чтобы соответствовать ожиданиям ваших клиентов.",
      packageMaterialsText22:
        "Качество: Решения, произведенные из прочных материалов с приоритетом безопасности и защиты продукта.",
      packageMaterialsText23:
        "Индивидуализация: Особые варианты печати и дизайна, выделяющие ваш бренд.",
      packageMaterialsText24:
        "Быстрая доставка: Мы быстро и надежно доставим ваш заказ к вам домой.",
      packageMaterialsTitle3: "Как сделать заказ?",
      packageMaterialsText3:
        "Выберите упаковочные материалы, которые соответствуют вашим потребностям, выберите специальные варианты дизайна или печати, позвоните нам по номеру на нашем веб-сайте или свяжитесь с нами через WhatsApp. Ожидайте доставки ваших товаров на ваш порог с нашей быстрой и надежной доставкой.",
      packageMaterialsTitle4: "Мы хотели бы видеть вас среди нас!",
      PackageGalleryTitle: "Наши упаковочные продукты",
      textileTitle: "Текстильные расходные материалы",
      textileText:
        "Berko - бренд, специализирующийся на текстильных расходных материалах и предлагающий различные и настраиваемые решения. Наши продукты, созданные для того, чтобы каждый из ваших продуктов был особенным и впечатлял ваших клиентов, поднимут ваш бизнес на новый уровень.",
      textileTitle2: "Почему мы?",
      textileText21:
        "Текстильно-ориентированные решения: Разнообразная упаковка и расходные материалы, специально разработанные для всех ваших текстильных продуктов.",
      textileText22:
        "Творческие дизайны: Креативные и настраиваемые варианты упаковки, которые определяют ваши продукты.",
      textileText23:
        "Экологически чистые материалы: Мы предлагаем устойчивый вариант, объединяя качество и экологически чистые материалы.",
      textileText24:
        "Быстрый и гибкий сервис: Настройте свой заказ, как вам угодно, не теряйте времени с нашей быстрой и гибкой доставкой.",
      textileTitle3: "Как разместить заказ?",
      textileText3:
        "Выберите текстильные расходные материалы, которые соответствуют вашим потребностям, позвоните нам по номеру на нашем веб-сайте или свяжитесь с нами через WhatsApp. Ожидайте доставки ваших товаров на ваш порог с нашей быстрой и надежной доставкой.",
      textileTitle4: "Свяжитесь с нами!",
      textileTitle5: "Откройте для себя текстиль вашей мечты, Berko помогает!",
      textileText5:
        "Вы проектируете, мы защищаем! Berko здесь, чтобы поддержать вашу креативность в мире текстиля и поднять ваши продукты на новый уровень. Каждый шов, каждый кусок ткани рассказывает свою историю, и мы добавляем элегантность и уверенность в эту историю.",
      TextileGalleryTitle: "Наши текстильные расходные материалы",
      Survey: "Опрос",
      SurveyQuestion1: "1- Считаете ли вы, что наш сайт визуально достаточен?",
      SurveyQuestion2:
        "2- Нашли ли вы достаточно информации о продукции на нашем сайте?",
      SurveyQuestion3: "3- Нашли ли вы продукты, которые вы искали?",
      SurveyQuestion4: "4- Заказывали ли вы у нас ранее?",
      SurveyQuestion5: "5- На сколько баллов вы бы оценили упаковку Berko?",
      SurveyComment: "Ваш комментарий",
      SurveyAnswerYes: "Да",
      SurveyAnswerNo: "Нет",
      SurveyChoose: "Выберите вариант",
      SubmitForm: "Отправить",
      SurveyText:
        "Для дальнейшего улучшения качества обслуживания нашей компании и более полного отклика на потребности наших уважаемых клиентов мы проводим короткий опрос. Этот опрос поможет нам понять ваши впечатления и улучшить наши продукты и услуги.",
      packageMaterialsText4:
        "Свяжитесь с нами по номеру 0532 012 71 85 или по адресу info@berkoambalaj.com. Мы будем рады помочь вам найти наиболее подходящие упаковочные решения для вас. Berko рядом с вами, чтобы укрепить ваш бизнес и безопасно доставить ваши продукты!",
      textileText4:
        "Есть вопросы или специальные запросы? Свяжитесь с нами по номеру 0532 012 71 85 или по адресу info@berkoambalaj.com. Мы с нетерпением ждем возможности сделать ваш бизнес более особенным и впечатляющим вместе с вами!",
    },
  },
  ar: {
    translation: {
      hello: "مرحبًا بالعالم",
      content: "المحتوى",
      About: "حول",
      Home: "الصفحة الرئيسية",
      Contact: "اتصل",
      Products: "المنتجات",
      Production: "الإنتاج",
      FooterTitle: "منتجاتنا",
      FooterLeftText:
        "كشركة Berko Ambalaj، ننتج مواد تعبئة خاصة لتتمكن العلامات التجارية من التعبير عن أنفسها بأفضل طريقة.",
      PackagingMaterialsTitle: "مواد التعبئة والتغليف",
      PackagingMaterialsText:
        "أسعار معقولة ومنتجات عالية الجودة في مواد التعبئة والتغليف. أنواع شريط لاصق، شريط تمويه، أنواع الشريط اللاصق ذو الجودة المزدوجة، تمتد، وأنواع العلامات Meto و Motex.",
      TextileConsumablesTitle: "مواد النسيج",
      TextileConsumablesText:
        "يمكنك الحصول على جميع المواد الإضافية اللازمة في إنتاج الملابس الجاهزة. بأسعار معقولة وضمان الجودة.",
      StationaryTitle: "لوازم المكتب",
      StationaryText:
        "أسعار معقولة على منتجات القرطاسية. أقلام النسيج، ورق نسخ، أنواع المقصات، كرتون كروم، ورق الحمام، أنواع المجلدات.",
      ContactInformation: "معلومات الاتصال",
      Address: "مح. أوروجريس. 9. جييمكنت 72/A، إسنلر، إسطنبول",
      PhoneNumber1: "0532 012 7185",
      PhoneNumber2: "0212 630 2904",
      PhoneNumber3: "0212 630 2915",
      Email: "satis@berkoambalaj.com",
      FAQ: "أسئلة شائعة",
      ExtraQuestion: "هل لديك أي أسئلة؟",
      Question1: "ما هو وقت التسليم؟",
      Question2: "هل منتجات القرطاسية الخاصة بك للمدارس أم لأماكن العمل؟",
      Question3: "ما هو استهلاك النسيج؟",
      Question4: "كم عدد أنواع الشرائط المتاحة؟",
      Question5: "كم عدد أنواع شريط التمويه المتاحة؟",
      Question6: "ما هي كمية الإنتاج وتاريخ التسليم لشريط الطباعة؟",
      Question1Text:
        "نقوم بتوصيل الطلبات في نفس اليوم للمنتجات القياسية وفي غضون 10 أيام على الأكثر للمنتجات ذات الحجم الخاص أو المطبوعات.",
      Question2Text:
        "يمكن استخدام منتجات القرطاسية الخاصة بنا لكل من المدارس وأماكن العمل. على الرغم من أننا نفضل بشكل رئيسي من قبل وحدات الإدارة في الشركات، إلا أننا نحظى أيضًا بإهتمام كبير في هذا المجال من قبل المدارس والمؤسسات التعليمية الخاصة.",
      Question3Text:
        'هذه هي المواد الإضافية المستخدمة في الإنتاج أو تطوير المنتج في مجال النسيج. نحن شركة مسؤولة عن توفير هذه المواد الإضافية لك. "أتساءل عما إذا كان هذا المنتج موجودًا؟" لا تفكر بهذا الشكل، اتصل بنا :)',
      Question4Text:
        "يتم فصل شريط التعبئة إلى 4 أنواع من اللاصقات. شريط اللصق بالحرارة: لديها منطقة استخدام فعّالة، خاصة لعمليات التعبئة والتغليف السطحية للطرود والورق. الشريط الاكريليك؛ يوفر كفاءة عالية في التطبيقات على النايلون والبولي إيثيلين والمعادن. الشريط المطاطي الطبيعي يوفر استخدامًا ممتازًا على جميع الأسطح وفي جميع ظروف الطقس. يتم استخدام شريط اللصق بالسيليكون خاصة في التطبيقات التي تتطلب درجات حرارة عالية.",
      Question5Text:
        "شريط التمويه لديه 3 أسطح حاملة مختلفة و 5 خصائص لاصقة مختلفة ويمكن استخدامه لأغراض مختلفة. يتم إنتاجه من الورق والبولي إيثيلين وأفلام البوليستر كسطح. بالإضافة إلى ذلك، يتم إنتاجه أيضًا من منتجات مشتقة من الأقمشة. يحتوي على لاصقات أكريليك وأكريليك ذائب في المذيبات ومطاط طبيعي وشمع لاصق ولاصق سيليكون UV. يتغير وفقًا لمجال الاستخدام والسطح ودرجات الحرارة والمدة.",
      Question6Text:
        "تاريخ الإنتاج لدينا هو على الأقل 10 أيام وكمية الطباعة لدينا هي على الأقل 326 قطعة.",
      ContactUs: "اتصل بنا",
      ContactForm: "نموذج الاتصال",
      ContactInputNameSurname: "الاسم واللقب",
      ContactInputMail: "عنوان البريد الإلكتروني",
      ContactInputTopic: "موضوع الاتصال",
      ContactInputPhone: "الهاتف",
      ContactInputMessage: "رسالتك",
      ContactButton: "أرسل رسالتك",
      GalleryHomeTitle: "معرضنا",
      GalleryHomeSubTitle: "لقطات من مكتبنا",
      ContactInformation1: "معلومات الاتصال",
      ContactInformation2: "العنوان",
      ContactInformation3: "البريد الإلكتروني",
      Phone: "الهاتف",
      Whatsapp: "واتساب",
      mapText: "موقعنا",
      mapTitle: "أين نحن؟",
      WeAreHereText: "نحن هنا!",
      AboutMainTitle: "من نحن وماذا ننتج؟",
      AboutSubTitle: "حولنا",
      AboutTitle1: "نحن صديقون للبيئة: رؤية لحماية الطبيعة والمستقبل",
      AboutTitle2: "ندعم إعادة التدوير: مفهوم إنتاج مستدام",
      AboutTitle3: "لوازم المكتب: لا غنى عنها في عالم الأعمال والتعليم",
      AboutTitle4: "مواد التعبئة والتغليف: فن حماية وترويج منتجاتك",
      AboutTitle5: "مواد النسيج: رحلة لتحسين جودة الإنتاج",
      AboutText1:
        "كشركة Berko Ambalaj، نولي أهمية كبيرة لحماية الطبيعة والمستقبل. نطور استراتيجيات وممارسات متنوعة لتقليل تأثيرنا البيئي ونعتمد على عمليات إنتاج مستدامة. من خلال تشجيعنا على إعادة التدوير، نضمن إعادة استخدام الفاقد ونهدف إلى تقليل الضرر الذي نتسبب فيه للطبيعة.",
      AboutText2:
        "إعادة التدوير هي مبدأ يتمحور حوله عمليات الإنتاج لدينا. نطور حلاً فعّالًا لإدارة الفاقد ونضمن إعادة معالجة المواد المستخدمة وإدماجها في عمليات الإنتاج. وبهذه الطريقة، نحمي الموارد الطبيعية ونسهم في الاقتصاد.",
      AboutText3:
        "تجمع منتجات القرطاسية الخاصة بنا، التي تناسب مجموعة واسعة من المستخدمين من المكاتب إلى المدارس، بين الوظائف والجماليات. مع منتجات القرطاسية الخاصة بنا التي تم تصميمها لتسهيل العمل اليومي، يمكنك العثور على جميع المستلزمات التي تحتاجها لمكاتبك ومؤسسات التعليم تحت سقف واحد.",
      AboutText4:
        "تم تصميم مواد التعبئة والتغليف لحماية سلامة وجمال منتجاتك، وتقديم حلاً يلبي احتياجات الصناعة. نقوم بإنتاج حلول تعبئة خاصة لعملائنا من مختلف القطاعات ونضمن تقديم منتجاتك إلى المستهلكين بطريقة آمنة ومثيرة.",
      AboutText5:
        "إننا نجعل إنتاجنا أكثر كفاءة وجودة عالية باستخدام مستلزماتنا المناسبة للهيكل الدينامي لصناعة النسيج. مع موادنا عالية الجودة والمتينة ، نقدم لك المنتجات التي تحتاجها بأسعار معقولة في كل مرحلة من مراحل إنتاج النسيج.",
      ProductsSubTitle: "منتجاتنا",
      ProductsMainTitle: "ماذا ننتج؟",
      Stationary: "منتجات مكتبية",
      TextileConsumableProducts: "منتجات استهلاكية للنسيج",
      packagingMaterials: "مواد التغليف",
      ProductStationaryText:
        "عنوان الجودة في مواد المكتب! مع تصاميمنا المبتكرة ، نقدم منتجات مثالية للجميع ، من الطلاب إلى المحترفين. اجعل عملك أسهل مع منتجات المكتب ذات الجودة والمتانة. انقر لاكتشاف!",
      ProductTextileConsumableText:
        "أفضل الاستهلاكيات بجودة عالية هنا لأولئك الذين يسعون للكمال في صناعة النسيج! سواء كنت تمتلك ورشة كبيرة أو تنتج مشاريع في المنزل ، ستجد كل ما تحتاجه معنا. اخترنا من أجل الجودة والتنوع. انقر الآن لاكتشاف!",
      ProductPackagingMaterialsText:
        "العنوان الصحيح لتخزين منتجاتك بأمان وتقديم عروض مثالية! نقدم حلاً جماليًا ووظيفيًا مع مواد التغليف الخاصة بنا. اعثر على أنسب تغليف لمنتجاتك معنا. انقر الآن للقاء واكتشاف الجودة والأسعار المعقولة!",
      Discover: "انقر لاكتشاف!",
      StationaryPageMainText:
        "نحن بحاجة إلى القرطاسية في حياتنا ، من التعليم إلى حياة الأعمال ، من الروتين اليومي إلى المشاريع الخاصة. تتولى هذه الأدوات العديد من الوظائف ، من التعبير عن أفكارنا إلى تنظيم أفكارنا. ومع ذلك ، بالإضافة إلى الأدوات الصحيحة ، تكون الجودة والسرعة والثقة مهمة أيضًا. بينما نساعدك في إكمال مشاريعك بدون أي انقطاعات باستخدام منتجاتنا عالية الجودة ، نمكنك أيضًا من استخدام وقتك بشكل أكثر فعالية من خلال توصيلنا السريع. نحن نقدم حلولًا تناسب احتياجاتك من خلال مجموعة واسعة من المنتجات. نحن معك في البحث عن الجودة والموثوقية!",
      StationaryPageSubTitle1:
        "جودة المنتج: ضمان نجاحك مع مستلزمات المكتب عالية الجودة!",
      StationaryPageSubText1:
        "نختار فقط الأفضل بين مستلزمات المكتب. يتم إنتاج كل منتج لدينا باستخدام مواد مختارة بعناية لتكون دائمة ومفيدة. ثق في جودتنا وأكمل عملك باستخدام أفضل الأدوات.",
      StationaryPageSubTitle2:
        "توصيل سريع: لا تعطل عملك بفضل التسليم في الوقت المحدد!",
      StationaryPageSubText2:
        "من اللحظة التي تقوم فيها بطلبك ، يتم تعبئة وشحن مستلزمات المكتب الخاصة بك بأسرع وقت ممكن. بفضل نهج التسليم السريع لدينا ، تجنب انقطاع العمل وأكمل مشاريعك في الوقت المحدد.",
      StationaryPageSubTitle3: "الموثوقية: علامة المكتب التي تثق فيها: بيركو!",
      StationaryPageSubText3:
        "رضا عملاءنا له الأهمية القصوى لدينا.  نحن هنا لتلبية احتياجاتك من القرطاسية. لتجربة تسوق موثوقة، انضم إلى الآلاف من عملاءنا واستمتع بالتسوق",
      StationaryPageSubTitle4:
        "مجموعة واسعة من المنتجات: مستلزمات مكتبية تناسب كل احتياج",
      StationaryPageSubText4:
        "جميع أنواع المستلزمات المكتبية التي قد تحتاجها للمكتب أو المدرسة أو المنزل متوفرة هنا! نلبي جميع احتياجاتك من مستلزمات المكتب بمجموعة واسعة من المنتجات ، من الأقلام إلى الدفاتر ، من الملفات إلى اللاصقات.",
      StationaryGalleryTitle: "منتجاتنا المكتبية",
      StationaryGallerySubTitle: "منتجاتنا",
      SuccessMessage: "لقد تلقينا رسالتك بنجاح!",
      ErrorMessage: "حدث خطأ.",
      WarningMessage: "يرجى ملء جميع الحقول.",
      packageMaterialsTitle: "مواد التغليف",
      packagingMaterialText:
        "مصممة لتعظيم قيمة منتجاتك الممتازة ومنح ثقة لعملائك ، تقدم مواد التغليف لدينا حلاً قويًا ومتينًا وجماليًا. مع مجموعة واسعة من المنتجات ، من الأغشية الشفافة إلى صناديق الطباعة المخصصة ، نقدم التغليف المناسب لجميع منتجاتك.",
      packageMaterialsTitle2: "لماذا نحن؟",
      packageMaterialsText21:
        "تنوع: مجموعة واسعة من مواد التغليف لتلبية توقعات عملائك.",
      packageMaterialsText22:
        "جودة: حلول تنتج باستخدام مواد متينة وتعطي الأولوية لسلامة المنتج وحمايته.",
      packageMaterialsText23:
        "تخصيص: خيارات طباعة وتصميم خاصة تبرز علامتك التجارية.",
      packageMaterialsText24:
        "توصيل سريع: نحن نحضر طلبك إلى باب منزلك بسرعة وبأمان.",
      packageMaterialsTitle3: "كيف يمكنني الطلب؟",
      packageMaterialsText3:
        "اختر مواد التغليف التي تناسب احتياجاتك ، اختر خيارات التصميم أو الطباعة الخاصة ، اتصل بنا على الرقم الموجود على موقعنا الإلكتروني أو اتصل بنا عبر واتساب. انتظر وصول منتجاتك إلى باب منزلك بتوصيلنا السريع والموثوق.",
      packageMaterialsTitle4: "نود أن نراك بيننا!",
      PackageGalleryTitle: "منتجاتنا للتغليف",
      textileTitle: "استهلاكيات النسيج",
      textileText:
        "بيركو هي علامة تجارية متخصصة في مستلزمات النسيج وتقدم حلاً متنوعًا وقابلًا للتخصيص. منتجاتنا ، المصممة لجعل كل منتج خاص بك وإثارة عملائك ، ستأخذ عملك خطوة إلى الأمام.",
      textileTitle2: "لماذا نحن؟",
      textileText21:
        "حلول مركزة على النسيج: تعبئة واستهلاك متنوعين خصيصًا لجميع منتجاتك النسيج.",
      textileText22:
        "تصميمات إبداعية: خيارات تغليف إبداعية وقابلة للتخصيص تحدد منتجاتك.",
      textileText23:
        "مواد صديقة للبيئة: نقدم خيارًا مستدامًا عن طريق الجمع بين الجودة والمواد الصديقة للبيئة.",
      textileText24:
        "خدمة سريعة ومرنة: قم بتخصيص طلبك كما تريد ، ولا تضيع الوقت مع تسليمنا السريع والمرن.",
      textileTitle3: "كيفية تقديم طلبك؟",
      textileText3:
        "اختر الاستهلاكيات النسيجية التي تناسب احتياجاتك، اتصل بنا على الرقم الموجود على موقعنا الإلكتروني أو اتصل بنا عبر واتساب. انتظر منتجاتك لتصل إلى بابك مع توصيلنا السريع والموثوق.",
      textileTitle4: "تواصل معنا!",
      textileTitle5: "اكتشف نسيج أحلامك، بيركو تساعد!",
      textileText5:
        "أنت تصممها، ونحن نحميها! بيركو هنا لدعم إبداعك في عالم النسيج وإيصال منتجاتك خطوة إلى الأمام. كل غرزة، كل قطعة قماش تروي قصة، ونحن نضيف الأناقة والثقة إلى تلك القصة.",
      TextileGalleryTitle: "استهلاكياتنا النسيجية",
      Survey: "استبيان",
      SurveyQuestion1: "1- هل وجدت موقعنا كافيًا من الناحية البصرية؟",
      SurveyQuestion2: "2- هل وجدت المعلومات حول المنتجات على موقعنا كافية؟",
      SurveyQuestion3: "3- هل وجدت المنتجات التي كنت تبحث عنها؟",
      SurveyQuestion4: "4- هل قمت بالطلب منا من قبل؟",
      SurveyQuestion5: "5- كم نقطة تعطي لتغليف بيركو؟",
      SurveyComment: "تعليقك",
      SurveyAnswerYes: "نعم",
      SurveyAnswerNo: "لا",
      SurveyChoose: "اختر الخيار",
      SubmitForm: "إرسال",
      SurveyText:
        "من أجل تحسين جودة خدمات شركتنا بشكل أفضل والرد بشكل أفضل على احتياجات عملائنا الكرام، نقوم بتنظيم استبيان قصير. سيساعدنا هذا الاستبيان في فهم تجاربكم وتحسين منتجاتنا وخدماتنا.",
      packageMaterialsText4:
        "اتصل بنا على الرقم 0532 012 71 85 أو عبر البريد الإلكتروني info@berkoambalaj.com. سنكون سعداء بمساعدتك في العثور على أفضل حلول التغليف لك. بيركو معك لتعزيز عملك وتوصيل منتجاتك بشكل آمن!",
      textileText4:
        "هل لديك أي أسئلة أو طلبات خاصة؟ اتصل بنا على الرقم 0532 012 71 85 أو عبر البريد الإلكتروني info@berkoambalaj.com. نتطلع إلى جعل عملك أكثر تميزًا وانطباعًا معك!",
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
