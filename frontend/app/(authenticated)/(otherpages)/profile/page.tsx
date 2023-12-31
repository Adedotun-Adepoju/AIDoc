"use client";

import {
  BloodIcon,
  DnaIcon,
  MailIcon,
  PassWordIcon,
  PhoneIcon,
  WeightIcon,
} from "@/components/icons";
import Image from "next/image";
import profileImg from "@/public/images/profile.png";
import ConnectDocBtn from "@/components/elements/ConnectDocBtn";
import ChatWithDocBotBtn from "@/components/elements/ChatWithDocBotBtn";
import Button from "@/components/elements/Button";
import BackBtn from "@/components/elements/BackBtn";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { TOKEN_KEY, checkLoggedIn } from "@/utils";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [user_data, setUser_data] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const { isLoggedIn, user_data } = checkLoggedIn();

    if (isLoggedIn ) {
      setUser_data(user_data);
    } else {
      // User is not logged in, you can redirect to the login page
      router.push('/login');
    }
  }, []);

  return (
    <main className="px-5 mx-auto max-w-7xl md:px-10 relative">
      <BackBtn />
      <section className="max-w-5xl mx-auto mt-8">
        <h2 className="w-full mb-12 text-2xl font-semibold capitalize lg:absolute lg:top-20">
          My profile
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col flex-1 justify-end relative mb-16 md:mb-0">
            <div className="flex lg:flex-row flex-col gap-8 mb-8 lg:mb-16">
              <Image
                src={profileImg}
                priority
                alt="profile"
                className="w-full md:w-72 md:h-72 border rounded-lg"
              />
              <div className="flex flex-col justify-end">
                {user_data ? (
                  <h2 className="mb-6 text-3xl font-bold xs:text-4xl">
                    {`${user_data?.first_name} ${user_data?.last_name}`}
                  </h2>
                ) : (
                  <div className="w-2/3 h-8 mb-8 bg-grayLight/50 animate-pulse"></div>
                )}
                <p className="flex items-center gap-2 mb-4">
                  <MailIcon className="w-5 h-5" />
                  {user_data?.email ? user_data.email : <span className="w-2/3 h-full bg-grayLight/50 animate-pulse"></span>}
                </p>
                <p className="flex items-center gap-2 mb-4">
                  <PhoneIcon className="w-5 h-5" />
                  {user_data?.phone_number ? (
                    user_data?.phone_number
                  ) : (
                    <span className="text-grayLight">Not available</span>
                  )}
                </p>
                <div className="flex gap-4 my-4 text-sm text-white">
                  <button className="flex items-center gap-2 px-4 py-2 capitalize bg-blueLight">
                    <PassWordIcon className="w-5 h-5" />
                    Edit profile
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 capitalize bg-blueDark-200 items">
                    <PassWordIcon className="w-5 h-5" />
                    Change Password
                  </button>
                </div>
              </div>
            </div>
            <div className="flex md:max-w-xl gap-2 md:gap-4 font-bold text-white md:mr-4 w-full">
              <ChatWithDocBotBtn classNames="w-7/12 lg:w-3/5 xs:text-sm text-xs" />
              <ConnectDocBtn classNames="w-5/12 lg:w-2/5 xs:text-sm text-xs" />
            </div>
          </div>

          {/* STATUS  */}
          <div className="md:w-4/12 w-full">
            <div className="md:flex md:flex-col grid md:grid-cols-1 grid-cols-2 md:grid-rows-3 gap-2 lg:gap-2 sm:gap-4 bg-blueDark-100 min-w-[208px] px-8 py-6 rounded-lg ">
              <div className="col-span-1 p-4 bg-white rounded-lg">
                <p className="mb-3 font-semibold text-black">Weight (KG)</p>
                <span className="flex items-center justify-between text-5xl font-extrabold uppercase sm:text-6xl text-blueLight">
                  {user_data?.patient?.weight ? (
                    user_data?.patient?.weight
                  ) : (
                    <span className="text-grayLight">--</span>
                  )}
                  <WeightIcon className="h-8 " />
                </span>
              </div>
              <div className="col-span-1 p-4 bg-white rounded-lg">
                <p className="mb-3 font-semibold text-black">Genotype</p>
                <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-blueDark-200">
                  {user_data?.patient?.genotype ? (
                    user_data?.patient?.genotype
                  ) : (
                    <span className="text-grayLight">--</span>
                  )}
                  <DnaIcon className="h-12" />
                </span>
              </div>
              <div className="col-span-1 p-4 bg-white rounded-lg">
                <p className="mb-3 font-semibold text-black capitalize">
                  Blood group
                </p>
                <span className="flex items-center justify-between text-5xl uppercase font-extrabold sm:text-6xl text-red">
                  {user_data?.patient?.blood_group ? (
                    user_data?.patient?.blood_group
                  ) : (
                    <span className="text-grayLight">--</span>
                  )}
                  <BloodIcon className="h-12" />
                </span>
              </div>
              <div className="gradient_border md:hidden">
                <div className="flex flex-col justify-around h-full col-span-1 p-4 rounded-lg bg-blueDark-100">
                  <p className="mb-3 text-base font-semibold text-white capitalize sm:text-lg">
                    Last Chat with AI-DOC
                  </p>
                  <span className="flex items-center justify-between text-lg font-bold text-white sm:text-3xl lg:text-xl xl:text-3xl">
                  <span className="text-grayLight text-5xl">--</span>
                  </span>
                </div>
              </div>
              <div className="flex gap-2 justify-between mt-6 col-span-2 order-first md:order-none items-center">
                <h3 className="text-lg xs:text-xl text-white font-semibold capitalize md:hidden">
                  Your current status
                </h3>
                <Button
                  href="/profile/update"
                  title="Update Data"
                  classNames="bg-blueLight text-white sm:px-2 sm:py-2 whitespace-nowrap md:w-10/12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
