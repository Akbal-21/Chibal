import { createContext } from "react";

interface ContextProps {
  language: string;

  //Methods

  changeLanguage: (language: string) => void;
}

export const InternationalContext = createContext({} as ContextProps);
