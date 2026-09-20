import type { ModuleId } from "..";

// dms
import archiveAR from "../../assets/system/dms-archive-ar.png";
import archiveEN from "../../assets/system/dms-archive-en.jpeg";
import archiveTypesAR from "../../assets/system/dms-types-ar.jpeg";
import archiveTypesEN from "../../assets/system/dms-types-en.jpeg";
import searchAR from "../../assets/system/dms-search-ar.png";
import searchEN from "../../assets/system/dms-search-en.png";
import explorerAR from "../../assets/system/dms-explorer-ar.jpeg";
import explorerEN from "../../assets/system/dms-explorer-en.jpeg";
import aclAR from "../../assets/system/dms-acl-ar.jpeg";
import aclEN from "../../assets/system/dms-acl-en.jpeg";
import retentionAR from "../../assets/system/dms-retention-ar.jpeg";
import retentionEN from "../../assets/system/dms-retention-en.jpeg";
import sharedAR from "../../assets/system/dms-shared-ar.jpeg";
import sharedEN from "../../assets/system/dms-shared-en.jpeg";
import recycleAR from "../../assets/system/dms-recycle-ar.jpeg";
import recycleEN from "../../assets/system/dms-recycle-en.jpeg";

// cms
import addCMSAR from "../../assets/system/cms-add-ar.jpeg";
import addCMSEN from "../../assets/system/cms-add-en.jpeg";
import cmsInboxAR from "../../assets/system/cms-inbox-ar.jpeg";
import cmsInboxEN from "../../assets/system/cms-inbox-en.jpeg";
import partiesAR from "../../assets/system/cms-parties-ar.jpeg";
import partiesEN from "../../assets/system/cms-parties-en.jpeg";
import cmsSettingsAR from "../../assets/system/cms-settings-ar.png";
import cmsSettingsEN from "../../assets/system/cms-settings-en.png";

// bpm
import servicesAR from "../../assets/system/bpm-services-ar.jpeg";
import servicesEN from "../../assets/system/bpm-services-en.jpeg";
import studioAR from "../../assets/system/bpm-sutdio-ar.jpeg";
import studioEN from "../../assets/system/bpm-studio-en.jpeg";
import bpmInboxAR from "../../assets/system/bpm-inbox-ar.jpeg";
import bpmInboxEN from "../../assets/system/bpm-inbox-en.jpeg";
import createProcessAR from "../../assets/system/bpm-sutdio-ar.jpeg";
import createProcessEN from "../../assets/system/bpm-studio-en.jpeg";
import bpmTemplatesAR from "../../assets/system/bpm-templates-ar.jpeg";
import bpmTemplatesEN from "../../assets/system/bpm-templates-ar.jpeg";

// mms
import kpisAR from "../../assets/system/mms-overview-ar.jpeg";
import kpisEN from "../../assets/system/mms-overview-en.jpeg";
import followupEN from "../../assets/system/mms-followup-en.png";
import followupAR from "../../assets/system/mms-followup-ar.png";
import mmsSettingsAR from "../../assets/system/mms-settings-ar.png";
import mmsSettingsEN from "../../assets/system/mms-settings-en.png";
import commitesAR from "../../assets/system/mms-committes-ar.png";
import commitesEN from "../../assets/system/mms-committee-en.png";
import mmsTasksAR from "../../assets/system/mms-tasks-ar.jpeg";
import mmsTasksEN from "../../assets/system/mms-tasks-en.png";

