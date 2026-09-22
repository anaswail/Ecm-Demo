import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import ecm from "../../assets/ecm-logo.png";

import { useAppContext } from "../../context/AppContext";
import { footerColumns, legalLinks } from "../../data/footer/FooterData";

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <footer className="w-full border-t border-border bg-bg-primary px-5 pb-8 pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl flex-col gap-12"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-8">
          {/* Brand */}
          <div className="flex max-w-sm flex-col gap-5">
            <Link to="/" className=" w-20 ">
              <img src={ecm} alt="ECM+ Logo" />
            </Link>

            <p
              className={`text-sm leading-relaxed text-ink-muted ${langClass}`}
            >
              {t("footer.desc")}
            </p>

            <a
              href="mailto:info@ecmpluss.com"
              className={`flex w-fit items-center gap-2 text-sm text-ink-muted transition-colors duration-150 hover:text-primary-hover ${langClass}`}
            >
              <Mail size={16} />
              {t("footer.contact")}
            </a>
          </div>

          {/* Sitemap columns */}
          {footerColumns.map((column) => (
            <div key={column.titleKey} className="flex flex-col gap-4">
              <h3 className={`text-[13px] font-semibold text-ink ${langClass}`}>
                {t(column.titleKey)}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`text-sm text-ink-muted transition-colors duration-150 hover:text-ink ${langClass}`}
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        {/* <div className="flex flex-col gap-4 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <h3 className={`text-[15px] font-semibold text-ink ${langClass}`}>
              {t("footer.newsletter.title")}
            </h3>
            <p className={`text-sm text-ink-muted ${langClass}`}>
              {t("footer.newsletter.desc")}
            </p>
          </div>

          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("footer.newsletter.placeholder")}
              aria-label={t("footer.newsletter.placeholder")}
              className={`w-full rounded-md border border-border bg-bg-main px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none ${langClass}`}
            />
            <Button
              variant="primary"
              size="sm"
              onClick={handleSubscribe}
              className={`shrink-0 ${langClass}`}
            >
              {t("footer.newsletter.action")}
            </Button>
          </div>
        </div> */}

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-border pt-6 md:flex-row md:justify-between">
          <p className={`text-xs text-ink-muted ${langClass}`}>
            © {new Date().getFullYear()} ECM+. {t("footer.rights")}
          </p>

          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-xs text-ink-muted transition-colors duration-150 hover:text-ink ${langClass}`}
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
