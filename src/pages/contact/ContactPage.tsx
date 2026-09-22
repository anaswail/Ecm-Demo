import Hero from "../../components/hero/Hero";
import ContactSection from "./components/ContactSection";
import contactImageEN from "../../assets/contact-en.png";
import contactImageAR from "../../assets/contact-ar.png";
import { useAppContext } from "../../context/AppContext";

const ContactPage = () => {
  const { lang } = useAppContext();
  return (
    <div>
      <Hero
        eyebrowKey="contact.hero.eyebrow"
        titleKey={{ mainTitle: "contact.hero.title" }}
        descKey="contact.hero.desc"
        backgroundImage={lang === "ar" ? contactImageAR : contactImageEN}
      />
      <ContactSection />
      {/* <ReachTeamSection /> */}
    </div>
  );
};

export default ContactPage;
