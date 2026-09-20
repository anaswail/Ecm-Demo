import type { ModuleId } from "../index";

export const moduleOrder: ModuleId[] = ["dms", "cms", "mms", "bpm"];

export interface ModuleNavItem {
  id: ModuleId;
  href: string;
}

// Update hrefs if module pages live at different routes.
export const moduleNavItems: ModuleNavItem[] = [
  { id: "dms", href: "/modules/dms" },
  { id: "cms", href: "/modules/cms" },
  { id: "mms", href: "/modules/mms" },
  { id: "bpm", href: "/modules/bpm" },
];
