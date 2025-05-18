import { LuSparkle } from "react-icons/lu";

interface ContentProps {
  language: "pt" | "en";
  aboutRef: React.RefObject<HTMLDivElement | null>;
  workRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const texts = {
  pt: {
    hello: "Olá, eu sou a Andressa!",
    intro: "Desenvolvedora Frontend com experiência em Angular + .NET e estudando React + Tailwind.",
    experience: "Experiência",
    experienceText: "Aqui vai seu histórico profissional.",
    contact: "Contato",
    contactText: "Adicione seus contatos aqui.",
  },
  en: {
    hello: "Hello, I’m Andressa!",
    intro: "Frontend Developer experienced in Angular + .NET, now learning React + Tailwind.",
    experience: "Experience",
    experienceText: "Here will go your professional background.",
    contact: "Contact",
    contactText: "Add your contact details here.",
  }
};

export default function Content({ language, aboutRef, workRef, contactRef }: ContentProps) {
  const t = texts[language];
  const currentYear: number = new Date().getFullYear();
  return (
    <>
      <div className="flex-1 overflow-y-auto space-y-32 px-6 py-10 bg-[#fef6ec]">

        {/* <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
            <h1 className="text-3xl font-bold text-blue-600">Olá, eu sou a Andressa!</h1>
            <p className="mt-4 text-gray-700">
              Desenvolvedora Frontend com experiência em Angular + .NET e estudando React + Tailwind.
            </p> </section> */}

        <section ref={aboutRef} className="min-h-screen flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">{t.hello}</h2>
          <p className="max-w-xl text-gray-800 text-lg">{t.intro}</p>
        </section>

        <section ref={workRef} className="min-h-screen">
          <h2 className="text-3xl font-bold text-[#ff9c00] mb-4">{t.experience}</h2>
          <p className="text-gray-700">{t.experienceText}</p>
        </section>

        <section ref={contactRef} className="min-h-screen">
          <h2 className="text-3xl font-bold text-[#ff9c00] mb-4">{t.contact}</h2>
          <p className="text-gray-700">{t.contactText}</p>
        </section>



      </div>

      <footer className="bg-white text-center py-4 shadow">
        <p className="text-sm text-gray-600 flex justify-center items-center gap-1">
          Site desenvolvido por <a href="https://www.linkedin.com/in/andressafortuna/"
            target="_blank" rel="noopener noreferrer" className="underline"
          >
            Andressa Fortuna
          </a> <LuSparkle /> &copy; {currentYear}
        </p>
      </footer>
    </>
  );
}
