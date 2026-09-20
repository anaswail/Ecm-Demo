import ModulePage from "../ModulePage";

import mms from "../../../assets/modules/mms.png";
import {
  moduleChallenges,
  moduleLifecycle,
  moduleFeatureSections,
  moduleBenefits,
  moduleConnections,
} from "../../../data";

const MMSPage = () => {
  return (
    <div>
      <ModulePage
        moduleId="mms"
        eyebrow="modules.mms.hero.eyebrow"
        title="modules.mms.hero.title.mainTitle"
        desc="modules.mms.hero.desc"
        image={mms}
        primaryBtn={{ labelKey: "modules.mms.hero.primary", href: "/platform" }}
        secondaryBtn={{
          labelKey: "modules.mms.hero.secondary",
          href: "/contact",
        }}
        challenges={moduleChallenges.mms}
        lifecycle={moduleLifecycle.mms}
        features={moduleFeatureSections.mms}
        benefits={moduleBenefits.mms}
        connections={moduleConnections.mms}
      />
    </div>
  );
};

export default MMSPage;
