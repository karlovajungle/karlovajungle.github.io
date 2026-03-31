export const services = {
  meta: {
    title: 'Teenused ja hinnad — Karlova Jungle',
    description:
      'Karlova Jungle teenuste nimekiri ja hinnad. Juuste lõikamine, värvimine, hooldus, soengud ja jumestus.',
  },

  heading: 'Teenused ja hinnad',

  sections: [
    {
      id: 'loikamine',
      heading: 'Lõikamine',
      items: [
        { name: 'Juukselõikus naistele', price: '€40' },
        { name: 'Juukselõikus meestele (kääridega)', price: '€35' },
        { name: 'Stiilimuutus naistele', price: '€45–50' },
        { name: 'Stiilimuutus meestele', price: '€40' },
        {
          name: 'Lokkis juuste lõikus naistele',
          price: '€55',
          note: 'Lokkis juuste lõikus ja stiliseerimine.',
        },
        { name: 'Lokkis juuste lõikus meestele', price: '€40' },
      ],
      footnote: null,
    },
    {
      id: 'varvimine',
      heading: 'Värvimine',
      items: [
        { name: 'Väljakasvu värvimine', price: '€60' },
        { name: 'Värvimise ja juukselõikuse komplektteenus', price: 'al €90' },
        { name: 'Värvimine balayage või eritehnikas', price: 'al €110' },
        {
          name: 'Juuste toonimine',
          price: 'al €65',
          note: 'Tooni värskendamine. Teenus sisaldab peapesu ja föönitamist.',
        },
        { name: 'Juuste toonimine lisaks värvimisteenusele', price: 'al €35' },
      ],
      footnote: 'Kõikidele värviteenustele lisandub materjalikulu €0.50 värvigramm.',
    },
    {
      id: 'hooldused',
      heading: 'Hooldused',
      items: [
        {
          name: 'Olaplex hooldus lokkis juustele',
          price: 'al €80',
        },
        { name: 'Olaplex hooldus pikkadele juustele', price: 'al €65' },
        { name: 'Olaplex hooldus lisana värvimisteenusele', price: 'al €30' },
      ],
      footnote: null,
    },
    {
      id: 'soengud',
      heading: 'Soengud',
      items: [
        { name: 'Föönisoeng (sisaldab peapesu)', price: '€50' },
        { name: 'Lokisoeng', price: '€50' },
        { name: 'Pidulik soeng', price: '€55' },
        { name: 'Pruudi proovisoeng', price: '€60' },
        { name: 'Pruudisoeng', price: '€60' },
      ],
      footnote: null,
    },
    {
      id: 'jumestus',
      heading: 'Jumestus',
      items: [
        { name: 'Jumestus', price: '€50' },
        { name: 'Pruudi jumestus', price: '€55' },
      ],
      footnote: null,
    },
  ],
} as const;
