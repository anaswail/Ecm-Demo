import { ChevronDown, Contact, Languages, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import i18n from "../../i18n";
import { useAppContext } from "../../context/AppContext";
import Button from "../ui/Button";
import ecmLogo from "../../assets/ecm-logo.png";

type NavChild = { key: string; path: string };
type NavItem = { key: string; path: string; children?: NavChild[] };

const navLinksItems: NavItem[] = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "platform", path: "/platform" },
  {
    key: "modules",
    path: "/modules",
    children: [
      { key: "modulesList.dms", path: "/modules/dms" },
      { key: "modulesList.mms", path: "/modules/mms" },
      { key: "modulesList.cms", path: "/modules/cms" },
      { key: "modulesList.bpm", path: "/modules/bpm" },
    ],
  },
  { key: "customers", path: "/customers" },
  // {
  //   key: "resources",
  //   path: "/resources",
  //   children: [
  //     { key: "resourcesList.blog", path: "/resources/blog" },
  //     { key: "resourcesList.faq", path: "/resources/faq" },
  //   ],
  // },
];

const ACRONYMS = ["dms", "mms", "cms", "bpm"];
const formatSegment = (seg: string) =>
  ACRONYMS.includes(seg)
    ? seg.toUpperCase()
    : seg.charAt(0).toUpperCase() + seg.slice(1);

const Header = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  // Close the whole mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleChangeLanguage = () => {
    const next = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(next);
    setLang(next);
  };

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const toggleSubmenu = (key: string) =>
    setOpenSubmenu((prev) => (prev === key ? null : key));

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  };

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const showPathIndicator = pathSegments.length > 0;

  return (
    <motion.header className="z-40 w-full bg-white border-b border-border fixed top-0 left-0 flex justify-between items-center py-4 sm:py-5 px-5 sm:px-8 md:px-12">
      <div className="flex items-center gap-3 shrink-0">
        <Link to="/" className="flex items-center justify-center w-20">
          <img src={ecmLogo} alt="ECM Logo" />
        </Link>
        {showPathIndicator && (
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-text-secondary mx-3">
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

      {/* Desktop nav */}
      <ul className="nav-links hidden lg:flex items-center gap-10">
        {navLinksItems.map((item) =>
          item.children ? (
            <li key={item.key} className="relative group">
              <Link
                to={item.path}
                className={`flex items-center gap-1 text-[14px] font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-secondary group-hover:text-primary"
                }`}
              >
                {t(`header.${item.key}`)}
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 hidden group-hover:block z-50">
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
                        {t(`header.${child.key}.name`)}
                      </span>
                      <span className="block text-xs text-text-secondary mt-0.5">
                        {t(`header.${child.key}.desc`)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
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
          href="/contact"
          variant="primary"
          className="flex items-center gap-2 cursor-pointer text-ink-muted"
          size="sm"
        >
          <Contact size={20} />
          {t("header.contact")}
        </Button>
        <Button
          onClick={handleChangeLanguage}
          size="sm"
          className="flex items-center gap-2 text-primary bg-primary/5 hover:text-black border border-primary/20 rounded-md py-2 px-4 text-sm cursor-pointer"
        >
          <Languages size={20} />
          {lang === "ar" ? t("header.English") : t("header.Arabic")}
        </Button>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-primary"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-bg-primary border-b border-border flex flex-col gap-6 px-5 py-6 max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <ul className="flex flex-col gap-1">
              {navLinksItems.map((item) => {
                const isOpen = openSubmenu === item.key;

                if (!item.children) {
                  return (
                    <li key={item.key}>
                      <Link
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`block py-3 text-[15px] ${
                          isActive(item.path)
                            ? "text-primary font-medium"
                            : "text-text-primary"
                        }`}
                      >
                        {t(`header.${item.key}`)}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.key}
                    className="border-b border-border/60 last:border-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(item.key)}
                      aria-expanded={isOpen}
                      aria-controls={`submenu-${item.key}`}
                      className={`w-full flex items-center justify-between py-3 text-[15px] text-start ${
                        isActive(item.path) || isOpen
                          ? "text-primary font-medium"
                          : "text-text-primary"
                      }`}
                    >
                      {t(`header.${item.key}`)}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          id={`submenu-${item.key}`}
                          key="submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden flex flex-col ps-4 border-s border-border"
                        >
                          {item.children.map((child) => (
                            <li key={child.key}>
                              <Link
                                to={child.path}
                                onClick={closeMobileMenu}
                                className={`block py-2.5 rounded-md ${
                                  isActive(child.path) ? "text-primary" : ""
                                }`}
                              >
                                <span className="block text-[14px] font-medium text-text-primary">
                                  {t(`header.${child.key}.name`)}
                                </span>
                                <span className="block text-xs text-text-secondary mt-0.5">
                                  {t(`header.${child.key}.desc`)}
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li className="pb-2">
                            <Link
                              to={item.path}
                              onClick={closeMobileMenu}
                              className="block py-2 text-xs text-primary"
                            >
                              {t(`header.${item.key}`)} →
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 cursor-pointer text-ink-muted py-2 px-4 text-sm border border-primary "
              >
                <Contact size={18} />
                {t("header.contact")}
              </Button>
              <Button
                onClick={handleChangeLanguage}
                className="flex items-center gap-2 text-primary bg-primary/5 rounded-md py-2 px-4 text-sm border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <Languages size={18} />
                {lang === "ar" ? t("header.English") : t("header.Arabic")}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
