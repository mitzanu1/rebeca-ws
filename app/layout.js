import localFont from "next/font/local";
import { Josefin_Sans } from "next/font/google";

import "./globals.css";
import i18nConfig from "@/i18nConfig";

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  display: "swap",
  variable: "--font-josefin",
});

export const metadata = {
  title: "Rebeca Andreescu",
  description:
    "Hello, my name is Rebeca Andreescu and this is my profile website.",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={`${josefin.variable}`}>{children}</body>
    </html>
  );
}
