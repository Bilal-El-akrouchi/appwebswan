// app/layout.js  (src/app/layout.js si ton app est dans src)
'use client'                 // ← nécessaire pour utiliser useEffect côté client

import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'  // ← la lib de scroll fluide

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import StoreProvider from './StoreProvider'
import './globals.sass'

/* Google Fonts */
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const montserratEB = localFont({
  src: '../../public/font/static/Montserrat-ExtraBold.ttf',
  weight: '800',
  style: 'normal',
  variable: '--font-montserrat-eb',
  display: 'swap',
})

export default function RootLayout({ children }) {
  /* --- Initialisation Lenis (ralentit le scroll) --- */
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,     // inertie souris
      smoothTouch: true,     // inertie tactile
      wheelMultiplier: 0.35, // ← 0.35 ≈ 3× plus lent qu’à la normale
      touchMultiplier: 0.5,  // ← vitesse doigt
      lerp: 0.07,            // interpolation / fluidité
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Nettoyage quand on démonte le layout (HMR / navigation hors app)
    return () => lenis.destroy()
  }, [])
  /* -------------------------------------------------- */

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
  )
}
