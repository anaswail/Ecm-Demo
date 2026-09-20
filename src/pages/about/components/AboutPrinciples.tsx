import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { useAppContext } from "../../../context/AppContext";
import { principles } from "../../../data/about/AboutData";
import Eyebrow from "../../../components/ui/Eyebrow";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// Deliberately a plain divided list, not a card grid — visual variety
// against the rest of the site, which leans heavily on bordered cards.
const AboutPrinciples = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section className="w-full border-b border-border bg-bg-main px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          <Eyebrow text={t("about.principles.eyebrow")} />
          <h2
            className={`mt-4 text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px] ${langClass}`}
          >
            {t("about.principles.title")}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {principles.map((principle, i) => (
            <div
              key={principle.titleKey}
              className={`flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-8 ${
                i === 0 ? "" : "border-t border-border"
              }`}
            >
              <span className="shrink-0 text-[13px] font-semibold text-ink-muted sm:w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  className={`text-[17px] font-semibold text-ink ${langClass}`}
                >
                  {t(principle.titleKey)}
                </h3>
                <p
                  className={`mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-muted ${langClass}`}
                >
                  {t(principle.descKey)}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPrinciples;
