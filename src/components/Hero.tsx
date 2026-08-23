import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import Button from "./ui/Button";

import ecm from "../assets/ecm.webp";
import Card from "./ui/Card";
import {
  decorationColors,
  featuresDecorationIcons,
  features,
} from "../constants/HeroData";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center gap-14 overflow-hidden pt-40">
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
        className="text-content flex flex-col justify-center items-center gap-6"
      >
        <div className="version-text flex items-center justify-center gap-2 text-gray-400 bg-bg-primary border-gray-600 border py-1.5 px-3 text-[10px] uppercase rounded-full">
          <span className="w-2 h-2 rounded-full bg-red"></span>
          {t("hero.version")}
        </div>
        <h1 className="text-6xl font-bold dark:text-white text-black">
          ECM<span className="text-red">+</span>
        </h1>
        <p className="dark:text-gray-400 text-gray-700 text-center text-md w-1/2 tracking-wider  ">
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
        className="btns flex items-center gap-4 "
      >
        <Button className="cursor-pointer bg-red uppercase py-3 px-6 rounded-md drop-shadow-red/20 drop-shadow-lg text-white text-xs ">
          {t("hero.trial")}
        </Button>
        <Button className="cursor-pointer border-red border  uppercase py-3 px-6 rounded-md  text-red text-xs ">
          {t("hero.demo")}
        </Button>
      </motion.div>
      <motion.div className="system-features relative overflow-visible py-8 flex justify-center items-center w-2/3 mt-10 z-10 ">
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
            className={`absolute ${feature.position} z-10 transform-gpu`}
          >
            <Card
              feature={feature.feature}
              title={feature.title}
              desc={feature.desc}
              color={feature.color}
              isAFeature={true}
              icon={feature.icon}
            />
          </motion.div>
        ))}
        <img src={ecm} alt="ECM+" className="w-full rounded-md" />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b bg-black/50 rounded-md"></div>
      </motion.div>

      {/* Decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 z-0 -right-50 w-150 h-150 rounded-full bg-radial from-blue/10 from-0% to-blue/0 to-70%"></div>
      <div className="absolute top-0 z-0 -left-40 w-150 h-150 rounded-full bg-radial from-red/10 from-0% to-black/0 to-70%"></div>
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
          className={`pointer-events-none opacity-80 ${decorationColors[feature.color]?.bg || "bg-gray/10"} absolute ${feature.position} border ${decorationColors[feature.color]?.border || "border-gray"} rounded-md p-3  flex items-center justify-center `}
        >
          <img src={feature.icon} alt="icon" className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
