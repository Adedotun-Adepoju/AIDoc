"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../elements/Button";
import { Twirl as Hamburger } from "hamburger-react";
import { cx } from "@/utils";

const LandingMenuBtn = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {setToggled(!toggled);}
  return (
    <>
      <span className="fixed top-2 text-blueDark-200 right-4 z-50 md:hidden">
        <Hamburger toggled={toggled} toggle={handleToggle} size={28} />
      </span>
      <div className="hidden flex-row md:flex">
        <Button
          title="LOGIN"
          href="/login"
          classNames="mr-2 sm:px-5 md:py-1.5 text-blueDark-200 bg-white capitalize font-semibold "
        />
        <Button
          title="SIGN UP"
          href="/signup"
          classNames="sm:px-5 md:py-1.5 text-white uppercase font-semibold"
        />
      </div>

      {/* Mobile Dropdown  */}
      <div
        className={cx(toggled ? 'scale-y-100 origin-top' : 'scale-y-0 origin-top',"flex flex-col w-full bg-white shadow-sm absolute z-30 left-0 h-[384px] justify-center md:hidden transform transition-transform duration-300 ease-in-out top-0")}
        id="landingMenuContainer"
      >
        <div className="py-32 px-8 max-w-[287px] mx-auto text-base gap-4 h-full flex flex-col w-full items-center text-blueDark-200 capitalize font-semibold">
          {/* <Link href="/about" classNames=" w-full sm:px-5 md:py-1.5">
            About us
          </Link>
          <Link href="/contact" classNames="w-full sm:px-5 md:py-1.5">
            Contact us
          </Link>
          <Link href="/login" classNames="w-full sm:px-5 md:py-1.5">
            LOGIN
          </Link> */}
          <Button
            title="SIGN UP"
            href="/signup"
            classNames="w-full text-center text-white uppercase font-semibold"
          />
        </div>
      </div>
    </>
  );
};

export default LandingMenuBtn;
