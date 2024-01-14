import React from "react";
import styles from "../styles/Gallery2.module.css";

function Gallery({ galleryTitle, gallerySubTitle, images = [] }) {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryTitle}>
        <p>{galleryTitle}</p>
        <h4>{gallerySubTitle}</h4>
      </div>
      <div className={styles.container}>
        {images.map((image, index) => (
          <img key={index} src={image}></img>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
