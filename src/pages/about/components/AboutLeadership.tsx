import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import EngKhaled from "../../../assets/eng-khaled.png";

import { useAppContext } from "../../../context/AppContext";
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
    <section className="w-full border-b border-border bg-bg-primary px-5 py-20 sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto max-w-2xl"
      >
        <Eyebrow text={t("about.leadership.eyebrow")} />

        <div className="mt-6 flex items-start gap-5 rounded-md border border-border p-6">
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
        </div>
      </motion.div>
    </section>
  );
};

export default AboutLeadership;
