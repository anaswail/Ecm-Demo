import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

import {
  decorationColors,
  featuresDecorationIcons,
} from "../constants/HeroData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

type Status = "idle" | "loading" | "success" | "error";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");

  // Built with `t` so error copy follows the language toggle, same as
  // every other string on the site.
  const contactSchema = useMemo(
    () =>
      z.object({
        companyName: z.string().trim().min(1, t("contact.errors.required")),
        companyEmail: z
          .string()
          .trim()
          .min(1, t("contact.errors.required"))
          .email(t("contact.errors.invalidEmail")),
        contactName: z.string().trim().min(1, t("contact.errors.required")),
        phone: z.string().trim().optional(),
        message: z.string().trim().min(10, t("contact.errors.messageTooShort")),
      }),
    [t],
  );

  type ContactFormValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      companyName: "",
      companyEmail: "",
      contactName: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          company_name: data.companyName,
          company_email: data.companyEmail,
          contact_name: data.contactName,
          phone: data.phone || "—",
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  const inputClasses = (hasError?: boolean) =>
    `w-full rounded-md border ${
      hasError
        ? "border-red/50 focus:border-red/50 focus:ring-red/20"
        : "border-black/10 dark:border-white/10 focus:border-primary/50 focus:ring-primary/20"
    } bg-gray-50 dark:bg-bg-primary/50 px-4 py-3 text-sm text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:ring-2 transition-colors duration-300`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-24 px-5 sm:px-8 md:px-12"
    >
      {/* Decorations — same red/blue pair used site-wide */}
      <div className="pointer-events-none absolute top-0 -left-40 z-0 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-radial from-primary/10 from-0% to-black/0 to-70%" />
      <div className="pointer-events-none absolute bottom-0 -right-40 z-0 w-100 sm:w-150 h-100 sm:h-150 rounded-full bg-radial from-blue/10 from-0% to-blue/0 to-70%" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-semibold text-primary">
            {t("contact.badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mt-1">
            {t("contact.title")}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 max-w-md mx-auto">
            {t("contact.desc")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="relative rounded-lg border border-black/5 dark:border-white/5 bg-white dark:bg-bg-primary/20 backdrop-blur-md p-6 sm:p-8 flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {t("contact.companyName")}
              </label>
              <input
                type="text"
                placeholder={t("contact.companyNamePlaceholder")}
                className={inputClasses(!!errors.companyName)}
                {...register("companyName")}
              />
              {errors.companyName && (
                <span className="text-xs text-red">
                  {errors.companyName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {t("contact.companyEmail")}
              </label>
              <input
                type="email"
                placeholder={t("contact.companyEmailPlaceholder")}
                className={inputClasses(!!errors.companyEmail)}
                dir="ltr"
                {...register("companyEmail")}
              />
              {errors.companyEmail && (
                <span className="text-xs text-red">
                  {errors.companyEmail.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {t("contact.contactName")}
              </label>
              <input
                type="text"
                placeholder={t("contact.contactNamePlaceholder")}
                className={inputClasses(!!errors.contactName)}
                {...register("contactName")}
              />
              {errors.contactName && (
                <span className="text-xs text-red">
                  {errors.contactName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                placeholder={t("contact.phonePlaceholder")}
                className={inputClasses(!!errors.phone)}
                dir="ltr"
                {...register("phone")}
              />
              {errors.phone && (
                <span className="text-xs text-red">{errors.phone.message}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
              {t("contact.message")}
            </label>
            <textarea
              rows={4}
              placeholder={t("contact.messagePlaceholder")}
              className={`${inputClasses(!!errors.message)} resize-none`}
              {...register("message")}
            />
            {errors.message && (
              <span className="text-xs text-red">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="cursor-pointer bg-primary uppercase py-3 px-6 rounded-md drop-shadow-primary/20 drop-shadow-lg text-white text-xs flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {status === "loading" ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={14} />
            )}
            {t("contact.submit")}
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2 text-sm text-green"
              >
                <CheckCircle2 size={16} />
                {t("contact.success")}
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2 text-sm text-red"
              >
                <AlertCircle size={16} />
                {t("contact.error")}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
      {featuresDecorationIcons.map((feature, idx) => (
        <motion.div
          animate={{
            x: [0, 14, -10, 8, -6, 0],
            y: [0, -18, 6, -12, 4, 0],
            rotate: [0, 3, -2, 2, -1, 0],
          }}
          transition={{
            duration: 14 + idx * 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: idx * 0.7,
          }}
          key={idx}
          className={`hidden lg:flex pointer-events-none opacity-80 ${decorationColors[feature.color]?.bg || "bg-gray/10"} absolute ${feature.position} border ${decorationColors[feature.color]?.border || "border-gray"} rounded-md p-3 items-center justify-center`}
        >
          <img src={feature.icon} alt="icon" className="w-8 h-8" />
        </motion.div>
      ))}
    </section>
  );
};

export default Contact;
