export interface NavLink {
  name: string;
  href: string;
  subLinks?: NavLink[];
}

export interface Promotion {
  title: string;
  icon: string;
  ivType: string;
  ivLabel: string;
  imageUrl?: string;
}

export interface ServicePackage {
  headline: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
  pageId: string;
}

export interface NewsArticle {
  title: string;
  icon: string;
  date: string;
}

export interface Testimonial {
    name: string;
    initials: string;
    date: string;
    review: string;
}