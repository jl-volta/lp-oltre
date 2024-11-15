export const APP_CONFIG = {
  company_id: 'vote_informer_01',
  theme_id: 'corporate' as const,
  branding: {
    logo: {
      url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&h=100&q=80',
      alt: 'VoteInformer Logo',
    },
    company: {
      name: 'VoteInformer',
      year: '2024',
    },
  },
  api: {
    webhook_url: 'https://hook.us1.make.com/ahfctwhci455r31hwlha4iwbq833z6g4',
  },
} as const;