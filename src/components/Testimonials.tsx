import React from 'react';
import { Quote } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import FadeIn from './animations/FadeIn';

export default function Testimonials() {
  const { theme, content } = useTheme();

  return (
    <section className="pt-24 bg-white md:px-16 px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.testimonials.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-gray-600">
              {content.testimonials.subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {content.testimonials.items.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1} viewPort>
              <div className={`h-full rounded-2xl ${theme.styles.accent} p-8`}>
                <Quote className={`h-8 w-8 ${theme.styles.primaryText} mb-4`} />
                <blockquote className="text-lg text-gray-900 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-auto">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className={`text-sm ${theme.styles.primaryText}`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
