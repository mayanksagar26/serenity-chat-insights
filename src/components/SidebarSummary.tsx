
import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Calendar,
  MessageCircle,
  CheckSquare,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import {
  getSentimentDistribution,
  getTotalCalendarEvents,
  getTotalJiraTickets,
  getTotalMessages,
  calculateBurnoutScore,
} from "../data/mockData";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const SidebarSummary: React.FC = () => {
  const sentiments = getSentimentDistribution();
  const totalMessages = getTotalMessages();
  const totalEvents = getTotalCalendarEvents();
  const totalTickets = getTotalJiraTickets();
  const burnoutScore = calculateBurnoutScore();

  const getBurnoutLevel = (score: number) => {
    if (score < 40) return { text: "Low", color: "text-green-500" };
    if (score < 70) return { text: "Moderate", color: "text-amber-500" };
    return { text: "High", color: "text-red-500" };
  };

  const burnoutLevel = getBurnoutLevel(burnoutScore);

  return (
    <div className="h-full p-5 rounded-xl bg-card flex flex-col">
      <h2 className="text-xl font-semibold mb-5">Your 30-Day Summary</h2>

      <div className="space-y-5 flex-1">
        {/* Workload Section */}
        <div>
          <h3 className="text-lg font-medium mb-3 flex items-center">
            <BarChart className="w-5 h-5 mr-2 text-serenity-teal" />
            Workload Overview
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2 text-serenity-lavender" />
                <span>Messages</span>
              </div>
              <span className="font-semibold">{totalMessages}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-serenity-blue" />
                <span>Meetings</span>
              </div>
              <span className="font-semibold">{totalEvents}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <CheckSquare className="w-4 h-4 mr-2 text-serenity-peach" />
                <span>Tasks</span>
              </div>
              <span className="font-semibold">{totalTickets}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Mood Analysis */}
        <div>
          <h3 className="text-lg font-medium mb-3 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-serenity-teal" />
            Mood Analysis
          </h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Positive</span>
                <span className="text-green-500 font-medium">
                  {sentiments.positive}
                </span>
              </div>
              <Progress
                value={
                  (sentiments.positive /
                    (sentiments.positive +
                      sentiments.neutral +
                      sentiments.negative)) *
                  100
                }
                className="bg-gray-200 h-2"
                indicatorClassName="bg-green-500"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Neutral</span>
                <span className="text-blue-500 font-medium">
                  {sentiments.neutral}
                </span>
              </div>
              <Progress
                value={
                  (sentiments.neutral /
                    (sentiments.positive +
                      sentiments.neutral +
                      sentiments.negative)) *
                  100
                }
                className="bg-gray-200 h-2"
                indicatorClassName="bg-blue-500"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Negative</span>
                <span className="text-red-500 font-medium">
                  {sentiments.negative}
                </span>
              </div>
              <Progress
                value={
                  (sentiments.negative /
                    (sentiments.positive +
                      sentiments.neutral +
                      sentiments.negative)) *
                  100
                }
                className="bg-gray-200 h-2"
                indicatorClassName="bg-red-500"
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Burnout Predictor */}
        <div>
          <h3 className="text-lg font-medium mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-serenity-teal" />
            Burnout Risk
          </h3>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Risk Level</span>
                <span className={`font-medium ${burnoutLevel.color}`}>
                  {burnoutLevel.text}
                </span>
              </div>
              <Progress
                value={burnoutScore}
                className="bg-gray-200 h-2"
                indicatorClassName={`${
                  burnoutScore < 40
                    ? "bg-green-500"
                    : burnoutScore < 70
                    ? "bg-amber-500"
                    : "bg-red-500"
                }`}
              />
              <p className="text-sm text-muted-foreground mt-2">
                Based on your workload and communication patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Button asChild className="w-full">
          <Link to="/dashboard" className="flex items-center justify-center">
            View Detailed Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SidebarSummary;
