
import React, { useState } from "react";
import ChatInterface from "@/components/ChatInterface";
import SidebarSummary from "@/components/SidebarSummary";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { getGreeting } from "@/data/mockData";

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const greeting = getGreeting();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white py-3 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-2 md:hidden"
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <h1 className="text-xl font-bold text-serenity-dark">
            Serenity
          </h1>
        </div>
        <div className="text-serenity-dark">
          {greeting}, User
        </div>
      </header>

      <div className="flex h-[calc(100vh-57px)]">
        {/* Sidebar - always visible on md+ screens, toggleable on smaller screens */}
        <div
          className={`bg-serenity-background ${
            sidebarOpen ? "w-full md:w-1/3 lg:w-1/4" : "w-0"
          } md:block transition-all duration-300 overflow-hidden ${
            sidebarOpen ? "block" : "hidden"
          }`}
        >
          <div className="p-4 h-full">
            <SidebarSummary />
          </div>
        </div>

        {/* Main chat area */}
        <div
          className={`${
            sidebarOpen ? "md:w-2/3 lg:w-3/4" : "w-full"
          } transition-all duration-300 p-4`}
        >
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default Index;
