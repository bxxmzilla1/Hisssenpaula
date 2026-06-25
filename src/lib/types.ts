
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Sponsor = {
  name: string;
  logo: string;
  url: string;
  description: string;
};

export type Service = {
  icon: LucideIcon | ((props: any) => JSX.Element);
  title: string;
  description: string;
  contact: string;
};

export type EventStatus = 'Upcoming' | 'Completed' | 'Cancelled';

export type BlogEvent = {
  id: string;
  title: { en: string; es: string };
  date: string;
  location: string;
  description: { en: string; es: string };
  image: string;
  status: EventStatus;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: { en: string; es: string };
  author: string;
  date: string;
  image: string;
  excerpt: { en: string; es: string };
  content: string;
  category: 'immigration' | 'autism';
};

export type MessageStatus = 'New' | 'In Progress' | 'Follow up' | 'Call Back' | 'Done' | 'No Response';

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  phone?: string;
  message: string;
  receivedAt: Date;
  read: boolean;
  status: MessageStatus;
  userId?: string;
};

export type DonationStatus = 'Completed' | 'Pending' | 'Failed';

export type Donation = {
  id: string;
  name: string;
  email: string;
  amount: number;
  date: string;
  status: DonationStatus;
};

export type TranslatableContent = {
  en: { [key: string]: any };
  es: { [key: string]: any };
};

export type HomePageContent = {
  hero: TranslatableContent,
  mission: TranslatableContent,
};
