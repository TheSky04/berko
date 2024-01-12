import SimpleImageSlider from "react-simple-image-slider";
import stationary7 from "../assets/special/kırtasiye/kırtasiye-7.jpeg";
import stationary from "../assets/stationary.jpg";
import { configs } from "../config";
import { useState } from "react";
import styles from "../styles/Stationary.module.css";
import { useTranslation } from "react-i18next";
import Gallery2 from "../components/Gallery2";
import kırtasiye3edited from "../assets/special/kırtasiye/kırtasiye-3-edited.jpeg";
import kırtasiye4 from "../assets/special/kırtasiye/kırtasiye-4.jpeg";
import kırtasiye5 from "../assets/special/kırtasiye/kırtasiye-5.jpeg";
import kırtasiye8 from "../assets/special/kırtasiye/kırtasiye-8.jpeg";
import kırtasiye2 from "../assets/special/kırtasiye/kırtasiye-2.jpeg";

function Stationary({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div className="background">
      <div className={styles.stationaryContainer}>
        <SimpleImageSlider
          width="100%"
          height={isMobile ? "30vh" : "100vh"}
          images={[stationary7, stationary, kırtasiye3edited]}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index) => setImageNum(index)}
          autoPlayDelay={configs.sliderDelay}
        />
      </div>
      <div className={styles.stationaryFeatures}>
        <h4 className={styles.bigFont}>{t("Stationary")}</h4>
        <p>{t("StationaryPageMainText")}</p>
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

      <Gallery2
        galleryTitle={t("StationaryGalleryTitle")}
        gallerySubTitle={t("StationaryGallerySubTitle")}
        images={[kırtasiye2, kırtasiye4, kırtasiye5, kırtasiye8]}
      />
    </div>
  );
}

export default Stationary;
