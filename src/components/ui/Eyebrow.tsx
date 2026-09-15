import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/AppContext";

const Eyebrow = ({ text }: { text: string }) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  return (
    <span
      className={`text-xs font-medium uppercase tracking-wide text-primary-hover flex items-center gap-2 ${langClass}`}
    >
      {t(`${text}`)}
      <div className="w-14 h-0.5 bg-primary"></div>
    </span>
  );
};

export default Eyebrow;
