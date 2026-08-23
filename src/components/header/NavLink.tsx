import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const NavLink = ({ text }: { text: string; link: string }) => {
  const { t } = useTranslation();
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href=""
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <motion.span
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        className="block"
      >
        {t(`${text}`)}
      </motion.span>

      <motion.span
        className="absolute inset-0 block text-primary"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {t(`${text}`)}
      </motion.span>
    </motion.a>
  );
};

export default NavLink;
