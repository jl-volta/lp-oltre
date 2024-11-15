import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import FadeIn from './animations/FadeIn';

export default function Features() {
  const { theme, content } = useTheme();

  return (
    <section id="features" className="relative overflow-hidden md:px-16 px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className={`py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative`}>
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto relative`}>
          <FadeIn>
            <div className="inline-flex mb-8">
              <div
                className={`rounded-full ${theme.styles.accent} px-3 py-1 text-sm leading-6 ${theme.styles.primaryText} ring-1 ring-inset ${theme.styles.accentRing}`}
              >
                <theme.icon className="inline-block w-4 h-4 mr-2" />
                Powerful Features
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.features.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {content.features.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/4 w-72 h-72 bg-gradient-to-r from-transparent via-indigo-50/50 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-gradient-to-r from-transparent via-pink-50/50 to-transparent rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
