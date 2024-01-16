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
import package7 from "../assets/special/ambalaj/ambalaj-7.jpg";
import stationary6 from "../assets/special/kırtasiye/kırtasiye-6.jpg";
import package4 from "../assets/special/ambalaj/ambalaj-4-slider.png";
import ender from "../assets/special/kırtasiye/kırtasiye-2.jpg";
import baskilibant from "../assets/special/ambalaj/baskili-bant-slider.jpg";
import erkan from "../assets/special/textile/erkan-slider.jpg";
import erkan2 from "../assets/special/textile/erkan-gun-slider.jpg";
import taggingNeedles from "../assets/special/textile/tagging-needles-slider.jpg";
import bantSlider from "../assets/special/textile/bant-slider.jpg";
import kalem1 from "../assets/special/kırtasiye/1.jpg";
import ambalaj10 from "../assets/special/ambalaj/ambalaj-10.jpg";
import ambalaj3 from "../assets/special/ambalaj/ambalaj-3.jpg";
import klasör1 from "../assets/special/kırtasiye/klasör-1.png";
import tanex from "../assets/special/kırtasiye/tanex.png";
import bant2 from "../assets/special/ambalaj/ambalaj-1.jpg";
import a4 from "../assets/special/kırtasiye/nsr-a4.png";

function Home({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={isMobile ? "30vh" : "110vh"}
        images={[
          kalem1,
          bant2,
          ambalaj10,
          package7,
          package4,
          ambalaj3,
          klasör1,
          a4,
          tanex,
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
