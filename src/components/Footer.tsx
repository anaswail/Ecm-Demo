import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Mail, Plus } from "lucide-react";

import NavLink from "./header/NavLink";

// Same four items as Header — the footer nav should never drift from it.
const navLinksItems = [
  { text: "home", link: "#home" },
  { text: "about", link: "#about" },
  { text: "modules", link: "#modules" },
  { text: "customers", link: "#customers" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden pt-16 sm:pt-20 pb-8 px-5 sm:px-8 md:px-12">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-transparent" />

      {/* Decorations — same red/blue pair used site-wide */}
      <div className="pointer-events-none absolute bottom-0 -left-40 z-0 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-radial from-primary/10 from-0% to-black/0 to-70%" />
      <div className="pointer-events-none absolute -top-40 -right-40 z-0 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-radial from-blue/10 from-0% to-blue/0 to-70%" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12"
      >
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-sm">
            <div className="logo en-font flex items-center gap-2">
              <span className="bg-primary flex items-center justify-center w-7 h-7 rounded-md drop-shadow-lg drop-shadow-primary/30">
                <Plus size={12} strokeWidth={5} color="white" />
              </span>
              <h2 className="font-bold text-2xl dark:text-white text-black">
                ECM<span className="text-primary font-extrabold">+</span>
              </h2>
            </div>
            <p className="dark:text-gray-400 text-gray-600 text-sm tracking-wider leading-6">
              {t("footer.desc")}
            </p>
            <motion.a
              href="mailto:"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 w-fit text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <Mail size={16} />
              {t("footer.contact")}
            </motion.a>
          </div>

          {/* Nav — identical items/links to Header, same NavLink component
              so the hover animation matches exactly */}
          <ul className="flex flex-row flex-wrap md:flex-col gap-x-8 gap-y-4 dark:text-gray-300 text-black">
            {navLinksItems.map((item, idx) => (
              <li className="text-sm" key={idx}>
                <NavLink text={`header.${item.text}`} link={item.link} />
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-t-gray-200 dark:border-t-gray-800">
          <p className="text-xs text-gray-500 text-center md:text-start">
            © {new Date().getFullYear()} ECM+. {t("footer.rights")}
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
