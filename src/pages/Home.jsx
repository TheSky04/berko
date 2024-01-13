import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Gallery from "../components/Gallery";
import { useTranslation } from "react-i18next";
import gallery1 from "../assets/special/gallery/gallery-1.jpg";
import gallery2 from "../assets/special/gallery/gallery-2.jpg";
import gallery3 from "../assets/special/gallery/gallery-3.jpg";
import gallery4 from "../assets/special/gallery/gallery-4.jpg";
import package7 from "../assets/special/ambalaj/ambalaj-7.jpeg";
import stationary6 from "../assets/special/kırtasiye/kırtasiye-6.jpeg";
import package4 from "../assets/special/ambalaj/ambalaj-4-slider.png";
import ender from "../assets/special/ender.jpeg/";
import baskilibant from "../assets/special/ambalaj/baskili-bant-slider.png";
import erkan from "../assets/special/textile/erkan-slider.png";
import erkan2 from "../assets/special/textile/erkan-gun-slider.png";
import taggingNeedles from "../assets/special/textile/tagging-needles-slider.png";
import bantSlider from "../assets/special/textile/bant-slider.png";

function Home({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={isMobile ? "30vh" : "100vh"}
        images={[
          package7,
          stationary6,
          ender,
          package4,
          baskilibant,
          erkan,
          erkan2,
          taggingNeedles,
          bantSlider,
        ]}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index) => setImageNum(index)}
        autoPlayDelay={configs.sliderDelay}
      />
      <Gallery
        galleryTitle={t("GalleryHomeTitle")}
        gallerySubTitle={t("GalleryHomeSubTitle")}
        images={[gallery1, gallery2, gallery3, gallery4]}
      />
      <FAQ />
      <ContactForm />
    </div>
  );
}

export default Home;
