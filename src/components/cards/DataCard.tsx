import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { LucideIcon } from 'lucide-react';

interface DataCardProps {
  icon: LucideIcon;
  title: string;
  data: string[];
  className?: string;
}

export default function DataCard({ icon: Icon, title, data, className = '' }: DataCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className={`p-4 ${theme.styles.accent} border-b border-gray-100 flex items-center gap-2`}>
        <Icon className={`h-5 w-5 ${theme.styles.primaryText}`} />
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {data.map((item, index) => (
          <div
            key={index}
            className="px-4 py-3 text-sm text-gray-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}