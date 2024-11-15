import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Star } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { modalContent } from '../../config/modal';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  const { theme } = useTheme();
  const content = modalContent.thankYou;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-2xl"
              >
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="grid md:grid-cols-5 gap-6 p-8">
                    {/* Letter Content */}
                    <div className="md:col-span-3 text-left">
                      {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {content.title}
                      </h3> */}
                      
                      <div className="prose prose-sm">
                        <p className="text-gray-600 mb-4">
                          {content.greeting}
                        </p>
                        
                        <p className="text-gray-600 mb-4">
                          {content.message}
                        </p>
                        
                        <p className="text-gray-600 mb-6">
                          {content.benefitsIntro}
                        </p>

                        <div className="space-y-4 mb-6">
                          <div className={`p-3 rounded-lg ${theme.styles.accent}`}>
                            <div className="flex items-start gap-3">
                              <Mail className={`w-5 h-5 mt-0.5 ${theme.styles.primaryText}`} />
                              <div>
                                <h4 className="font-medium text-gray-900">{content.benefits[0].title}</h4>
                                <p className="text-sm text-gray-600">
                                  {content.benefits[0].description}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className={`p-3 rounded-lg ${theme.styles.accent}`}>
                            <div className="flex items-start gap-3">
                              <Star className={`w-5 h-5 mt-0.5 ${theme.styles.primaryText}`} />
                              <div>
                                <h4 className="font-medium text-gray-900">{content.benefits[1].title}</h4>
                                <p className="text-sm text-gray-600">
                                  {content.benefits[1].description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">
                          {content.followUp}
                        </p>

                        <p className="text-gray-600 mb-2">
                          {content.closing}
                        </p>
                        <p className="font-medium text-gray-900">
                          {content.signature.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {content.signature.title}
                        </p>
                      </div>
                    </div>

                    {/* Founder Image */}
                    <div className="md:col-span-2 flex flex-col items-center justify-start">
                      <div className="relative">
                        <img
                          src={content.signature.image}
                          alt={content.signature.name}
                          className="w-full rounded-xl object-cover shadow-lg"
                        />
                        <div className={`absolute -bottom-2 -right-2 ${theme.styles.primary} rounded-full p-2 shadow-lg`}>
                          <Star className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="px-8 pb-8">
                    <button
                      onClick={onClose}
                      className={`w-full rounded-xl ${theme.styles.primary} px-4 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`}
                    >
                      {content.button}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}