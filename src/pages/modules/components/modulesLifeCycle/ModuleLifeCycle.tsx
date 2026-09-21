import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

import type { ModuleLifecycle as ModuleLifecycleData } from "../../../../data";
import { useAppContext } from "../../../../context/AppContext";
import Eyebrow from "../../../../components/ui/Eyebrow";

type ModuleLifecycleProps = ModuleLifecycleData;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const ModuleLifecycle = ({
  eyebrowKey,
  titleKey,
  descKey,
  items,
}: ModuleLifecycleProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const isRtl = lang !== "en";

  return (
    <section className="w-full border-b border-border bg-bg-main px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow text={t(eyebrowKey)} />

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

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="flex flex-col gap-y-10 lg:flex-row lg:items-start lg:gap-x-6 lg:gap-y-0"
        >
          {items.map(
            (
              { icon: Icon, titleKey: itemTitleKey, descKey: itemDescKey },
              i,
            ) => {
              const isLast = i === items.length - 1;
              return (
                <motion.li
                  key={itemTitleKey}
                  variants={fadeUp}
                  className="relative flex-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg-main text-ink">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="en-font text-[12px] font-semibold tracking-[0.2em] text-primary">
                      0{i + 1}
                    </span>
                  </div>

                  <h3
                    className={`mt-3 text-[15.5px] font-semibold leading-snug text-ink ${langClass}`}
                  >
                    {t(itemTitleKey)}
                  </h3>
                  <p
                    className={`mt-1.5 text-[13.5px] leading-relaxed text-ink-muted ${langClass}`}
                  >
                    {t(itemDescKey)}
                  </p>

                  {!isLast && (
                    <>
                      {/* Horizontal connector, lg and up */}
                      <span
                        aria-hidden="true"
                        className={`absolute top-[18px] hidden -translate-y-1/2 text-ink-muted lg:block ${
                          isRtl ? "-left-5" : "-right-5"
                        }`}
                      >
                        <ArrowRight
                          size={14}
                          className={isRtl ? "rotate-180" : ""}
                        />
                      </span>

                      {/* Vertical connector, below lg */}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-6 left-[17px] text-ink-muted lg:hidden"
                      >
                        <ChevronDown size={14} />
                      </span>
                    </>
                  )}
                </motion.li>
              );
            },
          )}
        </motion.ol>
      </div>
    </section>
  );
};

export default ModuleLifecycle;
