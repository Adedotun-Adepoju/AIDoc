"use client"
import { AiDocLogo } from "../icons";
import Link from "next/link";
import MenuBtn from "./MenuBtn";
import LandingMenuBtn from "./LandingMenuBtn";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const Header = () => {
  const TOKEN_KEY = 'trial123'
  const [user, setUser] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const token = Cookies.get(TOKEN_KEY)
    if(token) {
       setUser(true)
       const data = jwt.verify(token, TOKEN_KEY)
       console.log(data);
    } else {
      setUser(false)
      setLoading(true)
    }
  }, [])
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
