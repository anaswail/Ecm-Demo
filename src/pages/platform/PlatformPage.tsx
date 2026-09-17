import Hero from "../../components/hero/Hero";
import Modules from "../home/components/sections/Modules";

const PlatformPage = () => {
  return (
    <div>
      <Hero
        eyebrowKey="platform.hero.eyebrow"
        titleKey={{
          mainTitle: "platform.hero.title.mainTitle",
          accentWord: "platform.hero.title.accentWord",
        }}
        descKey="platform.hero.desc"
        primaryCta={{ labelKey: "platform.hero.primary", href: "/platform" }}
        secondaryCta={{ labelKey: "platform.hero.secondary", href: "/contact" }}
      />
      <Modules />
    </div>
  );
};

export default PlatformPage;
