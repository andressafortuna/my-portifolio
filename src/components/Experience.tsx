import { forwardRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  SiJavascript, 
  SiTypescript, 
  SiSharp, 
  SiMysql, 
  SiHtml5, 
  SiCss3, 
  SiAngular, 
  SiReact, 
  SiTailwindcss, 
  SiDotnet, 
  SiNodedotjs, 
  SiMongodb, 
  SiGit, 
  SiGithub 
} from "react-icons/si";

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();

  const technologies = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "C#", icon: SiSharp, color: "#239120" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "SQL Server", icon: SiMysql, color: "#CC2927" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  return (
    <section ref={ref} className="min-h-screen pt-24 md:pt-32 lg:pt-24 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center">{t.experience.title}</h2>
      <div className="max-w-6xl w-full flex flex-col items-center">
        <p className="text-lg leading-relaxed text-center mb-4" style={{ color: "var(--text-muted)" }}>
          {t.experience.text}
        </p>
        <p className="text-sm mb-4 text-center" style={{ color: "var(--text-muted)" }}>
          {t.experience.description}
        </p>
        <div
          className="w-full flex flex-col items-center"
        >
          <div
            className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-md flex flex-wrap justify-center gap-6"
            style={{ backgroundColor: "var(--bg-card)" }}
          >
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 rounded-lg bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 cursor-pointer group"
                  style={{ minWidth: 80 }}
                >
                  <IconComponent
                    className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs font-medium text-center" style={{ color: "var(--text-color)" }}>
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
