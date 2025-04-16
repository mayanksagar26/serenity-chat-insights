
import React from 'react';
import { PersonaType } from '@/types/chat';
import { Button } from './ui/button';
import PersonaDisplay from './PersonaDisplay';

interface PersonaSelectorProps {
  personas: Record<string, {
    type: PersonaType;
    oneLiner: string;
    nextSteps: string[];
  }>;
  onSelect: (type: PersonaType) => void;
  recommended: {
    type: PersonaType;
    oneLiner: string;
    nextSteps: string[];
  };
}

const PersonaSelector: React.FC<PersonaSelectorProps> = ({
  personas,
  onSelect,
  recommended
}) => {
  return (
    <div className="space-y-4 my-4 animate-fade-in">
      <div className="p-4 border rounded-lg bg-primary/5">
        <h3 className="text-sm font-medium mb-2">Recommended Persona:</h3>
        <PersonaDisplay 
          type={recommended.type} 
          oneLiner={recommended.oneLiner}
          nextSteps={recommended.nextSteps}
        />
        <Button
          onClick={() => onSelect(recommended.type)}
          variant="secondary"
          className="w-full mt-4"
        >
          Select This Persona
        </Button>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Other Options:</h3>
        <div className="grid gap-4">
          {Object.entries(personas)
            .filter(([_, persona]) => persona.type !== recommended.type)
            .map(([key, persona]) => (
              <div key={key} className="space-y-2">
                <PersonaDisplay 
                  type={persona.type} 
                  oneLiner={persona.oneLiner}
                  nextSteps={persona.nextSteps}
                />
                <Button
                  onClick={() => onSelect(persona.type)}
                  variant="outline"
                  className="w-full"
                >
                  Select This Persona
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonaSelector;
