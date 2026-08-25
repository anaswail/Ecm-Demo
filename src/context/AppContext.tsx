import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = {
  lang: "ar" | "en";
  setLang: React.Dispatch<React.SetStateAction<"ar" | "en">>;
  mood: "light" | "dark";
  setMood: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<"ar" | "en">("en");
  const [mood, setMood] = useState<"light" | "dark">("dark");

  return (
    <AppContext.Provider value={{ lang, setLang, mood, setMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
};
