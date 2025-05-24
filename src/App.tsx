import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Home from "./components/Home";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pt" />} />
          <Route path="/:lang/*" element={<LangRouter />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

function LangRouter() {
  const { lang } = useParams();
  const { setLanguage } = useLanguage();

  if (lang !== "pt" && lang !== "en") {
    return <Navigate to="/pt" />;
  }

  useEffect(() => {
    setLanguage(lang as "pt" | "en");
  }, [lang]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
