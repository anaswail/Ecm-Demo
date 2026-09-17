import Hero from "../../components/hero/Hero";
import Modules from "./components/sections/Modules";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import About from "./components/sections/About";
// import heroImage from "../../assets/hero.png";
import Integrations from "./components/sections/Integrations";

const HomePage = () => {
  return (
    <div>
      <Hero
        titleKey={{
          mainTitle: "home.hero.title.mainTitle",
          accentWord: "home.hero.title.accentWord",
        }}
        descKey="home.hero.desc"
        primaryCta={{ labelKey: "home.hero.primary", href: "/platform" }}
        secondaryCta={{ labelKey: "home.hero.secondary", href: "/contact" }}
        // backgroundImage={heroImage}
      />
      <About />
      <Modules />
      <Integrations />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default HomePage;
