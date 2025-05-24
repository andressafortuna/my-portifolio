import { forwardRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-4">{t.home.hello}</h2>
      <p className="max-w-xl text-lg" style={{ color: "var(--text-muted-strong)" }}>
        {t.home.intro}
      </p>
    </section>
  );
});

export default About;
