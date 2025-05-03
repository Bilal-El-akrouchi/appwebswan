"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [zoom, setZoom] = useState(null);
  const [bg, setBg] = useState(null);
  const [forfait, setForfait] = useState(0);
  const [auto, setAuto] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  const [items, setItems] = useState([
    "bg-amber-300",
    "bg-blue-300",
    "bg-red-300",
    "bg-green-300",
  ]);

  const supp = (index) => {
    // On s'assure que index est défini et on nettoie la chaîne
    const cardClass = items[index]
    setTimeLeft(5);
    setAuto(true);
    
    console.log("Carte sélectionnée :", cardClass);
  
    switch (cardClass) {
      case "bg-amber-300":
        setForfait(1);
        break;
      case "bg-blue-300":
        setForfait(2);
        break;
      case "bg-red-300":
        setForfait(3);
        break;
      case "bg-green-300":
        setForfait(4);
        break;
      default:
        setForfait(0);
    }
    
    if (index) {
      setZoom(index);
    } else {
      setZoom(0);
    }
  
    setTimeout(() => {
      setZoom(null);
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const [selected] = newItems.splice(index, 1);
        setBg(selected);
        newItems.push(selected);
        return newItems;
      });
    }, 1000);
  };

  useEffect(() => {
    let interval;
    if (auto) {
      interval = setInterval(() => {
        supp(0);
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [auto, forfait, items]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prev) => (prev < 0 ? 5 : prev - 0.05));
    }, 50);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const autoBar = {
    width: `${timeLeft * 20}%`
  }

  return (
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
  );
}
