import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

interface ScrollCueProps {
  onClick: () => void;
  /** True on a photo/dark hero — switches to the inverse tokens. */
  invert?: boolean;
  className?: string;
}

const ScrollCue = ({
  onClick,
  invert = false,
  className = "",
}: ScrollCueProps) => {
  const { t } = useTranslation();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      aria-label={t("common.scrollDown", "Scroll down")}
      className={`group flex cursor-pointer flex-col items-center gap-3 ${className}`}
    >
      <span
        className={`text-[11px] font-medium tracking-wide transition-colors duration-150 ${
          invert
            ? "text-inverse-muted group-hover:text-inverse"
            : "text-ink-muted group-hover:text-ink"
        }`}
      >
        {t("common.scroll", "Scroll")}
      </span>

      <span
        className={`relative h-10 w-px overflow-hidden ${invert ? "bg-inverse/25" : "bg-border"}`}
      >
        <motion.span
          className="absolute left-0 top-0 h-3 w-px bg-primary"
          animate={{ y: [-4, 44] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.button>
  );
};

export default ScrollCue;
