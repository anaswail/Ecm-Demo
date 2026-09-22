import ModulePage from "../ModulePage";

import bpm from "../../../assets/modules/bpm.png";
import {
  moduleLifecycle,
  moduleFeatureSections,
  moduleBenefits,
  moduleConnections,
} from "../../../data";

const BPMPage = () => {
  return (
    <div>
      <ModulePage
        moduleId="bpm"
        eyebrow="modules.bpm.hero.eyebrow"
        title="modules.bpm.hero.title.mainTitle"
        desc="modules.bpm.hero.desc"
        image={bpm}
        primaryBtn={{ labelKey: "modules.bpm.hero.primary", href: "/platform" }}
        secondaryBtn={{
          labelKey: "modules.bpm.hero.secondary",
          href: "/contact",
        }}
        lifecycle={moduleLifecycle.bpm}
        features={moduleFeatureSections.bpm}
        benefits={moduleBenefits.bpm}
        connections={moduleConnections.bpm}
      />
    </div>
  );
};

export default BPMPage;
