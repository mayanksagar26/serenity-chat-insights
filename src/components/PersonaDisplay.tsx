
import React from 'react';
import { PersonaType } from '@/types/chat';
import { Lightbulb, HelpCircle, CloudRain, HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PersonaDisplayProps {
  type: PersonaType;
  oneLiner: string;
  nextSteps: string[];
}

const PersonaDisplay: React.FC<PersonaDisplayProps> = ({ type, oneLiner, nextSteps }) => {
  const getIcon = () => {
    switch (type) {
      case 'focused':
        return <Lightbulb className="w-6 h-6 text-blue-500" />;
      case 'confused':
        return <HelpCircle className="w-6 h-6 text-purple-500" />;
      case 'low':
        return <CloudRain className="w-6 h-6 text-gray-500" />;
      case 'stressed':
        return <HeartPulse className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg animate-fade-in">
      <div className="flex items-center space-x-4">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          type === 'focused' && "bg-blue-100",
          type === 'confused' && "bg-purple-100",
          type === 'low' && "bg-gray-100",
          type === 'stressed' && "bg-orange-100"
        )}>
          <div className={cn(
            "transition-all duration-1000",
            type === 'focused' && "animate-pulse",
            type === 'confused' && "animate-bounce",
            type === 'low' && "animate-pulse",
            type === 'stressed' && "animate-ping"
          )}>
            {getIcon()}
          </div>
        </div>
        <p className="text-sm text-muted-foreground flex-1">{oneLiner}</p>
      </div>
      
      {nextSteps && nextSteps.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium">Next Steps:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {nextSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PersonaDisplay;
