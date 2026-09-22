import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import EngKhaled from "../../../assets/eng-khaled.png";

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

const AboutLeadership = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section className="w-full border-b border-border bg-bg-main px-5 pt-20 pb-10 sm:pt-24 sm:pb-10">
      <div className="mx-auto max-w-5xl">
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

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          {/* Leadership card — now acts as the section's intro/sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-start gap-5 rounded-md border border-border p-6 lg:sticky lg:top-24 lg:h-fit lg:flex-col lg:items-start lg:gap-4"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full overflow-hidden border border-border bg-bg-main text-ink-muted">
              <img src={EngKhaled} alt="" />
            </span>
            <div>
              <h3 className={`text-[18px] font-semibold text-ink ${langClass}`}>
                {t("about.leadership.name")}
              </h3>
              <p
                className={`text-[14px] font-medium text-primary-hover ${langClass}`}
              >
                {t("about.leadership.role")}
              </p>
              <p
                className={`mt-3 text-[15px] leading-relaxed text-ink-muted ${langClass}`}
              >
                {t("about.leadership.bio")}
              </p>
            </div>
          </motion.div>

          {/* Principles list fills the remaining space */}
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
                  i === 0 ? "pt-0" : "border-t border-border"
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
      </div>
    </section>
  );
};

export default AboutLeadership;
