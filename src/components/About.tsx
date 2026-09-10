import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  decorations,
  featuresCards,
  type Feature,
} from "../data/home/AboutData";
import FeatureModal from "./feature/FeatureModal";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/AppContext";

const cardAnimation = {
  initial: { y: 60, opacity: 0 },
  moved: { y: 0, opacity: 1 },
};

const About = () => {
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);
  const { t } = useTranslation();
  const titleId = useId();
  const { lang } = useAppContext();

  // Escape-to-close + scroll lock, scoped to whichever feature is open
  useEffect(() => {
    if (!activeFeature) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveFeature(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeFeature]);

  return (
    <div
      id="about"
      className="relative overflow-hidden min-h-screen px-5 sm:px-8 md:px-20 flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-12 py-16 sm:py-24"
    >
      {/* Decorative radial blobs — same accent as every other section, at two opacities for depth */}
      <div
        className={`pointer-events-none absolute  ${lang === "en" ? "top-0 -left-40" : "bottom-0 -right-40"}  z-0 w-80 sm:w-125 h-80 sm:h-125 rounded-full bg-radial from-primary/10 from-0% to-primary/0 to-70%`}
      />
      <div
        className={`pointer-events-none absolute ${lang !== "en" ? "top-0 -left-40" : "bottom-0 -right-40"} z-0 w-90 sm:w-150 h-90 sm:h-150 rounded-full bg-radial from-primary/5 from-0% to-primary/0 to-70%`}
      />

      {/* Floating system-icon badges */}
      {decorations.map((decoration, idx) => (
        <motion.div
          key={idx}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: decoration.delay },
            default: {
              duration: 6 + idx * 0.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: decoration.delay,
            },
          }}
          style={{ willChange: "transform" }}
          className={`pointer-events-none absolute ${decoration.position} z-0 hidden lg:flex items-center justify-center border border-primary/20 bg-primary/10 rounded-md p-2`}
        >
          <img src={decoration.icon} alt="" className="w-6 h-6" />
        </motion.div>
      ))}

      <div className="relative text-content z-10 w-full md:w-auto">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-black dark:text-white text-center ${
            lang === "en" ? "md:text-left" : "md:text-right"
          }`}
        >
          {t("about.title")} <span className="text-primary">ECM+</span>
        </h1>

        <div className="relative mt-8">
          <div
            className={`bg-linear-to-b from-primary to-black/0 w-0.5 h-full absolute top-0 ${
              lang === "en" ? "left-0" : "right-0"
            }`}
          />

          <p
            className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-full sm:max-w-140 leading-7 sm:leading-8 ${
              lang === "en" ? "ml-6" : "mr-6"
            }`}
          >
            {t("about.desc")}
          </p>
        </div>
      </div>

      <motion.div
        className="relative z-10 grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 w-full md:w-auto"
        initial="initial"
        whileInView="moved"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15, duration: 0.8 }}
      >
        {featuresCards.map((feature) => (
          <motion.button
            type="button"
            key={feature.featureShortName}
            variants={cardAnimation}
            whileHover={{ y: -2 }}
            onClick={() => setActiveFeature(feature)}
            aria-haspopup="dialog"
            className="group cursor-pointer relative w-full md:w-68 h-auto min-h-32 sm:min-h-36 md:h-40 rounded-md border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-bg-primary/50 overflow-hidden text-left transition-colors hover:border-black/10 dark:hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 ring-primary/40"
          >
            <div className="absolute inset-0 bg-radial from-primary/15 from-0% to-90% to-black/0 opacity-20 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative h-full p-4 sm:p-5 flex flex-col justify-between gap-6">
              <span className="inline-flex w-fit items-center border border-primary/20 bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-sm">
                {feature.featureShortName}
              </span>
              <span
                className={`${lang === "en" ? "text-sm" : "text-md "} font-semibold  text-gray-700 dark:text-gray-300 pr-12 sm:pr-14 md:pr-16 line-clamp-2`}
              >
                {t(feature.featureName)}
              </span>
            </div>
            <img
              src={feature.icon}
              alt=""
              className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 absolute right-3 sm:right-4 bottom-3 sm:bottom-4 opacity-80 transition-transform duration-300"
            />
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeFeature && (
          <FeatureModal
            feature={activeFeature}
            titleId={titleId}
            onClose={() => setActiveFeature(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
