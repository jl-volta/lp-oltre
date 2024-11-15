export const modalContent = {
  thankYou: {
    title: 'Thank you for joining us!',
    greeting: 'Hey! Thank you for your interest - it means the world to us.',
    message: '',
    benefitsIntro: 'Next steps to get started:',
    benefits: [
      {
        title: 'Set Up Your Account',
        description:
          'You will receive an email with instructions to set up your Optiml account. Follow the steps to get started on your retirement journey.',
      },
      {
        title: 'Explore Features',
        description:
          'Once your account is set up, explore the personalized insights and optimization tools available to make the most of your retirement plan.',
      },
    ],
    followUp:
      "You should have an email from us shortly with all the details you need to get started. We’re excited to have you on board and can't wait to help you optimize your retirement!",
    closing: 'Thank you again,',
    signature: {
      name: 'Alex Thompson',
      title: 'Founder, Optiml',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    },
    button: 'Let’s Get Started!',
  },
} as const;
