import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import "slick-carousel/slick/slick.css";
import "../../integrations-slider.css";

import { useAppContext } from "../../../../context/AppContext";
import { integrations } from "../../../../data/home/IntegrationsData";

import * as Slick from "react-slick";
const Slider = (Slick as any).default?.default ?? (Slick as any).default;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const IntegrationItem = ({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }> | string;
  label: string;
}) => (
  <div className="flex shrink-0 items-center gap-2.5 rounded-md border border-border bg-bg-primary px-5 py-3">
    {typeof Icon === "string" ? (
      <img src={Icon} alt={label} className="h-[20px] w-[20px]" />
    ) : (
      <Icon size={20} className="text-ink" />
    )}
    <span className="whitespace-nowrap text-sm font-medium text-ink-muted">
      {label}
    </span>
  </div>
);

const Integrations = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    rtl: lang === "ar",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="w-full border-y border-border bg-bg-main py-8 sm:py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto mb-10 max-w-6xl px-5 text-center"
      >
        <h2
          className={`mt-4 text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px] ${langClass}`}
        >
          {t("home.integrations.title")}
        </h2>
      </motion.div>

      <div className="integrations-fade">
        <Slider {...settings} className="integrations-slider">
          {integrations.map((integration) => (
            <div key={integration.label}>
              <IntegrationItem
                icon={integration.icon}
                label={integration.label}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Integrations;
