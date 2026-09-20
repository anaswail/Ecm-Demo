import type { LucideIcon } from "lucide-react";
import { Briefcase, LifeBuoy, Handshake } from "lucide-react";

export interface ContactTeamItem {
  icon: LucideIcon;
  /** Matches contact.teams.<key> in the translation file. */
  key: "sales" | "support" | "partnerships";
}

export const contactTeams: ContactTeamItem[] = [
  { icon: Briefcase, key: "sales" },
  { icon: LifeBuoy, key: "support" },
  { icon: Handshake, key: "partnerships" },
];
