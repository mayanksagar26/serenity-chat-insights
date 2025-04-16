
// Mock data representing user's digital activities over the last 30 days

export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  platform: 'slack' | 'email' | 'jira';
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  attendees: number;
  isRecurring: boolean;
}

export interface JiraTicket {
  id: string;
  title: string;
  type: 'bug' | 'feature' | 'task';
  priority: 'high' | 'medium' | 'low';
  status: 'to-do' | 'in-progress' | 'review' | 'done';
  created: string;
  updated: string;
  comments: Message[];
}

// Generate dates in the past 30 days
function generatePastDates(days: number): string[] {
  const dates: string[] = [];
  const today = new Date();
  
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  
  return dates;
}

const past30Days = generatePastDates(30);

// Mock Slack Messages
export const slackMessages: Message[] = [
  {
    id: '1',
    sender: 'Sarah',
    content: 'Can you help me with the design review?',
    timestamp: `${past30Days[2]}T10:15:00`,
    platform: 'slack',
    sentiment: 'neutral'
  },
  {
    id: '2',
    sender: 'John',
    content: 'Great work on the presentation yesterday!',
    timestamp: `${past30Days[3]}T14:23:00`,
    platform: 'slack',
    sentiment: 'positive'
  },
  {
    id: '3',
    sender: 'TeamLead',
    content: 'We need to discuss the roadmap ASAP.',
    timestamp: `${past30Days[4]}T09:05:00`,
    platform: 'slack',
    sentiment: 'neutral'
  },
  {
    id: '4',
    sender: 'Alex',
    content: 'I\'m concerned about the timeline for this project.',
    timestamp: `${past30Days[5]}T16:30:00`,
    platform: 'slack',
    sentiment: 'negative'
  },
  {
    id: '5',
    sender: 'Miguel',
    content: 'Can we reschedule our 1:1 to tomorrow?',
    timestamp: `${past30Days[6]}T11:42:00`,
    platform: 'slack',
    sentiment: 'neutral'
  },
  {
    id: '6',
    sender: 'HR',
    content: 'Don\'t forget to complete your wellness survey by Friday!',
    timestamp: `${past30Days[7]}T08:30:00`,
    platform: 'slack',
    sentiment: 'neutral'
  },
  {
    id: '7',
    sender: 'PM',
    content: 'The client is unhappy with the latest deliverable. We need to fix this.',
    timestamp: `${past30Days[8]}T15:10:00`,
    platform: 'slack',
    sentiment: 'negative'
  },
  {
    id: '8',
    sender: 'Jen',
    content: 'Thanks for helping me debug that issue!',
    timestamp: `${past30Days[9]}T13:27:00`,
    platform: 'slack',
    sentiment: 'positive'
  },
  {
    id: '9',
    sender: 'TeamLead',
    content: 'Everyone please submit your updates by EOD.',
    timestamp: `${past30Days[10]}T17:00:00`,
    platform: 'slack',
    sentiment: 'neutral'
  },
  {
    id: '10',
    sender: 'CTO',
    content: 'Amazing progress on the new feature! Keep it up.',
    timestamp: `${past30Days[11]}T11:05:00`,
    platform: 'slack',
    sentiment: 'positive'
  },
];

// Mock Email Messages
export const emailMessages: Message[] = [
  {
    id: 'e1',
    sender: 'manager@company.com',
    content: 'Please review the quarterly goals and provide your feedback by Thursday.',
    timestamp: `${past30Days[1]}T08:45:00`,
    platform: 'email',
    sentiment: 'neutral'
  },
  {
    id: 'e2',
    sender: 'client@clientcompany.com',
    content: 'We are very disappointed with the last milestone delivery.',
    timestamp: `${past30Days[3]}T13:20:00`,
    platform: 'email',
    sentiment: 'negative'
  },
  {
    id: 'e3',
    sender: 'hr@company.com',
    content: 'Reminder: Your annual performance review is scheduled for next week.',
    timestamp: `${past30Days[5]}T09:30:00`,
    platform: 'email',
    sentiment: 'neutral'
  },
  {
    id: 'e4',
    sender: 'teammate@company.com',
    content: 'Thank you for your support on the project. You really saved us!',
    timestamp: `${past30Days[7]}T16:15:00`,
    platform: 'email',
    sentiment: 'positive'
  },
  {
    id: 'e5',
    sender: 'system@jira.com',
    content: 'You have been assigned 5 new high-priority tickets.',
    timestamp: `${past30Days[9]}T10:05:00`,
    platform: 'email',
    sentiment: 'negative'
  },
  {
    id: 'e6',
    sender: 'learning@company.com',
    content: 'New training courses available: Stress Management and Work-Life Balance',
    timestamp: `${past30Days[12]}T11:45:00`,
    platform: 'email',
    sentiment: 'neutral'
  },
  {
    id: 'e7',
    sender: 'ceo@company.com',
    content: 'Congratulations to the team for hitting our quarterly targets!',
    timestamp: `${past30Days[15]}T14:30:00`,
    platform: 'email',
    sentiment: 'positive'
  },
  {
    id: 'e8',
    sender: 'project@company.com',
    content: 'Critical bug found in production. All hands needed to resolve ASAP.',
    timestamp: `${past30Days[18]}T23:10:00`,
    platform: 'email',
    sentiment: 'negative'
  },
];

