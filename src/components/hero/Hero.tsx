import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import Button from "../ui/Button";
import { useAppContext } from "../../context/AppContext";

interface HeroCta {
  labelKey: string;
  onClick?: () => void;
  href?: string;
}

interface HeroTitle {
  mainTitle: string;
  accentWord?: string;
}

interface HeroProps {
  id?: string;
  eyebrowKey?: string;
  titleKey: HeroTitle;
  descKey?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  visual?: string;
  backgroundImage?: string;
  /** Defaults to true when backgroundImage is set (full-height hero), false otherwise. */
  showScrollCue?: boolean;
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
  backgroundImage,
  showScrollCue = true,
}: HeroProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const onImage = Boolean(backgroundImage);
  const shouldShowScrollCue = showScrollCue ?? onImage;
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNext = () => {
    const el = sectionRef.current;
    if (!el) return;
    window.scrollTo({ top: el.offsetHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden px-5 ${
        onImage ? "min-h-[85vh] md:min-h-screen" : "py-24 md:py-28"
      } ${onImage ? "" : "bg-bg-primary"}`}
    >
      {onImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/60" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 45%, var(--color-ink) 0%, transparent 70%)",
              opacity: 0.55,
            }}
          />
        </>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={`relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center ${
          lang === "ar" ? "gap-8" : "gap-6"
        }`}
      >
        {eyebrowKey && (
          <motion.span
            variants={item}
            className={`rounded-full border px-4 py-1 text-[13px] font-medium ${
              onImage
                ? "border-inverse/25 bg-inverse/10 text-inverse"
                : "border-border bg-primary/10 text-primary-hover"
            } ${langClass}`}
          >
            {t(eyebrowKey)}
          </motion.span>
        )}

        <motion.h1
          variants={item}
          className={`text-[40px] leading-[1.1] font-semibold tracking-tight sm:text-5xl md:text-[56px] ${
            lang === "ar" ? "md:leading-[1.3]" : "md:leading-[1.05]"
          } ${onImage ? "text-inverse" : "text-ink"} ${langClass}`}
        >
          {t(titleKey.mainTitle)}{" "}
          <span className="relative text-primary">
            {t(`${titleKey.accentWord ?? ""}`)}
            <svg
              className={`absolute ${lang === "ar" ? "bottom-0" : "-bottom-3"}  left-0 h-3 w-full`}
              viewBox="0 0 200 20"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 12 C35 4, 70 18, 105 10 S165 5, 198 11"
                stroke="var(--color-primary)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {descKey && (
          <motion.p
            variants={item}
            className={`max-w-2xl text-lg sm:text-[19px] ${
              lang === "ar" ? "leading-loose" : "leading-normal"
            } ${onImage ? "text-inverse-muted" : "text-ink"} ${langClass}`}
          >
            {t(descKey)}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            variants={item}
            className="mt-2 flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCta && (
              <Button
                variant="primary"
                href={primaryCta.href}
                onClick={primaryCta.onClick}
                className={`${onImage ? "text-white" : ""}`}
              >
                {t(primaryCta.labelKey)}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant="secondary"
                href={secondaryCta.href}
                onClick={secondaryCta.onClick}
                className={`${onImage ? "text-white bg-white/5  hover:bg-primary hover:border-primary " : ""}`}
              >
                {t(secondaryCta.labelKey)}
              </Button>
            )}
          </motion.div>
        )}

        {visual && (
          <motion.div variants={item} className="mt-8 w-full">
            <img src={visual} alt="hello" />
          </motion.div>
        )}
      </motion.div>

      {shouldShowScrollCue && (
        <motion.button
          type="button"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          aria-label={t("common.scrollDown", "Scroll down")}
          className={`group absolute cursor-pointer left-1/2  z-10 flex -translate-x-1/2 items-center justify-center transition-colors duration-150 ${
            onImage ? " bottom-16" : "bottom-2 "
          }`}
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary group-hover:text-ink "
          >
            <ChevronDown size={18} />
            <ChevronDown size={18} />
            <ChevronDown size={18} />
          </motion.span>
        </motion.button>
      )}
    </section>
  );
};

export default Hero;
