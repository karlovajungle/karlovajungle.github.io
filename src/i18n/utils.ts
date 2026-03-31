import { et } from './translations/et';

export type Translations = typeof et;

export const defaultLocale = 'et';

export function useTranslations(): Translations {
  return et;
}
