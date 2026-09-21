import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/AppContext";

import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/navbar/Header";
import Footer from "../../components/footer/Footer";
import CtaBanner from "../../components/CTA/CTABannar";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { ArrowUp } from "lucide-react";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const { lang, setLang, mood } = useAppContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

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

  const { scrollY } = useScroll();
  const [showElement, setShowElement] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowElement(latest >= 500);
  });

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
      {showElement && (
        <motion.button
          type="button"
          aria-label={lang === "ar" ? "العودة إلى أعلى الصفحة" : "Back to top"}
          title={lang === "ar" ? "العودة إلى أعلى الصفحة" : "Back to top"}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="cursor-pointer fixed bottom-10 right-10 z-50 flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </div>
  );
};

export default MainLayout;
