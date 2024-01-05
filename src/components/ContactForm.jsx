import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/ContactForm.module.css";
import ambalaj from "../assets/berkoo.png";

function ContactForm() {
  const { t } = useTranslation();

  return (
    <div className={styles.contactAllContainer}>
      <div className={styles.contactTitle}>
        <p>{t("ContactUs")}</p>
        <h4>{t("ContactForm")}</h4>
      </div>
      <div className={styles.contactFormContainer}>
        <form className={styles.form}>
          <input type="text" placeholder={t("ContactInputNameSurname")}></input>
          <input type="text" placeholder={t("ContactInputMail")}></input>
          <input type="text" placeholder={t("ContactInputTopic")}></input>
          <input type="text" placeholder={t("ContactInputPhone")}></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder={t("ContactInputMessage")}
          ></textarea>
          <button type="submit" className={styles.contactFormButton}>
            {t("ContactButton")}
          </button>
        </form>
        <div className={styles.contactFormImgContainer}>
          <img src={ambalaj} alt="berko form" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
