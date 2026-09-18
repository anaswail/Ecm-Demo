import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

import { useAppContext } from "../../../../context/AppContext";
import Eyebrow from "../../../../components/ui/Eyebrow";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/** The journey is one example, not a fixed order — BPM and DMS are each used twice. */
const steps = [
  { num: "01", module: "cms", key: "receive" },
  { num: "02", module: "dms", key: "centralize" },
  { num: "03", module: "bpm", key: "review" },
  { num: "04", module: "mms", key: "decide" },
  { num: "05", module: "bpm", key: "followUp" },
  { num: "06", module: "dms", key: "preserve" },
] as const;

const roles = ["cms", "dms", "bpm", "mms"] as const;

const ConnectedFlow = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const isRtl = lang !== "en";

  const [arrangedSteps, setArrangedSteps] = useState<typeof steps>(steps);

  useEffect(() => {
    const handleResize = () => {
      const arrangedSteps =
        window.innerWidth >= 1024
          ? [...steps.slice(0, 3), ...steps.slice(3).reverse()]
          : steps;

      setArrangedSteps(arrangedSteps as typeof steps);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full border-b border-border bg-bg-main px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow text="platform.connected.eyebrow" />
          <h2
            className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {t("platform.connected.title")}
          </h2>
          <p
            className={`mt-4 text-[17px] text-ink-muted ${
              isRtl ? "leading-8" : "leading-relaxed"
            } ${langClass}`}
          >
            {t("platform.connected.desc")}
          </p>
        </motion.div>

        {/* Scenario label */}
        <div className="mb-8 flex items-center gap-4">
          <span
            className={`shrink-0 text-[13px] font-medium tracking-wide text-ink ${langClass}`}
          >
            {t("platform.connected.scenario")}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Flow */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14"
        >
          {arrangedSteps.map((step, i) => {
            const isLast = i === steps.length - 1;
            const endOfRow = i % 3 === 2;

            return (
              <motion.li
                key={step.num}
                variants={fadeUp}
                className="relative rounded-md border border-border bg-bg-primary p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="en-font text-[13px] font-semibold tracking-[0.2em] text-primary">
                    {step.num}
                  </span>
                  <span
                    className={`rounded-md border border-border bg-primary/10 px-2.5 py-0.5 text-[12px] font-semibold text-primary-hover ${langClass}`}
                  >
                    {t(`platform.connected.roles.${step.module}.tag`)}
                  </span>
                </div>

                <h3
                  className={`mt-4 text-[17px] font-semibold text-ink ${langClass}`}
                >
                  {t(`platform.connected.steps.${step.key}.title`)}
                </h3>
                <p
                  className={`mt-2 text-[15px] text-ink-muted ${
                    isRtl ? "leading-8" : "leading-relaxed"
                  } ${langClass}`}
                >
                  {t(`platform.connected.steps.${step.key}.desc`)}
                </p>

                {/* Connector: horizontal inside a row (lg and up) */}
                {!isLast && !endOfRow && (
                  <span
                    aria-hidden="true"
                    className={`absolute top-1/2 hidden -translate-y-1/2 text-ink-muted lg:block ${
                      isRtl ? "-left-6.5" : "-right-6.5"
                    }`}
                  >
                    <ArrowRight
                      size={18}
                      className={
                        isRtl && !(i >= 3)
                          ? "rotate-180"
                          : !isRtl && i >= 3
                            ? "rotate-180"
                            : ""
                      }
                    />
                  </span>
                )}

                {/* Connector: vertical, on mobile for every step and on lg at the row break */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-8.5 left-1/2 -translate-x-1/2 text-ink-muted ${
                      endOfRow ? "lg:block" : "lg:hidden"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                )}
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Non-linear note */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className={`mt-14 rounded-md border border-dashed border-border bg-bg-primary p-6 text-[15px] text-ink-muted ${
            isRtl ? "leading-8" : "leading-relaxed"
          } ${langClass}`}
        >
          {t("platform.connected.note")}
        </motion.p>

        {/* Module roles */}
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {roles.map((role) => (
            <motion.div
              key={role}
              variants={fadeUp}
              className="border-t border-border pt-4"
            >
              <dt className={`text-[15px] font-semibold text-ink ${langClass}`}>
                {t(`platform.connected.roles.${role}.name`)}
              </dt>
              <dd
                className={`mt-2 text-[14px] text-ink-muted ${
                  isRtl ? "leading-7" : "leading-relaxed"
                } ${langClass}`}
              >
                {t(`platform.connected.roles.${role}.desc`)}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default ConnectedFlow;
