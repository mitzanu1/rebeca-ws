"use client";
import React, { useRef } from "react";
import styles from "./contact.module.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [disabled, setDisabled] = React.useState(false);

  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setDisabled(true);
    await emailjs
      .sendForm("service_yu4r0jq", "template_6dfh0sy", form.current, {
        publicKey: "l9SHxUEvWfYQLlppI",
      })
      .then(
        () => {
          console.log("succes");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setDisabled(false);
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>
        {t("contact-t")}
        <div className={styles.arrow}></div>
      </h2>
      <article className={styles.wrap}>
        <div className={styles.services}>
          <h3>{t("services-ct")}:</h3>
          <p>{t("services-desc")}</p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={styles.main}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <p>{t("form-head")}</p>
          <div className={styles.detailsBox}>
            <input
              type="text"
              name="user_name"
              placeholder={t("form-name")}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={t("form-email")}
              required
            />
          </div>
          <input
            type="text"
            name="user_subject"
            placeholder={t("form-subject")}
            required
          />
          <textarea
            name="message"
            placeholder={t("form-message")}
            rows={7}
            required
          />
          <button className={styles.btn} type="submit" disabled={disabled}>
            {t("send-message")}
          </button>
        </form>
      </article>
    </section>
  );
}
