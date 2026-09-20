import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { useAppContext } from "../../context/AppContext";
import Button from "../../components/ui/Button";
import NotFoundIllustration from "./NotFoundIllustration";

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

const NotFoundPage = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-bg-primary px-5 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-md flex-col items-center gap-2 text-center"
      >
        <motion.span
          variants={item}
          className={`rounded-full border border-border bg-primary/10 px-4 py-1 text-[13px] font-medium text-primary-hover ${langClass}`}
        >
          {t("notFound.eyebrow")}
        </motion.span>

        {/* The numeral carries the page's one moment of personality — the
            underline is the same squiggle used under the Hero's accent
            word, so it reads as a signature device, not a random flourish. */}
        <motion.div variants={item} className="relative mt-2">
          <span className="text-[96px] font-bold leading-none tracking-tight text-ink sm:text-[120px]">
            404
          </span>
          <svg
            className="absolute -bottom-1 left-0 h-4 w-full"
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
        </motion.div>

        <motion.div variants={item} className="mt-6">
          <NotFoundIllustration />
        </motion.div>

        <motion.h1
          variants={item}
          className={`mt-4 text-[24px] font-semibold leading-snug tracking-tight text-ink sm:text-[28px] ${langClass}`}
        >
          {t("notFound.title")}
        </motion.h1>

        <motion.p
          variants={item}
          className={`mt-2 max-w-sm text-[15.5px] leading-relaxed text-ink-muted ${langClass}`}
        >
          {t("notFound.desc")}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="primary" href="/">
            {t("notFound.primaryCta")}
          </Button>
          <Button variant="secondary" href="/contact">
            {t("notFound.secondaryCta")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;
