import type { ComponentType } from "react";
import { Mail, MessageSquareText, ShieldCheck, Users } from "lucide-react";
import { FaFileExcel, FaFilePowerpoint, FaFileWord } from "react-icons/fa6";
import {
  SiZoom,
  SiGooglemeet,
  SiSap,
  SiOdoo,
  SiWhatsapp,
} from "react-icons/si";

export interface Integration {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  /** No official brand mark exists for this one — rendered with a generic icon instead. */
  isGeneric?: boolean;
}

export const integrations: Integration[] = [
  { icon: ShieldCheck, label: "Active Directory", isGeneric: true },
  { icon: FaFileWord, label: "Word" },
  { icon: FaFileExcel, label: "Excel" },
  { icon: FaFilePowerpoint, label: "PowerPoint" },
  { icon: SiZoom, label: "Zoom" },
  { icon: Users, label: "Microsoft Teams", isGeneric: true },
  { icon: SiGooglemeet, label: "Google Meet" },
  { icon: SiSap, label: "SAP" },
  { icon: SiOdoo, label: "Odoo" },
  { icon: MessageSquareText, label: "SMS", isGeneric: true },
  { icon: SiWhatsapp, label: "WhatsApp" },
  { icon: Mail, label: "Email", isGeneric: true },
];
