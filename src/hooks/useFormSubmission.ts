import { useState } from 'react';
import { APP_CONFIG } from '../config/app';

interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isRedirecting: boolean;
  email: string;
}

interface UseFormSubmissionProps {
  source: 'hero' | 'cta';
}

export function useFormSubmission({ source }: UseFormSubmissionProps) {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    isRedirecting: false,
    email: '',
  });

  const setEmail = (email: string) => {
    setState(prev => ({ ...prev, email }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state.isSubmitting) return;

    setState(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      const response = await fetch(APP_CONFIG.api.webhook_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: state.email,
          source,
          company_id: APP_CONFIG.company_id,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setState(prev => ({
        ...prev,
        isSuccess: true,
        isRedirecting: true,
        email: '',
      }));
      
      // Redirect to signup page
      window.location.href = 'https://app.optiml.ca/?signup';
    } catch (error) {
      console.error('Failed to join:', error);
    } finally {
      setState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  return {
    email: state.email,
    isSubmitting: state.isSubmitting,
    isSuccess: state.isSuccess,
    isRedirecting: state.isRedirecting,
    setEmail,
    handleSubmit,
  };
}