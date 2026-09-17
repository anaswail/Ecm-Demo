import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../testimonials-slider.css";

import { useAppContext } from "../../../../context/AppContext";
import { testimonials } from "../../../../data/home/TestimonialData";
import TestimonialCard from "../ui/Testimonialcard";
import Eyebrow from "../../../../components/ui/Eyebrow";

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

// const arrowBase =
//   "flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors duration-150 hover:border-ink hover:text-ink cursor-pointer";

// const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     type="button"
//     onClick={onClick}
//     aria-label="Previous testimonial"
//     className={arrowBase}
//   >
//     <ChevronLeft size={16} />
//   </button>
// );

// const NextArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     type="button"
//     onClick={onClick}
//     aria-label="Next testimonial"
//     className={arrowBase}
//   >
//     <ChevronRight size={16} />
//   </button>
// );

const Testimonials = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";

  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    pauseOnHover: true,
    arrows: false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

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
            <Eyebrow text="home.testimonials.eyebrow" />
            <h2
              className={`mt-4 text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
            >
              {t("home.testimonials.title")}
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="testimonial-slider"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.roleKey}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
