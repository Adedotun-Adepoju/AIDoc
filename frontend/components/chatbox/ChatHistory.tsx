"use client";

import { useEffect, useState } from "react";
import {
  AiLogoWhiteIcon,
  BackIcon,
  DashboardIcon,
  LogoutIcon,
  ProfileIcon,
  SpecialistIcon,
} from "../icons";
import { TOKEN_KEY, cx, formatDate, getConversations, getPrompts, systemPrompt } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface ChatHistoryProps {
  currentConvoId: any;
  user_id: string;
  token: string;
  setConversation: Function;
  handleToggle: Function;
  toggled: boolean;
}

export type ConversationHistoryType = {
  id: string;
  title: string;
  cycles_number: number;
  user_id: string;
  created_at: string;
  updated_at: string;
};


const ChatHistory: React.FC<ChatHistoryProps>  = ({currentConvoId, user_id, token, setConversation, toggled, handleToggle}) => {
  const [history, setHistory] = useState<ConversationHistoryType[]>([]);

  const initialConvoStatement = [{ role: "system", content: systemPrompt }];
  const initialConvoState = {
    id: "",
    title: "",
    created_at: "",
    user_id: "",
    chatMessages: initialConvoStatement,
    typing: true,
  };

  useEffect(() => {
    const getHistory = async () => {
      const history = await getConversations({token, user_id});
      if (history) {
        setHistory(history.data);
      }
    };
    getHistory();
  }, [currentConvoId]);

  const handleHistoryClick = async (conversation_id: string) => {
    const data = await getPrompts({token, conversation_id});
    const prompts = (data.data as { role: string; content: string; created_at: string }[])
  .map(({ role, content, created_at }) => ({ role, content, created_at }))
  .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
  .map(({ role, content }) => ({ role, content }));


    const selectedConversation = history.find((conversation) => conversation.id === conversation_id);
    const selectedConversationWithPrompts = {
      id: selectedConversation?.id,
      title: selectedConversation?.title,
      created_at: selectedConversation?.created_at,
      user_id: selectedConversation?.user_id,
      chatMessages: [{
        role: "system",
        content: systemPrompt,
      }, ...prompts],
      typing: false,
    }
    setConversation(selectedConversationWithPrompts);
  }

  const router = useRouter();

  const logout = () => {
    Cookies.remove(TOKEN_KEY);
    router.push("/login");
  };

  return (
    <section className="flex flex-col justify-between h-full p-5 py-8 mx-auto blueLight">
      <AiLogoWhiteIcon className="h-16 mx-auto w-30" />
      <aside className="flex gap-3 text-white xl:hidden">
        <Link
          href="/"
          className="flex justify-center w-full px-2 py-2 mt-4 transition-all duration-200 ease-in-out border rounded-lg cursor-pointer bg-blueLight/20 border-grayLight hover:bg-blueLight/10 hover:scale-105"
        >
          <DashboardIcon className="w-5 h-5" fill="#fff" />
        </Link>
        <Link
          href="/profile"
          className="flex justify-center w-full px-2 py-2 mt-4 transition-all duration-200 ease-in-out border rounded-lg cursor-pointer bg-blueLight/20 border-grayLight hover:bg-blueLight/10 hover:scale-105"
        >
          <ProfileIcon className="w-5 h-5" fill="#fff" />
        </Link>
        <Link
          href="/connect-specialist"
          className="flex justify-center w-full px-2 py-2 mt-4 transition-all duration-200 ease-in-out border rounded-lg cursor-pointer bg-blueLight/20 border-grayLight hover:bg-blueLight/10 hover:scale-105"
        >
          <SpecialistIcon className="w-5 h-5" fill="#fff" />
        </Link>
      </aside>
      <div>
        <div className="flex  text-white justify-between py-4 mb-6 items-center border-b border-blueLight/50">
        <h3 className="font-semibold">
          History
        </h3>
        <button
          onClick={() => {setConversation(initialConvoState);  if(toggled)handleToggle()}}
          className='px-2 py-1 text-xs font-semibold uppercase rounded-xl bg-blueLight/10 hover:bg-blueLight/20 transition-all duration-200 ease-in-out hover:scale-105'
          type="button">
            New
          </button>
        </div>
        <div>
          {history.length > 0 ? (
            history.slice(0, 7).map((query, index) => (
              <div onClick={() => {handleHistoryClick(query.id); if(toggled)handleToggle()}}
                key={index}
                className={cx(query.id === currentConvoId ? 'bg-black/10 border-white/50' : 'bg-black/30 border-transparent',"border flex items-start w-full flex-col pr-5 cursor-pointer justify-between rounded-lg py-2 px-4 relative mb-2 max-h-[400px] overflow-hidden overflow-y-auto  hover:bg-black/20 transition-all duration-200 ease-in-out hover:scale-105")}
              >
                <p className="w-11/12 mb-1 overflow-hidden text-xs font-semibold text-white capitalize">
                  {query.title.length > 50 ? query.title.substring(0, 50) + "..." : query.title}
                </p>
                <p className="text-grayLight uppercase text-[10px]">
                  {formatDate(query.created_at)}
                </p>
                <BackIcon
                  fill="#fff"
                  className="absolute w-3 h-3 text-white transform rotate-180 -translate-y-1/2 right-4 top-1/2"
                />
              </div>
            ))
          ) : (
            <p className="text-sm text-center text-white">No history yet</p>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          logout();
        }}
        type="button"
        className="flex gap-2 px-4 py-2 text-white transition-all duration-200 ease-in-out w-max rounded-xl bg-blueLight/10 hover:bg-blueLight/20 hover:text-red hover:scale-105 "
      >
        <LogoutIcon className="w-6 h-6" />
        Logout
      </button>
    </section>
  );
};

export default ChatHistory;
