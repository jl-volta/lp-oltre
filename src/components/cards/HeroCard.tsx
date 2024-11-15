import React from 'react';
import { Info } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface HeroCardProps {
  image: string;
  text: string;
  className?: string;
}

export default function HeroCard({
  image,
  text,
  className = '',
}: HeroCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`relative rounded-3xl overflow-hidden group w-full max-w-xs mx-auto ${className}`}
    >
      {/* Background Image Container */}
      <div className="aspect-[5/4] overflow-hidden">
        <img
          src={image}
          alt={text}
          className="w-full h-full object-cover object-center transform"
        />
      </div>

      {/* Info Label */}
      {/* <div className="absolute left-3 right-3 bottom-3">
        <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full p-1.5 pl-2.5 pr-3.5 shadow-lg">
          <div className={`${theme.styles.primary} rounded-full p-1.5`}>
            <Info className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-medium text-gray-800">{text}</span>
        </div>
      </div> */}
    </div>
  );
}
