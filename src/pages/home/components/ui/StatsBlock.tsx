import { useTranslation } from "react-i18next";

import { useAppContext } from "../../../../context/AppContext";
import type { StatItem } from "../../../../data/home/StatsData";

interface StatBlockProps {
  stat: StatItem;
  /** Index within the row — controls divider placement responsively. */
  index: number;
}

// Reusable single stat — also meant for reuse outside Home (Customers, About)
// per the design guide's component list, so it takes plain data, not a page-specific shape.
const StatBlock = ({ stat, index }: StatBlockProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  // Mobile: 2-column grid — items 2+ get a top divider (new row).
  // Desktop: 4-column row — every item but the first gets a left divider instead.
  const isFirstMobileRow = index < 2;
  const isFirstDesktop = index === 0;

  const dividerClasses = [
    isFirstMobileRow ? "" : "border-t border-border pt-6 md:border-t-0 md:pt-0",
    isFirstDesktop
      ? ""
      : ` ${lang === "ar" ? "md:border-r pr-6 " : "md:border-l pl-6"}  md:border-border `,
  ].join(" ");

  return (
    <div className={`px-6 ${dividerClasses}`}>
      <div
        className={`text-[32px] font-semibold leading-none text-primary sm:text-[36px] ${langClass}`}
      >
        {stat.value}
      </div>
      <div
        className={`mt-3 text-[14px] leading-snug text-ink-muted ${langClass}`}
      >
        {t(stat.labelKey)}
      </div>
    </div>
  );
};

export default StatBlock;
