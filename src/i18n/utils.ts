import { ui } from './ui';

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
