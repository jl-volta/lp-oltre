import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import FadeIn from './animations/FadeIn';
import ScaleIn from './animations/ScaleIn';

export default function About() {
  const { theme, content } = useTheme();

  return (
    <section id="about" className={`py-24 ${theme.styles.accent}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <FadeIn direction="left" viewPort>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img
                src={content.about.image}
                alt={content.about.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </FadeIn>
          
          <div className="flex flex-col justify-center">
            <FadeIn direction="right" viewPort>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {content.about.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {content.about.description}
              </p>
            </FadeIn>
            
            <div className="mt-8 space-y-4">
              {content.about.benefits.map((benefit, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-6 w-6 ${theme.styles.primary} rounded-full flex items-center justify-center`}>
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">{benefit}</span>
                  </div>
                </ScaleIn>
              ))}
            </div>

            <FadeIn direction="up" viewPort delay={0.4}>
              <div className="mt-10">
                <a
                  href="#features"
                  className={`inline-flex items-center ${theme.styles.primaryText} font-semibold`}
                >
                  Learn more about our features
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}