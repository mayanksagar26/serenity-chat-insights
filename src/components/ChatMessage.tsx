
import React from "react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div
      className={`flex w-full mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-primary text-white rounded-tr-none"
            : "bg-muted text-foreground rounded-tl-none"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
