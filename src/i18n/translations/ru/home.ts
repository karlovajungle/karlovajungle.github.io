export const home = {
  meta: {
    title: 'Karlova Jungle — Частная студия красоты в сердце Тарту',
    description:
      'Karlova Jungle — частный салон красоты и парикмахерская в районе Карлова города Тарту. Работа по записи, индивидуальный подход.',
  },

  hero: {
    ariaLabel: 'Hero',
    logoAlt: 'Karlova Jungle',
  },

  about: {
    heading: 'Частная студия красоты в Карлова',
    text: 'Karlova Jungle — зелёная и уютная студия красоты в Тарту, где вы можете наслаждаться профессиональным обслуживанием в спокойной атмосфере. В центре внимания — качество, внимание к деталям и результат, на который можно рассчитывать.',
    images: [
      { src: '/images/homepage/work-1.webp', alt: 'Стилист за работой' },
      { src: '/images/homepage/work-2.webp', alt: 'Стилист за работой' },
      { src: '/images/homepage/work-3.webp', alt: 'Интерьер салона' },
    ],
  },
} as const;
