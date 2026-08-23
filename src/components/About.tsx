import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  colorStyles,
  decorations,
  featuresCards,
  type Feature,
} from "../constants/AboutData";
import FeatureModal from "./feature/FeatureModal";

const cardAnimation = {
  initial: { y: 60, opacity: 0 },
  moved: { y: 0, opacity: 1 },
};

const About = () => {
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);
  const titleId = useId();

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
    <div className="relative overflow-hidden min-h-screen px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-12 py-24">
      {/* Decorative radial blobs — green/yellow to read as a distinct
          section from the hero's blue/red pairing */}
      <div className="pointer-events-none absolute top-0 -left-40 z-0 w-125 h-125 rounded-full bg-radial from-green/10 from-0% to-black/0 to-70%" />
      <div className="pointer-events-none absolute bottom-0 -right-40 z-0 w-150 h-150 rounded-full bg-radial from-yellow/10 from-0% to-black/0 to-70%" />

      {/* Floating system-icon badges */}
      {decorations.map((decoration, idx) => {
        const styles = colorStyles[decoration.color];
        return (
          <motion.div
            key={idx}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            animate={{
              x: [0, 10, -8, 6, -4, 0],
              y: [0, -12, 5, -8, 3, 0],
              rotate: [0, 3, -2, 2, -1, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: decoration.delay },
              default: {
                duration: decoration.duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: decoration.delay,
              },
            }}
            style={{ willChange: "transform" }}
            className={`pointer-events-none absolute ${decoration.position} z-0 hidden sm:flex items-center justify-center border ${styles.border} ${styles.bg} rounded-md p-2`}
          >
            <img src={decoration.icon} alt="" className="w-6 h-6" />
          </motion.div>
        );
      })}

      <div className="relative text-content z-10">
        <h1 className="text-4xl font-bold dark:text-white">
          What is <span className="text-red">ECM+</span>
        </h1>
        <div className="relative mt-8">
          <div className="bg-linear-to-b from-red to-black/0 w-0.5 h-full absolute top-0 left-0" />
          <p className="text-lg text-gray-300 max-w-140 ml-6 leading-8">
            ECM+ is an integrated Enterprise Content Management system that
            centralizes documents, content, meetings, and business processes in
            one platform, helping organizations streamline workflows, improve
            collaboration, and manage information efficiently.
          </p>
        </div>
      </div>

      <motion.div
        className="relative z-10 grid grid-cols-2 gap-3"
        initial="initial"
        whileInView="moved"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15, duration: 0.8 }}
      >
        {featuresCards.map((feature) => {
          const styles = colorStyles[feature.color];

          return (
            <motion.button
              type="button"
              key={feature.featureShortName}
              variants={cardAnimation}
              whileHover={{ y: -2 }}
              onClick={() => setActiveFeature(feature)}
              aria-haspopup="dialog"
              className={`group cursor-pointer relative w-68 h-40 rounded-md border border-white/5 bg-bg-primary/50 overflow-hidden text-left transition-colors hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 ${styles.ring}`}
            >
              <div
                className={`absolute inset-0 bg-radial ${styles.glow} from-0% to-90% to-black/0 opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative h-full p-5 flex flex-col justify-between">
                <span
                  className={`inline-flex w-fit items-center border ${styles.border} ${styles.bg} ${styles.text} text-xs font-semibold px-2 py-1 rounded-sm`}
                >
                  {feature.featureShortName}
                </span>
                <span className="text-sm text-gray-300 pr-16">
                  {feature.featureName}
                </span>
              </div>
              <img
                src={feature.icon}
                alt=""
                className="w-16 h-16 absolute right-4 bottom-4 opacity-80 transition-transform duration-300 "
              />
            </motion.button>
          );
        })}
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
