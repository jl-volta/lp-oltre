export const themes = {
  corporate: {
    primary: 'bg-indigo-600',
    primaryHover: 'hover:bg-indigo-500',
    primaryText: 'text-indigo-600',
    secondary: 'bg-white',
    secondaryHover: 'hover:bg-indigo-50',
    gradient: 'from-indigo-50',
    accent: 'bg-indigo-50',
    accentRing: 'ring-indigo-500/20',
  },
  pets: {
    primary: 'bg-pink-500',
    primaryHover: 'hover:bg-pink-400',
    primaryText: 'text-pink-500',
    secondary: 'bg-white',
    secondaryHover: 'hover:bg-pink-50',
    gradient: 'from-pink-50',
    accent: 'bg-pink-50',
    accentRing: 'ring-pink-500/20',
  }
} as const;

export function getThemeClasses(theme: keyof typeof themes) {
  return themes[theme];
}