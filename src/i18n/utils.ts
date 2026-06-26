import { ui } from './ui';

export type Lang = keyof typeof ui;
export type UI = typeof ui;

export function useTranslations<T extends Lang>(lang: T) {
  return ui[lang];
}
