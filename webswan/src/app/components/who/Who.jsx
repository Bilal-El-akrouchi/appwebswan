// app/components/who/Who.jsx
'use client'
import './Who.sass'
import { useState, } from 'react';
import { useEffect } from 'react';

export default function Who() {
   const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        if (window.scrollY < 400) {
          console.log("je scrolle");
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const test =  `bg-amber-500 ${
      scrollY < 100
        ? "bg-amber-200 h-screen "
        : "bg-amber-100 h-screen absolute "
    }`;
  return (
    <section className={test}>
      <h2 className="qui-texte">
        QUI<br/>SOMMES&nbsp;NOUS
      </h2>
    </section>
  )
}
