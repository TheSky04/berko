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

import package4 from "../assets/special/ambalaj/ambalaj-4-slider.png";
import kalem1 from "../assets/special/kırtasiye/kalem.jpg";
import cift from "../assets/special/ambalaj/cift.jpg";
import ambalaj3 from "../assets/special/ambalaj/baskili-bant-slider.jpg";
import folder1 from "../assets/special/kırtasiye/folder-1.png";
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
          package7,
          cift,
          package4,
          ambalaj3,
          folder1,
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
