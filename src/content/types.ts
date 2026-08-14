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
  status: "confirmed" | "requires-confirmation";
};

export type PricingPlan = {
  name: string;
  price: string;
  launch?: string;
  term?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
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
  category: "Клиника" | "Стоматология" | "Врач" | "Аналитика" | "База пациентов";
  readingTime: string;
  publishedAt: string;
  sections: ArticleSection[];
};