// Mock Calendar Events
export const calendarEvents: CalendarEvent[] = [
  {
    id: 'cal1',
    title: 'Daily Standup',
    date: past30Days[0],
    startTime: '09:00',
    endTime: '09:15',
    attendees: 8,
    isRecurring: true
  },
  {
    id: 'cal2',
    title: 'Project Review',
    date: past30Days[1],
    startTime: '13:00',
    endTime: '14:30',
    attendees: 12,
    isRecurring: false
  },
  {
    id: 'cal3',
    title: '1:1 with Manager',
    date: past30Days[2],
    startTime: '15:00',
    endTime: '15:30',
    attendees: 2,
    isRecurring: true
  },
  {
    id: 'cal4',
    title: 'Client Meeting',
    date: past30Days[3],
    startTime: '11:00',
    endTime: '12:00',
    attendees: 6,
    isRecurring: false
  },
  {
    id: 'cal5',
    title: 'Team Lunch',
    date: past30Days[4],
    startTime: '12:30',
    endTime: '13:30',
    attendees: 15,
    isRecurring: false
  },
  {
    id: 'cal6',
    title: 'Sprint Planning',
    date: past30Days[5],
    startTime: '10:00',
    endTime: '11:30',
    attendees: 10,
    isRecurring: true
  },
  {
    id: 'cal7',
    title: 'All Hands Meeting',
    date: past30Days[8],
    startTime: '16:00',
    endTime: '17:00',
    attendees: 50,
    isRecurring: false
  },
  {
    id: 'cal8',
    title: 'Engineering Sync',
    date: past30Days[10],
    startTime: '14:00',
    endTime: '15:00',
    attendees: 8,
    isRecurring: true
  },
  {
    id: 'cal9',
    title: 'Product Demo',
    date: past30Days[12],
    startTime: '10:00',
    endTime: '11:00',
    attendees: 20,
    isRecurring: false
  },
  {
    id: 'cal10',
    title: 'Retrospective',
    date: past30Days[14],
    startTime: '16:00',
    endTime: '17:00',
    attendees: 10,
    isRecurring: true
  },
];

