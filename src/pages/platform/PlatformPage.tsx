import Hero from "../../components/hero/Hero";
import Modules from "../home/components/sections/Modules";
import ConnectedFlow from "./components/sections/ConnectedFlow";
import ModulesDetails from "./components/sections/ModulesDetails";

import platformImage from "../../assets/modules/platform.png";

const PlatformPage = () => {
  return (
    <div>
      <Hero
        eyebrowKey="platform.hero.eyebrow"
        titleKey={{
          mainTitle: "platform.hero.title",
        }}
        descKey="platform.hero.desc"
        primaryCta={{ labelKey: "platform.hero.primary", href: "/platform" }}
        secondaryCta={{ labelKey: "platform.hero.secondary", href: "/contact" }}
        backgroundImage={platformImage}
      />
      <Modules />
      <ConnectedFlow />
      <ModulesDetails />
    </div>
  );
};

export default PlatformPage;
