import Hero from "../../components/hero/Hero";
import Stats from "../home/components/sections/Stats";
import AboutStory from "./components/AboutStory";
import AboutLeadership from "./components/AboutLeadership";
import AboutPartners from "./components/AboutPartners";
import aboutImage from "../../assets/about-ecm.png";

const AboutPage = () => {
  return (
    <div>
      <Hero
        eyebrowKey="about.hero.eyebrow"
        titleKey={{ mainTitle: "about.hero.title" }}
        descKey="about.hero.desc"
        primaryCta={{ labelKey: "platform.hero.primary", href: "/platform" }}
        secondaryCta={{ labelKey: "platform.hero.secondary", href: "/contact" }}
        backgroundImage={aboutImage}
      />
      <AboutStory />
      <AboutLeadership />
      <Stats />
      <AboutPartners />
    </div>
  );
};

export default AboutPage;
