
import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PersonaType } from "@/types/chat";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  persona?: {
    type: PersonaType;
    oneLiner: string;
  };
}

const INITIAL_QUESTIONS = [
  "How are you feeling today?",
  "What's contributing to your current state of mind?",
  "Have your work responsibilities been affecting your mood?",
  "How has your energy level been lately?",
];

const PERSONAS = {
  focused: {
    type: 'focused' as PersonaType,
    oneLiner: "Feeling sharp and ready to tackle any challenge today."
  },
  confused: {
    type: 'confused' as PersonaType,
    oneLiner: "Trying to find my way through the fog of tasks and thoughts."
  },
  low: {
    type: 'low' as PersonaType,
    oneLiner: "Carrying a bit of a cloud today, hoping for some sunshine soon."
  },
  stressed: {
    type: 'stressed' as PersonaType,
    oneLiner: "Under pressure but holding on, looking for ways to bounce back."
  }
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      setMessages([{
        id: Date.now().toString(),
        content: INITIAL_QUESTIONS[0],
        isUser: false
      }]);
    }, 1000);
  }, []);

  const determinePersona = (input: string): typeof PERSONAS[keyof typeof PERSONAS] => {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes('good') || lowercaseInput.includes('great') || lowercaseInput.includes('productive')) {
      return PERSONAS.focused;
    }
    if (lowercaseInput.includes('confused') || lowercaseInput.includes('overwhelmed') || lowercaseInput.includes('uncertain')) {
      return PERSONAS.confused;
    }
    if (lowercaseInput.includes('sad') || lowercaseInput.includes('down') || lowercaseInput.includes('tired')) {
      return PERSONAS.low;
    }
    return PERSONAS.stressed;
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessageId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMessageId, content: input, isUser: true }]);
    setInput("");

    if (currentQuestionIndex < INITIAL_QUESTIONS.length - 1) {
      setIsProcessing(true);
      setTimeout(() => {
        const persona = determinePersona(input);
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            content: INITIAL_QUESTIONS[currentQuestionIndex + 1],
            isUser: false,
            persona
          }
        ]);
        setCurrentQuestionIndex(prev => prev + 1);
        setIsProcessing(false);
      }, 1500);
    } else if (currentQuestionIndex === INITIAL_QUESTIONS.length - 1) {
      setIsProcessing(true);
      setTimeout(() => {
        const persona = determinePersona(input);
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            content: "Thank you for sharing. I'm processing your responses to better understand how I can support you...",
            isUser: false,
            persona
          }
        ]);
        setIsProcessing(false);
      }, 1500);
    }
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
              persona={message.persona}
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
            placeholder={isProcessing ? "Processing..." : "Type your message..."}
            disabled={isProcessing}
            className="flex-1 mr-2 rounded-full"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={isProcessing}
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
