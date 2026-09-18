import dmsAR from "../../assets/system/dms-ar.png";
import dmsEN from "../../assets/system/dms-en.png";
import mmsAR from "../../assets/system/mms-ar.png";
import mmsEN from "../../assets/system/mms-en.png";
import cmsAR from "../../assets/system/cms-ar.png";
import cmsEN from "../../assets/system/cms-en.png";
import bpmAR from "../../assets/system/bpm-ar.png";
import bpmEN from "../../assets/system/bpm-en.png";

export interface ModuleDetailItem {
  id: "dms" | "cms" | "mms" | "bpm";
  image: {
    ar: string;
    en: string;
  };
  href: string;
  capabilities: string[];
  reverse?: boolean;
}

export const moduleDetails: ModuleDetailItem[] = [
  {
    id: "dms",
    image: {
      ar: dmsAR,
      en: dmsEN,
    },
    href: "/modules/dms",
    capabilities: ["archiving", "search", "access", "retention"],
  },
  {
    id: "cms",
    image: {
      ar: cmsAR,
      en: cmsEN,
    },
    href: "/modules/cms",
    capabilities: ["incoming", "outgoing", "tracking", "signatures"],
    reverse: true,
  },
  {
    id: "mms",
    image: {
      ar: mmsAR,
      en: mmsEN,
    },
    href: "/modules/mms",
    capabilities: ["meetings", "agenda", "decisions", "actions"],
  },
  {
    id: "bpm",
    image: {
      ar: bpmAR,
      en: bpmEN,
    },
    href: "/modules/bpm",
    capabilities: ["designer", "forms", "routing", "approvals"],
    reverse: true,
  },
];