export interface ModuleFeatureItem {
  id: string;
  titleKey: string;
  descKey: string;
  /** i18n key suffixes under `${titleKey base}.capabilities.*` */
  capabilities: string[];
  /** Optional per-feature screenshot override — falls back to the section's fallbackImage until real captures exist. */
  image?: {
    ar: string;
    en: string;
  };
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
        image: {
          ar: archiveAR,
          en: archiveEN,
        },
      },
      {
        id: "explorer",
        titleKey: "modules.dms.features.items.explorer.title",
        descKey: "modules.dms.features.items.explorer.desc",
        capabilities: ["folders", "upload", "preview", "access"],
        image: {
          ar: explorerAR,
          en: explorerEN,
        },
      },
      {
        id: "search",
        titleKey: "modules.dms.features.items.search.title",
        descKey: "modules.dms.features.items.search.desc",
        capabilities: ["global", "filters", "saved", "sort"],
        image: {
          ar: searchAR,
          en: searchEN,
        },
      },
      {
        id: "types",
        titleKey: "modules.dms.features.items.types.title",
        descKey: "modules.dms.features.items.types.desc",
        capabilities: ["custom", "fields", "templates", "status"],
        image: {
          ar: archiveTypesAR,
          en: archiveTypesEN,
        },
      },
      {
        id: "acl",
        titleKey: "modules.dms.features.items.acl.title",
        descKey: "modules.dms.features.items.acl.desc",
        capabilities: ["byGroup", "actions", "inheritance", "restrict"],
        image: {
          ar: aclAR,
          en: aclEN,
        },
      },
      {
        id: "retention",
        titleKey: "modules.dms.features.items.retention.title",
        descKey: "modules.dms.features.items.retention.desc",
        capabilities: ["periods", "autoArchive", "flags", "disposal"],
        image: {
          ar: retentionAR,
          en: retentionEN,
        },
      },
      {
        id: "shared",
        titleKey: "modules.dms.features.items.shared.title",
        descKey: "modules.dms.features.items.shared.desc",
        capabilities: ["view", "share", "tracking", "revoke"],
        image: {
          ar: sharedAR,
          en: sharedEN,
        },
      },
      {
        id: "recycle",
        titleKey: "modules.dms.features.items.recycle.title",
        descKey: "modules.dms.features.items.recycle.desc",
        capabilities: ["review", "restore", "bulk", "permissions"],
        image: {
          ar: recycleAR,
          en: recycleEN,
        },
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
        image: {
          ar: cmsSettingsAR,
          en: cmsSettingsEN,
        },
      },
      {
        id: "entities",
        titleKey: "modules.cms.features.items.entities.title",
        descKey: "modules.cms.features.items.entities.desc",
        capabilities: ["add", "contacts", "image", "reuse"],
        image: {
          ar: partiesAR,
          en: partiesEN,
        },
      },
      {
        id: "inbox",
        titleKey: "modules.cms.features.items.inbox.title",
        descKey: "modules.cms.features.items.inbox.desc",
        capabilities: ["views", "followUp", "actions"],
        image: {
          ar: cmsInboxAR,
          en: cmsInboxEN,
        },
      },
      {
        id: "add",
        titleKey: "modules.cms.features.items.add.title",
        descKey: "modules.cms.features.items.add.desc",
        capabilities: ["fields", "attachments", "drafts"],
        image: {
          ar: addCMSAR,
          en: addCMSEN,
        },
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
        image: {
          ar: kpisAR,
          en: kpisEN,
        },
      },
      {
        id: "settings",
        titleKey: "modules.mms.features.items.settings.title",
        descKey: "modules.mms.features.items.settings.desc",
        capabilities: ["rooms", "buildings", "series"],
        image: {
          ar: mmsSettingsAR,
          en: mmsSettingsEN,
        },
      },
      {
        id: "committees",
        titleKey: "modules.mms.features.items.committees.title",
        descKey: "modules.mms.features.items.committees.desc",
        capabilities: ["create", "invite", "current"],
        image: {
          ar: commitesAR,
          en: commitesEN,
        },
      },
      {
        id: "meetings",
        titleKey: "modules.mms.features.items.meetings.title",
        descKey: "modules.mms.features.items.meetings.desc",
        capabilities: ["type", "agenda", "tasks", "voting", "reports"],
        image: {
          ar: followupAR,
          en: followupEN,
        },
      },
      {
        id: "taskInbox",
        titleKey: "modules.mms.features.items.taskInbox.title",
        descKey: "modules.mms.features.items.taskInbox.desc",
        capabilities: ["list", "own", "view"],
        image: {
          ar: mmsTasksAR,
          en: mmsTasksEN,
        },
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
        image: {
          ar: bpmInboxAR,
          en: bpmInboxEN,
        },
      },
      {
        id: "services",
        titleKey: "modules.bpm.features.items.services.title",
        descKey: "modules.bpm.features.items.services.desc",
        capabilities: ["catalog", "version", "start"],
        image: {
          ar: servicesAR,
          en: servicesEN,
        },
      },
      {
        id: "definitions",
        titleKey: "modules.bpm.features.items.definitions.title",
        descKey: "modules.bpm.features.items.definitions.desc",
        capabilities: ["lifecycle", "versions", "restore"],
        image: {
          ar: createProcessEN,
          en: createProcessAR,
        },
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
        image: {
          ar: studioAR,
          en: studioEN,
        },
      },
      {
        id: "templates",
        titleKey: "modules.bpm.features.items.templates.title",
        descKey: "modules.bpm.features.items.templates.desc",
        capabilities: ["builder", "shared", "dynamic"],
        image: {
          ar: bpmTemplatesAR,
          en: bpmTemplatesEN,
        },
      },
      {
        id: "monitoring",
        titleKey: "modules.bpm.features.items.monitoring.title",
        descKey: "modules.bpm.features.items.monitoring.desc",
        capabilities: ["diagram", "history", "admin"],
        image: {
          ar: studioAR,
          en: studioEN,
        },
      },
    ],
  },
};
