import Hero from "../../components/hero/Hero";
import ContactSection from "./components/ContactSection";

const ContactPage = () => {
  return (
    <div>
      <Hero
        eyebrowKey="contact.hero.eyebrow"
        titleKey={{ mainTitle: "contact.hero.title" }}
        descKey="contact.hero.desc"
      />
      <ContactSection />
      {/* <ReachTeamSection /> */}
    </div>
  );
};

export default ContactPage;
