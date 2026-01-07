import { $, component$, noSerialize, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Fuse from 'fuse.js';

import './awesome-privacy.css';
import { useTranslations } from '~/i18n/use-translations';
import { getAwesomePrivacyData, getAwesomePrivacyServiceIndex } from '~/data/awesome-privacy';
import type { AwesomePrivacyCategory, AwesomePrivacyEnrichedService, AwesomePrivacySection } from '~/types/awesome-privacy';
import type { Locale } from '~/i18n/translations';
import { withBase } from '~/utils/paths';

type SearchItem = {
  type: 'Category' | 'Section' | 'Service';
  category?: string;
  sectionName?: string;
  name?: string;
  description?: string;
  url?: string;
  github?: string;
  logo?: string;
  itemCount?: number;
  slug?: string;
};

const searchOptions = {
  includeScore: true,
  keys: [
    { name: 'name', weight: 0.9 },
    { name: 'sectionName', weight: 0.8 },
    { name: 'category', weight: 0.7 },
    { name: 'github', weight: 0.4 },
    { name: 'url', weight: 0.2 },
    { name: 'description', weight: 0.1 },
  ],
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const prepareSearchItems = (categories: AwesomePrivacyCategory[]): SearchItem[] => {
  const items: SearchItem[] = [];
  categories.forEach((category) => {
    items.push({
      type: 'Category',
      category: category.name,
      itemCount: category.sections.reduce((acc, section) => acc + (section.services?.length || 0), 0),
    });
    category.sections.forEach((section) => {
      items.push({
        type: 'Section',
        sectionName: section.name,
        description: section.intro || '',
        category: category.name,
        itemCount: section.services?.length || 0,
      });
      (section.services || []).forEach((service) => {
        items.push({
          type: 'Service',
          name: service.name,
          description: service.description,
          url: service.url,
          github: service.github,
          category: category.name,
          sectionName: section.name,
          logo: service.icon,
          slug: slugify(`${category.name} ${section.name} ${service.name}`),
        });
      });
    });
  });
  return items;
};

const categoryTranslationsFa: Record<string, string> = {
  Essentials: 'ضروریات',
  Communication: 'ارتباطات',
  'Security Tools': 'ابزارهای امنیتی',
  Networking: 'شبکه',
  Productivity: 'بهره‌وری',
  Utilities: 'ابزارهای کمکی',
  'Operating Systems': 'سیستم‌عامل‌ها',
  Development: 'توسعه',
  'Smart Home & IoT': 'خانه هوشمند و اینترنت اشیاء',
  Finance: 'مالی',
  Social: 'اجتماعی',
  Media: 'رسانه',
  Creativity: 'خلاقیت',
};

const translateCategoryLabel = (name: string | undefined, locale: Locale): string => {
  if (!name) return '';
  if (locale === 'fa') {
    return categoryTranslationsFa[name] || name;
  }
  return name;
};

const makeResultText = (cat?: string, sec?: string, itm?: string) => {
  if (itm) return itm;
  if (sec) return sec;
  if (cat) return cat;
  return '';
};

const makeLogoSrc = (logo?: string, url?: string) => {
  if (!logo && !url) return 'https://icon.horse/icon/awesome-privacy.svg';
  return logo || `https://icon.horse/icon/${(url || '').replace(/^https?:\/\//, '')}`;
};

const makeTitle = (type: string, description?: string) => {
  if (description && type === 'Service') {
    return `${description.slice(0, 60)}...`;
  }
  return undefined;
};

const anchorIds = {
  search: 'ap-search',
  browse: 'ap-browse',
  about: 'ap-about',
};

export default component$(() => {
  const { t, locale } = useTranslations();
  const categories = getAwesomePrivacyData().categories || [];
  const serviceIndex = getAwesomePrivacyServiceIndex();
  const serviceMap = new Map(serviceIndex.map((service) => [service.slug, service]));

  const fuse = useSignal<any>(null);
  const searchQuery = useSignal('');
  const searchResults = useSignal<SearchItem[]>([]);
  const previousSearch = useSignal('');
  const selectedCategory = useSignal<AwesomePrivacyCategory | null>(null);
  const selectedSection = useSignal<AwesomePrivacySection | null>(null);
  const sectionServices = useSignal<AwesomePrivacyEnrichedService[]>([]);
  const selectedService = useSignal<AwesomePrivacyEnrichedService | null>(null);

  const selectSection = $((category: AwesomePrivacyCategory, section: AwesomePrivacySection) => {
    selectedCategory.value = category;
    selectedSection.value = section;
    const services = (section.services || []) as AwesomePrivacyEnrichedService[];
    sectionServices.value = services;
    selectedService.value = services[0] || null;
  });

  const focusService = $((service: AwesomePrivacyEnrichedService) => {
    selectedService.value = service;
  });

  const handleSelectResult = $((item: SearchItem) => {
    searchQuery.value = '';
    searchResults.value = [];
    const matchingCategory =
      categories.find((category) => category.name === item.category) || categories[0];
    if (!matchingCategory) {
      previousSearch.value = item.name || item.sectionName || item.category || '';
      return;
    }

    const matchingSection =
      matchingCategory.sections.find((section) => section.name === item.sectionName) ||
      matchingCategory.sections[0];

    if (matchingSection) {
      selectSection(matchingCategory, matchingSection);
    } else {
      selectedCategory.value = matchingCategory;
      sectionServices.value = [];
      selectedService.value = null;
    }

    if (item.type === 'Service' && item.slug) {
      const service = serviceMap.get(item.slug);
      if (service) {
        focusService(service);
      }
    }
    previousSearch.value = item.name || item.sectionName || item.category || '';
  });

  useVisibleTask$(() => {
    const items = prepareSearchItems(categories);
    fuse.value = noSerialize(new Fuse(items, searchOptions));
    searchResults.value = [];
    previousSearch.value = '';
    if (categories.length && categories[0].sections.length) {
      selectSection(categories[0], categories[0].sections[0]);
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => searchQuery.value);
    const query = searchQuery.value.trim();
    if (!query || !fuse.value) {
      searchResults.value = [];
      return;
    }
    searchResults.value = fuse.value
      .search(query)
      .map((result: any) => result.item)
      .slice(0, 25);
  });

  const handleKeyDown = $((event: KeyboardEvent) => {
    if (event.key === 'Enter' && searchQuery.value.trim()) {
      if (searchResults.value.length) {
        handleSelectResult(searchResults.value[0]);
      }
      event.preventDefault();
    }
    if (event.key === 'Escape') {
      searchQuery.value = '';
    }
  });

  const localCategoryLabel = (name?: string) => translateCategoryLabel(name, locale.value);

  return (
    <section class="awesome-privacy">
      <div class="hero">
        <div class="hero-content">
          <h1>{t('articles.awesomePrivacy.pageTitle')}</h1>
          <p class="intro">{t('articles.awesomePrivacy.description')}</p>
          <div class="github-link-wrap">
            <a href="https://github.com/Hamid-K/awesome-privacy-FA" target="_blank" rel="noreferrer">
              {t('hero.viewGithub')}
            </a>
          </div>
        </div>
        <nav class="top-right" aria-label={t('articles.awesomePrivacy.pageTitle')}>
          <ul>
            <li><a href={withBase('')}>{t('nav.home')}</a></li>
            <li><a href={`#${anchorIds.search}`}>{t('articles.awesomePrivacy.navSearch')}</a></li>
            <li><a href={`#${anchorIds.browse}`}>{t('articles.awesomePrivacy.navBrowse')}</a></li>
            <li><a href={`#${anchorIds.about}`}>{t('nav.about')}</a></li>
            <li>
              <a href="https://github.com/Hamid-K/awesome-privacy-FA" target="_blank" rel="noreferrer">
                {t('articles.awesomePrivacy.viewSource')}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div id={anchorIds.search} class="search-wrap">
        <label for="search-input">
          {t('articles.awesomePrivacy.searchLabel')}
          {searchQuery.value.length > 0 && (
            <span class="enter-hint">{t('articles.awesomePrivacy.searchHint')}</span>
          )}
        </label>
        <input
          id="search-input"
          class="search-input"
          placeholder={previousSearch.value || t('articles.awesomePrivacy.searchPlaceholder')}
          value={searchQuery.value}
          onInput$={(event) => {
            searchQuery.value = (event.target as HTMLInputElement).value;
          }}
          onKeyDown$={handleKeyDown}
        />
        {searchQuery.value.length > 0 && (
          <div class="suggestions">
            <ul>
              {searchResults.value.map((result) => {
                const translatedCategory = result.category ? localCategoryLabel(result.category) : '';
                const pathSegments = [
                  translatedCategory,
                  result.sectionName,
                  result.name,
                ].filter(Boolean);
                return (
                  <li
                    class="result-row"
                    key={`${result.type}-${result.category}-${result.sectionName}-${result.name}`}
                  >
                    <button
                      type="button"
                      class="result-button"
                      onClick$={() => handleSelectResult(result)}
                      title={makeTitle(result.type, result.description)}
                    >
                      <span class="name">
                        {result.type === 'Service' && (
                          <img
                            src={makeLogoSrc(result.logo, result.url)}
                            alt={result.name}
                            width={20}
                            height={20}
                            loading="lazy"
                          />
                        )}
                      {makeResultText(translatedCategory, result.sectionName, result.name)}
                        {result.itemCount && <i>({result.itemCount})</i>}
                      </span>
                      <span class="path">{pathSegments.join(' ➔ ')}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div class="content-grid">
        <section id={anchorIds.browse} class="browse-panel">
          <div class="panel-header">
            <h2>{t('articles.awesomePrivacy.categorySections', { count: categories.length })}</h2>
            <p>{t('articles.awesomePrivacy.categoryCount', { count: categories.length })}</p>
          </div>
          <div class="category-columns">
            {categories.map((category) => (
              <article class="category-card" key={category.name}>
                <div class="category-title-row">
                  <h3>{localCategoryLabel(category.name)}</h3>
                  <span class="section-count">
                    {category.sections.length} {t('articles.awesomePrivacy.services')}
                  </span>
                </div>
                <ul class="section-list">
                  {category.sections.map((section) => (
                    <li key={`${category.name}-${section.name}`}>
                      <button
                        type="button"
                        class={['section-button', selectedSection.value === section ? 'active' : '']}
                        onClick$={() => selectSection(category, section)}
                      >
                        <span>{section.name}</span>
                        <span class="service-count">({section.services?.length || 0})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section class="service-panel">
          <div class="panel-header">
            <h2>{t('articles.awesomePrivacy.detailTitle')}</h2>
            <p>{selectedSection?.name || t('articles.awesomePrivacy.selectService')}</p>
          </div>
          <div class="service-list">
            {sectionServices.value.length > 0 ? (
              sectionServices.value.map((service) => {
                const translatedCategory = localCategoryLabel(service.category);
                return (
                  <button
                    type="button"
                    key={service.slug}
                    class={['service-item', selectedService.value?.slug === service.slug ? 'active' : '']}
                    onClick$={() => focusService(service)}
                  >
                    <span class="service-item-name">{service.name}</span>
                    <span class="service-item-desc">
                      {service.description?.slice(0, 70) || ''}
                    </span>
                    <span class="service-item-meta">
                      {service.section} · {service.followWith || translatedCategory}
                    </span>
                  </button>
                );
              })
            ) : (
              <p class="placeholder">{t('articles.awesomePrivacy.selectService')}</p>
            )}
          </div>
          <div class="service-detail">
            {selectedService.value ? (
              <>
                <div class="detail-title-row">
                  <h3>{selectedService.value.name}</h3>
                  <span class="detail-badge">{localCategoryLabel(selectedService.value.category)}</span>
                </div>
                <p>{selectedService.value.description}</p>
                <div class="detail-meta">
                  {selectedService.value.openSource !== false && (
                    <span class="badge accent">{t('articles.awesomePrivacy.openSource')}</span>
                  )}
                  {selectedService.value.securityAudited && (
                    <span class="badge">{t('articles.awesomePrivacy.audited')}</span>
                  )}
                  {selectedService.value.acceptsCrypto && (
                    <span class="badge">{t('articles.awesomePrivacy.cryptoAccepted')}</span>
                  )}
                </div>
                <div class="detail-actions">
                  {selectedService.value.url && (
                    <a
                      class="btn"
                      href={selectedService.value.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('articles.awesomePrivacy.viewProduct')}
                    </a>
                  )}
                  {selectedService.value.github && (
                    <a
                      class="btn btn-outline"
                      href={`https://github.com/${selectedService.value.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('articles.awesomePrivacy.viewSource')}
                    </a>
                  )}
                </div>
              </>
            ) : (
              <p class="placeholder">{t('articles.awesomePrivacy.selectService')}</p>
            )}
          </div>
        </section>
      </div>

      <div class="view-all">
        <span>{t('articles.awesomePrivacy.orJust')}</span>
        <a class="btn view-button" href={withBase('article/awesome-privacy')}>
          {t('articles.awesomePrivacy.viewEverything')}
        </a>
      </div>

      <div id={anchorIds.about} class="saved-and-about">
        <div class="saved-section">
          <h2>{t('articles.awesomePrivacy.savedTitle')}</h2>
          <p class="saved-description">{t('articles.awesomePrivacy.savedDescription')}</p>
        </div>
        <div class="about-section">
          <h2>{t('articles.awesomePrivacy.aboutTitle')}</h2>
          <div class="about-summary">
            <p>{t('articles.awesomePrivacy.aboutParagraphOne')}</p>
            <p>{t('articles.awesomePrivacy.aboutParagraphTwo')}</p>
            <p class="about-follow">
              <a href="https://awesome-privacy.xyz" target="_blank" rel="noopener noreferrer">
                {t('articles.awesomePrivacy.viewOriginal')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
