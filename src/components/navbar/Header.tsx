import { ChevronDown, Languages, Menu, Moon, Plus, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import i18n from "../../i18n";
import { useAppContext } from "../../context/AppContext";
import Button from "../ui/Button";

const navLinksItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  {
    key: "modules",
    path: "/modules",
    children: [
      { key: "dms", path: "/modules/dms" },
      { key: "mms", path: "/modules/mms" },
      { key: "cms", path: "/modules/cms" },
      { key: "bpm", path: "/modules/bpm" },
    ],
  },
  { key: "platform", path: "/platform" },
  { key: "customers", path: "/customers" },
];

const ACRONYMS = ["dms", "mms", "cms", "bpm"];
const formatSegment = (seg: string) =>
  ACRONYMS.includes(seg)
    ? seg.toUpperCase()
    : seg.charAt(0).toUpperCase() + seg.slice(1);

const Header = () => {
  const { t } = useTranslation();
  const { lang, setLang, mood, setMood } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);
  const location = useLocation();

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
      setModulesOpen(false);
    } else if (direction < 0) {
      setHidden(false);
    }
  });

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const showPathIndicator = pathSegments.length > 0;

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`z-40 w-full ${
        isOnTop
          ? "absolute"
          : "bg-bg-primary/70 dark:bg-bg-main/40 backdrop-blur-xl border-b border-border fixed"
      } top-0 left-0 flex justify-between items-center py-4 sm:py-5 px-5 sm:px-8 md:px-12`}
    >
      <div className="flex items-center gap-3 shrink-0">
        <div className="logo en-font flex items-center gap-2" dir="ltr">
          <span className="bg-primary flex items-center justify-center w-7 h-7 rounded-md shadow-sm">
            <Plus size={12} strokeWidth={5} color="white" />
          </span>
          <h2 className="font-bold text-xl sm:text-2xl text-text-primary">
            ECM<span className="text-primary font-extrabold">+</span>
          </h2>
        </div>

        {showPathIndicator && (
          <div
            className="hidden sm:flex items-center gap-1.5 text-xs text-text-secondary en-font"
            dir="ltr"
          >
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-200"
            >
              {t("header.home")}
            </Link>
            {pathSegments.map((seg, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <span className="opacity-40">/</span>
                <span>{formatSegment(seg)}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      <ul className="nav-links hidden md:flex items-center gap-10">
        {navLinksItems.map((item) =>
          item.children ? (
            <li
              key={item.key}
              className="relative"
              onMouseEnter={() => setModulesOpen(true)}
              onMouseLeave={() => setModulesOpen(false)}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 text-[14px] transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-text-primary hover:text-primary"
                }`}
              >
                {t(`header.${item.key}`)}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    modulesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <AnimatePresence>
                {modulesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64"
                  >
                    <div className="bg-bg-primary border border-border rounded-lg shadow-lg p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          to={child.path}
                          className={`block rounded-md px-3 py-2 transition-colors duration-200 ${
                            isActive(child.path)
                              ? "bg-primary/5 text-primary"
                              : "hover:bg-primary/5"
                          }`}
                        >
                          <span className="block text-[14px] font-medium text-text-primary">
                            {t(`header.modulesList.${child.key}.name`)}
                          </span>
                          <span className="block text-xs text-text-secondary mt-0.5">
                            {t(`header.modulesList.${child.key}.desc`)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ) : (
            <li key={item.key}>
              <Link
                to={item.path}
                className={`text-[14px] transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-text-primary hover:text-primary"
                }`}
              >
                {t(`header.${item.key}`)}
              </Link>
            </li>
          ),
        )}
      </ul>

      <div className="controllers hidden md:flex items-center gap-5">
        <Button
          onClickEvent={handleChangeLanguage}
          className="flex items-center gap-2 text-primary bg-primary/5 rounded-md py-2 px-4 text-sm border border-primary/20 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200 cursor-pointer"
        >
          <Languages size={20} />
          {lang === "ar" ? t("header.English") : t("header.Arabic")}
        </Button>
        <Button
          onClickEvent={() =>
            setMood((prev) => (prev === "dark" ? "light" : "dark"))
          }
          className="rounded-full border border-primary/20 bg-primary/5 p-1.5 cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200 text-primary"
        >
          {mood === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-primary"
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
            className="md:hidden absolute top-full left-0 w-full bg-bg-primary border-b border-border flex flex-col gap-6 px-5 py-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinksItems.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-[14px] block ${
                      isActive(item.path)
                        ? "text-primary font-medium"
                        : "text-text-primary"
                    }`}
                  >
                    {t(`header.${item.key}`)}
                  </Link>
                  {item.children && (
                    <ul className="flex flex-col gap-3 mt-3 ps-4 border-s border-border">
                      {item.children.map((child) => (
                        <li key={child.key}>
                          <Link
                            to={child.path}
                            onClick={() => setMenuOpen(false)}
                            className="block"
                          >
                            <span className="block text-[14px] font-medium text-text-primary">
                              {t(`header.modulesList.${child.key}.name`)}
                            </span>
                            <span className="block text-xs text-text-secondary mt-0.5">
                              {t(`header.modulesList.${child.key}.desc`)}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button
                onClickEvent={handleChangeLanguage}
                className="flex items-center gap-2 text-primary bg-primary/5 rounded-md py-2 px-4 text-sm border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <Languages size={18} />
                {lang === "ar" ? t("header.English") : t("header.Arabic")}
              </Button>
              <Button
                onClickEvent={() =>
                  setMood((prev) => (prev === "dark" ? "light" : "dark"))
                }
                className="rounded-full border border-primary/20 bg-primary/5 p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200 text-primary"
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
