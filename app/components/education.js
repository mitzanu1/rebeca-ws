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
            <h4>{t("school1-ed")}</h4>
          </div>
          <div className={styles.det}>
            <h4>{t("grade")} A+</h4>
            <p>{t("det1-ed")}</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.reverse}`}>
          <div className={styles.desc}>
            <p>2018 - 2021</p>
            <h4>{t("school1-ed")}</h4>
          </div>
          <div className={styles.det}>
            <h4>{t("grade")} A+</h4>
            <p>{t("det2-ed")}</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.desc}>
            <p>2022 - {t("inprogress-ed")}</p>
            <h4>{t("school3-ed")}</h4>
          </div>
          <div className={styles.det}>
            <h4>{t("grade")} A+</h4>
            <p>{t("det3-ed")}</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.reverse}`}>
          <div className={styles.desc}>
            <p>2015 - 2018</p>
            <h4>{t("school4-ed")}</h4>
          </div>
          <div className={styles.det}>
            <h4>{t("grade")} A+</h4>
            <p>{t("det4-ed")}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
