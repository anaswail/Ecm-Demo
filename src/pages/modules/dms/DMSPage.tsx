import ModulePage from "../ModulePage";

import dms from "../../../assets/modules/dms.png";
import {
  moduleChallenges,
  moduleLifecycle,
  moduleFeatureSections,
  moduleBenefits,
  moduleConnections,
} from "../../../data";

const DMSPage = () => {
  return (
    <div>
      <ModulePage
        moduleId="dms"
        eyebrow="modules.dms.hero.eyebrow"
        title="modules.dms.hero.title.mainTitle"
        desc="modules.dms.hero.desc"
        image={dms}
        primaryBtn={{ labelKey: "modules.dms.hero.primary", href: "/platform" }}
        secondaryBtn={{
          labelKey: "modules.dms.hero.secondary",
          href: "/contact",
        }}
        challenges={moduleChallenges.dms}
        lifecycle={moduleLifecycle.dms}
        features={moduleFeatureSections.dms}
        benefits={moduleBenefits.dms}
        connections={moduleConnections.dms}
      />
    </div>
  );
};

export default DMSPage;
