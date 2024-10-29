import React from "react";
import styles from "./skills.module.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const skill1 = "100%";
  const skill2 = "100%";
  const skill3 = "100%";
  const skill4 = "100%";
  const skill5 = "70%";
  const skill6 = "50%";
  const skill7 = "40%";
  const skill8 = "100%";

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
              Oracle
            </div>
          </div>
          <span>{skill6}</span>
        </div>
        <div className={styles.gitem}>
          <div className={`${styles.wrap}`}>
            <div className={styles.skill} style={{ width: skill7 }}>
              Service Now
            </div>
          </div>
          <span>{skill7}</span>
        </div>
        <div className={styles.gitem}>
          <div className={`${styles.wrap}`}>
            <div className={styles.skill} style={{ width: skill8 }}>
              {t("skill8")}
            </div>
          </div>
          <span>{skill8}</span>
        </div>
      </div>
    </section>
  );
}
