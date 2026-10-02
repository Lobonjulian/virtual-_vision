export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface HeroData {
  readonly title: string;
  readonly description: string;
  readonly cta: string;
  readonly legalNote: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly iconClass: string;
}

export interface Collaborator {
  readonly name: string;
  readonly role: string;
  readonly description?: string;
  readonly initials: string;
}

export interface ValueSection {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly buttonLabel: string;
  readonly buttonHref: string;
  readonly collaborator: Collaborator;
  readonly blobColor?: string;
}

export interface ServiceItem {
  readonly iconClass: string;
  readonly title: string;
  readonly description: string;
  readonly linkLabel: string;
  readonly linkHref: string;
}

export interface GlobalStatItem {
  readonly value: string;
  readonly label: string;
}

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterBrand {
  readonly tagline: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface SocialLink {
  readonly platform: string;
  readonly href: string;
  readonly iconClass: string;
}

export interface SiteConfig {
  readonly nav: readonly NavItem[];
  readonly hero: HeroData;
  readonly stats: readonly StatItem[];
  readonly values: readonly ValueSection[];
  readonly globalStats: readonly GlobalStatItem[];
  readonly services: readonly ServiceItem[];
  readonly footerBrand: FooterBrand;
  readonly footerColumns: readonly FooterColumn[];
  readonly socialLinks: readonly SocialLink[];
}
