import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useAppContext } from "../../../../context/AppContext";
import type { ModuleItem } from "../../../../data/home/ModulesData";

interface ModuleCardProps {
  module: ModuleItem;
  /** Hides the right-hand hairline divider on the last card in a row. */
  isLast?: boolean;
}

const ModuleCard = ({ module, isLast = false }: ModuleCardProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const Icon = module.icon;

  return (
    <div
      className={`flex flex-col justify-between h-80 bg-bg-primary p-8 transition-colors duration-150 hover:bg-bg-main ${
        isLast ? "" : "border-b border-border md:border-b-0 md:border-r"
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink">
        <Icon size={18} strokeWidth={1.75} />
      </span>

      <div
        className={`text-[13px] font-medium text-primary-hover ${langClass}`}
      >
        {t(module.tagKey)}
      </div>

      <h3
        className={`text-[20px] font-semibold leading-snug text-ink ${langClass}`}
      >
        {t(module.titleKey)}
      </h3>

      <p
        className={`text-[14.5px] leading-relaxed text-ink-muted ${langClass}`}
      >
        {t(module.descKey)}
      </p>

      <Link
        to={module.href}
        className={`mt-1 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors duration-150 hover:text-primary-hover ${langClass}`}
      >
        {t("solution.moduleLink")}
        {
            lang === "ar" ? (
                <ArrowLeft size={14} />
            ) : (
                <ArrowRight size={14} />
            )
        }
      </Link>
    </div>
  );
};

export default ModuleCard;
