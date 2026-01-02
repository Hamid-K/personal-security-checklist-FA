import { useContext } from '@builder.io/qwik';

import { LocaleContext } from '~/store/locale-context';
import { translations, type Locale } from './translations';

const getValue = (locale: Locale, key: string): string | string[] | undefined => {
  return key.split('.').reduce((acc: any, part: string) => acc?.[part], translations[locale]);
};

export const useTranslations = () => {
  const { locale } = useContext(LocaleContext);

  const t = (key: string, vars?: Record<string, string | number>) => {
    const template = (getValue(locale.value, key) || getValue('en', key) || key) as string;
    if (!vars) return template;
    return template.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? ''));
  };

  const tArray = <T = string>(key: string): T[] => {
    const value = getValue(locale.value, key) ?? getValue('en', key) ?? [];
    return value as T[];
  };

  return { t, tArray, locale };
};
