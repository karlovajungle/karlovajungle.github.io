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
        { name: 'Juukselõikus naistele', price: '€35' },
        { name: 'Juukselõikus meestele (kääridega)', price: '€25' },
        { name: 'Masinlõikus meestele', price: '€20' },
        { name: 'Juukselõikus lastele (vanusele kuni 10)', price: '€15' },
        {
          name: 'Stiilimuutus naistele',
          price: '€45',
          note: 'Mudellõikus/stiliseeritud keerulisem lõikus või selle värskendamine.',
        },
        {
          name: 'Stiilimuutus meestele',
          price: '€30',
          note: 'Mudellõikus/stiliseeritud keerulisem lõikus või selle värskendamine.',
        },
        { name: 'Tuka lõikus', price: '€8' },
      ],
      footnote: null,
    },
    {
      id: 'varvimine',
      heading: 'Värvimine',
      items: [
        { name: 'Väljakasvu värvimine', price: '€45' },
        { name: 'Värvimine', price: 'al €60' },
        { name: 'Triibutamine', price: 'al €60' },
        { name: 'Värvimise ja juukselõikuse komplektteenus', price: 'al €80' },
        { name: 'Värvimine balayage või eritehnikas', price: 'al €100' },
      ],
      footnote: 'Kõikidele värviteenustele lisandub värvi grammi hind €0.40.',
    },
    {
      id: 'toonimine',
      heading: 'Toonimine',
      items: [
        {
          name: 'Juuste toonimine',
          price: 'al €45',
          note: 'Tooni värskendamine. Teenus sisaldab peapesu ja föönitamist.',
        },
        { name: 'Juuste toonimine lisaks värvimisteenusele', price: 'al €25' },
      ],
      footnote: null,
    },
    {
      id: 'hooldused',
      heading: 'Hooldused',
      items: [
        { name: 'Olaplex hooldus lühikestele juustele', price: 'al €45' },
        { name: 'Olaplex hooldus pikkadele juustele', price: 'al €60' },
        { name: 'Olaplex hooldus lisana värvimisteenusele', price: 'al €15' },
        { name: 'KM viieastmeline peanaha hooldus', price: 'al €55' },
      ],
      footnote: null,
    },
    {
      id: 'soengud',
      heading: 'Soengud',
      items: [
        { name: 'Föönisoeng (sisaldab peapesu)', price: '€40' },
        { name: 'Lokisoeng', price: '€38' },
        { name: 'Pidulik soeng', price: '€50' },
        { name: 'Pruudi proovisoeng', price: '€55' },
        { name: 'Pruudisoeng', price: '€55' },
      ],
      footnote: null,
    },
    {
      id: 'jumestus',
      heading: 'Jumestus',
      items: [
        { name: 'Jumestus', price: '€45' },
        { name: 'Pruudi jumestus', price: '€55' },
      ],
      footnote: null,
    },
  ],
} as const;
