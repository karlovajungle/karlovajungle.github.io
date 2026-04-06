export const common = {
  siteName: 'Karlova Jungle',
  tagline: 'Студия красоты в Карлова',
  address: 'Tähe 19 - 44, 2 этаж, Тарту, Эстония',

  seo: {
    title: 'Karlova Jungle — студия красоты в сердце Тарту',
    description:
      'Karlova Jungle — салон красоты и парикмахерская в районе Карлова города Тарту. Работа по записи, индивидуальный подход.',
  },

  nav: {
    ariaLabel: 'Основная навигация',
    links: [
      { label: 'Главная', href: '/ru' },
      { label: 'Опыт', href: '/ru/kogemus' },
      { label: 'Галерея', href: '/ru/tood' },
      { label: 'Услуги', href: '/ru/teenused' },
      { label: 'Контакт', href: '/ru/kontakt' },
    ],
  },

  header: {
    logoAlt: 'Karlova Jungle',
    logoAriaLabel: 'Karlova Jungle — главная',
    booking: 'Записаться',
    openMenu: 'Открыть меню',
    mobileMenuLabel: 'Навигационное меню',
  },

  footer: {
    logoAlt: 'Karlova Jungle',
    booking: 'Записаться',
    privacy: 'Политика конфиденциальности',
    privacyHref: '/ru/privaatsuspoliitika',
    copyright: 'Все права защищены.',
  },
} as const;
