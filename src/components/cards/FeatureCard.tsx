import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className="relative group">
      {/* Background Accent */}
      <div className={`absolute -inset-2 rounded-xl ${theme.styles.accent} opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10`} />
      
      {/* Card Content */}
      <div className="relative space-y-6 p-6">
        {/* Icon */}
        <div className="relative">
          <div className={`absolute -inset-2 rounded-xl ${theme.styles.accent} opacity-20`} />
          <div className={`relative rounded-lg ${theme.styles.primary} p-3 text-white shadow-lg`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-8 text-gray-900">
            {title}
          </h3>
          <p className="text-base leading-7 text-gray-600">
            {description}
          </p>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current transition-colors duration-300" style={{ borderColor: 'transparent' }} />
      </div>
    </div>
  );
}