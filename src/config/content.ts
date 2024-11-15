import {
  Code,
  Palette,
  Shield,
  Star,
  Code2,
  Rocket,
  Users,
} from 'lucide-react';

export const defaultContent = {
  header: {
    logoText: 'Optiml',
    announcement: 'Get early-adopter pricing now!',
  },
  hero: {
    title: 'Optimize your retirement plan',
    subtitle:
      'Know exactly when and how much to withdraw from your retirement funds. Start your free trial today to create an optimized retirement plan.',
    ctaText: 'Start Free Trial',
    cards: [
      {
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        text: 'Saved X% in their first year',
      },
      {
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        text: 'Identified 4 missed opportunities',
      },
      {
        image:
          'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        text: 'Optimized retirement strategy',
      },
    ],
    profiles: {
      profile1: {
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        name: 'Sarah L.',
      },
      profile2: {
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        name: 'Mark C.',
      },
      messages: [
        {
          text: 'Definitely easier than what I was doing before.',
          sender: 'left',
          name: 'Sarah L.',
        },
        {
          text: "I don't think I could go back to my old spreadsheets.",
          sender: 'right',
          name: 'Mark C.',
        },
      ],
    },
  },
  features: {
    title: 'A spreadsheet can only do so much.',
    subtitle:
      'Optiml allows you to create and maintain an optimized retirement plan in an every changing world of returns and regulations.',
    items: [
      {
        icon: Code,
        title: 'Personalized Planning',
        description:
          'Uncover key insights that most would miss. Easily adjust based on life events and plan ahead for unexpected circumstances.',
      },
      {
        icon: Palette,
        title: 'Real-Time Responses',
        description:
          'Get easy-to-understand insights on the health of your retirement plan. Know exactly how much and when to withdraw.',
      },
      {
        icon: Shield,
        title: 'No Missed Opportunities',
        description:
          'Minimize taxation over time, stay up-to-date on regulatory changes, and make adjustments as you grow.',
      },
      {
        icon: Star,
        title: 'Optimized Path to Retirement',
        description:
          'Find the Optiml™ path to retirement and achieve your goals with confidence.',
      },
    ],
  },
  details: [
    {
      title: 'No more generic advice',
      description:
        'Optiml allows you to uncover insights tailored to your unique situation. Easily adjust based on life events and plan ahead for unexpected circumstances.',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Adjust based on life events',
        'Plan ahead for unexpected circumstances',
        'Personalized retirement strategies',
      ],
      imagePosition: 'left',
    },
    {
      title: 'No more unanswered questions',
      description:
        'Get easy-to-understand insights on the health of your retirement plan. Know exactly how much and when to withdraw, and determine the optimal age to start CPP & Old Age Security.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Know when and how much to withdraw',
        'Determine optimal age for benefits',
        'Run what-if scenarios',
      ],
      imagePosition: 'right',
    },
    {
      title: 'No more missed opportunities',
      description:
        'Have confidence in making the best decisions for you and your loved ones. Minimize taxation over time and stay informed on regulatory changes.',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Minimize taxation over time',
        'Stay up to date on regulatory changes',
        'Make adjustments as you grow',
      ],
      imagePosition: 'left',
    },
  ],
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Optimize your retirement plan in three simple steps',
    steps: [
      {
        icon: Code2,
        title: '1. Set your goal',
        description:
          'Select from three optimization strategies based on your long-term goals.',
      },
      {
        icon: Users,
        title: '2. Create your Optiml™ Plan',
        description:
          'Generate an optimized plan based on your current financial position.',
      },
      {
        icon: Rocket,
        title: '3. Put your plan in motion',
        description:
          "With your blueprint in hand, you'll have the confidence and direction to manage your finances effectively.",
      },
    ],
  },
  testimonials: {
    title: "Don't just take our word, take theirs.",
    subtitle: 'Hear what our users have to say',
    items: [
      {
        quote: 'Definitely easier than what I was doing before.',
        author: 'Sarah L.',
        role: 'NB, Canada',
        company: '',
      },
      {
        quote: "I don't think I could go back to my old spreadsheets.",
        author: 'Mark C.',
        role: 'ON, United States',
        company: '',
      },
      {
        quote: "It's surprisingly easy!",
        author: 'Alan M.',
        role: 'BC, Canada',
        company: '',
      },
    ],
  },
  cta: {
    title: 'Interested in trying it out?',
    description:
      'Enter your email below to start your free 14-day trial of Optiml™.',
    primaryButton: 'Start Free Trial',
  },
};