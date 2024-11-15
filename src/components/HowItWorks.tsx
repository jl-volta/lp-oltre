import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import FadeIn from './animations/FadeIn';

export default function HowItWorks() {
  const { theme, content } = useTheme();

  return (
    <section className="py-24 bg-gray-50 md:px-16 px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.howItWorks.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-gray-600">
              {content.howItWorks.subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {content.howItWorks.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={index} delay={index * 0.1} viewPort>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`rounded-full ${theme.styles.primary} p-4 mb-6`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
