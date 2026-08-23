import { motion } from "motion/react";

interface ICardProps {
  color: string;
  icon: string;
  title: string;
  desc: string;
  isAFeature: boolean;
  feature: string;
  isActive?: boolean;
}

const colorStyles = {
  green: {
    border: "border-green/20",
    bg: "bg-green/10",
    text: "text-green",
    shadow: "drop-shadow-green/20",
  },
  yellow: {
    border: "border-yellow/20",
    bg: "bg-yellow/10",
    text: "text-yellow",
    shadow: "drop-shadow-yellow/20",
  },
  blue: {
    border: "border-blue/20",
    bg: "bg-blue/10",
    text: "text-blue",
    shadow: "drop-shadow-blue/20",
  },
  red: {
    border: "border-red/20",
    bg: "bg-red/10",
    text: "text-red",
    shadow: "drop-shadow-red/20",
  },
};

const Card = ({
  color,
  icon,
  title,
  desc,
  isAFeature,
  feature,
  isActive,
}: ICardProps) => {
  const styles = colorStyles[color as keyof typeof colorStyles];
  return (
    <motion.div
      className={`${isActive ? "fixed top-1/2 left-1/2 -translate-1/2 w-3/4 h-80 " : "relative w-70 h-35 "}  overflow-hidden bg-bg-primary  p-5 rounded-lg border ${styles.border} flex flex-col justify-between shadow-lg shadow-${color}/20`}
    >
      {/* background icon — pushed behind content */}
      <img
        src={icon}
        alt={`${title} icon`}
        className="absolute left-1/2 top-1/2 -translate-1/2 w-16 h-16 opacity-25 pointer-events-none z-0"
      />

      {/* content — lifted above background icon */}
      <div className="relative z-10 feature-name flex justify-between items-center">
        <h2
          className={`border ${styles.border} ${styles.bg} ${styles.text} font-semibold text-xs px-2 py-1 rounded-sm`}
        >
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

      <h1 className="relative z-10 text-white text-[10px] font-bold tracking-wider">
        {title}
      </h1>
      <p className="relative z-10 text-gray-400 text-md text-[8px] tracking-wider leading-3.5">
        {desc}
      </p>
    </motion.div>
  );
};
export default Card;
