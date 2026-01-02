// src/routes/articles/index.tsx
import { component$ } from '@builder.io/qwik';
import articles from '~/data/articles';
import { useTranslations } from '~/i18n/use-translations';

export default component$(() => {
  const { t, locale } = useTranslations();

  return (
    <div class="px-8 py-4">
      <div class="bg-back shadow-md rounded-box min-h-96 px-4 py-8">
        
      <h2 class="text-4xl mb-4">{t('articles.title')}</h2>
      <ul class="flex flex-col gap-4">
        {articles.map(article => (
          <li key={article.slug}
            class="rounded-box bg-front shadow-md p-4 max-w-96 drop-shadow-md
            transition hover:drop-shadow-xl hover:scale-105"
            >
            <a href={`/article/${article.slug}`}>
              <h3 class="text-2xl mb-2">{article.title[locale.value] || article.title.en}</h3>
              <p class="text-lg">{article.description[locale.value] || article.description.en}</p>
            </a>
          </li>
        ))}
      </ul>

      </div>
    </div>
  );
});
