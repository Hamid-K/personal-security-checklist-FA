// src/routes/_404.tsx
import { component$ } from '@builder.io/qwik';
import { useTranslations } from '~/i18n/use-translations';

export default component$(() => {
  const { t } = useTranslations();
  return (
    <div>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.message')}</p>
      <a href="/">{t('notFound.back')}</a>
    </div>
  );
});
