import { forwardRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();

  return (
    <section ref={ref} className="min-h-screen pt-40">
      <h2 className="text-3xl font-bold mb-4">{t.experience.title}</h2>
      <p style={{ color: "var(--text-muted)" }}>{t.experience.text}</p>
    </section>
  );
});

export default Experience;
