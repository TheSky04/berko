import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import { useState } from "react";
import styles from "../styles/Stationary.module.css";
import { useTranslation } from "react-i18next";
import Gallery2 from "../components/Gallery2";
import kırtasiye3edited from "../assets/special/kırtasiye/kırtasiye-3-edited.jpeg";
import kırtasiye4 from "../assets/special/kırtasiye/kırtasiye-4.jpeg";
import kırtasiye5 from "../assets/special/kırtasiye/kırtasiye-5.jpeg";
import kırtasiye6 from "../assets/special/kırtasiye/kırtasiye-6.jpeg";
import kırtasiye8 from "../assets/special/kırtasiye/kırtasiye-8.jpeg";
import kırtasiye2 from "../assets/special/kırtasiye/kırtasiye-2.jpeg";
import bigpoint5 from "../assets/special/kırtasiye/bigpoint-5-slider.png";

import taggingNeedles from "../assets/special/textile/tagging-needles-slider.png";
import bantSlider from "../assets/special/textile/bant-slider.png";
import erkan from "../assets/special/textile/erkan-slider.png";
import erkan2 from "../assets/special/textile/erkan-gun-slider.png";

import textile3 from "../assets/special/textile/tekstil-3.jpeg";
import textile4 from "../assets/special/textile/tekstil-4.jpeg";
import textile5 from "../assets/special/textile/tekstil-5.jpeg";
import textile6 from "../assets/special/textile/tekstil-6.jpeg";

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
