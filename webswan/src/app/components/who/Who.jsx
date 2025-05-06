// Simple reproduction of the “African forest” travel‑journal slide
// Image credits: replace `url('/forest.jpg')` with your own
"use client";
import Image from "next/image";
import "./Who.sass";
export default function AfricanForestSection() {
  return (
    <>
      <section className="w-full bg-image-2 text-white bg-vert-fonce">
        <div className="w-[50%]  h-full   ">
          <div className="knockout">
            QUI SOMMES
            <br />
            NOUS
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <button className="group flex items-center gap-3 rounded-full bg-emerald-400/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-400/30">
  Let&apos;s Transform Your Digital Presence
</button> */
}
