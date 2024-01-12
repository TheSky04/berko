import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import stationary1 from "../assets/special/kırtasiye/kırtasiye-1.jpeg";
import stationary2 from "../assets/special/kırtasiye/kırtasiye-2.jpeg";
import stationary4 from "../assets/special/kırtasiye/kırtasiye-4.jpeg";
import stationary6 from "../assets/special/kırtasiye/kırtasiye-6.jpeg";
import stationary from "../assets/stationary.jpg";
import { configs } from "../config";
import { useState } from "react";
import styles from "../styles/Stationary.module.css";
import { useTranslation } from "react-i18next";
import Gallery from "../components/Gallery";

function Stationary({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div className="background">
      <div className={styles.stationaryContainer}>
        <SimpleImageSlider
          width={isMobile ? "100%" : "40%"}
          height={isMobile ? "30vh" : "60vh"}
          images={[stationary1, stationary2, stationary4, stationary6]}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index) => setImageNum(index)}
          autoPlayDelay={configs.sliderDelay}
        />
        <div className={styles.stationaryTitleContainer}>
          <h4 className={styles.stationaryTitle}>{t("Stationary")}</h4>
          <p className={styles.StationaryMainText}>
            {t("StationaryPageMainText")}
          </p>
        </div>
      </div>
      <div className={styles.stationaryFeatures}>
        <h4>{t("StationaryPageSubTitle1")}</h4>
        <p>{t("StationaryPageSubText1")}</p>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("StationaryPageSubTitle2")}</h4>
        <p>{t("StationaryPageSubText2")}</p>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("StationaryPageSubTitle3")}</h4>
        <p>{t("StationaryPageSubText3")}</p>
      </div>

      <div className={styles.stationaryFeatures}>
        <h4>{t("StationaryPageSubTitle4")}</h4>
        <p>{t("StationaryPageSubText4")}</p>
      </div>

      <Gallery
        galleryTitle={t("StationaryGalleryTitle")}
        gallerySubTitle={t("StationaryGallerySubTitle")}
        images={[stationary, stationary, stationary, stationary]}
      />
    </div>
  );
}

export default Stationary;
