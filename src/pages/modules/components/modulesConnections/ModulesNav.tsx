import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { useAppContext } from "../../../../context/AppContext";
import Eyebrow from "../../../../components/ui/Eyebrow";
import { moduleOrder, moduleNavItems } from "../../../../data";
import type { ModuleId } from "../../../../data";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

interface ModulesNavProps {
  currentId: ModuleId;
}

const ModulesNav = ({ currentId }: ModulesNavProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();

  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const isRtl = lang !== "en";

  return (
    <section className="w-full bg-bg-primary px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow text={t("modules.nav.eyebrow")} />

          <h2
            className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {t("modules.nav.title")}
          </h2>

          <p
            className={`mt-4 text-[17px] leading-relaxed text-ink-muted ${langClass}`}
          >
            {t("modules.nav.desc")}
          </p>
        </motion.div>

        {/* Modules */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {moduleOrder.map((id) => {
            const isCurrent = id === currentId;
            const item = moduleNavItems.find((m) => m.id === id);
            const tag = id.toUpperCase();

            const cardClass = `group relative flex flex-col rounded-md border border-border p-6 pt-7 transition-all duration-300 ${
              isCurrent
                ? "bg-bg-main"
                : "bg-bg-primary hover:-translate-y-0.5 hover:border-primary/40 hover:bg-bg-main"
            }`;

            const content = (
              <>
                {/* Brand accent */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-md ${
                    isCurrent ? "bg-primary" : "bg-primary/60"
                  }`}
                />

                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`rounded-full border border-border bg-bg-main px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-ink-muted ${langClass}`}
                  >
                    {tag}
                  </span>

                  {isCurrent && (
                    <span
                      className={`text-[11px] font-medium text-primary ${langClass}`}
                    >
                      {t("modules.nav.current")}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`mt-4 text-[17px] font-semibold leading-snug text-ink ${langClass}`}
                >
                  {t(`modules.${id}.hero.title.mainTitle`)}
                </h3>

                {/* Description */}
                <p
                  className={`mt-2 line-clamp-3 text-[14px] leading-relaxed text-ink-muted ${langClass}`}
                >
                  {t(`modules.${id}.hero.desc`)}
                </p>

                {/* CTA */}
                {!isCurrent && (
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-colors group-hover:text-primary-hover ${langClass}`}
                  >
                    {t("modules.nav.cta")}

                    <ArrowRight
                      size={14}
                      className={`transition-transform ${
                        isRtl
                          ? "rotate-180 group-hover:-translate-x-0.5"
                          : "group-hover:translate-x-0.5"
                      }`}
                    />
                  </span>
                )}
              </>
            );

            return (
              <motion.div key={id} variants={fadeUp}>
                {isCurrent || !item ? (
                  <div className={cardClass}>{content}</div>
                ) : (
                  <Link to={item.href} className={cardClass}>
                    {content}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesNav;
