import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { ModuleFeaturesSection } from "../../../../data";
import { useAppContext } from "../../../../context/AppContext";
import ScreenshotFrame from "../../../../components/ui/ScreenShotFrame";
import Eyebrow from "../../../../components/ui/Eyebrow";

interface ModuleFeaturesProps extends ModuleFeaturesSection {
  /** Placeholder screenshot used for every feature until real per-feature captures exist. */
  fallbackImage: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ModuleFeatures = ({
  eyebrowKey,
  titleKey,
  descKey,
  items,
  fallbackImage,
}: ModuleFeaturesProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <section className="w-full bg-bg-main px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow text={t(`${eyebrowKey}`)} />
          <h2
            className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {t(titleKey)}
          </h2>
          <p
            className={`mt-4 text-[17px] leading-relaxed text-ink-muted ${langClass}`}
          >
            {t(descKey)}
          </p>
        </motion.div>

        <div className="flex items-start gap-12 lg:gap-16">
          {/* Main content — stacked feature blocks */}
          <div className="min-w-0 flex-1">
            {items.map((feature, i) => (
              <motion.article
                key={feature.id}
                id={`feature-${feature.id}`}
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="scroll-mt-28 border-b border-border py-14 first:pt-0 last:border-b-0"
              >
                <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
                  <div>
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-[12px] font-semibold text-ink ${langClass}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`mt-4 text-[22px] font-semibold leading-snug text-ink ${langClass}`}
                    >
                      {t(feature.titleKey)}
                    </h3>
                    <p
                      className={`mt-3 text-[15.5px] leading-relaxed text-ink-muted ${langClass}`}
                    >
                      {t(feature.descKey)}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {feature.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span className={`text-[14px] text-ink ${langClass}`}>
                            {t(
                              `${feature.titleKey.replace(".title", "")}.capabilities.${cap}`,
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ScreenshotFrame
                    src={
                      (lang === "ar" ? feature.image?.ar : feature.image?.en) ??
                      fallbackImage
                    }
                    alt={t(feature.titleKey)}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleFeatures;
