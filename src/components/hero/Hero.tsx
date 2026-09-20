import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import Button from "../ui/Button";
import ScrollCue from "../ui/ScrollCue";
import { useAppContext } from "../../context/AppContext";
import ScreenshotFrame from "../ui/ScreenShotFrame";

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
  /** Optional side-by-side screenshot — switches the hero to a two-column layout. */
  visual?: string;
  visualAltKey?: string;
  backgroundImage?: string;
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
  visualAltKey,
  backgroundImage,
  showScrollCue,
}: HeroProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const onImage = Boolean(backgroundImage);
  const hasVisual = Boolean(visual);
  const shouldShowScrollCue = showScrollCue ?? onImage;
  const sectionRef = useRef<HTMLElement>(null);
  const innerGap = lang === "ar" ? "gap-8" : "gap-6";

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
        className={`relative z-10 mx-auto flex w-full max-w-6xl items-center ${
          hasVisual
            ? "flex-col gap-12 md:flex-row md:gap-16"
            : "max-w-3xl flex-col text-center"
        }`}
      >
        <div
          className={`flex flex-col ${innerGap} ${
            hasVisual
              ? "w-full text-center md:w-[45%] md:text-start"
              : "items-center"
          }`}
        >
          {eyebrowKey && (
            <motion.span
              variants={item}
              className={`w-fit self-center rounded-full border px-4 py-1 text-[13px] font-medium ${
                hasVisual ? "md:self-start" : ""
              } ${
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
            className={`text-[40px] leading-[1.1] font-semibold tracking-tight max-w-3xl ${
              lang === "ar" ? "md:leading-[1.3]" : "md:leading-[1.05]"
            } ${onImage ? "text-inverse" : "text-ink"} ${visual ? "md:text-[5xl] sm:text-[4xl]" : " sm:text-5xl md:text-[56px]"} ${langClass}`}
          >
            {t(titleKey.mainTitle)}
            {titleKey.accentWord && (
              <>
                {" "}
                <span className="relative text-primary">
                  {t(titleKey.accentWord)}
                  <svg
                    className={`absolute ${lang === "ar" ? "bottom-0" : "-bottom-3"} left-0 h-3 w-full`}
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
              </>
            )}
          </motion.h1>

          {descKey && (
            <motion.p
              variants={item}
              className={`max-w-2xl text-lg  ${
                lang === "ar" ? "leading-loose" : "leading-normal"
              } ${hasVisual ? "sm:text-[16px]" : "self-center sm:text-[19px]"} ${onImage ? "text-inverse-muted" : "text-ink"} ${langClass}`}
            >
              {t(descKey)}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={item}
              className={`flex flex-wrap items-center ${visual ? "justify-start" : "justify-center mt-2 "} gap-4`}
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
        </div>

        {hasVisual && (
          <motion.div variants={item} className="w-full md:w-[52%]">
            <ScreenshotFrame
              src={visual as string}
              alt={visualAltKey ? t(visualAltKey) : ""}
            />
          </motion.div>
        )}
      </motion.div>

      {shouldShowScrollCue && (
        <ScrollCue
          onClick={scrollToNext}
          invert={onImage}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        />
      )}
    </section>
  );
};

export default Hero;
