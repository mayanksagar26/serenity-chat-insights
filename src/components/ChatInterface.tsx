
import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { getChatbotResponse } from "../data/mockData";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initial greeting when component mounts
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          id: Date.now().toString(),
          content: "How are you feeling today?",
          isUser: false,
        },
      ]);
    }, 1000);
  }, []);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessageId = Date.now().toString();
    setMessages((prev) => [
      ...prev,
      { id: userMessageId, content: input, isUser: true },
    ]);
    setInput("");

    // Simulate AI response with a small delay
    setTimeout(() => {
      const botResponse = getChatbotResponse(input);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          isUser: false,
        },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full relative rounded-xl bg-card">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.isUser}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-3 border-t">
        <div className="flex">
          <Input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 mr-2 rounded-full"
          />
          <Button 
            onClick={handleSendMessage} 
            size="icon" 
            className="rounded-full"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
