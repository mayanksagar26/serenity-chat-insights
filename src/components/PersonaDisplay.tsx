
import React from 'react';
import { PersonaType } from '@/types/chat';

interface PersonaDisplayProps {
  type: PersonaType;
  oneLiner: string;
}

const PersonaDisplay: React.FC<PersonaDisplayProps> = ({ type, oneLiner }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-card rounded-lg animate-fade-in">
      <div className="w-12 h-12 relative">
        <div className={`w-full h-full rounded-full ${
          type === 'focused' ? 'bg-blue-100' :
          type === 'confused' ? 'bg-purple-100' :
          type === 'low' ? 'bg-gray-100' :
          'bg-orange-100'
        } flex items-center justify-center`}>
          {type === 'focused' && <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse" />}
          {type === 'confused' && <div className="w-6 h-6 bg-purple-500 rounded-full animate-bounce" />}
          {type === 'low' && <div className="w-6 h-6 bg-gray-500 rounded-full animate-pulse" />}
          {type === 'stressed' && <div className="w-6 h-6 bg-orange-500 rounded-full animate-ping" />}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{oneLiner}</p>
    </div>
  );
};

export default PersonaDisplay;
