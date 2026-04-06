export const home = {
  meta: {
    title: 'Karlova Jungle - Private Beauty Studio in the Heart of Tartu',
    description:
      'Karlova Jungle is a private hair and beauty salon in Tartu\'s Karlova district. Appointment-based, personalised service.',
  },

  hero: {
    ariaLabel: 'Hero',
    logoAlt: 'Karlova Jungle',
  },

  about: {
    heading: 'Private Beauty Studio in Karlova',
    text: 'Karlova Jungle is a green and cosy beauty studio in Tartu, where you can enjoy professional service in a calm atmosphere. The focus is on quality, attention to detail, and results you can count on.',
    images: [
      { src: '/images/homepage/work-1.webp', alt: 'Stylist at work' },
      { src: '/images/homepage/work-2.webp', alt: 'Stylist at work' },
      { src: '/images/homepage/work-3.webp', alt: 'Salon interior' },
    ],
  },
} as const;
