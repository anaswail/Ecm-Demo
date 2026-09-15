import type { LucideIcon } from "lucide-react";
import { FileStack, Mail, CalendarClock, Workflow } from "lucide-react";

export interface ModuleItem {
  icon: LucideIcon;
  tagKey: string;
  titleKey: string;
  descKey: string;
  href: string;
}

// The four ECM+ modules, in the same order used across the sitemap
// (Platform hub, nav, footer) — keep this order consistent everywhere.
export const modules: ModuleItem[] = [
  {
    icon: FileStack,
    tagKey: "solution.modules.dms.tag",
    titleKey: "solution.modules.dms.title",
    descKey: "solution.modules.dms.desc",
    href: "/modules/dms",
  },
  {
    icon: Mail,
    tagKey: "solution.modules.cms.tag",
    titleKey: "solution.modules.cms.title",
    descKey: "solution.modules.cms.desc",
    href: "/modules/cms",
  },
  {
    icon: CalendarClock,
    tagKey: "solution.modules.mms.tag",
    titleKey: "solution.modules.mms.title",
    descKey: "solution.modules.mms.desc",
    href: "/modules/mms",
  },
  {
    icon: Workflow,
    tagKey: "solution.modules.bpm.tag",
    titleKey: "solution.modules.bpm.title",
    descKey: "solution.modules.bpm.desc",
    href: "/modules/bpm",
  },
];
