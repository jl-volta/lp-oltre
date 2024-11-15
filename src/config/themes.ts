import { Zap, Dog, Leaf, Code, Palette, Shield, Bone, Heart, Star, Sun, Code2, Rocket, Users } from 'lucide-react';

export type ThemeConfig = {
  id: string;
  name: string;
  icon: any;
  styles: {
    primary: string;
    primaryHover: string;
    primaryText: string;
    secondary: string;
    secondaryHover: string;
    gradient: string;
    accent: string;
    accentRing: string;
  };
};

export const themes: Record<string, ThemeConfig> = {
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    icon: Zap,
    styles: {
      primary: 'bg-[#00B4EB]',
      primaryHover: 'hover:bg-indigo-500',
      primaryText: 'text-[#004069]',
      secondary: 'bg-white',
      secondaryHover: 'hover:bg-indigo-50',
      gradient: 'from-[#82BDD5]/20',
      accent: 'bg-[#BCE3F3]/20',
      accentRing: 'ring-indigo-500/20',
    },
  },
  pets: {
    id: 'pets',
    name: 'Pets',
    icon: Dog,
    styles: {
      primary: 'bg-pink-500',
      primaryHover: 'hover:bg-pink-400',
      primaryText: 'text-pink-500',
      secondary: 'bg-white',
      secondaryHover: 'hover:bg-pink-50',
      gradient: 'from-pink-50',
      accent: 'bg-pink-50',
      accentRing: 'ring-pink-500/20',
    },
  },
  landscaping: {
    id: 'landscaping',
    name: 'Landscaping',
    icon: Leaf,
    styles: {
      primary: 'bg-emerald-600',
      primaryHover: 'hover:bg-emerald-500',
      primaryText: 'text-emerald-600',
      secondary: 'bg-white',
      secondaryHover: 'hover:bg-emerald-50',
      gradient: 'from-emerald-50',
      accent: 'bg-emerald-50',
      accentRing: 'ring-emerald-500/20',
    },
  },
};