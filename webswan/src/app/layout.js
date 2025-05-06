// app/layout.js  (ou src/app/layout.js selon ton arbo)

import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import StoreProvider from "./StoreProvider";
import "./globals.sass";

/* Google Fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserratEB = localFont({
  src: "../../public/font/static/Montserrat-ExtraBold.ttf", 
  weight: "800",
  style: "normal",
  variable: "--font-montserrat-eb",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${montserratEB.variable}`}
    >
      <body>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
