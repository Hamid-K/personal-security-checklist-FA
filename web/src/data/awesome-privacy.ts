import jsyaml from 'js-yaml';

import type {
  AwesomePrivacyCategory,
  AwesomePrivacyService,
} from '~/types/awesome-privacy';
import raw from './awesome-privacy.yml?raw';

const parsed = (jsyaml.load(raw) || {}) as {
  categories: AwesomePrivacyCategory[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const enrichedCategories = (parsed.categories || []).map((category) => ({
  ...category,
  sections: category.sections.map((section) => ({
    ...section,
    services: section.services.map((service) => ({
      ...service,
      slug: slugify(`${category.name} ${section.name} ${service.name}`),
      category: category.name,
      section: section.name,
    })),
  })),
}));

const serviceIndex = enrichedCategories.flatMap((category) =>
  category.sections.flatMap((section) => section.services)
);

export const getAwesomePrivacyData = () => ({
  categories: enrichedCategories,
});

export type AwesomePrivacyEnrichedService = AwesomePrivacyService & {
  category: string;
  section: string;
  slug: string;
};

export const getAwesomePrivacyServiceIndex = () => serviceIndex;
