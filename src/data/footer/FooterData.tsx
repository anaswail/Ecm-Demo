export interface FooterLink {
  labelKey: string;
  href: string;
}

export interface FooterColumn {
  titleKey: string;
  links: FooterLink[];
}

// Grouped per the sitemap. Keep the module order (DMS → CMS → MMS → BPM)
// consistent with the nav, Platform hub, and Home module grid.
export const footerColumns: FooterColumn[] = [
  {
    titleKey: "footer.columns.platform",
    links: [
      { labelKey: "footer.links.platform", href: "/platform" },
      { labelKey: "footer.links.dms", href: "/modules/dms" },
      { labelKey: "footer.links.cms", href: "/modules/cms" },
      { labelKey: "footer.links.mms", href: "/modules/mms" },
      { labelKey: "footer.links.bpm", href: "/modules/bpm" },
    ],
  },
  {
    titleKey: "footer.columns.company",
    links: [
      { labelKey: "footer.links.about", href: "/about" },
      { labelKey: "footer.links.customers", href: "/customers" },
      { labelKey: "footer.links.contact", href: "/contact" },
    ],
  },
  {
    titleKey: "footer.columns.resources",
    links: [
      { labelKey: "footer.links.blog", href: "/resources/blog" },
      { labelKey: "footer.links.faq", href: "/resources/faq" },
    ],
  },
];

export const legalLinks: FooterLink[] = [
  { labelKey: "footer.links.privacy", href: "/legal/privacy" },
  { labelKey: "footer.links.terms", href: "/legal/terms" },
];
