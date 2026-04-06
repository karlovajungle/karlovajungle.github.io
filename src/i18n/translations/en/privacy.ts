export const privacy = {
  meta: {
    title: 'Privacy Policy — Karlova Jungle',
    description:
      'Karlova Jungle privacy policy — how we collect and process personal data.',
  },

  heading: 'Privacy Policy',
  lastUpdated: 'Last updated: March 2026',

  sections: [
    {
      heading: '1. What data is collected and who is responsible',
      content: `<p>
          The Karlova Jungle website itself does not collect personal data. To make a booking,
          visitors are directed to the external booking platform <strong class="text-[#1F2A22] font-medium">salon.life</strong>,
          which acts as an independent data controller and is solely responsible for the
          processing of personal data collected during the booking process (name, email, phone,
          booking history). Karlova Jungle does not collect, store or process this data.
        </p>
        <p class="mt-3">
          By submitting your data to the booking platform, you agree to salon.life's
          terms of service and privacy policy. All data protection requests, including
          access, correction and deletion, must be submitted directly to salon.life.
        </p>`,
    },
    {
      heading: '2. Third parties',
      content: `<p>The website uses the following third-party services:</p>
        <ul class="mt-3 space-y-2">
          <li>
            <strong class="text-[#1F2A22] font-medium">salon.life</strong> — an independent
            data controller responsible for all booking data processing in accordance with
            its own privacy policy.
          </li>
          <li>
            <strong class="text-[#1F2A22] font-medium">Google Maps</strong> — an embedded
            Google map is used to display the location, which may collect visitor data in
            accordance with Google's privacy policy.
          </li>
        </ul>`,
    },
    {
      heading: '3. Cookies',
      content: `<p>
          The Karlova Jungle website itself does not use tracking cookies or analytics tools.
          Third-party services (Google Maps, salon.life) may use their own cookies in
          accordance with their own terms.
        </p>`,
    },
    {
      heading: '4. Your rights',
      content: `<p>
          As booking data is processed by salon.life, all data protection requests
          (access, correction, deletion, portability) must be submitted directly to salon.life
          in accordance with their privacy policy.
        </p>
        <p class="mt-3">
          For general enquiries you may also contact us:
          <a href="mailto:{{email}}" class="text-[#3F5A45] underline underline-offset-2">{{email}}</a>.
          Complaints may be submitted to the Estonian Data Protection Inspectorate (<a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" class="text-[#3F5A45] underline underline-offset-2">aki.ee</a>).
        </p>`,
    },
    {
      heading: '5. Changes',
      content: `<p>
          We reserve the right to update this privacy policy. In the event of significant
          changes, notice will be given on the website.
        </p>`,
    },
  ],
} as const;
