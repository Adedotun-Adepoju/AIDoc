"use client"
import { AiDocLogo } from "../icons";
import Link from "next/link";
import MenuBtn from "./MenuBtn";
import LandingMenuBtn from "./LandingMenuBtn";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { TOKEN_KEY } from "@/utils";

const Header = () => {
  const [user_data, setUser_data] = useState<any>();
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const jtw = Cookies.get(TOKEN_KEY);
    if (jtw) {
      const data = jwt.verify(jtw, TOKEN_KEY);
      setUser_data(data);
      setToken(jtw);
    }
  }, []);
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm">
      <div className="py-4 flex justify-between md:px-10 px-5 items-center max-w-7xl mx-auto">
        <Link href="/"><AiDocLogo className="h-16" /></Link>

        <nav className="absolute hidden gap-6 font-semibold translate-x-1/2 md:flex right-1/2 text-blueDark-200">
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
        </nav>

        {user_data ? <MenuBtn user_name={user_data?.first_name} /> : <LandingMenuBtn />}
      </div>
    </header>
  );
};

export default Header;
