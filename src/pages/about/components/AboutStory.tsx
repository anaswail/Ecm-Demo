import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

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

const AboutStory = () => {
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
        <Eyebrow text={t("about.story.eyebrow")} />
        <h2
          className={`mt-4 text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px] ${langClass}`}
        >
          {t("about.story.title")}
        </h2>
        <p
          className={`mt-6 text-[17px] leading-relaxed text-ink-muted ${langClass}`}
        >
          {t("about.story.paragraph1")}
        </p>
        <p
          className={`mt-4 text-[17px] leading-relaxed text-ink-muted ${langClass}`}
        >
          {t("about.story.paragraph2")}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutStory;
