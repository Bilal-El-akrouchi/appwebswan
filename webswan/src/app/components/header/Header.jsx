import "./Header.sass";
import Image from "next/image";
import logo from '../../../../public/img/logo.png'
export default function Header() {
  return (
    <>
    {/* model */}
      <header className="bg-custom w-full h-screen">
        <div className=" absolute flex justify-center items-end pt-17 h-full w-[100%] ">
          <div className="flex justify-end  item-center 0 opacity-80 model-brut">
            <h1 className="tracking-[0.6em]  text-white text-[6rem]">SWAN</h1>
          </div>
          <div className="flex justify-start item-center  opacity-80 model-brut z-10"> 
            {/*/ //ajouter nu blur */}
            <h1 className="tracking-[0.6em] text-white text-[6rem] ">&nbsp; BRUT </h1>
          </div>
        </div>
        {/* model  */}

        <div className="enfantheader absolute">
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
          <div></div>
        </div>
      </header>
    </>
  );
}
