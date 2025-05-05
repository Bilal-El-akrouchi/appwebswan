"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from './../../public/img/logo.png'
import cygne from './../../public/img/header_cygne.png'
// import useAuth from "@/hooks/useAuth";


export default function Home() {
  const [zoom, setZoom] = useState(null);
  const [bg, setBg] = useState(null);
  const [forfait, setForfait] = useState(0);
  const [auto, setAuto] = useState(false);
  const [timeLeft, setTimeLeft] = useState(4);

  const [items, setItems] = useState([
    "bg-amber-300",
    "bg-blue-300",
    "bg-red-300",
    "bg-green-300",
  ]);

  const supp = (index) => {
    setTimeLeft(4)
    setAuto(true);
    if (index) {
      setZoom(index);
      
    }else {
      setZoom(0)
    }
    if (forfait === 4) {
      setForfait(1);
    } else {
      setForfait(forfait + 1);
    }
    setTimeout(() => {
      setZoom(null);
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const select = newItems.splice(index, 1);
        setBg(select);
        newItems.push(select);
        return newItems;
      });
    }, 1000);
  };

  useEffect(() => {
    let interval;
    if (auto) {
      interval = setInterval(() => {
        supp();
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [auto, forfait]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prev) => (prev < -1 ? 4 : prev - 0.05));
    }, 50);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const autoBar = {
    width: `${timeLeft*25}%`
  }

  return (
    <>
    
    <header className="bg-custom w-full h-screen">
        <nav className="w-full h-[10vh] bg-custom-deux shadow-xl flex justify-around items-center">
          {/* Logo : width/height requis par <Image /> pour éviter l'erreur de compilation Next.js */}
          <Image
            src={logo}
            alt="webswan logo"
            width={120}
            height={60}
            className="w-[5vw] h-auto"
            priority
          />

          <div className="flex items-center gap-11">
            <input
              type="text"
              placeholder="connexion"
              className="flex justify-center items-center rounded-3xl bg-custom w-[100px] h-[50px] "
            />
            <button
              // onClick={handleSignInClick}
              className="bg-custom p-2 cursor-pointer"
            >
              sign in
            </button>
          </div>
        </nav>
        <div>
          <h1 className="text-white ">Swan Brut</h1>
        </div>

      </header>

    <div id="home">
      <section className={`${bg} overflow-hidden w-full`}>
        <div style={autoBar} className={`w-full h-5 transition-all ${forfait == 0 ? '' : `${items[0]}`}`}></div>
        <div
          className={`m-30 absolute z-10 ${forfait == 0 ? "opacity-100" : "opacity-0"
            }`}
        >
          <p className="text-5xl">Nos différents forfait</p>
          <div className="mt-30">

            <p>Forfait 1</p>
            <p>Forfait 2</p>
            <p>Forfait 3</p>
            <p>Forfait 4</p>
          </div>
        </div>
        <div
          className={`m-30 absolute z-10 transition ${forfait == 1 ? "opacity-100" : "opacity-0"
            }`}
        >
          <p className="text-5xl">Forfait 1</p>
          <p className="w-1/2 mt-30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            consequatur soluta quod voluptatem mollitia? Provident est
            voluptatibus hic minus tempore.
          </p>
        </div>
        <div
          className={`m-30 absolute z-10 transition ${forfait == 2 ? "opacity-100" : "opacity-0"
            }`}
        >
          <p className="text-5xl">Forfait 2</p>
          <p className="w-1/2 mt-30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            consequatur soluta quod voluptatem mollitia? Provident est
            voluptatibus hic minus tempore.
          </p>
        </div>
        <div
          className={`m-30 absolute z-10 transition ${forfait == 3 ? "opacity-100" : "opacity-0"
            }`}
        >
          <p className="text-5xl">Forfait 3</p>
          <p className="w-1/2 mt-30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            consequatur soluta quod voluptatem mollitia? Provident est
            voluptatibus hic minus tempore.
          </p>
        </div>
        <div
          className={`m-30 absolute z-10 transition ${forfait == 4 ? "opacity-100" : "opacity-0"
            }`}
        >
          <p className="text-5xl">Forfait 4</p>
          <p className="w-1/2 mt-30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            consequatur soluta quod voluptatem mollitia? Provident est
            voluptatibus hic minus tempore.
          </p>
        </div>

        <div className="h-screen ml-50 w-full flex gap-2 items-end justify-end">
          {items.map((item, index) => (
            <div
              onClick={() => {
                supp(index);
              }}
              key={index}
              className={`h-[50%] w-55 rounded-xl z-10 transition ${item} ${zoom == index ? "zoom" : ""
                }`}
            ></div>
          ))}
        </div>
      </section>
    </div>
    </>
// >>>>>>> bc3118eba67ce14bf4e8fbb41a0758d65d7dc369
  );
}
