import ctc from "../../assets/icons/ctc.png";
import sap from "../../assets/icons/sap-3.svg";
import odoo from "../../assets/icons/odoo.svg";

export interface Principle {
  titleKey: string;
  descKey: string;
}

// Kept deliberately short (3) and rendered as a plain list, not cards —
// About already has enough card grids elsewhere on the site; this page
// benefits from a different rhythm.
export const principles: Principle[] = [
  {
    titleKey: "about.principles.items.scale.title",
    descKey: "about.principles.items.scale.desc",
  },
  {
    titleKey: "about.principles.items.oneSystem.title",
    descKey: "about.principles.items.oneSystem.desc",
  },
  {
    titleKey: "about.principles.items.governance.title",
    descKey: "about.principles.items.governance.desc",
  },
];

export interface PartnerItem {
  name: string;
  /** Swap in a real logo path once available. */
  logoSrc?: string;
}

// Placeholder slots — replace with real partner names/logos before launch.
// Left generic rather than inventing names that would misrepresent real
// business relationships.
export const partners: PartnerItem[] = [
  { name: "CTC Mena", logoSrc: ctc },
  { name: "SAP", logoSrc: sap },
  { name: "Odoo", logoSrc: odoo },
];
