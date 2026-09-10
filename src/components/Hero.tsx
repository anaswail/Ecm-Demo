import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import Button from "./ui/Button";
import Card from "./ui/Card";
import {
  decorationColors,
  featuresDecorationIcons,
  features,
} from "../data/home/HeroData";
import { useAppContext } from "../context/AppContext";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();

  return (
    <div
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center gap-10 sm:gap-14 overflow-hidden pt-32 sm:pt-40 px-5"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -75,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.75,
        }}
        className="text-content flex flex-col justify-center items-center gap-5 sm:gap-6"
      >
        <div className="version-text flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-bg-primary border-gray-300 dark:border-gray-600 border py-1.5 px-3 text-[10px] uppercase rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          {t("hero.version")}
        </div>
        <h1
          className="en-font text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white text-black text-center"
          dir="ltr"
        >
          ECM<span className="text-primary">+</span>
        </h1>
        <p
          className={`dark:text-gray-400 text-gray-600 text-center text-sm sm:text-md w-full sm:w-3/4 ${lang === "en" ? "md:w-1/2 leading-6" : "md-3/4 font-semibold leading-8"}   tracking-wide`}
        >
          {t("hero.desc")}
        </p>
      </motion.div>
      <motion.div
        initial={{
          scale: 0.75,
          opacity: 0,
        }}
        animate={{
          scale: [0.75, 1.1, 0.9, 1],
          opacity: [0, 0.75, 1, 1],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.5, 0.75, 1],
        }}
        className="btns flex items-center gap-4 flex-wrap justify-center"
      >
        <Button
          className={`cursor-pointer bg-primary uppercase py-3 px-6 rounded-md shadow-sm hover:bg-primary/90 transition-colors duration-200 text-white ${lang === "en" ? "text-xs tracking-wider" : "text-sm"} `}
        >
          {t("hero.trial")}
        </Button>
        <Button
          className={`cursor-pointer border-primary border uppercase py-3 px-6 rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-200 ${lang === "en" ? "text-xs tracking-wider" : "text-sm"} `}
        >
          {t("hero.demo")}
        </Button>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="system-features relative w-full max-w-6xl mx-auto mt-6 sm:mt-10 z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card
              feature={feature.feature}
              title={t(feature.title)}
              desc={t(feature.desc)}
              color={feature.color}
              isAFeature={true}
              icon={feature.icon}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 z-0 -right-30 sm:-right-50 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-radial from-primary/10 from-0% to-primary/0 to-70%"></div>
      <div className="absolute top-0 z-0 -left-20 sm:-left-40 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-radial from-primary/5 from-0% to-primary/0 to-70%"></div>
      {featuresDecorationIcons.map((feature, idx) => (
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6 + idx * 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: idx * 0.5,
          }}
          key={idx}
          className={`hidden lg:flex pointer-events-none opacity-40 ${decorationColors[feature.color]?.bg || "bg-gray/10"} absolute ${feature.position} border ${decorationColors[feature.color]?.border || "border-gray"} rounded-md p-3 items-center justify-center`}
        >
          <img src={feature.icon} alt="icon" className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
