import { component$, useContext } from "@builder.io/qwik";

import Icon from "~/components/core/icon";
import type { Section } from "~/types/PSC";
import articles from "~/data/articles";
import { ChecklistContext } from "~/store/checklist-context";
import { useTranslations } from "~/i18n/use-translations";
import { withBase } from "~/utils/paths";

export default component$(() => {
  const data = useContext(ChecklistContext);
  const { t, locale } = useTranslations();
  const sections = Array.isArray(data.value) ? data.value : [];

  const isRTL = locale.value === 'fa';
  
  return (
    <div class="drawer-side z-10" dir={isRTL ? 'rtl' : 'ltr'}>
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay md:hidden z-10"></label>
      <ul class={['relative z-20 rounded-box menu p-4 w-full max-w-[90vw] sm:w-80 min-h-full bg-base-200 overflow-y-auto', isRTL ? 'text-right' : 'text-left']}>
        <h2 class="flex text-primary">
          <Icon class={isRTL ? 'ml-2' : 'mr-2'} icon="shield" width={16} height={16} />
          {t('appName')}
        </h2>
        <li>
          <a href={withBase('')}>
            <Icon class={isRTL ? 'ml-2' : 'mr-2'} icon="homepage" width={16} height={16} />
            {t('nav.home')}
          </a>
        </li>
        <li>
          <a href="https://github.com/hamid-k/personal-security-checklist-FA">
            <Icon class={isRTL ? 'ml-2' : 'mr-2'} icon="github" width={16} height={16} />
            GitHub
          </a>
        </li>
        <li>
          <a href={withBase('checklist/')}>
            <Icon class={isRTL ? 'ml-2' : 'mr-2'} icon="all" width={16} height={16} />
            {t('nav.checklists')}
          </a>
          <ul>
            {sections.map((item: Section, index: number) => (
              <li key={`checklist-side-${index}`} class={`hover:bg-${item.color}-600 hover:bg-opacity-15`}>
                <a href={withBase(`checklist/${item.slug}/`)}>
                  <Icon color={item.color} class={isRTL ? 'ml-2' : 'mr-2'} icon={item.icon} width={16} height={16} />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href={withBase('article/')}>
            <Icon class={isRTL ? 'ml-2' : 'mr-2'} icon="articles" width={16} height={16} />
            {t('nav.articles')}
          </a>
          <ul>
            {articles.map(article => (
              <li key={article.slug}>
                <a href={withBase(`article/${article.slug}/`)}>
                  {article.title[locale.value] || article.title.en}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href={withBase('about/')}>
            <Icon class={isRTL ? 'ml-2' : 'mr-2'} icon="about" width={16} height={16} />
            {t('nav.about')}
          </a>
          <ul>
            <li>
              <a href="https://github.com/hamid-k/personal-security-checklist-FA/?tab=readme-ov-file#contributing">
                {t('nav.contributing')}
              </a>
            </li>
            <li>
              <a href="https://github.com/hamid-k/personal-security-checklist-FA/blob/master/LICENSE">
                {t('nav.license')}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={withBase('about/#author')}>{t('nav.author')}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
});
