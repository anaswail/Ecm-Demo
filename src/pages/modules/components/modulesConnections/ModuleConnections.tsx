import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { useAppContext } from "../../../../context/AppContext";
import type { IModulesConnection } from "../../../../data";
import type { ModuleId } from "../../../../data";
import Eyebrow from "../../../../components/ui/Eyebrow";

interface ModuleConnectionsProps extends IModulesConnection {
  moduleId: ModuleId;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ModuleConnections = ({
  eyebrowKey,
  titleKey,
  descKey,
  items,
  moduleId,
}: ModuleConnectionsProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const isRtl = lang !== "en";
  const fromLabel = moduleId.toUpperCase();

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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {items.map((item) => (
            <div
              key={item.connection}
              className="flex flex-col gap-4 rounded-md border border-border bg-bg-primary p-6"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-border px-2.5 py-0.5 text-[11px] font-semibold text-ink">
                  {fromLabel}
                </span>
                <ArrowRight
                  size={14}
                  className={`text-primary ${isRtl ? "rotate-180" : ""}`}
                />
                <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                  {item.connection}
                </span>
              </div>

              <h3
                className={`text-[16px] font-semibold leading-snug text-ink ${langClass}`}
              >
                {t(item.title)}
              </h3>
              <p
                className={`text-[14px] leading-relaxed text-ink-muted ${langClass}`}
              >
                {t(item.desc)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModuleConnections;
