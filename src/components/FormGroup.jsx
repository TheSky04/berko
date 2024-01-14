import React from "react";
import styles from "../styles/FormGroup.module.css";
import { useTranslation } from "react-i18next";

function FormGroup({ question, options = [] }) {
  const { t } = useTranslation();

  return (
    <div className={styles.formGroup}>
      <label htmlFor="question1">{question}</label>
      <select name="question1" id="question1" required>
        <option disabled value="nothing" selected>
          {t("SurveyChoose")}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.answer}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormGroup;
