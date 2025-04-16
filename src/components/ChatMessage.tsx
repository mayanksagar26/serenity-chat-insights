
import React from "react";
import PersonaDisplay from "./PersonaDisplay";
import { PersonaType } from "@/types/chat";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  persona?: {
    type: PersonaType;
    oneLiner: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, persona }) => {
  return (
    <div className="space-y-2 mb-4">
      <div
        className={`flex w-full ${
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
      {!isUser && persona && (
        <PersonaDisplay type={persona.type} oneLiner={persona.oneLiner} />
      )}
    </div>
  );
};

export default ChatMessage;
