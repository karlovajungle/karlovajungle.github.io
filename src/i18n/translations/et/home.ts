export const home = {
  meta: {
    title: 'Karlova Jungle — Privaatne ilustuudio Tartu südames',
    description:
      'Karlova Jungle on privaatne juuksuri- ja ilusalong Tartu Karlova linnaosas. Broneeringutel põhinev töörežiim, personaalne teenindus.',
  },

  hero: {
    ariaLabel: 'Hero',
    logoAlt: 'Karlova Jungle',
  },

  about: {
    heading: 'Privaatne ilustuudio Karlovas',
    text: 'Karlova Jungle on roheline ja hubane ilustuudio Tartus, kus saad nautida professionaalset teenust rahulikus atmosfääris. Fookuses on kvaliteet, detailid ja tulemus, milles võib kindel olla.',
    images: [
      { src: '/images/homepage/work-1.webp', alt: 'Stilist tööl' },
      { src: '/images/homepage/work-2.webp', alt: 'Stilist tööl' },
      { src: '/images/homepage/work-3.webp', alt: 'Salongisisustus' },
    ],
  },
} as const;
