import es from '../locales/es';
import en from '../locales/en';

export const translations = { es, en };
export type Language = keyof typeof translations;

export function t(language: Language, key: keyof typeof es) {
  return translations[language][key] ?? key;
}
