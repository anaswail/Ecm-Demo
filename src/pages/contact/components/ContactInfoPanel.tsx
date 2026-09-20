import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import { useAppContext } from "../../../context/AppContext";

const rows = [
  { icon: Mail, key: "email", ltr: true },
  { icon: Phone, key: "phone", ltr: true },
  { icon: MapPin, key: "address", ltr: false },
  { icon: Clock, key: "hours", ltr: false },
] as const;

const ContactInfoPanel = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const isRtl = lang !== "en";

  return (
    <div className="flex flex-col gap-8 rounded-md border border-border bg-bg-main p-6 sm:p-8">
      <div>
        <h3 className={`text-[17px] font-semibold text-ink ${langClass}`}>
          {t("contact.info.title")}
        </h3>
        <p
          className={`mt-2 text-[14px] leading-relaxed text-ink-muted ${langClass}`}
        >
          {t("contact.info.desc")}
        </p>
      </div>

      <ul className="flex flex-col gap-6">
        {rows.map(({ icon: Icon, key, ltr }) => (
          <li key={key} className="flex items-start gap-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-primary text-primary">
              <Icon size={16} strokeWidth={1.75} />
            </span>
            <div>
              <p
                className={`text-[12px] font-medium tracking-wide text-ink-muted uppercase ${langClass}`}
              >
                {t(`contact.info.${key}Label`)}
              </p>
              <p
                dir={ltr ? "ltr" : undefined}
                className={`mt-1 text-[14.5px] text-ink ${
                  ltr
                    ? ""
                    : `${isRtl ? "leading-7" : "leading-relaxed"} ${langClass}`
                }`}
              >
                {t(`contact.info.${key}Value`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfoPanel;
