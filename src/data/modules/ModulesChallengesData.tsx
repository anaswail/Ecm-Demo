import type { LucideIcon } from "lucide-react";
import {
  Search,
  ShieldAlert,
  Layers,
  Archive,
  Inbox,
  Clock,
  Unlink,
  FileSearch,
  CalendarClock,
  ClipboardX,
  ListChecks,
  History,
  Send,
  HelpCircle,
  Shuffle,
  TrendingDown,
} from "lucide-react";
import type { ModuleId } from "..";

export interface ChallengeItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

export interface ModuleChallenges {
  eyebrowKey: string;
  titleKey: string;
  descKey: string;
  items: ChallengeItem[];
}

export const moduleChallenges: Record<ModuleId, ModuleChallenges> = {
  dms: {
    eyebrowKey: "modules.dms.challenges.eyebrow",
    titleKey: "modules.dms.challenges.title",
    descKey: "modules.dms.challenges.desc",
    items: [
      {
        icon: Search,
        titleKey: "modules.dms.challenges.items.finding.title",
        descKey: "modules.dms.challenges.items.finding.desc",
      },
      {
        icon: ShieldAlert,
        titleKey: "modules.dms.challenges.items.access.title",
        descKey: "modules.dms.challenges.items.access.desc",
      },
      {
        icon: Layers,
        titleKey: "modules.dms.challenges.items.versions.title",
        descKey: "modules.dms.challenges.items.versions.desc",
      },
      {
        icon: Archive,
        titleKey: "modules.dms.challenges.items.retention.title",
        descKey: "modules.dms.challenges.items.retention.desc",
      },
    ],
  },
  cms: {
    eyebrowKey: "modules.cms.challenges.eyebrow",
    titleKey: "modules.cms.challenges.title",
    descKey: "modules.cms.challenges.desc",
    items: [
      {
        icon: Inbox,
        titleKey: "modules.cms.challenges.items.logging.title",
        descKey: "modules.cms.challenges.items.logging.desc",
      },
      {
        icon: Clock,
        titleKey: "modules.cms.challenges.items.status.title",
        descKey: "modules.cms.challenges.items.status.desc",
      },
      {
        icon: Unlink,
        titleKey: "modules.cms.challenges.items.linking.title",
        descKey: "modules.cms.challenges.items.linking.desc",
      },
      {
        icon: FileSearch,
        titleKey: "modules.cms.challenges.items.audit.title",
        descKey: "modules.cms.challenges.items.audit.desc",
      },
    ],
  },
  mms: {
    eyebrowKey: "modules.mms.challenges.eyebrow",
    titleKey: "modules.mms.challenges.title",
    descKey: "modules.mms.challenges.desc",
    items: [
      {
        icon: CalendarClock,
        titleKey: "modules.mms.challenges.items.scheduling.title",
        descKey: "modules.mms.challenges.items.scheduling.desc",
      },
      {
        icon: ClipboardX,
        titleKey: "modules.mms.challenges.items.decisions.title",
        descKey: "modules.mms.challenges.items.decisions.desc",
      },
      {
        icon: ListChecks,
        titleKey: "modules.mms.challenges.items.actions.title",
        descKey: "modules.mms.challenges.items.actions.desc",
      },
      {
        icon: History,
        titleKey: "modules.mms.challenges.items.history.title",
        descKey: "modules.mms.challenges.items.history.desc",
      },
    ],
  },
  bpm: {
    eyebrowKey: "modules.bpm.challenges.eyebrow",
    titleKey: "modules.bpm.challenges.title",
    descKey: "modules.bpm.challenges.desc",
    items: [
      {
        icon: Send,
        titleKey: "modules.bpm.challenges.items.routing.title",
        descKey: "modules.bpm.challenges.items.routing.desc",
      },
      {
        icon: HelpCircle,
        titleKey: "modules.bpm.challenges.items.visibility.title",
        descKey: "modules.bpm.challenges.items.visibility.desc",
      },
      {
        icon: Shuffle,
        titleKey: "modules.bpm.challenges.items.consistency.title",
        descKey: "modules.bpm.challenges.items.consistency.desc",
      },
      {
        icon: TrendingDown,
        titleKey: "modules.bpm.challenges.items.bottlenecks.title",
        descKey: "modules.bpm.challenges.items.bottlenecks.desc",
      },
    ],
  },
};
