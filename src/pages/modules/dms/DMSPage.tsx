import ModulePage from "../ModulePage";

import dmsAR from "../../../assets/modules/dms-ar.png";
import dmsEN from "../../../assets/modules/dms-en.png";
import { useAppContext } from "../../../context/AppContext";

const DMSPage = () => {
  const { lang } = useAppContext();

  return (
    <div>
      <ModulePage
        eyebrow="modules.dms.hero.eyebrow"
        title="modules.dms.hero.title.mainTitle"
        desc="modules.dms.hero.desc"
        image={lang === "ar" ? dmsAR : dmsEN}
        primaryBtn={{ labelKey: "modules.dms.hero.primary", href: "/platform" }}
        secondaryBtn={{
          labelKey: "modules.dms.hero.secondary",
          href: "/contact",
        }}
      />
    </div>
  );
};

export default DMSPage;
