import React from "react";
import styles from "../styles/Survey.module.css";
import { useTranslation } from "react-i18next";
import FormGroup from "../components/FormGroup";

function Survey() {
  const { t } = useTranslation();

  const handleSubmitSurvey = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.surveyContainer} backgroundSurvey`}>
      <h4>{t("Survey")}</h4>
      <form className={styles.surveyForm}>
        <FormGroup
          question={t("SurveyQuestion1")}
          options={[
            { value: "yes", answer: t("SurveyAnswerYes") },
            { value: "no", answer: t("SurveyAnswerNo") },
          ]}
        />
        <FormGroup
          question={t("SurveyQuestion2")}
          options={[
            { value: "yes", answer: t("SurveyAnswerYes") },
            { value: "no", answer: t("SurveyAnswerNo") },
          ]}
        />

        <FormGroup
          question={t("SurveyQuestion3")}
          options={[
            { value: "yes", answer: t("SurveyAnswerYes") },
            { value: "no", answer: t("SurveyAnswerNo") },
          ]}
        />

        <FormGroup
          question={t("SurveyQuestion4")}
          options={[
            { value: "yes", answer: t("SurveyAnswerYes") },
            { value: "no", answer: t("SurveyAnswerNo") },
          ]}
        />

        <FormGroup
          question={t("SurveyQuestion5")}
          options={[
            { value: "1", answer: "1" },
            { value: "2", answer: "2" },
            { value: "3", answer: "3" },
            { value: "4", answer: "4" },
            { value: "5", answer: "5" },
          ]}
        />
        <button
          className={styles.submitSurvey}
          onClick={(e) => handleSubmitSurvey(e)}
        >
          {t("Submit")}
        </button>
      </form>
    </div>
  );
}

export default Survey;
