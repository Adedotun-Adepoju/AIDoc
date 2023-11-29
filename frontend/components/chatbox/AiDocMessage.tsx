import React, { useState, useEffect, useRef } from "react";
import { cx } from "@/utils";
import { AiDocLogo } from "../icons";

interface AiDocMessageProps {
  content: string;
  speed?: number;
  setDivHeight: Function;
}

const AiDocMessage: React.FC<AiDocMessageProps> = ({
  content,
  speed = 20,
  setDivHeight,
}) => {
  const [typedContent, setTypedContent] = useState<string>("");

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Update the state with the new height
        setDivHeight(entry.contentRect.height);
      }
    });

    // Attach the ResizeObserver to the div
    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    // Cleanup function to disconnect the ResizeObserver on component unmount
    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setTypedContent(content.substring(0, currentIndex));
      currentIndex++;
      //

      if (currentIndex > content.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [content, speed]);

  return (
    <div className={cx("flex items-start w-full py-2")} ref={divRef}>
      <div className="py-3 ">
        <AiDocLogo
          className={cx(
            "w-12 h-12 mr-2 rounded-full border border-blueDark-200"
          )}
        />
      </div>
      <div className="flex flex-col p-3 rounded-lg">
        <span className="text-base font-semibold text-blueDark-200">AiDoc</span>
        <span
          className={cx(
            "text-black text-base leading-tight font-medium",
            "whitespace-pre-wrap"
          )}
        >
          {typedContent}
        </span>
      </div>
    </div>
  );
};

export default AiDocMessage;
