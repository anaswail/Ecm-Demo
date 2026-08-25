import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import Button from "./ui/Button";

import ecmAR from "../assets/ecmAR.webp";
import ecmEN from "../assets/ecmEN.webp";
import ecmARLight from "../assets/ecmARLight.webp";
import ecmENLight from "../assets/ecmENLight.webp";
import Card from "./ui/Card";
import {
  decorationColors,
  featuresDecorationIcons,
  features,
} from "../constants/HeroData";
import { useAppContext } from "../context/AppContext";

const Hero = () => {
  const { t } = useTranslation();
  const { lang, mood } = useAppContext();

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
          <span className="w-2 h-2 rounded-full bg-red"></span>
          {t("hero.version")}
        </div>
        <h1
          className="en-font text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white text-black text-center"
          dir="ltr"
        >
          ECM<span className="text-red">+</span>
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
          className={`cursor-pointer bg-red uppercase py-3 px-6 rounded-md drop-shadow-red/20 drop-shadow-lg text-white ${lang === "en" ? "text-xs tracking-wider" : "text-sm"} `}
        >
          {t("hero.trial")}
        </Button>
        <Button
          className={`cursor-pointer border-red border uppercase py-3 px-6 rounded-md text-red ${lang === "en" ? "text-xs tracking-wider" : "text-sm"} `}
        >
          {t("hero.demo")}
        </Button>
      </motion.div>
      <motion.div className="system-features relative overflow-visible py-8 flex justify-center items-center w-full sm:w-4/5 md:w-2/3 mt-6 sm:mt-10 z-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.75,
            }}
            style={{ willChange: "transform" }}
            className={`hidden md:block absolute ${feature.position} z-10 transform-gpu`}
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
        {lang === "en" ? (
          <img
            src={mood === "light" ? ecmENLight : ecmEN}
            alt="ECM+"
            className="w-full rounded-md"
          />
        ) : (
          <img
            src={mood === "light" ? ecmARLight : ecmAR}
            alt="ECM+"
            className="w-full rounded-md"
          />
        )}
      </motion.div>

      {/* Decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 z-0 -right-30 sm:-right-50 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-radial from-blue/10 from-0% to-blue/0 to-70%"></div>
      <div className="absolute top-0 z-0 -left-20 sm:-left-40 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-radial from-red/10 from-0% to-black/0 to-70%"></div>
      {featuresDecorationIcons.map((feature, idx) => (
        <motion.div
          animate={{
            x: [0, 14, -10, 8, -6, 0],
            y: [0, -18, 6, -12, 4, 0],
            rotate: [0, 3, -2, 2, -1, 0],
          }}
          transition={{
            duration: 14 + idx * 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: idx * 0.7,
          }}
          key={idx}
          className={`hidden lg:flex pointer-events-none opacity-80 ${decorationColors[feature.color]?.bg || "bg-gray/10"} absolute ${feature.position} border ${decorationColors[feature.color]?.border || "border-gray"} rounded-md p-3 items-center justify-center`}
        >
          <img src={feature.icon} alt="icon" className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
