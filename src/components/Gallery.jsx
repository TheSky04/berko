import React from "react";
import styles from "../styles/Gallery.module.css";
import gal1 from "../assets/gallery/gal-1.jpg";
import gal2 from "../assets/gallery/gal-2.jpg";
import gal3 from "../assets/gallery/gal-3.jpg";
import gal4 from "../assets/gallery/gal-4.jpg";
import gal5 from "../assets/gallery/gal-5.jpg";
import gal6 from "../assets/gallery/gal-6.jpg";
import gal7 from "../assets/gallery/gal-7.jpg";
import gal9 from "../assets/gallery/gal-9.jpg";
import gal10 from "../assets/gallery/gal-10.jpg";
import gal11 from "../assets/gallery/gal-11.jpg";
import gal12 from "../assets/gallery/gal-12.jpeg";
import gal13 from "../assets/gallery/gal-13.jpeg";
import gal14 from "../assets/gallery/gal-14.jpeg";
import gal15 from "../assets/gallery/gal-15.jpg";

function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <figure className={styles.gallery__item1}>
        <img src={gal1} alt="Gallery photo 1" />
      </figure>
      <figure className={styles.gallery__item2}>
        <img src={gal2} alt="Gallery photo 2" />
      </figure>
      <figure className={styles.gallery__item3}>
        <img src={gal3} alt="Gallery photo 3" />
      </figure>
      <figure className={styles.gallery__item4}>
        <img src={gal4} alt="Gallery photo 4" />
      </figure>
      <figure className={styles.gallery__item5}>
        <img src={gal5} alt="Gallery photo 5" />
      </figure>
      <figure className={styles.gallery__item6}>
        <img src={gal6} alt="Gallery photo 6" />
      </figure>
      <figure className={styles.gallery__item7}>
        <img src={gal7} alt="Gallery photo 7" />
      </figure>
      <figure className={styles.gallery__item9}>
        <img src={gal9} alt="Gallery photo 9" />
      </figure>
      <figure className={styles.gallery__item10}>
        <img src={gal10} alt="Gallery photo 10" />
      </figure>
      <figure className={styles.gallery__item11}>
        <img src={gal11} alt="Gallery photo 11" />
      </figure>
      <figure className={styles.gallery__item12}>
        <img src={gal12} alt="Gallery photo 12" />
      </figure>
      <figure className={styles.gallery__item13}>
        <img src={gal13} alt="Gallery photo 13" />
      </figure>
      <figure className={styles.gallery__item14}>
        <img src={gal14} alt="Gallery photo 14" />
      </figure>
      <figure className={styles.gallery__item15}>
        <img src={gal15} alt="Gallery photo 15" />
      </figure>
    </section>
  );
}

export default Gallery;
