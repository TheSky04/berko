import React from "react";
import styles from "../styles/Gallery.module.css";
import gal1 from "../assets/gallery/gal-1.jpg";
import gal2 from "../assets/gallery/gal-2.jpg";
import gal3 from "../assets/gallery/gal-3.jpg";
import gal4 from "../assets/gallery/gal-4.jpg";
import { useTranslation } from "react-i18next";

function Gallery() {
  const { t } = useTranslation();
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryTitle}>
        <p>{t("GalleryTitle")}</p>
        <h4>{t("GallerySubTitle")}</h4>
      </div>
      <div className={styles.container}>
        <img src={gal1}></img>
        <img src={gal2}></img>
        <img src={gal3}></img>
        <img src={gal4}></img>
      </div>
    </section>
  );
}

export default Gallery;
