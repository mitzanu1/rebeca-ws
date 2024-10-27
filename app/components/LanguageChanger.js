"use client";

import i18nConfig from "../../i18nConfig.js";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { RO, GB, FR } from "country-flag-icons/react/3x2";

import styles from "./languageChanger.module.css";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  let ico;
  switch (i18n.resolvedLanguage) {
    case "ro":
      ico = <RO style={{ width: "25px", height: "100%" }} />;
      break;
    case "en":
      ico = <GB style={{ width: "25px", height: "100%" }} />;
      break;
    case "fr":
      ico = <FR style={{ width: "25px", height: "100%" }} />;
      break;
    default:
      ico = <GB style={{ width: "25px", height: "100%" }} />;
  }

  const handleChange = (e) => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }
    router.refresh();
  };

  return (
    <div className={styles.lang}>
      <div>{ico}</div>
      <select onChange={handleChange} value={currentLocale}>
        <option value="en">En</option>
        <option value="ro">Ro</option>
        <option value="fr">Fr</option>
      </select>
    </div>
  );
}
