import React from "react";
import styles from "./skills.module.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const skill1 = "70%";
  const skill2 = "90%";
  const skill3 = "83%";
  const skill4 = "78%";
  const skill5 = "55%";
  const skill6 = "67%";

  return (
    <section className={styles.main} id="skills">
      <h2 className={styles.title}>
        {t("skills-t")}
        <div className={styles.arrow}></div>
      </h2>
      <div className={styles.container}>
        <div className={`${styles.gitem}`}>
          <div className={`${styles.wrap}`}>
            <div className={styles.skill} style={{ width: skill1 }}>
              {t("skill1")}
            </div>
          </div>
          <span>{skill1}</span>
        </div>
        <div className={styles.gitem}>
          <div className={`${styles.wrap}`}>
            <div className={styles.skill} style={{ width: skill2 }}>
              {t("skill2")}
            </div>
          </div>
          <span>{skill2}</span>
        </div>
        <div className={`${styles.gitem}`}>
          <div className={`${styles.wrap}`}>
            <div className={styles.skill} style={{ width: skill3 }}>
              {t("skill3")}
            </div>
          </div>
          <span>{skill3}</span>
        </div>
        <div className={styles.gitem}>
          <div className={`${styles.wrap}`}>
            <div className={styles.skill} style={{ width: skill4 }}>
              {t("skill4")}
            </div>
          </div>
          <span>{skill4}</span>
        </div>
        <div className={`${styles.gitem}`}>
          <div className={`${styles.wrap}`}>
            <div className={styles.skill} style={{ width: skill5 }}>
              {t("skill5")}
            </div>
          </div>
          <span>{skill5}</span>
        </div>
        <div className={styles.gitem}>
          <div className={`${styles.wrap}`}>
            <div className={styles.skill} style={{ width: skill6 }}>
              {t("skill6")}
            </div>
          </div>
          <span>{skill6}</span>
        </div>
      </div>
    </section>
  );
}
