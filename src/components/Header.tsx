import { Languages, Menu, Moon, Plus, Sun, X } from "lucide-react";
import Button from "./ui/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import NavLink from "./header/NavLink";
import { useAppContext } from "../context/AppContext";

const navLinksItems = [
  { text: "home", link: "#home" },
  { text: "about", link: "#about" },
  { text: "modules", link: "#modules" },
  { text: "customers", link: "#customers" },
  { text: "contact", link: "#contact" },
];

const Header = () => {
  const { t } = useTranslation();
  const { lang, setLang, mood, setMood } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChangeLanguage = () => {
    if (lang === "en") {
      i18n.changeLanguage("ar");
      setLang("ar");
    } else {
      i18n.changeLanguage("en");
      setLang("en");
    }
  };

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const direction = current - previous;

    if (current < 300) {
      setHidden(false);
      setIsOnTop(true);
      return;
    }

    setIsOnTop(false);

    if (direction > 0) {
      setHidden(true);
      setMenuOpen(false);
    } else if (direction < 0) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`z-40 w-full ${
        isOnTop
          ? "absolute"
          : "bg-white/70 dark:bg-bg-main/30 backdrop-blur-xl border-b border-b-gray-200 dark:border-b-gray-800 fixed"
      } top-0 left-0 flex justify-between items-center py-4 sm:py-5 px-5 sm:px-8 md:px-12`}
    >
      <div className="logo en-font flex items-center gap-2 shrink-0" dir="ltr">
        <span className="bg-primary flex items-center justify-center w-7 h-7 rounded-md drop-shadow-lg drop-shadow-primary/30">
          <Plus size={12} strokeWidth={5} color="white" />
        </span>
        <h2 className="font-bold text-xl sm:text-2xl dark:text-white text-black">
          ECM<span className="text-primary font-extrabold">+</span>
        </h2>
      </div>

      <ul className="nav-links hidden md:flex items-center gap-10 dark:text-gray-300 text-black">
        {navLinksItems.map((item, idx) => (
          <motion.li className="nav-link text-md" key={idx}>
            <NavLink text={`header.${item.text}`} link={item.link} />
          </motion.li>
        ))}
      </ul>

      <div className="controllers hidden md:flex items-center gap-5">
        <Button
          onClickEvent={handleChangeLanguage}
          className="flex items-center gap-2 text-primary bg-primary/5 dark:bg-primary/2 rounded-md py-2 px-4 text-sm hover:bg-primary/10 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <Languages size={20} />
          {lang === "ar" ? t("header.English") : t("header.Arabic")}
        </Button>
        <Button
          onClickEvent={() =>
            setMood((prev) => (prev === "dark" ? "light" : "dark"))
          }
          className="rounded-full inset-shadow-primary/70 bg-primary/10 p-1 cursor-pointer hover:bg-primary/50 transition-all text-primary hover:text-white"
        >
          {mood === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-gray-300 dark:border-gray-700 text-black dark:text-white"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-bg-main border-b border-gray-200 dark:border-gray-800 flex flex-col gap-6 px-5 py-6"
          >
            <ul className="flex flex-col gap-4 dark:text-gray-300 text-black">
              {navLinksItems.map((item, idx) => (
                <li
                  key={idx}
                  className="text-md"
                  onClick={() => setMenuOpen(false)}
                >
                  <NavLink text={`header.${item.text}`} link={item.link} />
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button
                onClickEvent={handleChangeLanguage}
                className="flex items-center gap-2 text-primary bg-primary/5 rounded-md py-2 px-4 text-sm hover:bg-primary/10 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <Languages size={18} />
                {lang === "ar" ? t("header.English") : t("header.Arabic")}
              </Button>
              <Button
                onClickEvent={() =>
                  setMood((prev) => (prev === "dark" ? "light" : "dark"))
                }
                className="rounded-full bg-primary/10 p-2 cursor-pointer hover:bg-primary/50 transition-all text-primary hover:text-white"
              >
                {mood === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
