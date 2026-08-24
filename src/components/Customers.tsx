import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { motion } from "motion/react";
import { colorStyles } from "../constants/AboutData";

import customer1 from "../assets/customer1.webp";
import customer2 from "../assets/customer2.webp";
import customer3 from "../assets/customer3.webp";
import customer4 from "../assets/customer4.webp";
import customer5 from "../assets/customer5.webp";
import customer6 from "../assets/customer6.webp";
import customer7 from "../assets/customer7.webp";
import customer8 from "../assets/customer8.webp";
import customer9 from "../assets/customer9.webp";
import customer10 from "../assets/customer10.webp";
import customer11 from "../assets/customer11.webp";
import customer12 from "../assets/customer12.webp";
import customer13 from "../assets/customer13.webp";
import customer14 from "../assets/customer14.webp";
import customer15 from "../assets/customer15.webp";
import customer16 from "../assets/customer16.webp";
import customer17 from "../assets/customer17.webp";
import customer18 from "../assets/customer18.webp";
import customer19 from "../assets/customer19.webp";
import customer20 from "../assets/customer20.webp";
import customer21 from "../assets/customer21.webp";
import customer22 from "../assets/customer22.webp";
import customer23 from "../assets/customer23.webp";
import customer24 from "../assets/customer24.webp";
import { useTranslation } from "react-i18next";

const customers = [
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
  customer7,
  customer8,
  customer9,
  customer10,
  customer11,
  customer12,
  customer13,
  customer14,
  customer15,
  customer16,
  customer17,
  customer18,
  customer19,
  customer20,
  customer21,
  customer22,
  customer23,
  customer24,
];

const Customers = () => {
  const { t } = useTranslation();
  const styles = colorStyles.red;

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="customers"
      className="relative overflow-hidden py-14 sm:py-20 px-5 sm:px-8 md:px-20"
    >
      {/* Ambient glow, consistent with the module section */}
      <div
        className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-90 sm:w-150 h-45 sm:h-75 rounded-full bg-radial ${styles.glow} from-0% to-black/0 to-70%`}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-10 sm:mb-12"
      >
        <span className={`text-xs font-semibold ${styles.text}`}>
          {t("customers.badge")}
        </span>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mt-1">
          {t("customers.title")}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="slider-container relative z-10 rounded-md border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-bg-primary/50 backdrop-blur-md overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 md:w-32 bg-linear-to-r from-white dark:from-bg-main to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 md:w-32 bg-linear-to-l from-white dark:from-bg-main to-transparent" />

        <Slider {...settings}>
          {customers.map((customer, index) => (
            <div key={index} className="px-2 sm:px-3 py-6 sm:py-8">
              <div className="flex items-center justify-center p-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/2 dark:bg-white/2 transition-colors hover:border-black/15 dark:hover:border-white/15">
                <img
                  src={customer as string}
                  alt={`Customer ${index + 1}`}
                  className="w-32 sm:w-44 md:w-60 object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Customers;
