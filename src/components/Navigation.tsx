import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import { APP_CONFIG } from '../config/app';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = []; // Empty array for now, can be populated later from config

  // Only show mobile menu if there are items
  const showMobileMenu = menuItems.length > 0;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#">
            <img 
              src={APP_CONFIG.branding.logo.url} 
              alt={APP_CONFIG.branding.logo.alt}
              className="w-full max-w-[80px]"
            />
          </a>

          {/* Mobile menu button - only show if there are menu items */}
          {showMobileMenu && (
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu - only render if there are menu items */}
      {showMobileMenu && (
        <FadeIn
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </FadeIn>
      )}
    </>
  );
}