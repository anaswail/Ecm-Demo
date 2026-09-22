import ModulePage from "../ModulePage";

import cms from "../../../assets/modules/cms.png";
import {
  moduleLifecycle,
  moduleFeatureSections,
  moduleBenefits,
  moduleConnections,
} from "../../../data";

const CMSPage = () => {
  return (
    <div>
      <ModulePage
        moduleId="cms"
        eyebrow="modules.cms.hero.eyebrow"
        title="modules.cms.hero.title.mainTitle"
        desc="modules.cms.hero.desc"
        image={cms}
        primaryBtn={{ labelKey: "modules.cms.hero.primary", href: "/platform" }}
        secondaryBtn={{
          labelKey: "modules.cms.hero.secondary",
          href: "/contact",
        }}
        lifecycle={moduleLifecycle.cms}
        features={moduleFeatureSections.cms}
        benefits={moduleBenefits.cms}
        connections={moduleConnections.cms}
      />
    </div>
  );
};

export default CMSPage;
