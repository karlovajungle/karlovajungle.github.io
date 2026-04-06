// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.karlovajungle.eu',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('privaatsuspoliitika'),
      i18n: {
        defaultLocale: 'et',
        locales: {
          et: 'et-EE',
          en: 'en-US',
          ru: 'ru-RU',
        },
      },
    })
  ]
});
