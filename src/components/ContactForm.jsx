import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/ContactForm.module.css";
import berkologo from "../assets/berko-black-nobackground.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { configs } from "../config";
import emailjs from "@emailjs/browser";

function ContactForm({ img = true }) {
  const { t } = useTranslation();
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const disabledButton = !name || !phone || !mail || !topic || !message;

  const showMessage = function (status, text) {
    if (status === "success") setSuccess(true);
    if (status === "error") setError(true);
    if (status === "warning") setWarning(true);
    setText(text);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log("here");

    if (disabledButton) {
      showMessage("warning", t("WarningMessage"));
      return;
    }

    emailjs
      .sendForm(
        "service_d0k6ddd",
        "template_ulf34zi",
        form.current,
        "aH11w_cj8lQHCRjB1"
      )
      .then(
        (result) => {
          showMessage("success", t("SuccessMessage"));
        },
        (error) => {
          showMessage("error", t("ErrorMessage"));
        }
      );

    setPhone("");
    setName("");
    setTopic("");
    setMessage("");
    setMail("");
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => setSuccess(false), 3000);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 3000);
    }
  }, [error]);

  useEffect(() => {
    if (warning) {
      setTimeout(() => setWarning(false), 5000);
    }
  }, [warning]);

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
        <form ref={form} className={styles.form}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("ContactInputNameSurname")}
          ></input>
          <input
            type="text"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder={t("ContactInputMail")}
          ></input>
          <input
            type="text"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder={t("ContactInputTopic")}
          ></input>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("ContactInputPhone")}
          ></input>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("ContactInputMessage")}
          ></textarea>
          <button
            type="submit"
            className={styles.contactFormButton}
            onClick={handleSubmitForm}
          >
            {t("ContactButton")}
          </button>
          {success && (
            <div className={`${styles.message} ${styles.success}`}>{text}</div>
          )}
          {error && (
            <div className={`${styles.message} ${styles.error}`}>{text}</div>
          )}
          {warning && (
            <div className={`${styles.message} ${styles.warning}`}>{text}</div>
          )}
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
