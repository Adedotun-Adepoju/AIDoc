"use client";

import AiDocMessage from "@/components/chatbox/AiDocMessage";
import ChatHistory from "@/components/chatbox/ChatHistory";
import SideBar from "@/components/chatbox/SideBar";
import UserMessage from "@/components/chatbox/UserMessage";
import { SendIcon } from "@/components/icons";
import React, { useState } from "react";
import { saveConvo, savePrompt } from "@/utils";
import { Twirl as Hamburger } from 'hamburger-react'

interface ChatMessage {
  role: string;
  content: string;
  conversationId?: string;
}

interface ConversationState {
  id: string;
  title: string;
  created_at: string;
  chatMessages: ChatMessage[];
}

const initialConvoState = {
  id: "0df18c79-470c-412a-a8d7-af571ba7d049",
  title: "Conversation",
  created_at: "2023-11-26T10:32:29.075Z",
  chatMessages: [],
};

const backendUrl =
  "https://ca36-2c0f-2a80-c6-6b10-25c4-dada-e9fa-5498.ngrok-free.app";
const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYmU4ODQ2NC0yOTFiLTRmMzktYmJmMi0yNzgzNDZmYjM3YTgiLCJ1c2VybmFtZSI6ImQuZS5hZGVwb2p1QGdtYWlsLmNvbSIsImlhdCI6MTcwMDkzMDIyMywiZXhwIjoxNzAxMTg5NDIzfQ.nrJsCxnzZ95x_9xpn0ILMWxG9S03yDQFHjSfEuyW2eM`;

const ChatBoxPage = () => {
  const [userInput, setUserInput] = useState("");
  const [toggled, setToggled] = useState(false);
  const [conversation, setConversation] = useState<ConversationState>(initialConvoState);
  const [user, setUser] = useState({ name: "Christian", id: '1be88464-291b-4f39-bbf2-278346fb37a8' });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const startConversation = async () => {
    try {
      const response = await saveConvo({
        token,
        body: { title: userInput, user_id: user.id },
      });
      console.log('startConversation',response.data.id);
      setConversation({ id: response.data.id, title: response.data.title, created_at: response.data.created_at, chatMessages: []});
    } catch (error) {
      console.error("Error starting conversation:", error);
    }
  };
  const startPrompt = async () => {
    try {
      const response = await savePrompt({
        token,
        body: {
          content: userInput,
          conversation_id: conversation.id,
          role: "user",
        },
      });
      console.log(response.data);
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

        const updatedChatMessages = [
          ...prevConversation.chatMessages,
          {
            role: "user",
            content: userInput,
            conversationId: prevConversation.id,
          },
        ];

        return {
          ...prevConversation,
          chatMessages: updatedChatMessages,
        };
      });
      setUserInput("");
      console.log(conversation.chatMessages);
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
    const container = document.getElementById('chatHistoryContainer');
    container?.classList.remove('hidden');
    container?.classList.toggle('translate_x_full');
  }

  return (
    <main className="min-h-screen flex bg-slate-200">
      <section className="flex gap-2 w-full relative !overflow-x-hidden">
        <span className="fixed top-2 text-white right-4 z-30 md:hidden">
          <Hamburger toggled={toggled} toggle={handleToggle} size={28} />
        </span>
        <div id='chatHistoryContainer' className="w-10/12 xs:w-1/3 xl:1/4  bg-blueDark-200 h-screen overflow-y-auto max-w-[350px] transform transition-transform duration-300 ease-in-out  md:static absolute top-0 right-full sm:w-full sm:h-full sm:z-50">
          <ChatHistory />
        </div>

        <div className="flex-1  bg-slate-100 h-screen flex flex-col">
          <h2 className="bg-blueDark-200 text-white text-xl font-semibold sm:px-10 py-4 px-5">
            Chat with AI-DOC
          </h2>

          {/* Chat messages */}
          <div className="px-5 flex-1 overflow-y-auto border_b_except_last_child">
            <AiDocMessage
              content={`Hello ${user.name}, what symptoms are you having today?`}
            />
            {conversation.chatMessages.map((message, index) => {
              return message.role === "assistant" ? (
                <AiDocMessage key={index} content={message.content} />
              ) : (
                <UserMessage key={index} content={message.content} />
              );
            })}
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
          <SideBar />
        </div>
      </section>
    </main>
  );
};

export default ChatBoxPage;
