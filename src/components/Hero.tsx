import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Check } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import ScaleIn from './animations/ScaleIn';
import HeroCard from './cards/HeroCard';
import { useFormSubmission } from '../hooks/useFormSubmission';
import RedirectModal from './modals/RedirectModal';

export default function Hero() {
  const { theme, content } = useTheme();
  const {
    email,
    isSubmitting,
    isSuccess,
    isRedirecting,
    setEmail,
    handleSubmit,
  } = useFormSubmission({
    source: 'hero',
  });

  return (
    <>
      <section
        className={`bg-gradient-to-b ${theme.styles.gradient} to-white pb-12 md:px-16 px-8`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <FadeIn>
                <div className="mb-8 inline-flex">
                  <div
                    className={`rounded-full ${theme.styles.accent} px-3 py-1 text-sm leading-6 ${theme.styles.primaryText} ring-1 ring-inset ${theme.styles.accentRing}`}
                  >
                    <theme.icon className="inline-block w-4 h-4 mr-2" />
                    {content.header.announcement}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {content.hero.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {content.hero.subtitle}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <form
                  onSubmit={handleSubmit}
                  className="mt-10 max-w-md mx-auto lg:mx-0"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current"
                      required
                      disabled={isSubmitting || isSuccess}
                    />
                    <ScaleIn>
                      <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className={`w-full sm:w-auto rounded-xl ${
                          isSuccess
                            ? 'bg-green-500 hover:bg-green-500'
                            : `${theme.styles.primary} ${theme.styles.primaryHover}`
                        } px-6 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current flex items-center justify-center gap-2 min-w-[140px]`}
                      >
                        {isSuccess ? (
                          <>
                            <Check className="h-5 w-5" />
                            <span>Success!</span>
                          </>
                        ) : isSubmitting ? (
                          <span>Processing...</span>
                        ) : (
                          content.hero.ctaText
                        )}
                      </button>
                    </ScaleIn>
                  </div>
                </form>

                <p className="text-xs text-gray-500 pt-3">Try our product free for 2 weeks - no credit card required</p>
              </FadeIn>
            </div>

            {/* Right Column - Hero Cards */}
            <div className="w-full">
              <div className="flex flex-wrap justify-end gap-4 max-w-[640px] mx-auto">
                {content.hero.cards.map((card, index) => (
                  <FadeIn
                    key={index}
                    direction="right"
                    delay={0.2 + index * 0.1}
                    className={`
                      ${index === 0 ? 'block' : 'hidden'} 
                      ${index === 1 ? 'sm:block' : ''} 
                      ${index === 2 ? 'lg:block' : ''} 
                      w-full sm:w-[calc(50%-8px)]
                    `}
                  >
                    <HeroCard {...card} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RedirectModal isOpen={isRedirecting} />
    </>
  );
}