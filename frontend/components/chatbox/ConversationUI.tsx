"use client"

import React, { useEffect, useRef, useState } from 'react'
import AiDocMessage from './AiDocMessage';
import UserMessage from './UserMessage';
import { AiDocLogo, TypingLoadingIcon } from '../icons';
import { cx } from '@/utils';
import { ConversationState } from '@/app/(authenticated)/(chatbox)/chatbox/page';

const ConversationUI = ({conversation, user_data }: {conversation: ConversationState, user_data: any}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    if (conversation.chatMessages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [conversation.chatMessages.length, divHeight]);

  // useEffect(() => {
  //   console.log(conversation);
  //   console.log(conversation.chatMessages);
  // }, [conversation.id]);
  return (
    <div className="flex-1 px-5 overflow-y-auto border_b_except_last_child">
            <AiDocMessage
              setDivHeight={setDivHeight}
              content={`Hello ${user_data?.first_name}, what symptoms are you having today?`}
              typing={true}
            />
            {conversation.chatMessages.slice(1).map((message, index) => {
              return message.role === "assistant" ? (
                <AiDocMessage
                  key={index}
                  content={message.content}
                  setDivHeight={setDivHeight}
                  typing={conversation.typing}
                />
              ) : (
                <UserMessage
                  key={index}
                  content={message.content}
                  user_name={user_data?.first_name}
                />
              );
            })}
            {conversation.chatMessages[conversation.chatMessages.length - 1]
              .role === "user" && conversation.typing ? (
              <div className={cx("flex items-start w-full py-2")}>
                <div className="py-3 ">
                  <AiDocLogo
                    className={cx(
                      "w-8 h-8 mr-2 rounded-full border border-blueDark-200"
                    )}
                  />
                </div>
                <div className="flex flex-col p-3 rounded-lg">
                  <span className="text-base font-semibold text-blueDark-200">
                    AiDoc
                  </span>
                  <span
                    className={cx(
                      "text-black text-base leading-tight font-medium",
                      "whitespace-pre-wrap"
                    )}
                  >
                    <TypingLoadingIcon className="w-5 h-5 mr-2" />
                  </span>
                </div>
              </div>
            ) : null}
            <div ref={ref} />
          </div>

  )
}

export default ConversationUI
