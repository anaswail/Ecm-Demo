import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Building2 } from "lucide-react";

import { useAppContext } from "../../../context/AppContext";
import { partners } from "../../../data/about/AboutData";
import Eyebrow from "../../../components/ui/Eyebrow";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const AboutPartners = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section className="w-full bg-bg-primary px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-10 max-w-2xl"
        >
          <Eyebrow text={t("about.partners.eyebrow")} />
          <h2
            className={`mt-4 text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[28px] ${langClass}`}
          >
            {t("about.partners.title")}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-2 gap-10 sm:grid-cols-3"
        >
          {partners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-32 items-center justify-center rounded-md border border-border bg-bg-primary px-4"
            >
              {partner.logoSrc ? (
                <img
                  src={partner.logoSrc}
                  alt={partner.name}
                  className="h-20 w-auto object-contain"
                />
              ) : (
                <span className="flex items-center gap-2 text-[13px] text-ink-muted">
                  <Building2 size={16} />
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPartners;
