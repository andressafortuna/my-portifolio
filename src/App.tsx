import { useState, useRef } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import Content from "../src/components/Content";

export default function App() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  

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
    <div className="flex h-screen bg-white transition-colors">

      <div className="flex flex-col flex-1">

        <nav className="flex items-center justify-between p-4 bg-white shadow">
          <h2 className="text-4xl font-bold">Andressa</h2>

          <div className="flex items-center gap-4">
            <button onClick={toggleLanguage} className="text-[#2e2e2e] hover:text-[#ff9c00]">
              <MdOutlineLanguage className="w-6 h-6" />
            </button>
            <button onClick={() => scrollToSection(aboutRef)} className="font-bold hover:underline">
              {t.about}
            </button>
            <button onClick={() => scrollToSection(workRef)} className="font-bold hover:underline">
              {t.experience}
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-white font-bold bg-[#ff9c00] px-4 py-2 rounded-full"
            >
              {t.contact}
            </button>
          </div>
        </nav >

        <div className="bg-gray-100 overflow-y-auto flex-1">
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
