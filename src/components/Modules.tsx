import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArchiveIcon,
  CalendarClockIcon,
  MailIcon,
  WorkflowIcon,
} from "lucide-react";
import { colorStyles, decorations, type Feature } from "../constants/AboutData";
import { DMSData, MMSData, BPMData, CMSData } from "../constants/FeaturesData";

import FeatureModal from "./feature/FeatureModal";

type FeatureColor = keyof typeof colorStyles;

interface ModuleConfig {
  key: string;
  name: string;
  description: string;
  color: FeatureColor;
  Icon: React.ComponentType<{ className?: string }>;
  data: Feature[];
}

const modules: ModuleConfig[] = [
  {
    key: "DMS",
    name: "Document Management System",
    description:
      "Archive, organize, and control access to every document your organization holds.",
    color: "green",
    Icon: ArchiveIcon,
    data: DMSData,
  },
  {
    key: "MMS",
    name: "Meetings Management System",
    description:
      "Schedule meetings, track decisions, and follow up on action items in one place.",
    color: "yellow",
    Icon: CalendarClockIcon,
    data: MMSData,
  },
  {
    key: "CMS",
    name: "Correspondence Management System",
    description:
      "Route, track, and respond to incoming and outgoing correspondence.",
    color: "red",
    Icon: MailIcon,
    data: CMSData,
  },
  {
    key: "BPM",
    name: "Business Process Management",
    description:
      "Design, automate, and monitor the workflows that run your organization.",
    color: "blue",
    Icon: WorkflowIcon,
    data: BPMData,
  },
];

const cardAnimation = {
  initial: { y: 40, opacity: 0 },
  moved: { y: 0, opacity: 1 },
};

const Modules = () => {
  const [activeKey, setActiveKey] = useState(modules[0].key);
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);
  const titleId = useId();

  const activeModule = modules.find((m) => m.key === activeKey) ?? modules[0];
  const styles = colorStyles[activeModule.color];

  return (
    <div className="relative overflow-hidden min-h-screen px-6 md:px-12 py-24">
      {/* Ambient glow, re-tinted to match the active module */}
      <motion.div
        key={`glow-${activeModule.key}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`pointer-events-none absolute top-0 -right-40 z-0 w-150 h-150 rounded-full bg-radial ${styles.glow} from-0% to-black/0 to-70%`}
      />
      <div className="pointer-events-none absolute bottom-0 -left-40 z-0 w-125 h-125 rounded-full bg-radial from-white/5 from-0% to-black/0 to-70%" />

      {decorations.map((decoration, idx) => {
        const decoStyles = colorStyles[decoration.color];
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
            className={`pointer-events-none absolute ${decoration.position} z-0 hidden sm:flex items-center justify-center border ${decoStyles.border} ${decoStyles.bg} rounded-md p-2`}
          >
            <img src={decoration.icon} alt="" className="w-6 h-6" />
          </motion.div>
        );
      })}

      {/* Module switcher */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-16">
        {modules.map((mod) => {
          const modStyles = colorStyles[mod.color];
          const isActive = mod.key === activeKey;
          return (
            <button
              key={mod.key}
              type="button"
              onClick={() => setActiveKey(mod.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors cursor-pointer ${
                isActive
                  ? `${modStyles.border} ${modStyles.bg} ${modStyles.text}`
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              <mod.Icon className="w-4 h-4" />
              {mod.key}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeModule.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          {/* Module title */}
          <div className="flex items-center gap-4 mb-3">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-md border ${styles.border} ${styles.bg} ${styles.text}`}
            >
              <activeModule.Icon className="w-6 h-6" />
            </span>
            <div>
              <span className={`text-xs font-semibold ${styles.text}`}>
                {activeModule.key}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {activeModule.name}
              </h2>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mb-10 leading-7">
            {activeModule.description}
          </p>

          {/* Features within the module */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="initial"
            animate="moved"
            transition={{ staggerChildren: 0.08 }}
          >
            {activeModule.data.map((feature) => (
              <motion.button
                type="button"
                key={feature.featureName}
                variants={cardAnimation}
                whileHover={{ y: -2 }}
                onClick={() => setActiveFeature(feature)}
                aria-haspopup="dialog"
                className={`group cursor-pointer relative rounded-md border border-white/5 bg-bg-primary/50 overflow-hidden text-left p-5 transition-colors hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 ${styles.ring}`}
              >
                <div
                  className={`absolute inset-0 bg-radial ${styles.glow} from-0% to-90% to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-70`}
                />
                <div className="relative flex flex-col gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-md border ${styles.border} ${styles.bg} ${styles.text}`}
                  >
                    {feature.LucidaIcon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white leading-5">
                      {feature.featureName}
                    </p>
                    <p className="text-xs text-gray-400 leading-5 mt-1">
                      {feature.featureShortDesc}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

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

export default Modules;
