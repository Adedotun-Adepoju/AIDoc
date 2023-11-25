"use client";

import { useEffect, useState } from "react";
import { BotIcon, SunIcon } from "../icons";

const Greeting = ({ ...props }) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 0 && currentHour < 12) {
        setGreeting("Good morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good evening");
      }
    };

    getCurrentGreeting();

    // Update the greeting every minute
    const intervalId = setInterval(getCurrentGreeting, 60000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col justify-around w-full p-5 py-16 text-white sm:px-8 bg-blueDark-200 lg:w-3/5 rounded-xl">
      <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold">
        <span>{greeting ? greeting : "Hello!"}, {props.user.name}</span>
        <span>{greeting === "Good morning" ? <SunIcon className="w-10 h-10" /> : greeting === "Good morning" ? <SunIcon className="w-10 h-10" /> : <SunIcon className="w-10 h-10" />}</span>
      </h2>
      <h2 className="mb-6 text-3xl font-bold xs:text-4xl">How are you feeling today?</h2>
      <p className="max-w-xl mb-6 text-base font-medium">
        Your well-being is our top priority! To ensure accurate and personalized
        guidance, please share all relevant details about your health with
        AI-DOC. Don't hesitate to provide comprehensive information.
      </p>
      <div className="flex gap-4 font-bold">
        <button className="flex items-center justify-center w-1/2 gap-2 px-2 py-4 text-sm uppercase rounded-lg sm:gap-4 sm:px-6 sm:text-xl sm:w-3/5 bg-blueLight sm:whitespace-nowrap">
          <BotIcon className="h-10"/>
          <span>chat with ai-doc</span>
        </button>
        <button className="flex items-center justify-center w-1/2 px-6 text-sm rounded-lg sm:text-base sm:w-2/5 bg-green">
          <span className="inline-block text-left">Connect with a Health Practitioner</span>
        </button>
      </div>
    </div>
  );
};

export default Greeting;
