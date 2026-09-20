import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { useAppContext } from "../../../context/AppContext";
import Eyebrow from "../../../components/ui/Eyebrow";
import ContactForm from "./ContactForm";
import ContactInfoPanel from "./ContactInfoPanel";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ContactSection = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const isRtl = lang !== "en";

  return (
    <section
      id="contact-form"
      className="w-full border-b border-border bg-bg-primary px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <Eyebrow text={t("contact.form.badge")} />
          <h2
            className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {t("contact.form.title")}
          </h2>
          <p
            className={`mt-4 text-[17px] text-ink-muted ${
              isRtl ? "leading-8" : "leading-relaxed"
            } ${langClass}`}
          >
            {t("contact.form.desc")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-10"
        >
          <ContactForm />
          <ContactInfoPanel />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
