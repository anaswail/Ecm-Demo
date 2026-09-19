import ModulePage from "../ModulePage";

import cmsAR from "../../../assets/modules/cms-ar.png";
import cmsEN from "../../../assets/modules/cms-en.png";
import { useAppContext } from "../../../context/AppContext";

const CMSPage = () => {
  const { lang } = useAppContext();

  return (
    <div>
      <ModulePage
        eyebrow="modules.cms.hero.eyebrow"
        title="modules.cms.hero.title.mainTitle"
        desc="modules.cms.hero.desc"
        image={lang === "ar" ? cmsAR : cmsEN}
        primaryBtn={{ labelKey: "modules.cms.hero.primary", href: "/platform" }}
        secondaryBtn={{
          labelKey: "modules.cms.hero.secondary",
          href: "/contact",
        }}
      />
    </div>
  );
};

export default CMSPage;
