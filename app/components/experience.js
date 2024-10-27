import React from "react";
import styles from "./experience.module.css";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className={styles.main} id="experience">
      <h2 className={styles.title}>
        {t("experience-t")}
        <div className={styles.arrow}></div>
      </h2>
      <article className={styles.grid}>
        <h6 className={styles.left}></h6> <h6></h6>
        <div className={`${styles.wplace} ${styles.left}`}>
          <h3>WSP Global Inc</h3>
          <h4>CEO</h4>
          <p>
            Im charge of spending the company income on relaxing activities.
          </p>
        </div>
        <div className={`${styles.date} ${styles.right}`}>
          <p>
            Nov 2024 - {t(`present-ex`)}
            <span className={`${styles.arrowLeft} ${styles.arrowOk}`}></span>
          </p>
        </div>
        <h6 className={styles.left}></h6> <h6></h6>
        <div className={`${styles.date} ${styles.left}`}>
          <p>
            Jul 2023 - Sep 2024
            <span className={`${styles.arrowRight} ${styles.arrowX}`}></span>
          </p>
        </div>
        <div className={`${styles.wplace} ${styles.right}`}>
          <h3>{t(`company2-ex`)}</h3>
          <h4>{t(`position2-ex`)}</h4>
          <p>{t(`desc2-ex`)}</p>
        </div>
        <h6 className={styles.left}></h6> <h6></h6>
        <div className={`${styles.wplace} ${styles.left}`}>
          <h3>{t(`company3-ex`)}</h3>
          <h4>{t(`position3-ex`)}</h4>
          <p>{t(`desc3-ex`)}</p>
        </div>
        <div className={`${styles.date} ${styles.right}`}>
          <p>
            Aug 2022 - Jun 2023
            <span className={`${styles.arrowLeft} ${styles.arrowX}`}></span>
          </p>
        </div>
        <h6 className={styles.left}></h6> <h6></h6>
        <div className={`${styles.date} ${styles.left}`}>
          <p>
            {" "}
            Jan 2021 - {t(`present-ex`)}
            <span className={`${styles.arrowRight} ${styles.arrowOk}`}></span>
          </p>
        </div>
        <div className={`${styles.wplace} ${styles.right}`}>
          <h3>{t(`company4-ex`)}</h3>
          <h4>{t(`position4-ex`)}</h4>
          <p>{t(`desc4-ex`)}</p>
        </div>
        <h6 className={styles.left}></h6> <h6></h6>
      </article>
    </section>
  );
}
