import { useTranslation } from "react-i18next";
import { moduleDetails } from "../../../../data/platform/ModuleDetailsData";
import ModuleDetails from "../ui/ModuleDetails";
import { motion } from "motion/react";
import Eyebrow from "../../../../components/ui/Eyebrow";
import { useAppContext } from "../../../../context/AppContext";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ModulesDetails = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="  max-w-2xl mx-20 pt-20 sm:pt-24 "
      >
        <Eyebrow text="platform.moduleDetails.heading.eyebrow" />
        <h2
          className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
        >
          {t("platform.moduleDetails.heading.title")}
        </h2>
        <p
          className={`mt-4 text-[17px] text-ink-muted ${lang === "ar" ? "leading-8" : "leading-relaxed"} ${langClass}`}
        >
          {t("platform.moduleDetails.heading.desc")}
        </p>
      </motion.div>

      {moduleDetails.map((module) => (
        <ModuleDetails key={module.id} module={module} />
      ))}
    </>
  );
};

export default ModulesDetails;
