import { useState } from "react";
import gal1 from "../assets/gallery/gal-1.jpg";
import gal2 from "../assets/gallery/gal-2.jpg";
import gal3 from "../assets/gallery/gal-3.jpg";
import gal4 from "../assets/gallery/gal-4.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Gallery from "../components/Gallery";
import ambalaj from "../assets/ambalaj.jpg";
import backgroundTree from "../assets/background-tree.jpg";
import nature from "../assets/nature.jpg";
import { useTranslation } from "react-i18next";

function Home({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={isMobile ? "30vh" : "100vh"}
        images={[ambalaj, backgroundTree, nature]}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index) => setImageNum(index)}
        autoPlayDelay={configs.sliderDelay}
      />
      <Gallery
        galleryTitle={t("GalleryHomeTitle")}
        gallerySubTitle={t("GalleryHomeSubTitle")}
        images={[gal1, gal2, gal3, gal4]}
      />
      <FAQ />
      <ContactForm />
    </div>
  );
}

export default Home;
