import { motion } from "motion/react";
import { stats } from "../../../../data/home/StatsData";
import StatBlock from "../ui/StatsBlock";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Stats = () => {
  return (
    <section className="w-full border-b border-border bg-bg-main px-5 py-16 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0"
      >
        {stats.map((stat, i) => (
          <StatBlock key={stat.labelKey} stat={stat} index={i} />
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
