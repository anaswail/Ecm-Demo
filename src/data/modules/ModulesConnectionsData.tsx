import type { ModuleId } from "..";

export interface IModuleConnectionItem {
  connection: "DMS" | "CMS" | "MMS" | "BPM";
  title: string;
  desc: string;
  image?: string;
}

export interface IModulesConnection {
  eyebrowKey: string;
  titleKey: string;
  descKey: string;
  items: IModuleConnectionItem[];
}

export const moduleConnections: Record<ModuleId, IModulesConnection> = {
  dms: {
    eyebrowKey: "modules.dms.connections.eyebrow",
    titleKey: "modules.dms.connections.title",
    descKey: "modules.dms.connections.desc",
    items: [
      {
        connection: "CMS",
        title: "modules.dms.connections.items.cms.title",
        desc: "modules.dms.connections.items.cms.desc",
      },
      {
        connection: "MMS",
        title: "modules.dms.connections.items.mms.title",
        desc: "modules.dms.connections.items.mms.desc",
      },
      {
        connection: "BPM",
        title: "modules.dms.connections.items.bpm.title",
        desc: "modules.dms.connections.items.bpm.desc",
      },
    ],
  },
  cms: {
    eyebrowKey: "modules.cms.connections.eyebrow",
    titleKey: "modules.cms.connections.title",
    descKey: "modules.cms.connections.desc",
    items: [
      {
        connection: "DMS",
        title: "modules.cms.connections.items.dms.title",
        desc: "modules.cms.connections.items.dms.desc",
      },
      {
        connection: "MMS",
        title: "modules.cms.connections.items.mms.title",
        desc: "modules.cms.connections.items.mms.desc",
      },
      {
        connection: "BPM",
        title: "modules.cms.connections.items.bpm.title",
        desc: "modules.cms.connections.items.bpm.desc",
      },
    ],
  },
  mms: {
    eyebrowKey: "modules.mms.connections.eyebrow",
    titleKey: "modules.mms.connections.title",
    descKey: "modules.mms.connections.desc",
    items: [
      {
        connection: "DMS",
        title: "modules.mms.connections.items.dms.title",
        desc: "modules.mms.connections.items.dms.desc",
      },
      {
        connection: "CMS",
        title: "modules.mms.connections.items.cms.title",
        desc: "modules.mms.connections.items.cms.desc",
      },
      {
        connection: "BPM",
        title: "modules.mms.connections.items.bpm.title",
        desc: "modules.mms.connections.items.bpm.desc",
      },
    ],
  },
  bpm: {
    eyebrowKey: "modules.bpm.connections.eyebrow",
    titleKey: "modules.bpm.connections.title",
    descKey: "modules.bpm.connections.desc",
    items: [
      {
        connection: "DMS",
        title: "modules.bpm.connections.items.dms.title",
        desc: "modules.bpm.connections.items.dms.desc",
      },
      {
        connection: "CMS",
        title: "modules.bpm.connections.items.cms.title",
        desc: "modules.bpm.connections.items.cms.desc",
      },
      {
        connection: "MMS",
        title: "modules.bpm.connections.items.mms.title",
        desc: "modules.bpm.connections.items.mms.desc",
      },
    ],
  },
};
