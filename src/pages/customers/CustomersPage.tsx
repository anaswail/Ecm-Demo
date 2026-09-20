import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useAppContext } from "../../context/AppContext";
import Eyebrow from "../../components/ui/Eyebrow";
import customer1 from "../../assets/customer1.webp";
import customer2 from "../../assets/customer2.webp";
import customer3 from "../../assets/customer3.webp";
import customer4 from "../../assets/customer4.webp";
import customer5 from "../../assets/customer5.webp";
import customer6 from "../../assets/customer6.webp";
import customer7 from "../../assets/customer7.webp";
import customer8 from "../../assets/customer8.webp";
import customer9 from "../../assets/customer9.webp";
import customer10 from "../../assets/customer10.webp";
import customer11 from "../../assets/customer11.webp";
import customer12 from "../../assets/customer12.webp";
import customer13 from "../../assets/customer13.webp";
import customer14 from "../../assets/customer14.webp";
import customer15 from "../../assets/customer15.webp";
import customer16 from "../../assets/customer16.webp";
import customer17 from "../../assets/customer17.webp";
import customer18 from "../../assets/customer18.webp";
import customer19 from "../../assets/customer19.webp";
import customer20 from "../../assets/customer20.webp";
import customer21 from "../../assets/customer21.webp";
import customer22 from "../../assets/customer22.webp";
import customer23 from "../../assets/customer23.webp";
import customer24 from "../../assets/customer24.webp";
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
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const CustomersPage = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const langClass = lang !== "en" ? "ar-font" : "en-font";
  return (
    <section className="w-full bg-bg-primary px-5 py-20 sm:py-24">
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        {/* Header */}{" "}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          {" "}
          <Eyebrow text={t("customers.badge")} />{" "}
          <h2
            className={`mt-4 text-[30px] font-semibold leading-tight tracking-tight text-ink sm:text-[36px] ${langClass}`}
          >
            {" "}
            {t("customers.title")}{" "}
          </h2>{" "}
        </motion.div>{" "}
        {/* Customers */}{" "}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-4"
        >
          {" "}
          {customers.map((customer, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex h-36 items-center justify-center border-b border-r border-border bg-bg-primary px-6 transition-colors duration-300 hover:bg-bg-main sm:h-44"
            >
              {" "}
              <img
                src={customer}
                alt={`Customer ${i + 1}`}
                loading="lazy"
                className="h-32 w-32 object-contain  transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />{" "}
            </motion.div>
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
};
export default CustomersPage;
