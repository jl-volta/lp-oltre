import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import FadeIn from './animations/FadeIn';

export default function Details() {
  const { theme, content } = useTheme();

  return (
    <section id="details">
      {content.details.map((detail, index) => (
        <div
          key={index}
          className={`py-24 md:px-16 px-8 ${
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 ${
                detail.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <FadeIn
                direction={detail.imagePosition === 'left' ? 'left' : 'right'}
                viewPort
                className={
                  detail.imagePosition === 'right' ? 'lg:col-start-2' : ''
                }
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="rounded-2xl shadow-xl"
                />
              </FadeIn>

              <FadeIn
                direction={detail.imagePosition === 'left' ? 'right' : 'left'}
                viewPort
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {detail.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  {detail.description}
                </p>

                <FadeIn
                  direction="up"
                  viewPort
                  delay={0.2}
                  className="mt-8 space-y-4"
                >
                  {detail.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className={`h-5 w-5 ${theme.styles.primaryText}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </FadeIn>
              </FadeIn>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
