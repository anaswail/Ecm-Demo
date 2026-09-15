import Hero from "./components/sections/Hero";
import Modules from "./components/sections/Modules";
import Problem from "./components/sections/Problem";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero
        titleKey="hero.title"
        descKey="hero.desc"
        primaryCta={{ labelKey: "hero.primary" }}
        secondaryCta={{ labelKey: "hero.secondary" }}
      />
      <Problem />
      <Modules />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default HomePage;
