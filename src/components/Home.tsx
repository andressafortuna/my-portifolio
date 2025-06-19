import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { Section } from "./Section";

export default function Home() {
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();

    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

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

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            if (hash === "home") homeRef.current?.scrollIntoView({ behavior: "smooth" });
            if (hash === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            if (hash === "experience") workRef.current?.scrollIntoView({ behavior: "smooth" });
            if (hash === "contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);


    const toggleDarkMode = () => setIsDark((prev) => !prev);

    const toggleLanguage = () => {
        const newLang = language === "pt" ? "en" : "pt";
        setLanguage(newLang);
        navigate(`/${newLang}`);
    };

    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const workRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, hash: string) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
        window.location.hash = hash;
    };

    const scrollToTop = () => {
        window.scrollTo({ top: -1, behavior: "smooth" });
        window.location.hash = "home";
    };

    return (
        <div className="flex h-screen transition-colors">
            <div className="flex flex-col flex-1">
                <Header
                    onToggleLanguage={toggleLanguage}
                    onToggleDarkMode={toggleDarkMode}
                    scrollToTop={() => scrollToTop()}
                    onScrollToAbout={() => scrollToSection(aboutRef, "about")}
                    onScrollToWork={() => scrollToSection(workRef, "experience")}
                    onScrollToContact={() => scrollToSection(contactRef, "contact")}
                    isDark={isDark}
                />
                <main className="space-y-32 px-6 py-10 ">
                    <Section refValue={aboutRef}>
                        <About />
                    </Section>

                    <Section refValue={workRef}>
                        <Experience />
                    </Section>

                    <Section refValue={contactRef}>
                        <Contact />
                    </Section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
