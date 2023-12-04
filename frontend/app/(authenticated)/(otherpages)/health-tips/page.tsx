"use client"
import BackBtn from "@/components/elements/BackBtn";
import ChatWithDocBotBtn from "@/components/elements/ChatWithDocBotBtn";
import ConnectDocBtn from "@/components/elements/ConnectDocBtn";
import { BloodIcon, DnaIcon, WeightIcon } from "@/components/icons";
import { bearerToken, checkLoggedIn, healthTips } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HealthTipsPage = () => {
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
    <main className="relative px-5 py-16 mx-auto max-w-7xl md:px-10">
      <BackBtn />
      <section className="max-w-5xl gap-8 mx-auto mt-8 ">
        <h2 className="col-span-12 mb-12 text-2xl font-semibold capitalize">
          Common Health tips
        </h2>
        <div className="flex flex-col w-full gap-4 overflow-x-hidden lg:flex-row">
          <div className="flex flex-col justify-end flex-1 col-span-9 gap-3 px-5 py-10 mx-auto rounded-lg md:px-8 bg-blueDark-100 lg:max-w-3xl">
            {healthTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white flex flex-col xs:grid gap-4 grid-cols-12 p-4 items-center justify-start border rounded-xl border-blueLight md:min-w-[500px]"
              >
                <div className="w-full h-full col-span-4 overflow-hidden md:col-span-3 rounded-xl">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    className="object-cover object-center w-full transition-all duration-200 ease-in-out h- aspect-square hover:scale-105"
                  />
                </div>
                <div className="col-span-8 md:col-span-9">
                  <h3 className="mb-2 text-xl font-semibold capitalize">
                    {tip.title}
                  </h3>
                  <p className="text-base text-gray-400">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* STATUS  */}
          <div className="sticky top-0 w-full lg:w-1/3">
            <div className="grid grid-cols-2 gap-2 px-8 py-10 rounded-lg lg:grid-cols-1 lg:gap-2 sm:gap-4 bg-blueDark-100">
              <div className="col-span-1 p-4 bg-white rounded-lg">
                <p className="mb-3 font-semibold text-black">Weight (KG)</p>
                <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-blueLight">
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
                <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-red">
                {user_data?.patient?.blood_group ? (
                    user_data?.patient?.blood_group
                  ) : (
                    <span className="text-grayLight">--</span>
                  )}
                  <BloodIcon className="h-12" />
                </span>
              </div>
              <div className="gradient_border lg:hidden">
              <div className="flex flex-col justify-around h-full col-span-1 p-4 rounded-lg bg-blueDark-100">
                <p className="mb-3 text-base font-semibold text-white capitalize sm:text-lg">
                  Last Chat with AI-DOC
                </p>
                <span className="flex items-center justify-between text-lg font-bold text-white sm:text-3xl lg:text-xl xl:text-3xl">
                  <span className="text-grayLight">--</span>
                </span>
              </div>
            </div>
            </div>
            <div className="flex gap-4 mt-8 font-bold text-white lg:flex-col">
              <ChatWithDocBotBtn classNames="sm:w-full w-full" />
              <ConnectDocBtn classNames="sm:w-full w-full py-4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HealthTipsPage;
