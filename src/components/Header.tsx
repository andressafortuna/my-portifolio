import { MdOutlineLanguage, MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useLanguage } from "../contexts/LanguageContext";

interface HeaderProps {
  onToggleLanguage: () => void;
  onToggleDarkMode: () => void;
  scrollToTop: () => void;
  onScrollToAbout: () => void;
  onScrollToWork: () => void;
  onScrollToContact: () => void;
  isDark: boolean;
}

export default function Header({
  onToggleLanguage,
  onToggleDarkMode,
  scrollToTop,
  onScrollToAbout,
  onScrollToWork,
  onScrollToContact,
  isDark
}: HeaderProps) {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 shadow" >
      <h2 className="text-base sm:text-base md:text-base lg:text-lg font-bold">{t.header.logo}</h2>

      <div className="flex items-center gap-4">
        <button onClick={onToggleLanguage} className="hover:text-[var(--primary-color)]">
          <MdOutlineLanguage className="w-6 h-6" />
        </button>
        <button onClick={onToggleDarkMode}>
          {isDark ? <MdOutlineLightMode className="w-6 h-6" /> : <MdOutlineNightlight className="w-6 h-6" />}
        </button>
         <button onClick={scrollToTop} className="font-bold hover:underline">
          {t.header.home}
        </button>
        <button onClick={onScrollToAbout} className="font-bold hover:underline">
          {t.header.about}
        </button>
        <button onClick={onScrollToWork} className="font-bold hover:underline">
          {t.header.experience}
        </button>
        <button
          onClick={onScrollToContact}
          className="btn-yellow font-bold px-4 py-2 rounded-full"
        >
          {t.header.contact}
        </button>
      </div>
    </nav>
  );
}
