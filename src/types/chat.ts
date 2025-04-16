
export type PersonaType = 'focused' | 'confused' | 'low' | 'stressed';

export interface Persona {
  type: PersonaType;
  oneLiner: string;
  image: string;
}

export interface ChatQuestion {
  id: string;
  text: string;
}

export interface ChatState {
  currentPersona: PersonaType | null;
  isProcessing: boolean;
  questions: ChatQuestion[];
}