// Mock JIRA Tickets
export const jiraTickets: JiraTicket[] = [
  {
    id: 'PROJ-123',
    title: 'Fix login page validation',
    type: 'bug',
    priority: 'high',
    status: 'done',
    created: past30Days[15],
    updated: past30Days[13],
    comments: [
      {
        id: 'j1c1',
        sender: 'QA',
        content: 'This is blocking user registration.',
        timestamp: `${past30Days[15]}T10:00:00`,
        platform: 'jira',
        sentiment: 'negative'
      },
      {
        id: 'j1c2',
        sender: 'You',
        content: 'Fixed the validation logic. Please review.',
        timestamp: `${past30Days[14]}T16:30:00`,
        platform: 'jira',
        sentiment: 'neutral'
      },
      {
        id: 'j1c3',
        sender: 'QA',
        content: 'Looks good now, thanks for the quick fix!',
        timestamp: `${past30Days[13]}T09:15:00`,
        platform: 'jira',
        sentiment: 'positive'
      }
    ]
  },
  {
    id: 'PROJ-124',
    title: 'Implement user profile page',
    type: 'feature',
    priority: 'medium',
    status: 'in-progress',
    created: past30Days[20],
    updated: past30Days[5],
    comments: [
      {
        id: 'j2c1',
        sender: 'Designer',
        content: 'Design mockups attached.',
        timestamp: `${past30Days[20]}T11:45:00`,
        platform: 'jira',
        sentiment: 'neutral'
      },
      {
        id: 'j2c2',
        sender: 'You',
        content: 'Starting implementation. Will need API clarification.',
        timestamp: `${past30Days[18]}T14:20:00`,
        platform: 'jira',
        sentiment: 'neutral'
      },
      {
        id: 'j2c3',
        sender: 'Backend',
        content: 'API documentation updated with the endpoints you need.',
        timestamp: `${past30Days[16]}T09:30:00`,
        platform: 'jira',
        sentiment: 'neutral'
      },
      {
        id: 'j2c4',
        sender: 'PM',
        content: 'This is taking longer than expected. Can we speed it up?',
        timestamp: `${past30Days[6]}T15:10:00`,
        platform: 'jira',
        sentiment: 'negative'
      }
    ]
  },
  {
    id: 'PROJ-125',
    title: 'Optimize image loading performance',
    type: 'task',
    priority: 'low',
    status: 'to-do',
    created: past30Days[25],
    updated: past30Days[25],
    comments: []
  },
  {
    id: 'PROJ-126',
    title: 'Update documentation for API v2',
    type: 'task',
    priority: 'medium',
    status: 'done',
    created: past30Days[22],
    updated: past30Days[17],
    comments: [
      {
        id: 'j4c1',
        sender: 'You',
        content: 'First draft completed. Please review.',
        timestamp: `${past30Days[20]}T13:45:00`,
        platform: 'jira',
        sentiment: 'neutral'
      },
      {
        id: 'j4c2',
        sender: 'Lead',
        content: 'Looks good overall. Some minor edits needed.',
        timestamp: `${past30Days[19]}T10:30:00`,
        platform: 'jira',
        sentiment: 'positive'
      },
      {
        id: 'j4c3',
        sender: 'You',
        content: 'Updates completed and published.',
        timestamp: `${past30Days[17]}T16:15:00`,
        platform: 'jira',
        sentiment: 'neutral'
      }
    ]
  },
  {
    id: 'PROJ-127',
    title: 'Critical security vulnerability in auth',
    type: 'bug',
    priority: 'high',
    status: 'done',
    created: past30Days[10],
    updated: past30Days[8],
    comments: [
      {
        id: 'j5c1',
        sender: 'Security',
        content: 'This needs to be patched immediately!',
        timestamp: `${past30Days[10]}T08:10:00`,
        platform: 'jira',
        sentiment: 'negative'
      },
      {
        id: 'j5c2',
        sender: 'You',
        content: 'Working on it now as top priority.',
        timestamp: `${past30Days[10]}T08:30:00`,
        platform: 'jira',
        sentiment: 'neutral'
      },
      {
        id: 'j5c3',
        sender: 'You',
        content: 'Fix implemented. Please review ASAP.',
        timestamp: `${past30Days[9]}T20:45:00`,
        platform: 'jira',
        sentiment: 'neutral'
      },
      {
        id: 'j5c4',
        sender: 'Security',
        content: 'Fix verified. Excellent rapid response!',
        timestamp: `${past30Days[8]}T09:20:00`,
        platform: 'jira',
        sentiment: 'positive'
      }
    ]
  },
];

// Calculate total messages
export const getTotalMessages = (): number => {
  return slackMessages.length + emailMessages.length;
};

// Calculate total JIRA comments
export const getTotalJiraComments = (): number => {
  return jiraTickets.reduce((acc, ticket) => acc + ticket.comments.length, 0);
};

// Calculate total calendar events
export const getTotalCalendarEvents = (): number => {
  return calendarEvents.length;
};

// Calculate total JIRA tickets
export const getTotalJiraTickets = (): number => {
  return jiraTickets.length;
};

// Get sentiment distribution
export const getSentimentDistribution = () => {
  let positive = 0;
  let neutral = 0;
  let negative = 0;
  
  // Slack
  slackMessages.forEach(msg => {
    if (msg.sentiment === 'positive') positive++;
    else if (msg.sentiment === 'neutral') neutral++;
    else if (msg.sentiment === 'negative') negative++;
  });
  
  // Email
  emailMessages.forEach(msg => {
    if (msg.sentiment === 'positive') positive++;
    else if (msg.sentiment === 'neutral') neutral++;
    else if (msg.sentiment === 'negative') negative++;
  });
  
  // JIRA comments
  jiraTickets.forEach(ticket => {
    ticket.comments.forEach(comment => {
      if (comment.sentiment === 'positive') positive++;
      else if (comment.sentiment === 'neutral') neutral++;
      else if (comment.sentiment === 'negative') negative++;
    });
  });
  
  return { positive, neutral, negative };
};

