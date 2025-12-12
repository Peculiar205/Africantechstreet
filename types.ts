import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  targetAudience: string;
  benefits: string[];
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}