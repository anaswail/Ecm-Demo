import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { useAppContext } from "../../../../context/AppContext";
import ModuleCard from "../ui/ModuleCard";
import { modules } from "../../../../data/home/ModulesData";
import Eyebrow from "../../../../components/ui/Eyebrow";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Modules = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section className="w-full border-b border-border bg-bg-primary px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow text="home.solution.eyebrow" />
          <h2
            className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {t("home.solution.title")}
          </h2>
          <p
            className={`mt-4 text-[17px] text-ink-muted ${lang === "ar" ? "md:leading-[1.3]" : "md:leading-[1.05]"} ${langClass}`}
          >
            {t("home.solution.desc")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 rounded-md border border-border md:grid-cols-2 lg:grid-cols-4"
        >
          {modules.map((module, i) => (
            <ModuleCard
              key={module.titleKey}
              module={module}
              isLast={i === modules.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Modules;
