export const APP_CONFIG = {
  company_id: 'vote_informer_01',
  theme_id: 'corporate' as const,
  branding: {
    logo: {
      url: '/images/optiml_logo.png',
      alt: 'Optiml Logo',
    },
    company: {
      name: 'Optiml',
      year: '2024',
    },
  },
  api: {
    webhook_url: 'https://hook.us1.make.com/ahfctwhci455r31hwlha4iwbq833z6g4',
  },
} as const;