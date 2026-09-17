import type { LucideIcon } from "lucide-react";
import { FileStack, Mail, CalendarClock, Workflow } from "lucide-react";

export interface ModuleItem {
  icon: LucideIcon;
  tagKey: string;
  titleKey: string;
  descKey: string;
  href: string;
}

export const modules: ModuleItem[] = [
  {
    icon: FileStack,
    tagKey: "home.solution.modules.dms.tag",
    titleKey: "home.solution.modules.dms.title",
    descKey: "home.solution.modules.dms.desc",
    href: "/modules/dms",
  },
  {
    icon: Mail,
    tagKey: "home.solution.modules.cms.tag",
    titleKey: "home.solution.modules.cms.title",
    descKey: "home.solution.modules.cms.desc",
    href: "/modules/cms",
  },
  {
    icon: CalendarClock,
    tagKey: "home.solution.modules.mms.tag",
    titleKey: "home.solution.modules.mms.title",
    descKey: "home.solution.modules.mms.desc",
    href: "/modules/mms",
  },
  {
    icon: Workflow,
    tagKey: "home.solution.modules.bpm.tag",
    titleKey: "home.solution.modules.bpm.title",
    descKey: "home.solution.modules.bpm.desc",
    href: "/modules/bpm",
  },
];
