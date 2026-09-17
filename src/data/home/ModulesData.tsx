import bpm from "../../assets/icons/bpm.png";
import cms from "../../assets/icons/cms.png";
import mms from "../../assets/icons/mms.png";
import dms from "../../assets/icons/dms.png";

export interface ModuleItem {
  icon: string;
  tagKey: string;
  titleKey: string;
  descKey: string;
  href: string;
}

export const modules: ModuleItem[] = [
  {
    icon: dms,
    tagKey: "home.solution.modules.dms.tag",
    titleKey: "home.solution.modules.dms.title",
    descKey: "home.solution.modules.dms.desc",
    href: "/modules/dms",
  },
  {
    icon: cms,
    tagKey: "home.solution.modules.cms.tag",
    titleKey: "home.solution.modules.cms.title",
    descKey: "home.solution.modules.cms.desc",
    href: "/modules/cms",
  },
  {
    icon: mms,
    tagKey: "home.solution.modules.mms.tag",
    titleKey: "home.solution.modules.mms.title",
    descKey: "home.solution.modules.mms.desc",
    href: "/modules/mms",
  },
  {
    icon: bpm,
    tagKey: "home.solution.modules.bpm.tag",
    titleKey: "home.solution.modules.bpm.title",
    descKey: "home.solution.modules.bpm.desc",
    href: "/modules/bpm",
  },
];
