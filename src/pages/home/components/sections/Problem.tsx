import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { useAppContext } from "../../../../context/AppContext";
import { tags } from "../../../../data/home/ProblemData";
import problemDiagram from "../../../../assets/problem-before-ecm.svg";
import Eyebrow from "../../../../components/ui/Eyebrow";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Problem = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section className="w-full bg-bg-primary px-5 py-10 sm:py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-12">
        {/* Left: the challenge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col gap-6"
        >
          <Eyebrow text="problem.eyebrow" />

          <h1
            className={`max-w-lg text-[40px] font-bold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {t("problem.title")}
          </h1>

          <p
            className={`max-w-lg text-[18px] leading-relaxed text-ink-muted ${langClass}`}
          >
            {t("problem.desc")}
          </p>

          <blockquote
            className={`max-w-lg  border-primary  ${lang === "ar" ? "border-r-2 pr-4" : "border-l-2 pl-4"} text-[16px] italic leading-relaxed text-ink ${langClass}`}
          >
            {t("problem.quote")}
          </blockquote>

          <div
            className={`flex flex-wrap items-center gap-2 text-[13px] font-medium text-ink-muted  ${langClass}`}
          >
            {tags.map((tagKey, i) => (
              <span key={tagKey} className="flex items-center gap-2">
                <span>{t(tagKey)}</span>
                {i < tags.length - 1 && (
                  <span aria-hidden="true" className="text-border">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: illustration (placeholder — swap asset here later) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex justify-center md:justify-end"
        >
          <img src={problemDiagram} alt="Problem Diagram" />
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
