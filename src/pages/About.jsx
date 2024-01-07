import React from "react";
import { useTranslation } from "react-i18next";
import MenuBar from "../components/MenuBar";
import styles from "../styles/About.module.css";
import nature from "../assets/background-tree.jpg";
import recycle from "../assets/recycle2.jpg";
import stationary from "../assets/stationary.jpg";
import packagingMaterials from "../assets/packaging.webp";
import textile from "../assets/tekstil.jpg";

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <MenuBar menu={t("Home")} subMenu={t("About")} />
      <div className="background">
        <div className={styles.aboutFirstTopTitleContainer}>
          <div className={styles.aboutTitle}>
            <p>{t("AboutSubTitle")}</p>
            <h4>{t("AboutMainTitle")}</h4>
          </div>
          <div className={styles.aboutFlexContainer}>
            <img src={nature} alt="berko nature friendly" />
            <div className={styles.aboutTopContent}>
              <h4>{t("AboutTitle1")}</h4>
              <p>{t("AboutText1")} </p>
            </div>
          </div>
        </div>
        <div className={styles.aboutTopContainer}>
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle2")}</h4>
            <p>{t("AboutText2")} </p>
          </div>
          <img src={recycle} alt="berko recycles" />
        </div>
        <div className={styles.aboutTopContainer}>
          <img src={stationary} alt="berko produce stationary products" />
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle3")}</h4>
            <p>{t("AboutText3")} </p>
          </div>
        </div>
        <div className={styles.aboutTopContainer}>
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle4")}</h4>
            <p>{t("AboutText4")} </p>
          </div>
          <img
            src={packagingMaterials}
            alt="berko produce packaging materials"
          />
        </div>
        <div className={styles.aboutTopContainer}>
          <img src={textile} alt="berko produce textile consumables products" />
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle5")}</h4>
            <p>{t("AboutText5")} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
