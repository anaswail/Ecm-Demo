import { useTranslation } from "react-i18next";

import { useAppContext } from "../../../../context/AppContext";
import type { Testimonial } from "../../../../data/home/TestimonialData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

// Sizing/snap/shrink behavior lives on the wrapper in Testimonials.tsx —
// this component only handles the card's own content and styling.
const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  return (
    <div className="flex h-full gap-6 rounded-md border border-border bg-bg-primary p-8">
      <div className="flex w-1/3 shrink-0 items-center justify-center self-start rounded-md border border-border bg-bg-main p-3">
        <img
          src={testimonial.logoSrc}
          alt={testimonial.logoAlt}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className={`text-[16px] leading-relaxed text-ink ${langClass}`}>
          "{t(testimonial.quoteKey)}"
        </p>
        <div className={`text-[14px] text-ink-muted ${langClass}`}>
          {testimonial.name && (
            <span className="font-medium text-ink">{testimonial.name} — </span>
          )}
          {t(testimonial.roleKey)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
