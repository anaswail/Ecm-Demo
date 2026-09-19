import ModulePage from "../ModulePage";

import mmsAR from "../../../assets/modules/mms-ar.png";
import mmsEN from "../../../assets/modules/mms-en.png";
import { useAppContext } from "../../../context/AppContext";

const MMSPage = () => {
  const { lang } = useAppContext();

  return (
    <div>
      <ModulePage
        eyebrow="modules.mms.hero.eyebrow"
        title="modules.mms.hero.title.mainTitle"
        desc="modules.mms.hero.desc"
        image={lang === "ar" ? mmsAR : mmsEN}
        primaryBtn={{ labelKey: "modules.mms.hero.primary", href: "/platform" }}
        secondaryBtn={{
          labelKey: "modules.mms.hero.secondary",
          href: "/contact",
        }}
      />
    </div>
  );
};

export default MMSPage;
