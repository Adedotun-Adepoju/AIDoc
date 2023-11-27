import { AiDocLogo } from "../icons";
import Link from "next/link";
import MenuBtn from "./MenuBtn";
import LandingMenuBtn from "./LandingMenuBtn";

const Header = () => {
  const user = false;
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm">
      <div className="py-4 flex justify-between md:px-10 px-5 items-center max-w-7xl mx-auto">
        <AiDocLogo className="h-16" />

        <nav className="absolute hidden gap-6 font-semibold translate-x-1/2 md:flex right-1/2 text-blueDark-200">
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
        </nav>

        {user ? <MenuBtn /> : <LandingMenuBtn />}
      </div>
    </header>
  );
};

export default Header;
