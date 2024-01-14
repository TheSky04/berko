import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import { useState } from "react";
import styles from "../styles/Stationary.module.css";
import { useTranslation } from "react-i18next";
import Gallery2 from "../components/Gallery2";

import ambalaj4 from "../assets/special/ambalaj/ambalaj-4-slider.jpg";
import ambalaj7 from "../assets/special/ambalaj/ambalaj-7.jpg";
import baskilibant from "../assets/special/ambalaj/baskili-bant-slider.jpg";

import ambalaj6 from "../assets/special/ambalaj/ambalaj-6.jpg";
import ambalaj8 from "../assets/special/ambalaj/ambalaj-8.jpg";
import ambalaj9 from "../assets/special/ambalaj/ambalaj-9.jpg";
import ambalaj2 from "../assets/special/ambalaj/ambalaj-2.jpg";

function Packaging({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div className="background">
      <div className={styles.stationaryContainer}>
        <SimpleImageSlider
          width="100%"
          height={isMobile ? "30vh" : "100vh"}
          images={[ambalaj4, ambalaj7, baskilibant]}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index) => setImageNum(index)}
          autoPlayDelay={configs.sliderDelay}
        />
      </div>
      <div className={styles.stationaryFeatures}>
        <h4 className={styles.bigFont}>{t("packageMaterialsTitle")}</h4>
        <p>{t("packagingMaterialText")}</p>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("packageMaterialsTitle2")}</h4>
        <ul>
          <li className={styles.margin2}>{t("packageMaterialsText21")}</li>
          <li className={styles.margin2}>{t("packageMaterialsText22")}</li>
          <li className={styles.margin2}>{t("packageMaterialsText23")}</li>
          <li className={styles.margin2}>{t("packageMaterialsText24")}</li>
        </ul>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("packageMaterialsTitle3")}</h4>
        <p>{t("packageMaterialsText3")}</p>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("packageMaterialsTitle4")}</h4>
        <p>{t("packageMaterialsText4")}</p>
      </div>

      <Gallery2
        galleryTitle={t("StationaryGallerySubTitle")}
        gallerySubTitle={t("PackageGalleryTitle")}
        images={[ambalaj6, ambalaj8, ambalaj9, ambalaj2]}
      />
    </div>
  );
}

export default Packaging;
