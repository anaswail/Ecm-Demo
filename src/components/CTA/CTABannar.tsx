import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { useAppContext } from "../../context/AppContext";
import Button from "../ui/Button";

interface CtaBannerProps {
  /** Override the default heading with a page-specific i18n key (e.g. on a module page). */
  titleKey?: string;
  /** Override the default supporting line. Pass null to hide it entirely. */
  descKey?: string | null;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// Sitewide conversion banner — rendered once in the shared layout, directly
// above the Footer, so every page ends with the same path to /contact.
const CtaBanner = ({
  titleKey = "cta.title",
  descKey = "cta.desc",
}: CtaBannerProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section className="w-full border-y border-border bg-bg-main px-5 py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"
      >
        <div className="flex flex-col gap-3">
          <h2
            className={`max-w-lg text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px] ${langClass}`}
          >
            {t(titleKey)}
          </h2>
          {descKey && (
            <p
              className={`max-w-lg text-[16px] leading-relaxed text-ink-muted ${langClass}`}
            >
              {t(descKey)}
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Button variant="primary" href="/contact" className={langClass}>
            {t("cta.primary")}
          </Button>
          <Button variant="secondary" href="/platform" className={langClass}>
            {t("cta.secondary")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
