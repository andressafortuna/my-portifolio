import { LuSparkle } from "react-icons/lu";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 shadow">
      <p className="text-sm flex justify-center items-center gap-1" style={{ color: "var(--text-muted)" }}>
        {t.footer.text} <LuSparkle /> &copy; {currentYear}
      </p>
    </footer>
  );
}
