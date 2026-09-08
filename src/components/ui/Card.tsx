import { motion } from "motion/react";
import { useAppContext } from "../../context/AppContext";

interface ICardProps {
  color: string;
  icon: string;
  title: string;
  desc: string;
  isAFeature: boolean;
  feature: string;
  isActive?: boolean;
}

const Card = ({
  icon,
  title,
  desc,
  isAFeature,
  feature,
  isActive,
}: ICardProps) => {
  const { lang } = useAppContext();
  return (
    <motion.div
      className={`${
        isActive
          ? "fixed top-1/2 left-1/2 -translate-1/2 w-[90%] max-w-md h-auto min-h-64"
          : "relative w-full h-full min-h-44 sm:min-h-48"
      } overflow-hidden bg-gray-50 dark:bg-bg-primary p-5 rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col justify-between gap-3 shadow-sm`}
    >
      {/* background icon — pushed behind content */}
      <img
        src={icon}
        alt={`${title} icon`}
        className="absolute left-1/2 top-1/2 -translate-1/2 w-16 h-16 opacity-10 pointer-events-none z-0"
      />

      {/* content — lifted above background icon */}
      <div className="relative z-10 feature-name flex justify-between items-center">
        <h2 className="border border-primary/20 bg-primary/10 text-primary font-semibold text-xs px-2 py-1 rounded-sm">
          {feature}
        </h2>
        {isAFeature && (
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-5 h-5 pointer-events-none"
          />
        )}
      </div>

      <h1
        className={`relative z-10 text-black dark:text-white ${lang === "en" ? "text-[14px]" : "text-md"} font-bold tracking-wider`}
      >
        {title}
      </h1>
      <p
        className={`relative z-10 text-gray-600 dark:text-gray-400 ${lang === "en" ? "text-xs leading-5" : "text-sm leading-6"} tracking-wider w-full`}
      >
        {desc}
      </p>
    </motion.div>
  );
};
export default Card;
