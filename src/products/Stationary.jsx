import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import { useState } from "react";
import styles from "../styles/Stationary.module.css";
import { useTranslation } from "react-i18next";
import Gallery2 from "../components/Gallery2";
import kırtasiye3edited from "../assets/special/kırtasiye/kırtasiye-3-edited.jpg";
import kırtasiye4 from "../assets/special/kırtasiye/kırtasiye-4.jpg";
import kırtasiye5 from "../assets/special/kırtasiye/kırtasiye-5.jpg";
import kırtasiye6 from "../assets/special/kırtasiye/kırtasiye-6.jpg";
import kırtasiye8 from "../assets/special/kırtasiye/kırtasiye-8.jpg";
import kırtasiye2 from "../assets/special/kırtasiye/kırtasiye-2.jpg";
import bigpoint5 from "../assets/special/kırtasiye/bigpoint-5-slider.jpg";

function Stationary({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div className="background">
      <div className={styles.stationaryContainer}>
        <SimpleImageSlider
          width="100%"
          height={isMobile ? "30vh" : "100vh"}
          images={[bigpoint5, kırtasiye6, kırtasiye3edited]}
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
        galleryTitle={t("StationaryGallerySubTitle")}
        gallerySubTitle={t("StationaryGalleryTitle")}
        images={[kırtasiye2, kırtasiye4, kırtasiye5, kırtasiye8]}
      />
    </div>
  );
}

export default Stationary;
