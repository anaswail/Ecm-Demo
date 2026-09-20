import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Check } from "lucide-react";

import Button from "../../../../components/ui/Button";
import { useAppContext } from "../../../../context/AppContext";
import type { ModuleDetailItem } from "../../../../data/platform/ModuleDetailsData";
import ScreenshotFrame from "../../../../components/ui/ScreenShotFrame";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

interface ModuleDetailsProps {
  module: ModuleDetailItem;
}

const ModuleDetails = ({ module }: ModuleDetailsProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const isRtl = lang !== "en";
  const base = `platform.moduleDetails.${module.id}`;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="w-full border-b border-border bg-bg-primary px-5 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Content */}
        <div className={module.reverse ? "md:order-2" : ""}>
          <span
            className={`inline-block rounded-full border border-border bg-primary/10 px-2.5 py-0.5 text-[12px] font-medium text-primary-hover ${langClass}`}
          >
            {t(`${base}.tag`)}
          </span>

          <h3
            className={`mt-4 text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px] ${langClass}`}
          >
            {t(`${base}.title`)}
          </h3>

          <p
            className={`mt-4 max-w-xl text-[17px] text-ink-muted ${
              isRtl ? "leading-8" : "leading-relaxed"
            } ${langClass}`}
          >
            {t(`${base}.desc`)}
          </p>

          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {module.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-2.5">
                <Check
                  size={16}
                  className="mt-1 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className={`text-[15px] text-ink ${langClass}`}>
                  {t(`${base}.capabilities.${capability}`)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button variant="primary" href={module.href}>
              {t(`${base}.cta`)}
            </Button>
          </div>
        </div>

        <div className={module.reverse ? "md:order-1" : ""}>
          <div className="overflow-hidden rounded-md border border-border bg-bg-main">
            <ScreenshotFrame
              src={lang === "ar" ? module.image.ar : module.image.en}
              alt={module.id}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ModuleDetails;
