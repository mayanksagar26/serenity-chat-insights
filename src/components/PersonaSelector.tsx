
import React from 'react';
import { PersonaType } from '@/types/chat';
import { Button } from './ui/button';

interface PersonaSelectorProps {
  personas: Record<string, {
    type: PersonaType;
    oneLiner: string;
  }>;
  onSelect: (type: PersonaType) => void;
  recommended: {
    type: PersonaType;
    oneLiner: string;
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
        <Button
          onClick={() => onSelect(recommended.type)}
          variant="secondary"
          className="w-full text-left justify-start h-auto p-4"
        >
          <div>
            <div className="font-medium">{recommended.type.charAt(0).toUpperCase() + recommended.type.slice(1)}</div>
            <div className="text-sm text-muted-foreground">{recommended.oneLiner}</div>
          </div>
        </Button>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Other Options:</h3>
        <div className="grid gap-2">
          {Object.entries(personas)
            .filter(([_, persona]) => persona.type !== recommended.type)
            .map(([key, persona]) => (
              <Button
                key={key}
                onClick={() => onSelect(persona.type)}
                variant="outline"
                className="w-full text-left justify-start h-auto p-4"
              >
                <div>
                  <div className="font-medium">{persona.type.charAt(0).toUpperCase() + persona.type.slice(1)}</div>
                  <div className="text-sm text-muted-foreground">{persona.oneLiner}</div>
                </div>
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonaSelector;
