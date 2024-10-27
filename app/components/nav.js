import React from "react";
import styles from "./nav.module.css";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";
import Link from "next/link";

export default function Nav() {
  const { t } = useTranslation();

  return (
    <nav className={styles.main}>
      <Link href="#home">{t("home-l")}</Link>
      <Link href="#about">{t("about-l")}</Link>
      <Link href="#skills">{t("myskills-l")}</Link>
      <LanguageChanger />
      <Link href="#experience">{t("experience-l")}</Link>
      <Link href="#education">{t("education-l")}</Link>
      <Link href="#contact">{t("contact-l")}</Link>
    </nav>
  );
}
