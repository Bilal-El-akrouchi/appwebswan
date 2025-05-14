import { useState, useEffect } from "react";
import "./Header.sass";
import Image from "next/image";
import logo from "../../../../public/img/logo.png";

export default function Header() {
  // 1) on stocke la position du scroll
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY < 200) {
        console.log("je scrolle");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2) on génère la classe dynamiquement (backticks obligatoires)
const headerClasses = `
  bg-custom fixed w-full transition-all duration-1050 ease-in-out
  ${
    scrollY < 100
      ? "bg-[position:50%_-40%] bg-[size:100%] h-screen"
      : scrollY <= 400
        ? "bg-[size:250%] bg-[position:10%_8%] h-[200vh]"
        : "bg-[position:100%_150%] bg-[size:200%] h-[300vh]"
  }
`;
  const disparitionClass = `absolute flex justify-center items-end pt-17 h-full w-[100%] transition-opacity duration-1000 ${
    scrollY < 100 ? "opacity-100" : "opacity-0 pointer-events-none "
  }`;
  const qui = `: ${
    scrollY < 100
      ? " translate-y-[0rem]  z-100"
      :scrollY <= 400 ?
       "transition-all w-[50vw] duration-2000 translate-y-[-8rem]  flexflex-column justify-end items-center ":
       "transition-all w-[50vw] duration-1000 translate-y-[-80rem]"
  }`;

  return (
    <>
    <section id="hero " className=" h-[200vh] ">

      <header className={headerClasses}>
        {/* model */}
        {/* model */}
      </header>
        <div className={disparitionClass}>
          <div className="flex justify-end items-center opacity-80 model-brut">
            <h1 className="tracking-[0.6em] text-white text-[6rem]">SWAN</h1>
          </div>
          <div className="flex justify-start items-center opacity-80 model-brut z-10">
            <h1 className="tracking-[0.6em] text-white text-[6rem]">BRUT</h1>
          </div>
        </div>

      <div className={qui}>
        <div className="h-screen"></div>
        <div className=" text-6xl text-white ">
          QUI <br />
          SOMMES NOUS
        </div>
        <p className="text-white">
          web swan est une boite de devellopement web et de design commercial
          <br />
          vos ventes stagne et vous n'arrivez pas a promouvoir votre entreprise
          ? vous désirez élargir votre exposition ? vous voulez booster vos taux
          de conversion mais n'avez de connaisance ui/ux ou seo ? 
          <br />
          notre équipe
          de designer commercial seront vous aider et vous aiguiller a travers
          votre processus de refonte commerciale/graphique 
          le designer pourra vous aider a concrétiser et clarifier vos idée et les déveoppeur seront donner vie a vos idée.
          
          
        </p>
          <h3>une image cohérant</h3>
          marre des cartes de visite bariolé en déconexion totale avec votre entreprise le flyer et le site n'ont rien a voie.
          notre équipe proffessionnel vous permet de mettre au jour une cohérance et un carisme proffessionnel et cohérant faisant gage de confiance aupres des potentiel clients.

      </div>
    </section>
    </>
  );
}
