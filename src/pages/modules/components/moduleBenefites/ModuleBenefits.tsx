import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import type { ModuleBenefitsSection } from "../../../../data/modules/ModulesBenefitsData";
import { useAppContext } from "../../../../context/AppContext";
import Eyebrow from "../../../../components/ui/Eyebrow";

type ModuleBenefitsProps = ModuleBenefitsSection;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ModuleBenefits = ({
  eyebrowKey,
  titleKey,
  descKey,
  items,
}: ModuleBenefitsProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section className="w-full border-y border-border bg-bg-main px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow text={t(`${eyebrowKey}`)} />
          <h2
            className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {t(titleKey)}
          </h2>
          <p
            className={`mt-4 text-[17px] leading-relaxed text-ink-muted ${langClass}`}
          >
            {t(descKey)}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 rounded-md border border-border sm:grid-cols-2"
        >
          {items.map(
            (
              { icon: Icon, titleKey: itemTitleKey, descKey: itemDescKey },
              i,
            ) => {
              const isRightCol = i % 2 === 1;
              // const isBottomRow = i >= items.length - 2;
              return (
                <div
                  key={itemTitleKey}
                  className={`flex flex-col gap-4 border-b border-border bg-bg-primary p-8 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 ${
                    isRightCol ? "" : "sm:border-e sm:border-border"
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3
                    className={`text-[17px] font-semibold leading-snug text-ink ${langClass}`}
                  >
                    {t(itemTitleKey)}
                  </h3>
                  <p
                    className={`text-[14.5px] leading-relaxed text-ink-muted ${langClass}`}
                  >
                    {t(itemDescKey)}
                  </p>
                </div>
              );
            },
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ModuleBenefits;
