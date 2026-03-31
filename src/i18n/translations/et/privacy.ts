export const privacy = {
  meta: {
    title: 'Privaatsuspoliitika — Karlova Jungle',
    description:
      'Karlova Jungle privaatsuspoliitika — kuidas me isikuandmeid kogume ja töötleme.',
  },

  heading: 'Privaatsuspoliitika',
  lastUpdated: 'Viimati uuendatud: märts 2026',

  sections: [
    {
      heading: '1. Milliseid andmeid kogutakse ja kes vastutab',
      content: `<p>
          Karlova Jungle veebileht ise ei kogu isikuandmeid. Aja broneerimiseks suunatakse
          külastaja välisele broneerimisplatvormile <strong class="text-[#1F2A22] font-medium">salon.life</strong>,
          mis tegutseb iseseisvalt vastutava töötlejana ning vastutab täielikult broneeringu
          käigus kogutavate isikuandmete (nimi, e-post, telefon, broneeringu ajalugu) töötlemise
          eest. Karlova Jungle ei kogu, ei säilita ega töötle neid andmeid.
        </p>
        <p class="mt-3">
          Broneerimisplatvormile oma andmete esitamisega nõustub kasutaja salon.life
          kasutustingimuste ja privaatsuspoliitikaga. Kõik andmekaitsega seotud küsimused,
          sealhulgas andmetele juurdepääsu, parandamise ja kustutamise taotlused, tuleb
          esitada otse salon.life'ile.
        </p>`,
    },
    {
      heading: '2. Kolmandad osapooled',
      content: `<p>Veebileht kasutab järgmisi kolmandate osapoolte teenuseid:</p>
        <ul class="mt-3 space-y-2">
          <li>
            <strong class="text-[#1F2A22] font-medium">salon.life</strong> — iseseisev vastutav
            töötleja, kes vastutab kõigi broneeringuandmete töötlemise eest vastavalt oma
            privaatsuspoliitikale.
          </li>
          <li>
            <strong class="text-[#1F2A22] font-medium">Google Maps</strong> — kaardi kuvamiseks
            kasutatakse Google'i manustatud kaarti, mis võib koguda külastaja andmeid vastavalt
            Google'i privaatsuspoliitikale.
          </li>
        </ul>`,
    },
    {
      heading: '3. Küpsised',
      content: `<p>
          Karlova Jungle veebileht ise ei kasuta jälgimisküpsiseid ega analüütikavahendeid.
          Kolmandate osapoolte teenused (Google Maps, salon.life) võivad oma küpsiseid kasutada
          vastavalt nende enda tingimustele.
        </p>`,
    },
    {
      heading: '4. Teie õigused',
      content: `<p>
          Kuna broneeringuandmeid töötleb salon.life, tuleb kõik andmekaitsega seotud taotlused
          (juurdepääs, parandamine, kustutamine, ülekandmine) esitada otse salon.life'ile vastavalt
          nende privaatsuspoliitikale.
        </p>
        <p class="mt-3">
          Üldiste küsimuste korral võite võtta ühendust ka meiega:
          <a href="mailto:{{email}}" class="text-[#3F5A45] underline underline-offset-2">{{email}}</a>.
          Kaebuse saab esitada Andmekaitse Inspektsioonile (<a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" class="text-[#3F5A45] underline underline-offset-2">aki.ee</a>).
        </p>`,
    },
    {
      heading: '5. Muudatused',
      content: `<p>
          Jätame endale õiguse privaatsuspoliitikat ajakohastada. Oluliste muudatuste korral
          teavitatakse sellest veebilehel.
        </p>`,
    },
  ],
} as const;
