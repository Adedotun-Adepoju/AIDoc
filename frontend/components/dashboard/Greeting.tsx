"use client";

import { useEffect, useState } from "react";
import { BotIcon, NightIcon, SunIcon, SunriseIcon } from "../icons";
import ChatWithDocBotBtn from "../elements/ChatWithDocBotBtn";
import ConnectDocBtn from "../elements/ConnectDocBtn";

const Greeting = ({
  user
}: {
  user: any
}) => {
  const [greeting, setGreeting] = useState("");

const Greeting = ({ user_data }:{ user_data: any }) => {
  const [greeting, setGreeting] = useState("");
  
  console.log(`User data from greeting: ${user_data}`);
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

        <span>{greeting ? greeting : "Hello!"}, {user.first_name}</span>
        <span>{greeting === "Good morning" ? <SunriseIcon className="w-10 h-10" /> : greeting === "Good afternoon" ? <SunIcon className="w-10 h-10" /> : <NightIcon className="w-10 h-10" />}</span>
      </h2>
      <h2>How are you feeling today?</h2>
      <p className="max-w-xl mb-6 text-base font-medium">
        Your well-being is our top priority! To ensure accurate and personalized
        guidance, please share all relevant details about your health with
        AI-DOC. Don't hesitate to provide comprehensive information.
      </p>
      <div className="flex gap-4 font-bold">
        <ChatWithDocBotBtn />
        <ConnectDocBtn />
      </div>
    </div>
  );
}

export default Greeting;
