import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/ContactForm.module.css";
import berkologo from "../assets/berkologo-black.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { configs } from "../config";

function ContactForm({ img = true }) {
  const { t } = useTranslation();

  return (
    <div className={styles.contactAllContainer}>
      <div className={styles.contactTitle}>
        <p>{t("ContactUs")}</p>
        <h4>{t("ContactForm")}</h4>
      </div>
      <div
        className={`${styles.contactFormContainer} ${
          img ? "" : styles["gap-5"]
        }`}
      >
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
        {img && (
          <div className={styles.contactFormImgContainer}>
            <img src={berkologo} alt="berko form" />
          </div>
        )}
        {!img && (
          <div className={styles.contactFormContact}>
            <div className={styles.flex}>
              <span className={styles.socialSpan}>
                <FaPhone className={styles.socialIcon} />
              </span>
              <div className={styles.contact}>
                <h3>{t("ContactInformation1")}</h3>
                <div className={styles.contactText}>
                  <p>
                    {t("Phone")}: {t("PhoneNumber1")}
                  </p>
                  <p>
                    {t("Phone")}: {t("PhoneNumber2")}
                  </p>
                  <p>
                    {t("Whatsapp")}: {configs.contactWhatsappNumber}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <span className={styles.socialSpan}>
                <FaMapMarkerAlt className={styles.socialIcon} />
              </span>
              <div className={styles.contact}>
                <h3>{t("ContactInformation2")}</h3>
                <div className={styles.contactText}>
                  <p className={styles.whatsappText}>{configs.address}</p>
                </div>
              </div>
            </div>

            <div className={styles.flex}>
              <span className={styles.socialSpan}>
                <FaEnvelope className={styles.socialIcon} />
              </span>
              <div className={styles.contact}>
                <h3>{t("ContactInformation3")}</h3>
                <div className={styles.contactText}>
                  <p>{configs.email2}</p>
                  <p>{configs.email}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