// Calculate a simple burnout score (0-100)
export const calculateBurnoutScore = (): number => {
  const sentiments = getSentimentDistribution();
  const totalSentiments = sentiments.positive + sentiments.neutral + sentiments.negative;
  
  // Weight factors
  const negativeWeight = 1.5;
  const highPriorityWeight = 1.2;
  const meetingOverlapWeight = 1.1;
  
  // Calculate base score from negative sentiment percentage
  const sentimentScore = (sentiments.negative * negativeWeight) / totalSentiments * 50;
  
  // Calculate workload score
  const highPriorityTasks = jiraTickets.filter(ticket => ticket.priority === 'high').length;
  const workloadScore = (highPriorityTasks * highPriorityWeight + calendarEvents.length) / 20 * 30;
  
  // Calculate meeting density score
  const meetingScore = calendarEvents.length > 5 ? (calendarEvents.length - 5) * meetingOverlapWeight * 4 : 0;
  
  // Combine scores with caps
  let burnoutScore = Math.min(sentimentScore + workloadScore + meetingScore, 100);
  burnoutScore = Math.max(burnoutScore, 0);
  
  return Math.round(burnoutScore);
};

// Get daily workload data for charts
export const getDailyWorkloadData = () => {
  const workloadByDay: Record<string, { date: string, meetings: number, messages: number, tasks: number }> = {};
  
  // Initialize with 0 values for all 30 days
  past30Days.forEach(date => {
    workloadByDay[date] = { date, meetings: 0, messages: 0, tasks: 0 };
  });
  
  // Count meetings per day
  calendarEvents.forEach(event => {
    if (workloadByDay[event.date]) {
      workloadByDay[event.date].meetings += 1;
    }
  });
  
  // Count messages per day
  const countMessagesForDay = (dateStr: string) => {
    return slackMessages.filter(msg => msg.timestamp.startsWith(dateStr)).length + 
           emailMessages.filter(msg => msg.timestamp.startsWith(dateStr)).length;
  };
  
  past30Days.forEach(date => {
    workloadByDay[date].messages = countMessagesForDay(date);
  });
  
  // Count active tasks per day
  past30Days.forEach(date => {
    workloadByDay[date].tasks = jiraTickets.filter(ticket => 
      (new Date(ticket.created) <= new Date(date) && 
       (ticket.status !== 'done' || new Date(ticket.updated) >= new Date(date)))
    ).length;
  });
  
  return Object.values(workloadByDay).reverse(); // Return in chronological order
};

// Generate tips based on burnout score
export const getWellnessTips = (burnoutScore: number): string[] => {
  const lowBurnoutTips = [
    "You're doing well! Remember to take short breaks during the day.",
    "Try to maintain your current work-life balance.",
    "Good job managing your stress levels. Keep it up!",
    "Consider mentoring others on your time management skills.",
    "Your workload seems sustainable. Use any extra energy for personal projects."
  ];
  
  const moderateBurnoutTips = [
    "Consider scheduling 'no meeting' blocks in your calendar.",
    "Try the Pomodoro technique: 25 minutes of work followed by a 5-minute break.",
    "Take a proper lunch break away from your desk.",
    "Practice deep breathing exercises when feeling overwhelmed.",
    "Prioritize your tasks and learn to say no to non-essential work."
  ];
  
  const highBurnoutTips = [
    "It seems you're experiencing high stress levels. Consider speaking with your manager about workload.",
    "Block time for self-care in your calendar - treat it as important as any meeting.",
    "Consider taking a mental health day to recharge.",
    "Delegate tasks where possible and don't aim for perfection on every task.",
    "Practice mindfulness meditation for 10 minutes daily to reduce stress."
  ];
  
  if (burnoutScore < 40) {
    return lowBurnoutTips;
  } else if (burnoutScore < 70) {
    return moderateBurnoutTips;
  } else {
    return highBurnoutTips;
  }
};

// Get chatbot responses based on user input
export const getChatbotResponse = (userInput: string): string => {
  const lowerInput = userInput.toLowerCase();
  
  // Very simple response logic - in a real app, this would be much more sophisticated
  if (lowerInput.includes('stress') || lowerInput.includes('stressed')) {
    return "I noticed your workload has been high lately. Would you like to discuss some stress management techniques?";
  } else if (lowerInput.includes('tired') || lowerInput.includes('exhausted')) {
    return "You've had many meetings recently. Consider blocking some no-meeting time to recharge.";
  } else if (lowerInput.includes('good') || lowerInput.includes('great') || lowerInput.includes('happy')) {
    return "That's wonderful to hear! Your positive outlook is a great asset. Any specific wins you'd like to celebrate?";
  } else if (lowerInput.includes('bad') || lowerInput.includes('sad') || lowerInput.includes('down')) {
    return "I'm sorry to hear that. Your data shows some challenging interactions recently. Would talking about them help?";
  } else if (lowerInput.includes('busy') || lowerInput.includes('workload')) {
    return "You've had a significant increase in tasks this week. Let's look at your priorities and see what could be rescheduled.";
  } else {
    return "Thank you for sharing. Based on your recent activity, I can see patterns of both challenges and accomplishments. What would you like to focus on today?";
  }
};

export const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};
