import React from "react";
import styles from "./education.module.css";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();

  return (
    <section className={styles.main} id="education">
      <h2 className={styles.title}>
        {t("education-t")}
        <div className={styles.arrow}></div>
      </h2>
      <article className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.desc}>
            <p>2021 - 2023</p>
            <h3>{t("school1-ed")}</h3>
          </div>
          <div className={styles.det}>
            <h3>{t("grade")} A+</h3>
            <p>{t("det1-ed")}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
