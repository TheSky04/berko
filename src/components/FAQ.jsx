import React from "react";
import ControlledAccordions from "../components/ControlledAccordions";
import { useTranslation } from "react-i18next";
import styles from "../styles/FAQ.module.css";
import ender from "../assets/special/kırtasiye/kırtasiye-2.jpg";

function FAQ() {
  const { t } = useTranslation();
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faq}>
        <p>{t("ExtraQuestion")}</p>
        <h1 className={styles.title}>{t("FAQ")}</h1>
      </div>
      <div className={styles.faqContent}>
        <ControlledAccordions />
        <div className={styles.faqContentImgContainer}>
          <img
            src={ender}
            className={styles.faqContentImgContainerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
