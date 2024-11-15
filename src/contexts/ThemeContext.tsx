import React, { createContext, useContext } from 'react';
import { themes } from '../config/themes';
import { defaultContent } from '../config/content';
import { APP_CONFIG } from '../config/app';

interface ThemeContextType {
  theme: typeof themes.corporate;
  content: typeof defaultContent;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const value = {
    theme: themes[APP_CONFIG.theme_id],
    content: defaultContent,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}