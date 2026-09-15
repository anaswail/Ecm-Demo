export interface StatItem {
  value: string;
  labelKey: string;
}

// Figures as published on the current live site (ecmpluss.com) — value strings only,
// wording/labels rewritten for tone but the numbers themselves are unchanged.
export const stats: StatItem[] = [
  { value: "25", labelKey: "stats.countries" },
  { value: "1,500+", labelKey: "stats.projects" },
  { value: "$250M", labelKey: "stats.waste" },
  { value: "1.5B", labelKey: "stats.documents" },
];
