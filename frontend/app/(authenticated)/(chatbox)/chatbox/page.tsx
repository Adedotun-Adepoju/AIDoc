"use client";

import AiDocMessage from "@/components/chatbox/AiDocMessage";
import ChatHistory from "@/components/chatbox/ChatHistory";
import SideBar from "@/components/chatbox/SideBar";
import UserMessage from "@/components/chatbox/UserMessage";
import { AiDocLogo, SendIcon, TypingLoadingIcon } from "@/components/icons";
import React, { useEffect, useState } from "react";
import { bearerToken, checkLoggedIn, cx, queryGPT, saveConvo, savePrompt } from "@/utils";
import { Twirl as Hamburger } from "hamburger-react";
import { useRouter } from "next/navigation"

export interface ChatMessage {
  role: string;
  content: string;
}

interface ConversationState {
  id: string;
  title: string;
  created_at: string;
  user_id: string;
  chatMessages: ChatMessage[];
}

const systemPrompt =
  "As an AI doctor, your task is to analyze symptoms provided by a user and inquire further to gain a deeper understanding. Ask precisely three follow-up questions, one at a time, to gather additional information without overwhelming the user. Once the diagnosis is made, inquire whether the user prefers suggested treatments or if they would like guidance on visiting the nearest hospital for further assistance.";
const initialConvoStatement = [ { role: "system", content: systemPrompt,}];
const initialConvoState = {
  id: "",
  title: "",
  created_at: "",
  user_id: "",
  chatMessages: [
    {
      role: "system",
      content: systemPrompt,
    },
  ],
};

const ChatBoxPage = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [toggled, setToggled] = useState(false);
  const [conversation, setConversation] =
    useState<ConversationState>(initialConvoState);
  const [user_data, setUser_data] = useState<any>()
  const [token, setToken] = useState<string>('')

  const router = useRouter()

  useEffect(() => {
    const { isLoggedIn, user_data } = checkLoggedIn();

    const bToken = bearerToken();

    if (isLoggedIn ) {
      setUser_data(user_data);
      setToken(`Bearer ${bToken}`);
    } else {
      // User is not logged in, you can redirect to the login page
      router.push('/login');
    }
  }, []);


  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
 
  const chatAiDoc = async () => {
    try {
      const response = await queryGPT(conversation.id !== '' ? conversation.chatMessages : [...initialConvoStatement,{role: 'user', content: userInput}]);
      if (response.choices) {
        const aiDocMessage = response.choices[0].message.content;
        setAiResponse(aiDocMessage);
        setConversation((prevConversation) => {
          if (!prevConversation) {
            return initialConvoState; // Handle the case when conversation is not initialized
          }

          const updatedChatMessages = [
            ...prevConversation.chatMessages,
            {
              role: "assistant",
              content: aiDocMessage,
            },
          ];

          return {
            ...prevConversation,
            chatMessages: updatedChatMessages,
          };
        });
        if(conversation.id) {
          savePrompt({
            token,
            body: {
              content: aiDocMessage,
              conversation_id: conversation.id,
              role: "assistant",
            },
          });
        }
      }
    } catch (error) {
      console.error("Error starting conversation:", error);
    }
  };

  const startConversation = async () => {
    try {
      if (conversation.chatMessages.length === 1) { conversation.chatMessages.push({ role: "user", content: userInput })}
      chatAiDoc();
      const response = await saveConvo({
        token,
        body: { title: userInput, user_id: user_data?.id },
      });
      setConversation((prevConversation) => (
      {
        ...prevConversation,
        id: response.data.id,
        title: response.data.title,
        created_at: response.data.created_at,
        user_id: response.data.user_id,
      }));
    } catch (error) {
      console.error("Error starting conversation:", error);
    }
  };
  const startPrompt = async () => {
    try {
      chatAiDoc();
      savePrompt({
        token,
        body: {
          content: userInput,
          conversation_id: conversation.id,
          role: "user",
        },
      });
      setAiResponse("");
    } catch (error) {
      console.error("Error starting conversation:", error);
    }
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      conversation.id ? startPrompt() : startConversation();
      setConversation((prevConversation) => {
        if (!prevConversation) {
          return initialConvoState; // Handle the case when conversation is not initialized
        }
        
        if (conversation.chatMessages.length > 2) {
        const updatedChatMessages = [
          ...prevConversation.chatMessages,
          {
            role: "user",
            content: userInput,
          },
        ];

        return {
          ...prevConversation,
          chatMessages: updatedChatMessages,
        };} return prevConversation;
      });
      setUserInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleToggle = () => {
    setToggled(!toggled);
    const container = document.getElementById("chatHistoryContainer");
    container?.classList.remove("hidden");
    container?.classList.toggle("translate_x_full");
  };

  return (
    <main className="min-h-screen flex bg-slate-200">
      <section className="flex gap-2 w-full relative !overflow-x-hidden">
        <span className="fixed top-2 text-white right-4 z-30 md:hidden">
          <Hamburger toggled={toggled} toggle={handleToggle} size={28} />
        </span>
        <div
          id="chatHistoryContainer"
          className="w-10/12 md:w-1/3 xl:1/4  bg-blueDark-200 h-screen overflow-y-auto max-w-[350px] transform transition-transform duration-300 ease-in-out  md:static absolute top-0 right-full sm:w-full sm:h-full sm:z-50"
        >
          { user_data?.id && token && <ChatHistory currentConvoId={conversation.id} user_id={user_data.id} token={token} />}
        </div>

        <div className="flex-1  bg-slate-100 h-screen flex flex-col">
          <h2 className="bg-blueDark-200 text-white text-xl font-semibold sm:px-10 py-4 px-5">
            Chat with AI-DOC
          </h2>

          {/* Chat messages */}
          <div className="px-5 flex-1 overflow-y-auto border_b_except_last_child">
            <AiDocMessage
              content={`Hello ${user_data?.first_name}, what symptoms are you having today?`}
            />
            {conversation.chatMessages.slice(1).map((message, index) => {
              return message.role === "assistant" ? (
                <AiDocMessage key={index} content={message.content} />
              ) : (
                <UserMessage key={index} content={message.content} user_name={user_data?.first_name} />
              );
            })}
            {
              conversation.chatMessages[conversation.chatMessages.length - 1].role === "user" ? (
                <div className={cx('flex items-start w-full py-2')}>
                  <div className=' py-3'><AiDocLogo className={cx('w-12 h-12 mr-2 rounded-full border border-blueDark-200')} /></div>
                  <div className='p-3 rounded-lg flex flex-col'>
                    <span className='text-blueDark-200 text-base font-semibold'>AiDoc</span>
                    <span className={cx('text-black text-base leading-tight font-medium', 'whitespace-pre-wrap')}><TypingLoadingIcon className="w-5 h-5 mr-2" />
                    </span>
                  </div>
                </div>
              ) : null
            }
          </div>

          {/* User input area */}
          <div className="bg-blueDark-200 p-4 flex items-center placeholder:px-4">
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-1 border border-gray-300 p-2 rounded-full mr-2"
              value={userInput}
              onChange={handleUserInput}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blueLight text-white p-2 rounded-full"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="w-1/4 bg-white h-screen overflow-y-auto xl:block hidden">
          <SideBar user_name={user_data?.first_name} />
        </div>
      </section>
    </main>
  );
};

export default ChatBoxPage;
