import ChatWithDocBotBtn from "@/components/elements/ChatWithDocBotBtn";
import ConnectDocBtn from "@/components/elements/ConnectDocBtn";
import { BackIcon, BloodIcon, DnaIcon, WeightIcon } from "@/components/icons";
import { healthTips } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="px-5 py-16 mx-auto max-w-7xl md:px-10">
      <Link
        href="/"
        className="flex items-center gap-2 text-base font-semibold text-blueDark-200"
      >
        <BackIcon className="w-5 h-5" />
        Back
      </Link>
      <section className="grid max-w-5xl gap-8 grid-cols-12 mx-auto mt-8">
        <h2 className="col-span-12 mb-12 text-2xl font-semibold capitalize">
          Common Health tips
        </h2>
        <div className="flex flex-col justify-end gap-3 col-span-9 px-8 py-10 rounded-lg bg-blueDark-100 max-w-3xl">
          {healthTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white grid gap-4 grid-cols-12 p-4 items-center justify-start border rounded-xl border-blueLight md:min-w-[500px]"
            >
              <div className="h-full col-span-4 md:col-span-3 overflow-hidden rounded-xl">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  className="object-cover object-center w-full h-full transition-all duration-200 ease-in-out aspect-square hover:scale-105"
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
        <div className="col-span-3 sticky top-0">
            <div className="grid grid-cols-1 gap-2 lg:gap-2 sm:gap-4 px-8 py-10 rounded-lg bg-blueDark-100">
              <div className="col-span-1 p-4 bg-white rounded-lg">
                <p className="mb-3 font-semibold text-black">Weight (KG)</p>
                <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-blueLight">
                  59
                  <WeightIcon className="h-8 " />
                </span>
              </div>
              <div className="col-span-1 p-4 bg-white rounded-lg">
                <p className="mb-3 font-semibold text-black">Genotype</p>
                <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-blueDark-200">
                  AA
                  <DnaIcon className="h-12" />
                </span>
              </div>
              <div className="col-span-1 p-4 bg-white rounded-lg">
                <p className="mb-3 font-semibold text-black capitalize">
                  Blood group
                </p>
                <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-red">
                  O+
                  <BloodIcon className="h-12" />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8 font-bold text-white">
              <ChatWithDocBotBtn classNames="sm:w-full w-full" />
              <ConnectDocBtn classNames="sm:w-full w-full py-4" />
            </div>
          </div>
      </section>
    </main>
  );
};

export default page;
