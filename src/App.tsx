import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
// import Features from "./components/Features";
import Modules from "./components/Modules";

const App = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState<"ar" | "en">("en");
  const [mood, setMood] = useState<"dark" | "light">("dark");

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <div
      className={`${lang === "ar" ? "ar-font" : "en-font"} ${mood === "dark" ? "dark bg-black" : ""} dark:bg-main`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <Header mood={mood} setMood={setMood} lang={lang} setLang={setLang} />
      <Hero />
      <About />
      {/* <Features /> */}
      <Modules />
    </div>
  );
};

export default App;
