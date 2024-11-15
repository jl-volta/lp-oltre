import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface ComparisonCardProps {
  icon: LucideIcon;
  title: string;
  stance: number;
  partyStance: number;
  className?: string;
}

export default function ComparisonCard({ icon: Icon, title, stance, partyStance, className = '' }: ComparisonCardProps) {
  const { theme } = useTheme();
  const difference = stance - partyStance;
  const tags = [
    { label: 'Your View', value: stance },
    { label: 'Party View', value: partyStance },
  ];
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 ${className}`}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 ${theme.styles.accent} rounded-xl`}>
              <Icon className={`h-5 w-5 ${theme.styles.primaryText}`} />
            </div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
          </div>
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
            difference >= 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
          }`}>
            {difference >= 0 ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="font-medium">{Math.abs(difference)}%</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${
                index === 0
                  ? `${theme.styles.accent} ${theme.styles.primaryText}`
                  : 'bg-gray-100 text-gray-700'
              } text-sm font-medium`}
            >
              {tag.label}
              <span className={index === 0 ? 'text-gray-900' : ''}>
                {tag.value}%
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${theme.styles.primary} transition-all duration-500`}
                style={{ width: `${stance}%` }}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gray-400 transition-all duration-500"
                style={{ width: `${partyStance}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}