import { et } from './translations/et';
import { en } from './translations/en';
import { ru } from './translations/ru';

export type Translations = typeof et;
export type Locale = 'et' | 'en' | 'ru';

export const defaultLocale: Locale = 'et';

const translations = { et, en, ru };

export function useTranslations(locale: Locale = 'et'): Translations {
  return translations[locale] as Translations;
}
