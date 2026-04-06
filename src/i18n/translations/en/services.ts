export const services = {
  meta: {
    title: 'Services & Prices — Karlova Jungle',
    description:
      'Karlova Jungle service list and prices. Haircuts, colouring, treatments, styling and makeup.',
  },

  heading: 'Services & Prices',

  sections: [
    {
      id: 'loikamine',
      heading: 'Haircuts',
      items: [
        { name: 'Women\'s haircut', price: '€40' },
        { name: 'Men\'s haircut (scissors)', price: '€35' },
        { name: 'Style change for women', price: '€45–50' },
        { name: 'Style change for men', price: '€40' },
        {
          name: 'Curly hair cut for women',
          price: '€55',
          note: 'Curly hair cut and styling.',
        },
        { name: 'Curly hair cut for men', price: '€40' },
      ],
      footnote: null,
    },
    {
      id: 'varvimine',
      heading: 'Colouring',
      items: [
        { name: 'Root colour', price: '€60' },
        { name: 'Colour + haircut package', price: 'from €90' },
        { name: 'Balayage or specialty technique colour', price: 'from €110' },
        {
          name: 'Toning',
          price: 'from €65',
          note: 'Tone refresh. Includes wash and blow-dry.',
        },
        { name: 'Add-on toning to colour service', price: 'from €35' },
      ],
      footnote: 'All colour services include a material surcharge of €0.50 per gram of colour.',
    },
    {
      id: 'hooldused',
      heading: 'Treatments',
      items: [
        {
          name: 'Olaplex treatment for curly hair',
          price: 'from €80',
        },
        { name: 'Olaplex treatment for long hair', price: 'from €65' },
        { name: 'Olaplex as add-on to colour service', price: 'from €30' },
      ],
      footnote: null,
    },
    {
      id: 'soengud',
      heading: 'Styling',
      items: [
        { name: 'Blow-dry (includes wash)', price: '€50' },
        { name: 'Curl styling', price: '€50' },
        { name: 'Formal updo', price: '€55' },
        { name: 'Bridal trial style', price: '€60' },
        { name: 'Bridal styling', price: '€60' },
      ],
      footnote: null,
    },
    {
      id: 'jumestus',
      heading: 'Makeup',
      items: [
        { name: 'Makeup', price: '€50' },
        { name: 'Bridal makeup', price: '€55' },
      ],
      footnote: null,
    },
  ],
} as const;
