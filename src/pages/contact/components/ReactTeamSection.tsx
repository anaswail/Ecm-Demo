import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { useAppContext } from "../../../context/AppContext";
import Eyebrow from "../../../components/ui/Eyebrow";
import { contactTeams } from "../../../data/contact/ContactTeamsData";

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

const ReachTeamSection = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const isRtl = lang !== "en";

  return (
    <section className="w-full border-b border-border bg-bg-main px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow text={t("contact.teams.eyebrow")} />
          <h2
            className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {t("contact.teams.title")}
          </h2>
          <p
            className={`mt-4 text-[17px] text-ink-muted ${
              isRtl ? "leading-8" : "leading-relaxed"
            } ${langClass}`}
          >
            {t("contact.teams.desc")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {contactTeams.map(({ icon: Icon, key }) => (
            <motion.a
              key={key}
              href={`mailto:${t(`contact.teams.${key}.email`)}`}
              variants={fadeUp}
              className="group flex flex-col gap-4 rounded-md border border-border bg-bg-primary p-6 transition-colors hover:bg-bg-main"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-main text-primary">
                <Icon size={18} strokeWidth={1.75} />
              </span>

              <div>
                <h3
                  className={`text-[16px] font-semibold text-ink ${langClass}`}
                >
                  {t(`contact.teams.${key}.title`)}
                </h3>
                <p
                  className={`mt-1.5 text-[13.5px] leading-relaxed text-ink-muted ${langClass}`}
                >
                  {t(`contact.teams.${key}.desc`)}
                </p>
              </div>

              <span
                dir="ltr"
                className="mt-auto text-[13px] font-medium text-primary group-hover:text-primary-hover"
              >
                {t(`contact.teams.${key}.email`)}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReachTeamSection;
