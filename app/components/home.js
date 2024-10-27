import React from "react";
import styles from "./home.module.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={styles.main} id="home">
      <div className={styles.img}>
        <Image
          src="/rebeca.png"
          width={400}
          height={400}
          alt="Rebeca Andreescu"
          priority="high"
        />
      </div>
      <div className={styles.desc}>
        <h1>REBECA ADREESCU</h1>
        <h3>{t("occupation")}</h3>
        <p>{t("intro")}</p>
      </div>
    </main>
  );
}
