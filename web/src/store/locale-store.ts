import { $, useOnWindow, useSignal } from '@builder.io/qwik';

import { defaultLocale, type Locale } from '~/i18n/translations';

const STORAGE_KEY = 'PSC_LOCALE';

const applyLocale = (locale: Locale) => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('lang', locale);
  document.documentElement.setAttribute('dir', locale === 'fa' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('data-lang', locale);
};

export const useLocale = () => {
  const locale = useSignal<Locale>(defaultLocale);

  useOnWindow('load', $(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      const initialLocale = stored ? (JSON.parse(stored) as Locale) : defaultLocale;
      locale.value = initialLocale;
      applyLocale(initialLocale);
    } catch (error) {
      console.log(error);
      locale.value = defaultLocale;
      applyLocale(defaultLocale);
    }
  }));

  const setLocale = $((nextLocale: Locale) => {
    locale.value = nextLocale;
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextLocale));
      }
    } catch (error) {
      console.log(error);
    }
    applyLocale(nextLocale);
  });

  return { locale, setLocale };
};
