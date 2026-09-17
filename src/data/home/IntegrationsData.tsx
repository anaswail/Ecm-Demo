import type { ComponentType } from "react";
import { MessageSquareText, ShieldCheck } from "lucide-react";

import whatsapp from "../../assets/icons/whatsapp-8.svg";
import mail from "../../assets/icons/mail.svg";
import sap from "../../assets/icons/sap-3.svg";
import odoo from "../../assets/icons/odoo.svg";
import word from "../../assets/icons/word-1.svg";
import powerpoint from "../../assets/icons/powerpoint-2.svg";
import excel from "../../assets/icons/excel-4.svg";
import zoom from "../../assets/icons/zoom-app.svg";
import googleMeet from "../../assets/icons/google-meet-icon-2020-.svg";
import teems from "../../assets/icons/microsoft-teams-1.svg";

export interface Integration {
  icon: ComponentType<{ size?: number; className?: string }> | string;
  label: string;
  /** No official brand mark exists for this one — rendered with a generic icon instead. */
  isGeneric?: boolean;
}

export const integrations: Integration[] = [
  { icon: ShieldCheck, label: "Active Directory", isGeneric: true },
  { icon: word, label: "Word" },
  { icon: excel, label: "Excel" },
  { icon: powerpoint, label: "PowerPoint" },
  { icon: zoom, label: "Zoom" },
  { icon: teems, label: "Microsoft Teams", isGeneric: true },
  { icon: googleMeet, label: "Google Meet" },
  { icon: sap, label: "SAP" },
  { icon: odoo, label: "Odoo" },
  { icon: MessageSquareText, label: "SMS", isGeneric: true },
  { icon: whatsapp, label: "WhatsApp" },
  { icon: mail, label: "Email", isGeneric: true },
];
