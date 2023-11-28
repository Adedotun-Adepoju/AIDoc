"use client";
import Image from "next/image";
import profileImg from "@/public/images/profile.png";
import {
  ChevronDownIcon,
  LogoutIcon,
  ProfileIcon,
  SpecialistIcon,
  AboutIcon,
  ContactIcon,
} from "../icons";
import { useState } from "react";
import Link from "next/link";
import { TOKEN_KEY, cx } from "@/utils";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const MenuBtn = ({user_name}: {user_name: string}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();

  const logout = () => {
    Cookies.remove(TOKEN_KEY);
    router.push('/login');
  };

  return (
    <div className="relative cursor-pointer">
      <div
        onClick={() => {
          setToggleDropdown((prev) => !prev);
        }}
        className="flex gap-2.5 items-center border border-blueLight rounded-full pl-2 pr-3 py-1"
      >
        <Image
          src={profileImg}
          alt="profile"
          className="w-8 h-8 border rounded-full border-blueDark-200"
        />
        <span className="font-semibold uppercase">{user_name}</span>
        {toggleDropdown ? (
          <ChevronDownIcon className="w-3 h-3 transform rotate-180" />
        ) : (
          <ChevronDownIcon className="w-3 h-3" />
        )}
      </div>
      {toggleDropdown && (
        <div className={cx(`absolute right-0 flex flex-col items-start justify-center w-full gap-2 p-5
      bg-white border rounded-2xl mt-4 top-full min-w-[210px] text-sm font-semibold transition-opacity 
         duration-1000 ease-in-out transform`, toggleDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95 -translate-y-1')}>
          <div>
            <Link
              href="/profile"
              className="flex items-center w-full gap-2 px-4 py-2 border-b border-grayLight"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <ProfileIcon className="w-5 h-5" />
              My Profile
            </Link>
            <Link
              href="/connect-specialist"
              className="flex items-center w-full gap-2 px-4 py-2 border-b border-grayLight"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <SpecialistIcon className="inline-block w-8 h-8" />
              <span>Connect to a specialist</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center w-full gap-2 px-4 py-2 border-b border-grayLight md:hidden"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <AboutIcon className="w-6 h-6" />
              About Us
            </Link>
            <Link
              href="/contact"
              className="flex items-center w-full gap-2 px-4 py-2 border-b border-grayLight md:hidden"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <ContactIcon className="w-5 h-5" />
              Contact Us
            </Link>
            <button
              onClick={() => {
                setToggleDropdown(false);
                logout();
              }}
              type="button"
              className="flex items-center w-full gap-2 px-4 py-2 border-b border-grayLight"
            >
              <LogoutIcon className="w-5 h-5" />
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuBtn;
