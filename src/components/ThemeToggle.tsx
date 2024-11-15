import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/themes';

export default function ThemeToggle() {
  const { themeId, setThemeId } = useTheme();
  
  const handleThemeChange = () => {
    const themeIds = Object.keys(themes);
    const currentIndex = themeIds.indexOf(themeId);
    const nextIndex = (currentIndex + 1) % themeIds.length;
    setThemeId(themeIds[nextIndex]);
  };
  
  const currentTheme = themes[themeId];
  const nextTheme = themes[Object.keys(themes)[(Object.keys(themes).indexOf(themeId) + 1) % Object.keys(themes).length]];
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleThemeChange}
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${currentTheme.styles.primary} text-white`}
    >
      <Palette className="h-4 w-4" />
      <span className="text-sm font-semibold">
        Switch to {nextTheme.name} Theme
      </span>
    </motion.button>
  );
}