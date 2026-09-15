import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useAppContext } from "../../../../context/AppContext";
import Button from "../../../../components/ui/Button";
import { testimonials } from "../../../../data/home/TestimonialData";
import TestimonialCard from "../ui/Testimonialcard";
import Eyebrow from "../../../../components/ui/Eyebrow";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Testimonials = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const showControls = testimonials.length > 2;

  return (
    <section className="w-full bg-bg-primary px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <Eyebrow text="testimonials.eyebrow" />
            <h2
              className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
            >
              {t("testimonials.title")}
            </h2>
          </div>

          {showControls && (
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label={t("testimonials.prev")}
              >
                <ChevronLeft size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label={t("testimonials.next")}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.roleKey}
              data-testimonial-card
              className="w-full shrink-0 md:w-[calc(50%-12px)]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
