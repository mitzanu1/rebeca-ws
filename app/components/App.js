"use client";

import React, { createContext } from "react";
import About from "./about";
import Nav from "./nav";
import Home from "./home";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";
import Footer from "./footer";
import { useTranslation } from "react-i18next";

export const ModalContext = createContext(null);

export default function App() {
  const [modal, setModal] = React.useState("none");
  const value = { modal, setModal };
  const { i18n } = useTranslation("home");

  React.useEffect(() => {
    document.getElementsByTagName("html")[0].lang = i18n.language;
    console.log(document.getElementsByTagName("html")[0].lang);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>
        <Home />
        <Nav />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </ModalContext.Provider>
    </>
  );
}
