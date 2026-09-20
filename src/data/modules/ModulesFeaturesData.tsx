import type { ModuleId } from "..";

export interface ModuleFeatureItem {
  id: string;
  titleKey: string;
  descKey: string;
  /** i18n key suffixes under `${titleKey base}.capabilities.*` */
  capabilities: string[];
  /** Optional per-feature screenshot override — falls back to the section's fallbackImage until real captures exist. */
  image?: string;
}

export interface ModuleFeaturesSection {
  eyebrowKey: string;
  titleKey: string;
  descKey: string;
  items: ModuleFeatureItem[];
}

export const moduleFeatureSections: Record<ModuleId, ModuleFeaturesSection> = {
  dms: {
    eyebrowKey: "modules.dms.features.eyebrow",
    titleKey: "modules.dms.features.title",
    descKey: "modules.dms.features.desc",
    items: [
      {
        id: "archive",
        titleKey: "modules.dms.features.items.archive.title",
        descKey: "modules.dms.features.items.archive.desc",
        capabilities: ["preview", "versions", "share", "search"],
        // image: dms1EN,
      },
      {
        id: "explorer",
        titleKey: "modules.dms.features.items.explorer.title",
        descKey: "modules.dms.features.items.explorer.desc",
        capabilities: ["folders", "upload", "preview", "access"],
      },
      {
        id: "search",
        titleKey: "modules.dms.features.items.search.title",
        descKey: "modules.dms.features.items.search.desc",
        capabilities: ["global", "filters", "saved", "sort"],
      },
      {
        id: "types",
        titleKey: "modules.dms.features.items.types.title",
        descKey: "modules.dms.features.items.types.desc",
        capabilities: ["custom", "fields", "templates", "status"],
      },
      {
        id: "acl",
        titleKey: "modules.dms.features.items.acl.title",
        descKey: "modules.dms.features.items.acl.desc",
        capabilities: ["byGroup", "actions", "inheritance", "restrict"],
      },
      {
        id: "retention",
        titleKey: "modules.dms.features.items.retention.title",
        descKey: "modules.dms.features.items.retention.desc",
        capabilities: ["periods", "autoArchive", "flags", "disposal"],
      },
      {
        id: "shared",
        titleKey: "modules.dms.features.items.shared.title",
        descKey: "modules.dms.features.items.shared.desc",
        capabilities: ["view", "share", "tracking", "revoke"],
      },
      {
        id: "recycle",
        titleKey: "modules.dms.features.items.recycle.title",
        descKey: "modules.dms.features.items.recycle.desc",
        capabilities: ["review", "restore", "bulk", "permissions"],
      },
    ],
  },
  cms: {
    eyebrowKey: "modules.cms.features.eyebrow",
    titleKey: "modules.cms.features.title",
    descKey: "modules.cms.features.desc",
    items: [
      {
        id: "settings",
        titleKey: "modules.cms.features.items.settings.title",
        descKey: "modules.cms.features.items.settings.desc",
        capabilities: ["types", "statuses", "confidentiality", "receiving"],
      },
      {
        id: "entities",
        titleKey: "modules.cms.features.items.entities.title",
        descKey: "modules.cms.features.items.entities.desc",
        capabilities: ["add", "contacts", "image", "reuse"],
      },
      {
        id: "inbox",
        titleKey: "modules.cms.features.items.inbox.title",
        descKey: "modules.cms.features.items.inbox.desc",
        capabilities: ["views", "followUp", "actions"],
      },
      {
        id: "add",
        titleKey: "modules.cms.features.items.add.title",
        descKey: "modules.cms.features.items.add.desc",
        capabilities: ["fields", "attachments", "drafts"],
      },
    ],
  },
  mms: {
    eyebrowKey: "modules.mms.features.eyebrow",
    titleKey: "modules.mms.features.title",
    descKey: "modules.mms.features.desc",
    items: [
      {
        id: "indicators",
        titleKey: "modules.mms.features.items.indicators.title",
        descKey: "modules.mms.features.items.indicators.desc",
        capabilities: ["stats", "breakdown", "tasks", "calendar"],
      },
      {
        id: "settings",
        titleKey: "modules.mms.features.items.settings.title",
        descKey: "modules.mms.features.items.settings.desc",
        capabilities: ["rooms", "buildings", "series"],
      },
      {
        id: "committees",
        titleKey: "modules.mms.features.items.committees.title",
        descKey: "modules.mms.features.items.committees.desc",
        capabilities: ["create", "invite", "current"],
      },
      {
        id: "meetings",
        titleKey: "modules.mms.features.items.meetings.title",
        descKey: "modules.mms.features.items.meetings.desc",
        capabilities: ["type", "agenda", "tasks", "voting", "reports"],
      },
      {
        id: "taskInbox",
        titleKey: "modules.mms.features.items.taskInbox.title",
        descKey: "modules.mms.features.items.taskInbox.desc",
        capabilities: ["list", "own", "view"],
      },
    ],
  },
  bpm: {
    eyebrowKey: "modules.bpm.features.eyebrow",
    titleKey: "modules.bpm.features.title",
    descKey: "modules.bpm.features.desc",
    items: [
      {
        id: "inbox",
        titleKey: "modules.bpm.features.items.inbox.title",
        descKey: "modules.bpm.features.items.inbox.desc",
        capabilities: ["tasks", "forms", "actions", "queue"],
      },
      {
        id: "services",
        titleKey: "modules.bpm.features.items.services.title",
        descKey: "modules.bpm.features.items.services.desc",
        capabilities: ["catalog", "version", "start"],
      },
      {
        id: "definitions",
        titleKey: "modules.bpm.features.items.definitions.title",
        descKey: "modules.bpm.features.items.definitions.desc",
        capabilities: ["lifecycle", "versions", "restore"],
      },
      {
        id: "studio",
        titleKey: "modules.bpm.features.items.studio.title",
        descKey: "modules.bpm.features.items.studio.desc",
        capabilities: [
          "canvas",
          "assignment",
          "automation",
          "simulation",
          "validation",
        ],
      },
      {
        id: "templates",
        titleKey: "modules.bpm.features.items.templates.title",
        descKey: "modules.bpm.features.items.templates.desc",
        capabilities: ["builder", "shared", "dynamic"],
      },
      {
        id: "monitoring",
        titleKey: "modules.bpm.features.items.monitoring.title",
        descKey: "modules.bpm.features.items.monitoring.desc",
        capabilities: ["diagram", "history", "admin"],
      },
    ],
  },
};
