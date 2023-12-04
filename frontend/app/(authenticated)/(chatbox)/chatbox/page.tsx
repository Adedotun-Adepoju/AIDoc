"use client";

import ChatHistory from "@/components/chatbox/ChatHistory";
import SideBar from "@/components/chatbox/SideBar";
import { SendIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import {
  bearerToken,
  checkLoggedIn,
  initialConvoState,
  initialConvoStatement,
  queryGPT,
  saveConvo,
  savePrompt,
} from "@/utils";
import { Twirl as Hamburger } from "hamburger-react";
import { useRouter } from "next/navigation";
import ConversationUI from "@/components/chatbox/ConversationUI";

export interface ChatMessage {
  role: string;
  content: string;
}

export interface ConversationState {
  id: string;
  title: string;
  created_at: string;
  user_id: string;
  chatMessages: ChatMessage[];
  typing?: boolean;
}


const ChatBoxPage = () => {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [toggled, setToggled] = useState(false);
  const [conversation, setConversation] =
    useState<ConversationState>(initialConvoState);
  const [user_data, setUser_data] = useState<any>();
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const { isLoggedIn, user_data } = checkLoggedIn();

    const bToken = bearerToken();

    if (isLoggedIn) {
      setUser_data(user_data);
      setToken(`Bearer ${bToken}`);
    } else {
      // User is not logged in, you can redirect to the login page
      router.push("/login");
    }
    return () => {
      setConversation(initialConvoState)
    };
  }, []);


  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const chatAiDoc = async (conversation_id: string='') => {
    try {
      const response = await queryGPT(
        conversation.id !== ""
          ? [...conversation.chatMessages, { role: "user", content: userInput }]
          : [...initialConvoStatement, { role: "user", content: userInput }]
      );
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

      if (conversation.id || conversation_id ) {
        savePrompt({
          token,
          body: {
            content: aiDocMessage,
            conversation_id: conversation.id || conversation_id,
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
      if (conversation.chatMessages.length === 1) {
        conversation.chatMessages.push({ role: "user", content: userInput });
      }
      const response = await saveConvo({
        token,
        body: { title: userInput, user_id: user_data?.id },
      });
      setConversation((prevConversation) => ({
        ...prevConversation,
        id: response.data.id,
        title: response.data.title,
        created_at: response.data.created_at,
        user_id: response.data.user_id,
      }));
      chatAiDoc(response.data.id);
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
          setUserInput("");
          return {
            ...prevConversation,
            chatMessages: updatedChatMessages,
            typing: true,
          };
        }
        return prevConversation;
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
    <main className="flex heightd bg-slate-200 fixed w-full top-0 bottom-0">
      <section className="flex gap-2 heightd w-full relative !overflow-x-hidden">
        <span className="fixed z-30 text-white top-2 right-4 md:hidden">
          <Hamburger toggled={toggled} toggle={handleToggle} size={28} />
        </span>
        <div id="chatHistoryContainer"
          className="w-10/12 md:w-1/3 xl:1/4  bg-blueDark-200 heightd overflow-y-auto max-w-[350px] transform transition-transform duration-300 ease-in-out  md:static absolute top-0 right-full sm:w-full sm:h-full sm:z-50"
        >
          {user_data?.id && token && (
            <ChatHistory
              currentConvoId={conversation.id}
              user_id={user_data.id}
              token={token}
              setConversation={setConversation}
              toggled={toggled}
              handleToggle={handleToggle}
            />
          )}
        </div>

        <div className="flex flex-col flex-1 bg-slate-100 heightd">
          <h2 className="px-5 py-4 text-xl font-semibold text-white bg-blueDark-200 sm:px-10">
            Chat with AI-DOC
          </h2>

          {/* Chat messages */}
          <ConversationUI conversation={conversation} user_data={user_data} />

          {/* User input area */}
          <div className="flex items-center p-4 mt-auto bg-blueDark-200 placeholder:px-4">
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-1 p-2 mr-2 border border-gray-300 rounded-full"
              value={userInput}
              onChange={handleUserInput}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSendMessage}
              className="p-2 text-white rounded-full bg-blueLight"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="hidden w-1/4 heightd overflow-y-auto bg-white xl:block">
          <SideBar user_name={user_data?.first_name} />
        </div>
      </section>
    </main>
  );
};

export default ChatBoxPage;
