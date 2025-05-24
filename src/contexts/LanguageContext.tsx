import { createContext, useContext, useEffect, useState } from "react";
import { en } from "../locales/en";
import { pt } from "../locales/pt-BR";

type Language = "en" | "pt";

const translations = { en, pt };

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const storedLang = localStorage.getItem("lang") as Language;
  const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";

  const [language, setLanguage] = useState<Language>(storedLang || browserLang);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
