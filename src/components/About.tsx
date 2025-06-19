import { forwardRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import devFocusImage from "../assets/undraw_dev.svg";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();

  return (
    <section ref={ref} className="min-h-screen flex items-center pt-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">{t.home.hello}</h2>
          <h2 className="text-4xl font-bold mb-4">{t.home.helloSub}</h2>
          <p className="max-w-xl text-lg" style={{ color: "var(--text-muted-strong)" }}>
            {t.home.intro}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src={devFocusImage}
            alt="Developer focus illustration" 
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
});

export default About;
