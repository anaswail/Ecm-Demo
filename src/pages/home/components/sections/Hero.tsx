import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import Button from "../../../../components/ui/Button";
import { useAppContext } from "../../../../context/AppContext";

interface HeroCta {
  labelKey: string;
  onClick?: () => void;
  href?: string;
}

interface HeroProps {
  /** Section id for anchor links / nav scrolling */
  id?: string;
  /** Optional small tag shown above the title, e.g. "DMS" on a module page. Omit for a plain hero (Home doesn't need one). */
  eyebrowKey?: string;
  /** i18n key for the heading — required, each page owns its own copy */
  titleKey: string;
  /** i18n key for the supporting paragraph */
  descKey?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /** Optional content rendered below the CTAs — e.g. the module flow diagram on Home. Keeps this one component reusable across every page. */
  visual?: ReactNode;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Hero = ({
  id = "hero",
  eyebrowKey,
  titleKey,
  descKey,
  primaryCta,
  secondaryCta,
  visual,
}: HeroProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section
      id={id}
      className="relative w-full bg-bg-primary px-5 py-24 sm:py-28 min-h-screen"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={`mx-auto flex max-w-3xl flex-col items-center text-center ${lang === "ar" ? "gap-8" : "gap-6"}`}
      >
        {eyebrowKey && (
          <motion.span
            variants={item}
            className={`text-[13px] font-medium text-primary-hover ${langClass}`}
          >
            {t(eyebrowKey)}
          </motion.span>
        )}

        <motion.h1
          variants={item}
          className={`text-[40px] leading-[1.1] font-semibold tracking-tight text-ink sm:text-5xl md:text-[56px] md:leading-[1.05] ${langClass}`}
        >
          {t(titleKey)}
        </motion.h1>

        {descKey && (
          <motion.p
            variants={item}
            className={`max-w-2xl text-lg text-ink-muted sm:text-[19px] ${lang === "ar" ? "leading-loose" : "leading-normal"} ${langClass}`}
          >
            {t(descKey)}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            variants={item}
            className="mt-2 flex flex-wrap items-center justify-center gap-3"
          >
            {primaryCta && (
              <Button
                variant="primary"
                href={primaryCta.href}
                onClick={primaryCta.onClick}
              >
                {t(primaryCta.labelKey)}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant="secondary"
                href={secondaryCta.href}
                onClick={secondaryCta.onClick}
              >
                {t(secondaryCta.labelKey)}
              </Button>
            )}
          </motion.div>
        )}

        {visual && (
          <motion.div variants={item} className="mt-8 w-full">
            {visual}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
