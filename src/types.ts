export interface NewsItem {
  id: number;
  text: string;
  link?: string;
  isUrgent?: boolean;
}

export interface NavItem {
  name: string;
  path?: string;
  dropdown?: { name: string; path: string }[];
}

export interface Track {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export type CommitteeCategory = 'Patron' | 'Organizing' | 'Technical';

export interface CommitteeMember {
  id: number;
  name: string;
  designation: string;
  institution: string;
  image: string;
  category: string;
}

export interface ImportantDate {
  id: number;
  label: string;
  date: string;
  status: string;
}

export interface ConferenceConfig {
  title: string;
  fullName: string;
  date: string;
  venue: string;
  theme: string;
  heroImage: string;
  logo: string;
  description: string;
}

export interface TimelineMilestone {
  id: number;
  date: string;
  title: string;
  description: string;
  status: string;
  label: string;
}

export interface GECAStat {
  label: string;
  value: string;
}
