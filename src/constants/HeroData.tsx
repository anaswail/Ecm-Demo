import mms from "../assets/mms.webp";
import dms from "../assets/dms.webp";
import bpm from "../assets/bpm.webp";
import cms from "../assets/cms.webp";

type DecorationColor = "green" | "yellow" | "blue" | "red";

export const features = [
  {
    feature: "DMS",
    icon: dms,
    title: "Document Management System",
    desc: "Manage documents and correspondence in one place with our DMS.",
    color: "green",
    position: "top-5 -right-40 ",
    nodesPosition: { x: 300, y: 150 },
  },
  {
    feature: "MMS",
    icon: mms,
    title: "Meeting Management System",
    desc: "Meeting Management System for planning, documenting, and tracking meetings.",
    color: "yellow",
    position: "top-5 -left-30 ",
    nodesPosition: { x: -300, y: 150 },
  },
  {
    feature: "BPM",
    icon: bpm,
    title: "Business Process Management",
    desc: "Streamline and optimize your business processes with our BPM feature.",
    color: "blue",
    position: "bottom-5 -right-20 ",
    nodesPosition: { x: 300, y: -150 },
  },
  {
    feature: "CMS",
    icon: cms,
    title: "Content Management System",
    desc: "Create, manage, and publish organizational content with our CMS..",
    color: "red",
    position: "bottom-5 -left-20 ",
    nodesPosition: { x: -300, y: -150 },
  },
];

export const featuresDecorationIcons: Array<{
  icon: string;
  color: DecorationColor;
  position: string;
}> = [
  {
    icon: dms,
    color: "green",
    position: "top-40 right-50",
  },
  {
    icon: mms,
    color: "yellow",
    position: "top-40 left-30",
  },
  {
    icon: bpm,
    color: "blue",
    position: "top-90 right-30",
  },
  {
    icon: cms,
    color: "red",
    position: "top-90 left-40",
  },
];

export const decorationColors: Record<
  DecorationColor,
  { border: string; bg: string }
> = {
  green: {
    border: "border-green",
    bg: "bg-green/10",
  },
  yellow: {
    border: "border-yellow",
    bg: "bg-yellow/10",
  },
  blue: {
    border: "border-blue",
    bg: "bg-blue/10",
  },
  red: {
    border: "border-red",
    bg: "bg-red/10",
  },
};
