import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/AppContext";

import { Outlet } from "react-router-dom";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import CtaBanner from "../../components/CTA/CTABannar";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const { lang, setLang, mood } = useAppContext();

  const defaultLanguage = (localStorage.getItem("language") ?? "en") as
    | "ar"
    | "en";

  useEffect(() => {
    i18n.changeLanguage(defaultLanguage);
    setLang(defaultLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  return (
    <div
      className={`${lang === "ar" ? "ar-font" : "en-font"} ${
        mood === "dark" ? "dark" : ""
      } min-h-screen w-full overflow-x-hidden bg-bg-primary dark:bg-bg-main transition-colors duration-300 `}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Header />
      <div className=" mt-20">
        <Outlet />
      </div>
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default MainLayout;
