export const common = {
  siteName: 'Karlova Jungle',
  tagline: 'Privaatne ilustuudio Karlovas',
  address: 'Tähe 19 - 44, 2 korrus, Tartu, Eesti',

  seo: {
    title: 'Karlova Jungle — Privaatne ilustuudio Tartu südames',
    description:
      'Karlova Jungle on privaatne juuksuri- ja ilusalong Tartu Karlova linnaosas. Broneeringutel põhinev töörežiim, personaalne teenindus.',
  },

  nav: {
    ariaLabel: 'Peamine navigatsioon',
    links: [
      { label: 'Avaleht', href: '/' },
      { label: 'Kogemus', href: '/kogemus' },
      { label: 'Tööd', href: '/tood' },
      { label: 'Teenused', href: '/teenused' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },

  header: {
    logoAlt: 'Karlova Jungle',
    logoAriaLabel: 'Karlova Jungle — avaleht',
    booking: 'Broneeri',
    openMenu: 'Ava menüü',
    mobileMenuLabel: 'Navigatsioonimenüü',
  },

  footer: {
    logoAlt: 'Karlova Jungle',
    booking: 'Broneeri',
    privacy: 'Privaatsuspoliitika',
    privacyHref: '/privaatsuspoliitika',
    copyright: 'Kõik õigused kaitstud.',
  },
} as const;
