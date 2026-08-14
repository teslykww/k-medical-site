export type NavigationItem = {
  label: string;
  href: string;
};

export type JourneyStep = {
  key: string;
  label: string;
  shortLabel: string;
};

export type GrowthEngine = {
  title: string;
  description: string;
  detail?: string;
};

export type EvidenceItem = {
  title: string;
  description: string;
  status: "confirmed-public" | "approach-diagram" | "demonstration" | "unconfirmed";
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  initials: string;
  status: "confirmed" | "demonstration";
};

export type CaseStudy = {
  id: string;
  label: string;
  segment: string;
  title: string;
  result: string;
  situation: string;
  actions: string[];
  outcome: string;
  period: string;
  source: string;
  image: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  launch?: string;
  term?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  detailId?: ProductDetailId;
};

export type ProductDetailId =
  | "clinic-focus"
  | "clinic-growth"
  | "clinic-system"
  | "clinic-enterprise"
  | "clinic-priorities"
  | "clinic-analytics"
  | "clinic-conversion"
  | "clinic-readiness"
  | "dental-focus"
  | "dental-growth"
  | "dental-system"
  | "doctor-audit"
  | "doctor-presence"
  | "doctor-growth"
  | "doctor-authority";

export type ProductScopeGroup = {
  title: string;
  items: string[];
};

export type ProductDetail = {
  id: ProductDetailId;
  segment: string;
  name: string;
  title: string;
  lead: string;
  price: string;
  terms: string[];
  audience: string;
  outcome: string;
  scope: ProductScopeGroup[];
  deliverables: string[];
  start: string;
  rationale: string;
  alternative: string;
  exclusions?: string;
  cta: {
    label: string;
    href: string;
  };
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CTA = {
  title: string;
  description: string;
  label: string;
  href: string;
};

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category:
    | "Клиники"
    | "Стоматология"
    | "Врачи"
    | "Реклама"
    | "Репутация"
    | "Аналитика"
    | "База пациентов";
  readingTime: string;
  publishedAt: string;
  sections: ArticleSection[];
  cta: CTA;
};
