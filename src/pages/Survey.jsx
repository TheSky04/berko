import styles from "../styles/Survey.module.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function Survey() {
  const { t } = useTranslation();
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState("");
  const [text, setText] = useState("");
  const survey = useRef();

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

  const showMessage = function (status, text) {
    if (status === "success") setSuccess(true);
    if (status === "error") setError(true);
    if (status === "warning") setWarning(true);
    setText(text);
  };

  const handleSubmitSurvey = (e) => {
    e.preventDefault();

    const isAnyEmptyField =
      !answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !comment;

    if (isAnyEmptyField) {
      showMessage("warning", t("WarningMessage"));
      return;
    }

    emailjs
      .sendForm(
        "service_na65ejl",
        "template_7n1mvrw",
        survey.current,
        "aH11w_cj8lQHCRjB1"
      )
      .then(
        () => {
          showMessage("success", t("SuccessMessage"));
        },
        () => {
          showMessage("error", t("ErrorMessage"));
        }
      );

    survey.current.reset();
    setComment("");
  };

  return (
    <div className={`${styles.surveyContainer} backgroundSurvey`}>
      <div className={styles.container}>
        <h4>{t("Survey")}</h4>
        <form className={styles.surveyForm} ref={survey}>
          <p>{t("SurveyText")}</p>
          <div className={styles.formGroup}>
            <label htmlFor="question1">{t("SurveyQuestion1")}</label>
            <select
              name="question1"
              id="question1"
              required
              defaultValue="nothing"
              onChange={(e) => setAnswer1(e.target.value)}
            >
              <option disabled value="nothing">
                {t("SurveyChoose")}
              </option>
              <option value="evet">{t("SurveyAnswerYes")}</option>
              <option value="hayır">{t("SurveyAnswerNo")}</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="question2">{t("SurveyQuestion2")}</label>
            <select
              name="question2"
              id="question2"
              required
              defaultValue="nothing"
              onChange={(e) => setAnswer2(e.target.value)}
            >
              <option disabled value="nothing">
                {t("SurveyChoose")}
              </option>
              <option value="evet">{t("SurveyAnswerYes")}</option>
              <option value="hayır">{t("SurveyAnswerNo")}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="question3">{t("SurveyQuestion3")}</label>
            <select
              name="question3"
              id="question3"
              required
              defaultValue="nothing"
              onChange={(e) => setAnswer3(e.target.value)}
            >
              <option disabled value="nothing">
                {t("SurveyChoose")}
              </option>
              <option value="evet">{t("SurveyAnswerYes")}</option>
              <option value="hayır">{t("SurveyAnswerNo")}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="question4">{t("SurveyQuestion4")}</label>
            <select
              name="question4"
              id="question4"
              required
              defaultValue="nothing"
              onChange={(e) => setAnswer4(e.target.value)}
            >
              <option disabled value="nothing">
                {t("SurveyChoose")}
              </option>
              <option value="evet">{t("SurveyAnswerYes")}</option>
              <option value="hayır">{t("SurveyAnswerNo")}</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="question5">{t("SurveyQuestion5")}</label>
            <select
              name="question5"
              id="question5"
              required
              defaultValue="nothing"
              onChange={(e) => setAnswer5(e.target.value)}
            >
              <option disabled value="nothing">
                {t("SurveyChoose")}
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={t("SurveyComment")}
          >
            {t("SurveyComment")}
          </textarea>
          <button
            className={styles.submitSurvey}
            onClick={(e) => handleSubmitSurvey(e)}
          >
            {t("SubmitForm")}
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
      </div>
    </div>
  );
}

export default Survey;
