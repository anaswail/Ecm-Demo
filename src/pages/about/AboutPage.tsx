import Hero from "../../components/hero/Hero";
import Stats from "../home/components/sections/Stats";
import AboutStory from "./components/AboutStory";
import AboutPrinciples from "./components/AboutPrinciples";
import AboutLeadership from "./components/AboutLeadership";
import AboutPartners from "./components/AboutPartners";

const AboutPage = () => {
  return (
    <div>
      <Hero
        eyebrowKey="about.hero.eyebrow"
        titleKey={{ mainTitle: "about.hero.title" }}
        descKey="about.hero.desc"
        primaryCta={{ labelKey: "about.hero.cta", href: "/contact" }}
      />
      <AboutStory />
      <AboutPrinciples />
      <AboutLeadership />
      <Stats />
      <AboutPartners />
    </div>
  );
};

export default AboutPage;
