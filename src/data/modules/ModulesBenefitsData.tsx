import type { LucideIcon } from "lucide-react";
import {
  History,
  SearchCheck,
  ShieldCheck,
  FileCheck2,
  MailCheck,
  Eye,
  Link2,
  Zap,
  CheckCircle2,
  UserCheck,
  CalendarCheck,
  Activity,
  Repeat,
  ClipboardCheck,
} from "lucide-react";
import type { ModuleId } from "..";

export interface BenefitItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

export interface ModuleBenefitsSection {
  eyebrowKey: string;
  titleKey: string;
  descKey: string;
  items: BenefitItem[];
}

export const moduleBenefits: Record<ModuleId, ModuleBenefitsSection> = {
  dms: {
    eyebrowKey: "modules.dms.benefits.eyebrow",
    titleKey: "modules.dms.benefits.title",
    descKey: "modules.dms.benefits.desc",
    items: [
      {
        icon: SearchCheck,
        titleKey: "modules.dms.benefits.items.retrieval.title",
        descKey: "modules.dms.benefits.items.retrieval.desc",
      },
      {
        icon: ShieldCheck,
        titleKey: "modules.dms.benefits.items.security.title",
        descKey: "modules.dms.benefits.items.security.desc",
      },
      {
        icon: FileCheck2,
        titleKey: "modules.dms.benefits.items.compliance.title",
        descKey: "modules.dms.benefits.items.compliance.desc",
      },
      {
        icon: History,
        titleKey: "modules.dms.benefits.items.singleTruth.title",
        descKey: "modules.dms.benefits.items.singleTruth.desc",
      },
    ],
  },
  cms: {
    eyebrowKey: "modules.cms.benefits.eyebrow",
    titleKey: "modules.cms.benefits.title",
    descKey: "modules.cms.benefits.desc",
    items: [
      {
        icon: MailCheck,
        titleKey: "modules.cms.benefits.items.noDrops.title",
        descKey: "modules.cms.benefits.items.noDrops.desc",
      },
      {
        icon: Eye,
        titleKey: "modules.cms.benefits.items.accountability.title",
        descKey: "modules.cms.benefits.items.accountability.desc",
      },
      {
        icon: Link2,
        titleKey: "modules.cms.benefits.items.connected.title",
        descKey: "modules.cms.benefits.items.connected.desc",
      },
      {
        icon: Zap,
        titleKey: "modules.cms.benefits.items.fastAudits.title",
        descKey: "modules.cms.benefits.items.fastAudits.desc",
      },
    ],
  },
  mms: {
    eyebrowKey: "modules.mms.benefits.eyebrow",
    titleKey: "modules.mms.benefits.title",
    descKey: "modules.mms.benefits.desc",
    items: [
      {
        icon: CheckCircle2,
        titleKey: "modules.mms.benefits.items.decisions.title",
        descKey: "modules.mms.benefits.items.decisions.desc",
      },
      {
        icon: UserCheck,
        titleKey: "modules.mms.benefits.items.ownedTasks.title",
        descKey: "modules.mms.benefits.items.ownedTasks.desc",
      },
      {
        icon: History,
        titleKey: "modules.mms.benefits.items.history.title",
        descKey: "modules.mms.benefits.items.history.desc",
      },
      {
        icon: CalendarCheck,
        titleKey: "modules.mms.benefits.items.scheduling.title",
        descKey: "modules.mms.benefits.items.scheduling.desc",
      },
    ],
  },
  bpm: {
    eyebrowKey: "modules.bpm.benefits.eyebrow",
    titleKey: "modules.bpm.benefits.title",
    descKey: "modules.bpm.benefits.desc",
    items: [
      {
        icon: Zap,
        titleKey: "modules.bpm.benefits.items.speed.title",
        descKey: "modules.bpm.benefits.items.speed.desc",
      },
      {
        icon: Activity,
        titleKey: "modules.bpm.benefits.items.visibility.title",
        descKey: "modules.bpm.benefits.items.visibility.desc",
      },
      {
        icon: Repeat,
        titleKey: "modules.bpm.benefits.items.consistency.title",
        descKey: "modules.bpm.benefits.items.consistency.desc",
      },
      {
        icon: ClipboardCheck,
        titleKey: "modules.bpm.benefits.items.record.title",
        descKey: "modules.bpm.benefits.items.record.desc",
      },
    ],
  },
};
