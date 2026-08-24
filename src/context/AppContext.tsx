import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = {
  lang: "ar" | "en";
  setLang: React.Dispatch<React.SetStateAction<"ar" | "en">>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<"ar" | "en">("en");

  return (
    <AppContext.Provider value={{ lang, setLang }}>
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
