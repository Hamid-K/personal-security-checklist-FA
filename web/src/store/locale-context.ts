import { createContextId, type QRL, type Signal } from '@builder.io/qwik';

import type { Locale } from '~/i18n/translations';

export type LocaleContextValue = {
  locale: Signal<Locale>;
  setLocale: QRL<(locale: Locale) => void>;
};

export const LocaleContext = createContextId<LocaleContextValue>('psc.LocaleContext');
