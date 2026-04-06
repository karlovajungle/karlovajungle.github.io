export const common = {
  siteName: 'Karlova Jungle',
  tagline: 'Private beauty studio in Karlova',
  address: 'Tähe 19 - 44, 2nd floor, Tartu, Estonia',

  seo: {
    title: 'Karlova Jungle - Private Beauty Studio in the Heart of Tartu',
    description:
      'Karlova Jungle is a private hair and beauty salon in Tartu\'s Karlova district. Appointment-based, personalised service.',
  },

  nav: {
    ariaLabel: 'Main navigation',
    links: [
      { label: 'Home', href: '/en' },
      { label: 'Experience', href: '/en/kogemus' },
      { label: 'Gallery', href: '/en/tood' },
      { label: 'Services', href: '/en/teenused' },
      { label: 'Contact', href: '/en/kontakt' },
    ],
  },

  header: {
    logoAlt: 'Karlova Jungle',
    logoAriaLabel: 'Karlova Jungle - home',
    booking: 'Book',
    openMenu: 'Open menu',
    mobileMenuLabel: 'Navigation menu',
  },

  footer: {
    logoAlt: 'Karlova Jungle',
    booking: 'Book',
    privacy: 'Privacy Policy',
    privacyHref: '/en/privaatsuspoliitika',
    copyright: 'All rights reserved.',
  },
} as const;
