import { 
  Globe, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Lightbulb, 
  Handshake, 
  Rocket,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Video
} from 'lucide-react';
import { NavItem, ServiceCardProps, FeatureProps, SocialLink, TeamMember, Milestone } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why ATS', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  tagline: "Rewriting Africa's Tech Story",
  headline: "Empowering 10 Million African Tech Innovators",
  subheadline: "Join the first digital syndicate leveraging monetization to fund startups. No equity sharing. Just community, transparency, and growth.",
  ctaPrimary: "Join the Movement",
  ctaSecondary: "Learn More"
};

export const SERVICES: ServiceCardProps[] = [
  {
    title: "For Founders",
    targetAudience: "Innovators & Startups",
    description: "Launch and scale your startup with community-backed funding without giving up equity.",
    icon: Rocket,
    benefits: [
      "Access to revenue-pooled funding",
      "No equity sharing required",
      "Mentorship from industry leaders",
      "Global visibility for your product"
    ]
  },
  {
    title: "For Creators",
    targetAudience: "Tech Content Creators",
    description: "Monetize your influence and contribute to a larger ecosystem while growing your own brand.",
    icon: Video,
    benefits: [
      "Leverage TikTok & YouTube at scale",
      "Collaborate with top tech brands",
      "Revenue sharing opportunities",
      "Professional content support"
    ]
  },
  {
    title: "For Investors & Partners",
    targetAudience: "Ecosystem Builders",
    description: "Support the next generation of African tech giants through a transparent, high-impact model.",
    icon: Handshake,
    benefits: [
      "Transparent financial reporting",
      "Community-based governance",
      "High-impact social investment",
      "Access to vetted innovations"
    ]
  }
];

export const UNIQUE_FEATURES: FeatureProps[] = [
  {
    title: "No Equity Sharing",
    description: "We use a mutual support model focused on revenue pooling, allowing founders to keep full ownership.",
    icon: ShieldCheck
  },
  {
    title: "Community Driven",
    description: "70% of revenue comes from community initiatives, ensuring the ecosystem sustains itself.",
    icon: Users
  },
  {
    title: "Monetization at Scale",
    description: "The first syndicate to leverage TikTok and YouTube monetization to fund real-world tech startups.",
    icon: TrendingUp
  },
  {
    title: "Transparent Governance",
    description: "Financial reporting is open, and decisions are guided by community-based principles.",
    icon: Globe
  }
];

export const CONTACT_INFO = {
  email: "hello@africantechstreet.com", // Placeholder based on domain usually, or could use form
  phone: "+234 708 638 7392",
  address: "Lagos, Nigeria (Pan-African Operations)"
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/african-tech-street", icon: Linkedin },
  { platform: "Twitter (X)", url: "https://x.com/@africantechstr", icon: Twitter },
  { platform: "Facebook", url: "https://web.facebook.com/profile.php?id=61583915797253", icon: Facebook },
  { platform: "YouTube", url: "#", icon: Youtube }, // Placeholder as URL wasn't explicit in prompt text besides "YouTube"
  { platform: "TikTok", url: "#", icon: Video }, // Using Video icon for TikTok
];

export const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: "Dr. Adebayo Alabi", 
    role: "Founder & Visionary", 
    image: "https://picsum.photos/400/400?random=101",
    bio: "Tech ecosystem builder with 15+ years driving innovation across West Africa." 
  },
  { 
    name: "Zainab Mohammed", 
    role: "Head of Operations", 
    image: "https://picsum.photos/400/400?random=102",
    bio: "Operational excellence expert ensuring our syndicate runs like clockwork." 
  },
  { 
    name: "Kofi Mensah", 
    role: "Community Lead", 
    image: "https://picsum.photos/400/400?random=103",
    bio: "Connecting creators and founders to build meaningful partnerships." 
  },
  { 
    name: "Sarah Okafor", 
    role: "Strategic Partnerships", 
    image: "https://picsum.photos/400/400?random=104",
    bio: "Bridging the gap between traditional finance and the new digital economy." 
  },
];

export const MILESTONES: Milestone[] = [
  { year: "2025", title: "The Genesis", description: "African Tech Street launches its pilot program in Lagos, establishing the core revenue pooling protocol." },
  { year: "2026", title: "Ecosystem Expansion", description: "Onboarding 5,000+ creators and funding the first cohort of 100 startups across West Africa." },
  { year: "2027", title: "Pan-African Hubs", description: "Opening operational hubs in Nairobi, Accra, and Cape Town to bridge regional tech gaps." },
  { year: "Future", title: "10 Million Strong", description: "Reaching our ultimate goal: 10 million funded startups driving a self-sustaining African economy." },
];