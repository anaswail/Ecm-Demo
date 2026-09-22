import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAppContext } from "../../../context/AppContext";
import Button from "../../../components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (
  import.meta.env.DEV &&
  (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY)
) {
  // Dev-only warning — a missing env var otherwise fails silently in the
  // try/catch below and every visitor just sees a generic error message
  // with no trail back to "the config is wrong."
  console.warn(
    "[ContactForm] One or more VITE_EMAILJS_* env vars are missing — form submissions will fail.",
  );
}

// Loose international check, not strict — good enough to make the existing
// error-message UI for this field actually reachable, without trying to
// solve full phone-format validation.
const phonePattern = /^[+\d][\d\s()-]{6,}$/;

const ContactForm = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const [status, setStatus] = useState<Status>("idle");

  const contactSchema = useMemo(
    () =>
      z.object({
        companyName: z
          .string()
          .trim()
          .min(1, t("contact.form.errors.required")),
        companyEmail: z
          .string()
          .trim()
          .min(1, t("contact.form.errors.required"))
          .email(t("contact.form.errors.invalidEmail")),
        contactName: z
          .string()
          .trim()
          .min(1, t("contact.form.errors.required")),
        phone: z
          .string()
          .trim()
          .optional()
          .refine((val) => !val || phonePattern.test(val), {
            message: t("contact.form.errors.invalidPhone"),
          }),
        message: z
          .string()
          .trim()
          .min(10, t("contact.form.errors.messageTooShort")),
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
    `w-full rounded-md border bg-bg-main px-4 py-3 text-[14px] text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:ring-2 ${
      hasError
        ? "border-danger focus:border-danger/50 focus:ring-danger/20"
        : "border-border focus:border-primary/50 focus:ring-primary/20"
    }`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-md border border-border bg-bg-primary p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className={`text-[13px] font-medium text-ink-muted ${langClass}`}
          >
            {t("contact.form.companyName")}
          </label>
          <input
            type="text"
            placeholder={t("contact.form.companyNamePlaceholder")}
            className={`${inputClasses(!!errors.companyName)} ${langClass}`}
            {...register("companyName")}
          />
          {errors.companyName && (
            <span className={`text-[12.5px] text-danger ${langClass}`}>
              {errors.companyName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            className={`text-[13px] font-medium text-ink-muted ${langClass}`}
          >
            {t("contact.form.companyEmail")}
          </label>
          <input
            type="email"
            placeholder={t("contact.form.companyEmailPlaceholder")}
            dir="ltr"
            className={inputClasses(!!errors.companyEmail)}
            {...register("companyEmail")}
          />
          {errors.companyEmail && (
            <span className={`text-[12.5px] text-danger ${langClass}`}>
              {errors.companyEmail.message}
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className={`text-[13px] font-medium text-ink-muted ${langClass}`}
          >
            {t("contact.form.contactName")}
          </label>
          <input
            type="text"
            placeholder={t("contact.form.contactNamePlaceholder")}
            className={`${inputClasses(!!errors.contactName)} ${langClass}`}
            {...register("contactName")}
          />
          {errors.contactName && (
            <span className={`text-[12.5px] text-danger ${langClass}`}>
              {errors.contactName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            className={`text-[13px] font-medium text-ink-muted ${langClass}`}
          >
            {t("contact.form.phone")}
          </label>
          <input
            type="tel"
            placeholder={t("contact.form.phonePlaceholder")}
            dir="ltr"
            className={inputClasses(!!errors.phone)}
            {...register("phone")}
          />
          {errors.phone && (
            <span className={`text-[12.5px] text-danger ${langClass}`}>
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          className={`text-[13px] font-medium text-ink-muted ${langClass}`}
        >
          {t("contact.form.message")}
        </label>
        <textarea
          rows={5}
          placeholder={t("contact.form.messagePlaceholder")}
          className={`${inputClasses(!!errors.message)} resize-none ${langClass}`}
          {...register("message")}
        />
        {errors.message && (
          <span className={`text-[12.5px] text-danger ${langClass}`}>
            {errors.message.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={status === "loading"}
        className={`mt-2 justify-center ${langClass}`}
      >
        {status === "loading" ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Send size={14} />
        )}
        {t("contact.form.submit")}
      </Button>

      <div role="status" aria-live="polite">
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={`flex items-center gap-2 text-[13.5px] text-success ${langClass}`}
            >
              <CheckCircle2 size={16} />
              {t("contact.form.success")}
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={`flex items-center gap-2 text-[13.5px] text-danger ${langClass}`}
            >
              <AlertCircle size={16} />
              {t("contact.form.error")}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};

export default ContactForm;
