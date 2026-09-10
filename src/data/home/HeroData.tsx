import mms from "../assets/mms.webp";
import dms from "../assets/dms.webp";
import bpm from "../assets/bpm.webp";
import cms from "../assets/cms.webp";

type DecorationColor = "green" | "yellow" | "blue" | "red";

export const features = [
  {
    feature: "DMS",
    icon: dms,
    title: "hero.features.dms.title",
    desc: "hero.features.dms.desc",
    color: "green",
    position: "top-5 -right-40 ",
    nodesPosition: { x: 300, y: 150 },
  },
  {
    feature: "MMS",
    icon: mms,
    title: "hero.features.mms.title",
    desc: "hero.features.mms.desc",
    color: "yellow",
    position: "top-5 -left-30 ",
    nodesPosition: { x: -300, y: 150 },
  },
  {
    feature: "BPM",
    icon: bpm,
    title: "hero.features.bpm.title",
    desc: "hero.features.bpm.desc",
    color: "blue",
    position: "bottom-5 -right-20 ",
    nodesPosition: { x: 300, y: -150 },
  },
  {
    feature: "CMS",
    icon: cms,
    title: "hero.features.cms.title",
    desc: "hero.features.cms.desc",
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
