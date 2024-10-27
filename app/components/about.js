import React from "react";
import styles from "./about.module.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.wrap} id="about">
      <article className={styles.main}>
        <h2 className={styles.title}>
          {t("about")}
          <div className={styles.arrow}></div>
        </h2>
        <div className={styles.dets}>
          <div className={styles.left}>
            <div className={styles.det}>
              <h4>{t("name-t")}</h4>
              <p>{t("name")}</p>
            </div>
            <div className={styles.det}>
              <h4>{t("birthday-t")}</h4>
              <p>{t("birthday")}</p>
            </div>
            <div className={styles.det}>
              <h4>{t("birthplace-t")}</h4>
              <p>{t("birthplace")}</p>
            </div>
            <div className={styles.det}>
              <h4>{t("hobbies-t")}</h4>
              <p>{t("hobbies")}</p>
            </div>
          </div>
          <div className={styles.center}></div>
          <div className={styles.right}>
            <div className={styles.det}>
              <h4>{t("address-t")}</h4>
              <p>{t("address")}</p>
            </div>
            <div className={styles.det}>
              <h4>{t("phone-t")}</h4>
              <p>{t("phone")}</p>
            </div>
            <div className={styles.det}>
              <h4>{t("email-t")}</h4>
              <p>{t("email")}</p>
            </div>
            <div className={styles.det}>
              <h4>{t("web-t")}</h4>
              <p>{t("web")}</p>
            </div>
          </div>
        </div>
        <p className={styles.txt}>{t("about-desc")}</p>
      </article>
    </section>
  );
}
