"use client";

import React, { useEffect, useState } from "react";
import {
  AiLogoWhiteIcon,
  BackIcon,
  DashboardIcon,
  LogoutIcon,
  ProfileIcon,
  SpecialistIcon,
} from "../icons";
import { TOKEN_KEY, formatDate, getConversations } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface ChatHistoryProps {
  currentConvoId: any;
  user_id: string;
  token: string;
}

export type ConversationHistoryType = {
  id: string;
  title: string;
  cycles_number: number;
  user_id: string;
  created_at: string;
  updated_at: string;
};
// const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYmU4ODQ2NC0yOTFiLTRmMzktYmJmMi0yNzgzNDZmYjM3YTgiLCJ1c2VybmFtZSI6ImQuZS5hZGVwb2p1QGdtYWlsLmNvbSIsImlhdCI6MTcwMDkzMDIyMywiZXhwIjoxNzAxMTg5NDIzfQ.nrJsCxnzZ95x_9xpn0ILMWxG9S03yDQFHjSfEuyW2eM`;

// const user_id = '3914ecba-4857-441d-a0f8-7f00f699bc90'

const ChatHistory: React.FC<ChatHistoryProps>  = ({currentConvoId, user_id, token}) => {
  const [history, setHistory] = useState<ConversationHistoryType[]>([]);

  useEffect(() => {
    const getHistory = async () => {
      const history = await getConversations({token, user_id});
      if (history) {
        setHistory(history.data);
      }
    };
    getHistory();
  }, [currentConvoId]);

  const router = useRouter();

  const logout = () => {
    Cookies.remove(TOKEN_KEY);
    router.push("/login");
  };

  return (
    <section className="blueLight mx-auto flex flex-col justify-between h-full py-8 p-5">
      <AiLogoWhiteIcon className="w-30 h-16 mx-auto" />
      <aside className="text-white xl:hidden flex gap-3">
        <Link
          href="/"
          className="flex justify-center py-2 px-2 border bg-blueLight/20 border-grayLight rounded-lg mt-4 w-full hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer"
        >
          <DashboardIcon className="w-5 h-5" fill="#fff" />
        </Link>
        <Link
          href="/profile"
          className="flex justify-center py-2 px-2 border bg-blueLight/20 border-grayLight rounded-lg mt-4 w-full hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer"
        >
          <ProfileIcon className="w-5 h-5" fill="#fff" />
        </Link>
        <Link
          href="/connect-specialist"
          className="flex justify-center py-2 px-2 border bg-blueLight/20 border-grayLight rounded-lg mt-4 w-full  hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer"
        >
          <SpecialistIcon className="w-5 h-5" fill="#fff" />
        </Link>
      </aside>
      <div>
        <h3 className="text-white font-semibold py-4 mb-6 border-b border-blueLight/50">
          History
        </h3>
        <div>
          {history.length > 0 ? (
            history.slice(0, 7).map((query, index) => (
              <div
                key={index}
                className="flex items-start flex-col justify-between bg-black/30 rounded-lg py-2 px-4 relative mb-2 max-h-[400px] overflow-hidden overflow-y-auto  hover:bg-black/20 transition-all duration-200 ease-in-out hover:scale-105"
              >
                <p className="text-white font-semibold capitalize text-xs">
                  {query.title}
                </p>
                <p className="text-grayLight uppercase text-[10px]">
                  {formatDate(query.created_at)}
                </p>
                <BackIcon
                  fill="#fff"
                  className="w-3 h-3 text-white transform rotate-180 absolute right-8 top-1/2 -translate-y-1/2"
                />
              </div>
            ))
          ) : (
            <p className="text-white text-sm text-center">No history yet</p>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          logout();
        }}
        type="button"
        className="w-max rounded-xl flex gap-2 px-4 py-2 text-white bg-blueLight/10 hover:bg-blueLight/20 hover:text-red transition-all duration-200 ease-in-out hover:scale-105 "
      >
        <LogoutIcon className="w-6 h-6" />
        Logout
      </button>
    </section>
  );
};

export default ChatHistory;
