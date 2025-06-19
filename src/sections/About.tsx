import { useRef, forwardRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import devFocusImage from "../assets/undraw_dev.svg";
import VariableProximity from '../components/VariableProximity';

const About = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useLanguage();
  const containerRef1 = useRef<HTMLHeadingElement | null>(null);
  const containerRef2 = useRef<HTMLHeadingElement | null>(null);

  return (
    <section ref={ref} className="min-h-screen flex items-center pt-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2
            ref={containerRef1}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={t.home.hello}
              className={'text-6xl font-bold mb-4'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef1}
              radius={100}
              falloff='linear'
            />
          </h2>
          <h2
            ref={containerRef2}
            style={{ position: 'relative' }}
          >
            <VariableProximity
              label={t.home.helloSub}
              className={'text-5xl font-bold mb-4'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef2}
              radius={100}
              falloff='linear'
            />
          </h2>
          <p className="max-w-xl text-lg mt-2" style={{ color: "var(--text-muted-strong)" }}>
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
