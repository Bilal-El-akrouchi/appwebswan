import Image from "next/image";
import logo from '../../public/img/'

export default function Home() {
  return (
    <>
      <header className="bg-custom w-full h-screen">
        <nav className="w-full h-[10vh] bg-custom-deux shadow-xl">
          <h1><img src={logo} alt="web swan logo" /></h1>
        </nav>
      </header>
    </>
  );
}
