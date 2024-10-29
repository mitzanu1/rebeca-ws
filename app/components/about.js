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
              <p>Rebeca Andreescu</p>
            </div>
            <div className={styles.det}>
              <h4>{t("address-t")}</h4>
              <p>Cluj-Napoca, Romania</p>
            </div>
            <div className={styles.det}>
              <h4>{t("phone-t")}</h4>
              <p>+4 0728 461 445</p>
            </div>
          </div>
          {/* <div className={styles.center}></div> */}
          <div className={styles.right}>
            <div className={styles.det}>
              <h4>{t("email-t")}</h4>
              <p>rebeca.andreescu@yahoo.com</p>
            </div>
            <div className={styles.det}>
              <h4>{t("web-t")}</h4>
              <p>www.rebecaandreescu.ro</p>
            </div>
            <div className={styles.det}>
              <h4>{t("hobbies-t")}</h4>
              <p>{t("hobbies")}</p>
            </div>
          </div>
        </div>
        <p className={styles.txt}>{t("about-desc")}</p>
      </article>
    </section>
  );
}
