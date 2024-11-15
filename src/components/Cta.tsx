import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import FadeIn from './animations/FadeIn';
import ScaleIn from './animations/ScaleIn';
import { useFormSubmission } from '../hooks/useFormSubmission';
import RedirectModal from './modals/RedirectModal';

export default function Cta() {
  const { theme, content } = useTheme();
  const {
    email,
    isSubmitting,
    isSuccess,
    isRedirecting,
    setEmail,
    handleSubmit,
  } = useFormSubmission({
    source: 'cta',
  });

  return (
    <>
      <section className="py-12 bg-white relative overflow-hidden md:px-16 px-8">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative isolate overflow-hidden ${theme.styles.primary} rounded-3xl px-6 py-24 shadow-2xl sm:px-24 xl:py-32`}
          >
            {/* Card Background Pattern */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5" />

              {/* Texture pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                }}
              />

              {/* Blurred circles */}
              <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-2xl text-center">
              <FadeIn>
                <div className="mb-8 inline-flex">
                  <div className="rounded-full bg-white/10 px-3 py-1 text-sm leading-6 text-white ring-1 ring-inset ring-white/20">
                    <theme.icon className="inline-block w-4 h-4 mr-2" />
                    Join the movement
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {content.cta.title}
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-4 text-lg text-white/90">
                  {content.cta.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <form onSubmit={handleSubmit} className="mt-10">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 max-w-md min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-current"
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
                            : 'bg-white hover:bg-gray-50'
                        } px-8 py-3 text-base font-semibold ${
                          isSuccess ? 'text-white' : theme.styles.primaryText
                        } shadow-sm flex items-center justify-center gap-2 min-w-[140px] transition-all duration-300`}
                      >
                        {isSuccess ? (
                          <>
                            <Check className="h-5 w-5" />
                            <span>Success!</span>
                          </>
                        ) : isSubmitting ? (
                          <span>Processing...</span>
                        ) : (
                          content.cta.primaryButton
                        )}
                      </button>
                    </ScaleIn>
                  </div>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <RedirectModal isOpen={isRedirecting} />
    </>
  );
}