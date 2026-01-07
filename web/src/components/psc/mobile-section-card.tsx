import { component$ } from '@builder.io/qwik';

import type { Section } from '~/types/PSC';
import Icon from '~/components/core/icon';
import { useTranslations } from '~/i18n/use-translations';
import { withBase } from '~/utils/paths';

const clampDescription = (text?: string) => {
  if (!text) return '';
  if (text.length > 160) {
    return `${text.slice(0, 160).trim()}…`;
  }
  return text;
};

export default component$((props: { section: Section; completed: number }) => {
  const { t } = useTranslations();
  return (
    <article class="mobile-section-card bg-base-200 rounded-3xl shadow-xl border border-base-300">
      <div class="mobile-section-header">
        <div class="flex items-center gap-3">
          <Icon
            icon={props.section.icon || 'shield'}
            color={props.section.color}
            width={28}
            height={28}
          />
          <div>
            <h2 class="text-2xl font-semibold">{props.section.title}</h2>
            <p class="text-sm opacity-70">{props.section.description}</p>
          </div>
        </div>
        <p class="text-xs uppercase tracking-[0.3em] opacity-60">
          {props.section.color} · {props.section.slug}
        </p>
      </div>
      <div class="mobile-section-progress flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium">
            {t('sections.done')}: {props.completed}/{props.section.checklist.length}
          </p>
          <span class="text-xs uppercase tracking-wider text-accent">
            {props.completed === props.section.checklist.length
              ? t('sections.done')
              : t('sections.items')}
          </span>
        </div>
        <div class="progress h-2 rounded-full bg-base-300">
          <span
            class="block h-full rounded-full bg-primary transition-all duration-300"
            style={`width: ${(props.completed / props.section.checklist.length) * 100 || 0}%;`}
          ></span>
        </div>
        <p class="text-sm text-muted">{clampDescription(props.section.intro)}</p>
      </div>
      <div class="mobile-section-footer">
        <a
          class="btn btn-block btn-outline"
          href={withBase(`checklist/${props.section.slug}/`)}
        >
          {t('checklist.viewFull')}
        </a>
      </div>
    </article>
  );
});
