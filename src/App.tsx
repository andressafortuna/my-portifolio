import { useState, useRef, useEffect } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineLightMode , MdLightMode  } from "react-icons/md";
import Content from "../src/components/Content";

export default function App() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);


  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const texts = {
    pt: {
      about: "Sobre",
      experience: "Experiência",
      contact: "Entre em contato"
    },
    en: {
      about: "About me",
      experience: "Work",
      contact: "Get in touch"
    }
  };

  const t = texts[language];

  return (
    <div className="flex h-screentransition-colors">

      <div className="flex flex-col flex-1">

        <nav className="flex items-center justify-between p-4 shadow">
          <h2 className="text-4xl font-bold">Andressa</h2>

          <div className="flex items-center gap-4">
            <button onClick={toggleLanguage} className="hover:text-[var(--primary-color)]">
              <MdOutlineLanguage className="w-6 h-6" />
            </button>
            <button onClick={toggleDarkMode}>
              {isDark ? <MdOutlineLightMode className="w-6 h-6" /> : <MdLightMode className="w-6 h-6" />}
            </button>
            <button onClick={() => scrollToSection(aboutRef)} className="font-bold hover:underline">
              {t.about}
            </button>
            <button onClick={() => scrollToSection(workRef)} className="font-bold hover:underline">
              {t.experience}
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="btn-yellow font-bold px-4 py-2 rounded-full"
            >
              {t.contact}
            </button>
          </div>
        </nav >

        <div className="overflow-y-auto flex-1">
          <Content
            language={language}
            aboutRef={aboutRef}
            workRef={workRef}
            contactRef={contactRef}
          />
        </div>

      </div>
    </div>
  );

}
