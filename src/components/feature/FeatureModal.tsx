import { motion } from "motion/react";
import { colorStyles, type Feature } from "../../constants/AboutData";
import { useTranslation } from "react-i18next";

// Each entry is authored as "Title: description" — split once for a bold
// label plus a muted line underneath, instead of one run-on sentence.
const splitEntry = (entry: string) => {
  const separatorIndex = entry.indexOf(": ");
  if (separatorIndex === -1) return { title: entry, desc: "" };
  return {
    title: entry.slice(0, separatorIndex),
    desc: entry.slice(separatorIndex + 2),
  };
};

const FeatureModal = ({
  feature,
  titleId,
  onClose,
}: {
  feature: Feature;
  titleId: string;
  onClose: () => void;
}) => {
  const { t } = useTranslation();
  const styles = colorStyles[feature.color];
  const featureDesc = t(feature.featureDesc, {
    returnObjects: true,
  }) as string[];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.4 }}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border ${styles.border}/30 bg-white dark:bg-bg-main p-6 sm:p-8`}
      >
        <div
          className={`pointer-events-none absolute inset-0 -z-10 bg-radial ${styles.glow} from-0% to-70% to-black/0`}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-4 mb-8 pr-8">
          {feature.LucidaIcon ? (
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${styles.border} ${styles.bg} ${styles.text}`}
            >
              {feature.LucidaIcon}
            </span>
          ) : (
            <img
              src={feature.icon}
              alt=""
              className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
            />
          )}
          <div>
            <span className={`text-xs font-semibold ${styles.text}`}>
              {feature.featureShortName}
            </span>
            <h2
              id={titleId}
              className="text-lg sm:text-xl font-bold text-black dark:text-white leading-tight"
            >
              {t(feature.featureName)}
            </h2>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
          {featureDesc.map((entry) => {
            const { title, desc } = splitEntry(entry);
            return (
              <li key={entry} className="flex gap-3">
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${styles.border} ${styles.bg}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={styles.text}
                  >
                    <path
                      d="M4 10.5l4 4 8-9"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-black dark:text-white leading-5">
                    {title}
                  </p>
                  {desc && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-5 mt-0.5">
                      {desc}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default FeatureModal;
