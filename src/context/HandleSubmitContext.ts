

import  { createContext } from 'react';

// Определите тип для значения контекста
type HandleSubmitContextContextType = {
  sent: boolean;
  setSent: (newValue: boolean) => void;
}

// Создайте контекст с начальным значением и типом
export const HandleSubmitContext = createContext<HandleSubmitContextContextType | undefined>(undefined);