'use client '
import Image from "next/image";
import logo from "../../public/img/logo.png";
import useAuth from "@/hooks/useAuth";

export default function Home() {
  // Gestionnaire de clic
  const handleSignInClick = () => {
    console.log("Sign in button clicked");
  };

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
              onClick={handleSignInClick}
              className="bg-custom p-2 cursor-pointer"
            >
              sign in
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
