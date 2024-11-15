import React from 'react';
import { APP_CONFIG } from '../config/app';
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const { name, year } = APP_CONFIG.branding.company;

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {year} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}