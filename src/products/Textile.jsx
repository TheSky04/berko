import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import { useState } from "react";
import styles from "../styles/Stationary.module.css";
import { useTranslation } from "react-i18next";
import Gallery2 from "../components/Gallery2";

import taggingNeedles from "../assets/special/textile/tagging-needles-slider.jpg";
import bantSlider from "../assets/special/textile/bant-slider.jpg";
import erkan from "../assets/special/textile/erkan-slider.jpg";
import erkan2 from "../assets/special/textile/erkan-gun-slider.jpg";

import textile3 from "../assets/special/textile/tekstil-3.jpg";
import textile4 from "../assets/special/textile/tekstil-4.jpg";
import textile5 from "../assets/special/textile/tekstil-5.jpg";
import textile6 from "../assets/special/textile/tekstil-6.jpg";

function Textile({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div className="background">
      <div className={styles.stationaryContainer}>
        <SimpleImageSlider
          width="100%"
          height={isMobile ? "30vh" : "100vh"}
          images={[taggingNeedles, erkan, bantSlider, erkan2]}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index) => setImageNum(index)}
          autoPlayDelay={configs.sliderDelay}
        />
      </div>

      <div className={styles.stationaryFeatures}>
        <h4 className={styles.bigFont}>{t("textileTitle")}</h4>
        <p>{t("textileText")}</p>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("textileTitle5")}</h4>
        <p>{t("textileText5")}</p>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("textileTitle2")}</h4>
        <ul>
          <li className={styles.margin2}>{t("textileText21")}</li>
          <li className={styles.margin2}>{t("textileText22")}</li>
          <li className={styles.margin2}>{t("textileText23")}</li>
          <li className={styles.margin2}>{t("textileText24")}</li>
        </ul>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("textileTitle3")}</h4>
        <p>{t("textileText3")}</p>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("textileTitle4")}</h4>
        <p>{t("textileText4")}</p>
      </div>

      <Gallery2
        galleryTitle={t("StationaryGallerySubTitle")}
        gallerySubTitle={t("TextileGalleryTitle")}
        images={[textile3, textile4, textile5, textile6]}
      />
    </div>
  );
}

export default Textile;
