import { component$, useContext } from '@builder.io/qwik';

import { LocaleContext } from '~/store/locale-context';
import { useTranslations } from '~/i18n/use-translations';

export default component$((props: { compact?: boolean } = {}) => {
  const { locale, setLocale } = useContext(LocaleContext);
  const { t } = useTranslations();

  const isCompact = props.compact ?? false;

  return (
    <div class={['flex items-center gap-2', isCompact ? 'text-xs' : 'text-sm']}>
      <span class="opacity-70">{t('language.label')}</span>
      <div class="join">
        <button
          type="button"
          class={['btn join-item btn-sm', locale.value === 'en' ? 'btn-primary' : 'btn-ghost']}
          onClick$={() => setLocale('en')}
          aria-pressed={locale.value === 'en'}
        >
          {t('language.english')}
        </button>
        <button
          type="button"
          class={['btn join-item btn-sm', locale.value === 'fa' ? 'btn-primary' : 'btn-ghost']}
          onClick$={() => setLocale('fa')}
          aria-pressed={locale.value === 'fa'}
        >
          {t('language.farsi')}
        </button>
      </div>
    </div>
  );
});
