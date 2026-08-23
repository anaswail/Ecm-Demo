import { Languages, Moon, Plus, Sun } from "lucide-react";
import Button from "./ui/Button";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import NavLink from "./header/NavLink";

const navLinksItems = [
  { text: "home", link: "" },
  { text: "about", link: "" },
  { text: "pricing", link: "" },
  { text: "customers", link: "" },
];

const Header = ({
  setMood,
  mood,
  lang,
  setLang,
}: {
  setMood: Dispatch<SetStateAction<"dark" | "light">>;
  setLang: Dispatch<SetStateAction<"ar" | "en">>;
  lang: "ar" | "en";
  mood: "dark" | "light";
}) => {
  const { t } = useTranslation();

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
    } else if (direction < 0) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{
        y: hidden ? "-100%" : "0%",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={` z-40 w-full ${isOnTop ? "absolute " : "dark:bg-bg-main/30 backdrop-blur-xl  border-b dark:border-b-gray-800 border-b-gray-500 fixed "} top-0 left-0  flex justify-between items-center py-5 px-12 `}
    >
      <div className="logo en-font flex items-center gap-2 " dir="ltr">
        <span className="bg-primary flex items-center justify-center w-7 h-7 rounded-md drop-shadow-lg drop-shadow-primary/30">
          <Plus size={12} strokeWidth={5} color="white" />
        </span>
        <h2 className="font-bold text-2xl dark:text-white text-black">
          ECM<span className="text-primary font-extrabold">+</span>
        </h2>
      </div>
      <ul className="nav-links flex items-center gap-10 dark:text-gray-300 text-black">
        {navLinksItems.map((item, idx) => (
          <motion.li className="nav-link text-md" key={idx}>
            <NavLink text={`header.${item.text}`} link={item.link} />
          </motion.li>
        ))}
      </ul>
      <div className="controllers flex items-center gap-5">
        <Button
          onClickEvent={handleChangeLanguage}
          className="flex items-center gap-2 text-primary  bg-primary/2 rounded-md py-2 px-4 text-sm hover:bg-primary/10 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <Languages size={20} />
          {lang === "ar" ? t("header.English") : t("header.Arabic")}
        </Button>
        <Button
          onClickEvent={() =>
            setMood((prev: string) => (prev === "dark" ? "light" : "dark"))
          }
          className="rounded-full inset-shadow-primary/70 bg-primary/10 p-1 cursor-pointer hover:bg-primary/50 transition-all text-primary hover:text-white"
        >
          {mood === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
