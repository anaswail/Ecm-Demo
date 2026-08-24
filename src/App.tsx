import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
// import Features from "./components/Features";
import Modules from "./components/Modules";
import { useAppContext } from "./context/AppContext";
import Customers from "./components/Customers";
import Footer from "./components/Footer";

const App = () => {
  const { i18n } = useTranslation();
  const { lang, setLang } = useAppContext();

  const defaultLanguage = (localStorage.getItem("language") ?? "en") as
    | "ar"
    | "en";

  const [mood, setMood] = useState<"dark" | "light">("dark");

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
      } min-h-screen w-full overflow-x-hidden bg-[#f8f9fa] dark:bg-bg-main transition-colors duration-300`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Header mood={mood} setMood={setMood} />
      <Hero />
      <About />
      {/* <Features /> */}
      <Modules />
      <Customers />
      <Footer />
    </div>
  );
};

export default App;
