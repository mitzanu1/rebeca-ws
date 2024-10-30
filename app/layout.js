import { Josefin_Sans } from "next/font/google";

import "./globals.css";
import Head from "next/head";

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  display: "swap",
  variable: "--font-josefin",
});

export const metadata = {
  title: "Rebeca Andreescu - Financial Back Office Analyst",
  description:
    "Hello, my name is Rebeca Andreescu, welcome to my profile website.",
  openGraph: {
    title: "Rebeca Andreescu - Financial Back Office Analyst",
    description:
      "Hello, my name is Rebeca Andreescu, welcome to my profile website.",
    url: "https://rebecaandreescu.ro",
    siteName: "Rebeca Andreescu",
    images: [
      {
        url: "/ra.png",
        width: 100,
        height: 100,
      },
    ],
    type: "website",
    keywords: [
      "Rebeca",
      "Andreescu",
      "Rebeca Andreescu",
      "Analyst",
      "Financial",
      "Back Office",
      "Financial Back Office Analyst",
      "Psiholog",
      "Psihoterapeut",
      "Sociolog",
      "Psihologie",
    ],
    authors: [{ name: "Mihai Mataoanu" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <body className={`${josefin.variable}`}>{children}</body>
    </html>
  );
}
