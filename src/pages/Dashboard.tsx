
import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  getDailyWorkloadData,
  getSentimentDistribution,
  calculateBurnoutScore,
  getWellnessTips,
} from "../data/mockData";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard: React.FC = () => {
  const workloadData = getDailyWorkloadData();
  const sentiments = getSentimentDistribution();
  const burnoutScore = calculateBurnoutScore();
  const tips = getWellnessTips(burnoutScore);

  const renderTrendChart = () => {
    // Create a dataset with just 7 days for the chart to be more readable
    const last7Days = workloadData.slice(0, 7);

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={last7Days}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              // Format date to show only day and month
              const date = new Date(value);
              return `${date.getDate()}/${date.getMonth() + 1}`;
            }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="meetings"
            stroke="#9b87f5"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="messages"
            stroke="#6BBAA7"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#FDE1D3"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  const renderSentimentPieChart = () => {
    const data = [
      { name: "Positive", value: sentiments.positive, color: "#4ade80" },
      { name: "Neutral", value: sentiments.neutral, color: "#60a5fa" },
      { name: "Negative", value: sentiments.negative, color: "#f87171" },
    ];

    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  const renderWorkloadBarChart = () => {
    // Group by week for better visualization
    const weeklyData = [];
    for (let i = 0; i < 4; i++) {
      const weekData = workloadData.slice(i * 7, (i + 1) * 7);
      const weekSum = weekData.reduce(
        (acc, day) => {
          acc.meetings += day.meetings;
          acc.messages += day.messages;
          acc.tasks += day.tasks;
          return acc;
        },
        { meetings: 0, messages: 0, tasks: 0 }
      );
      weeklyData.push({
        name: `Week ${4 - i}`,
        ...weekSum,
      });
    }

    return (
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="meetings" fill="#9b87f5" name="Meetings" />
          <Bar dataKey="messages" fill="#6BBAA7" name="Messages" />
          <Bar dataKey="tasks" fill="#FDE1D3" name="Tasks" />
        </RechartsBarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Wellness Dashboard</h1>
        <Button asChild variant="outline">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chat
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Daily Activity Trends (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">{renderTrendChart()}</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Communication Sentiment</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">{renderSentimentPieChart()}</CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Monthly Workload Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">{renderWorkloadBarChart()}</CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
            Wellness Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="p-4 bg-serenity-background rounded-lg border border-gray-200"
              >
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
