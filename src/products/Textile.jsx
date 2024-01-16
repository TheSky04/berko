import SimpleImageSlider from "react-simple-image-slider";
import { configs } from "../config";
import { useState } from "react";
import styles from "../styles/Stationary.module.css";
import { useTranslation } from "react-i18next";
import Gallery2 from "../components/Gallery2";

import ust1 from "../assets/special/tekstil/ust1.jpg";
import ust4 from "../assets/special/tekstil/ust4.jpg";
import ust6 from "../assets/special/tekstil/ust6.jpg";

import alt0 from "../assets/special/tekstil/alt0.png";
import alt1 from "../assets/special/tekstil/alt1.jpg";
import alt2 from "../assets/special/tekstil/alt2.jpg";
import alt3 from "../assets/special/tekstil/alt3.jpg";

function Textile({ isMobile }) {
  const [imageNum, setImageNum] = useState(1);
  const { t } = useTranslation();
  return (
    <div className="background">
      <div className={styles.stationaryContainer}>
        <SimpleImageSlider
          width="100%"
          height={isMobile ? "30vh" : "100vh"}
          images={[ust1, ust6, ust4]}
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
        images={[alt0, alt1, alt2, alt3]}
      />
    </div>
  );
}

export default Textile;
