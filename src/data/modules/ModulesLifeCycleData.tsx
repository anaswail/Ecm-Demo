import type { LucideIcon } from "lucide-react";
import {
  Archive,
  Inbox,
  ListChecks,
  Send,
  CheckCircle2,
  ClipboardCheck,
  RefreshCcw,
  CalendarPlus,
  Users,
  Workflow,
  PlayCircle,
  LineChart,
  FolderTree,
  UploadCloud,
} from "lucide-react";

import type { ModuleId } from "..";

export interface LifecycleItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

export interface ModuleLifecycle {
  eyebrowKey: string;
  titleKey: string;
  descKey: string;
  items: LifecycleItem[];
}

export const moduleLifecycle: Record<ModuleId, ModuleLifecycle> = {
  dms: {
    eyebrowKey: "modules.dms.lifecycle.eyebrow",
    titleKey: "modules.dms.lifecycle.title",
    descKey: "modules.dms.lifecycle.desc",
    items: [
      {
        icon: UploadCloud,
        titleKey: "modules.dms.lifecycle.items.capture.title",
        descKey: "modules.dms.lifecycle.items.capture.desc",
      },
      {
        icon: FolderTree,
        titleKey: "modules.dms.lifecycle.items.organize.title",
        descKey: "modules.dms.lifecycle.items.organize.desc",
      },
      {
        icon: Users,
        titleKey: "modules.dms.lifecycle.items.collaborate.title",
        descKey: "modules.dms.lifecycle.items.collaborate.desc",
      },
      {
        icon: Archive,
        titleKey: "modules.dms.lifecycle.items.retain.title",
        descKey: "modules.dms.lifecycle.items.retain.desc",
      },
    ],
  },
  cms: {
    eyebrowKey: "modules.cms.lifecycle.eyebrow",
    titleKey: "modules.cms.lifecycle.title",
    descKey: "modules.cms.lifecycle.desc",
    items: [
      {
        icon: Inbox,
        titleKey: "modules.cms.lifecycle.items.register.title",
        descKey: "modules.cms.lifecycle.items.register.desc",
      },
      {
        icon: Send,
        titleKey: "modules.cms.lifecycle.items.route.title",
        descKey: "modules.cms.lifecycle.items.route.desc",
      },
      {
        icon: RefreshCcw,
        titleKey: "modules.cms.lifecycle.items.respond.title",
        descKey: "modules.cms.lifecycle.items.respond.desc",
      },
      {
        icon: CheckCircle2,
        titleKey: "modules.cms.lifecycle.items.close.title",
        descKey: "modules.cms.lifecycle.items.close.desc",
      },
    ],
  },
  mms: {
    eyebrowKey: "modules.mms.lifecycle.eyebrow",
    titleKey: "modules.mms.lifecycle.title",
    descKey: "modules.mms.lifecycle.desc",
    items: [
      {
        icon: CalendarPlus,
        titleKey: "modules.mms.lifecycle.items.schedule.title",
        descKey: "modules.mms.lifecycle.items.schedule.desc",
      },
      {
        icon: Users,
        titleKey: "modules.mms.lifecycle.items.convene.title",
        descKey: "modules.mms.lifecycle.items.convene.desc",
      },
      {
        icon: ClipboardCheck,
        titleKey: "modules.mms.lifecycle.items.decide.title",
        descKey: "modules.mms.lifecycle.items.decide.desc",
      },
      {
        icon: ListChecks,
        titleKey: "modules.mms.lifecycle.items.followUp.title",
        descKey: "modules.mms.lifecycle.items.followUp.desc",
      },
    ],
  },
  bpm: {
    eyebrowKey: "modules.bpm.lifecycle.eyebrow",
    titleKey: "modules.bpm.lifecycle.title",
    descKey: "modules.bpm.lifecycle.desc",
    items: [
      {
        icon: Workflow,
        titleKey: "modules.bpm.lifecycle.items.design.title",
        descKey: "modules.bpm.lifecycle.items.design.desc",
      },
      {
        icon: PlayCircle,
        titleKey: "modules.bpm.lifecycle.items.initiate.title",
        descKey: "modules.bpm.lifecycle.items.initiate.desc",
      },
      {
        icon: CheckCircle2,
        titleKey: "modules.bpm.lifecycle.items.execute.title",
        descKey: "modules.bpm.lifecycle.items.execute.desc",
      },
      {
        icon: LineChart,
        titleKey: "modules.bpm.lifecycle.items.monitor.title",
        descKey: "modules.bpm.lifecycle.items.monitor.desc",
      },
    ],
  },
};
