import ModulePage from "../ModulePage";

import bpmAR from "../../../assets/modules/bpm-ar.png";
import bpmEN from "../../../assets/modules/bpm-en.png";
import { useAppContext } from "../../../context/AppContext";

const BPMPage = () => {
  const { lang } = useAppContext();

  return (
    <div>
      <ModulePage
        eyebrow="modules.bpm.hero.eyebrow"
        title="modules.bpm.hero.title.mainTitle"
        desc="modules.bpm.hero.desc"
        image={lang === "ar" ? bpmAR : bpmEN}
        primaryBtn={{ labelKey: "modules.bpm.hero.primary", href: "/platform" }}
        secondaryBtn={{
          labelKey: "modules.bpm.hero.secondary",
          href: "/contact",
        }}
      />
    </div>
  );
};

export default BPMPage;
