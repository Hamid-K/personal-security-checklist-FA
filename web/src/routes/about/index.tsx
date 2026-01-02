import { component$, useResource$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Icon from "~/components/core/icon";
import { getAboutContent, socials, license } from './about-content';
import { marked } from "marked";
import { useTranslations } from "~/i18n/use-translations";

export default component$(() => {
  const { t, locale } = useTranslations();
  const { intro, contributing, projects } = getAboutContent(locale.value);

  interface Contributor {
    login: string;
    avatar_url: string;
    avatarUrl: string;
    html_url: string;
    contributions: number;
    name: string;
  }

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };

  const contributorsResource = useResource$<Contributor[]>(async () => {
    const url = 'https://api.github.com/repos/lissy93/personal-security-checklist/contributors?per_page=100';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch contributors');
    }
    return await response.json();
  });

  const sponsorsResource = useResource$<Contributor[]>(async () => {
    const url = 'https://github-sponsors.as93.workers.dev/lissy93';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch sponsors');
    }
    return await response.json();
  });


  return (
    <div class="m-4 md:mx-16">
      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">{t('about.title')}</h2>
        {intro.map((paragraph, index) => (
          <p class="mb-2" key={index}>{paragraph}</p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">{t('about.contributing')}</h2>
        {contributing.map((paragraph, index) => (
          <p class="mb-2" key={index} dangerouslySetInnerHTML={parseMarkdown(paragraph)}></p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">{t('about.acknowledgments')}</h2>


        <h3 class="text-2xl mb-2">{t('about.sponsors')}</h3>

        <p>
          {t('about.sponsorsThanks')}
        </p>

        <div class="flex flex-wrap gap-4 my-4 mx-auto">
          <Resource
              value={sponsorsResource}
              onPending={() => <p>{t('misc.loading')}</p>}
              onResolved={(contributors: Contributor[]) => (
                contributors.map((contributor: Contributor) => (
                  <a
                    class="w-16 tooltip tooltip-bottom"
                    href={contributor.html_url || `https://github.com/${contributor.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={contributor.login}
                    data-tip={`Thank you @${contributor.login}`}
                  >
                    <img
                      class="avatar rounded"
                      width="64" height="64"
                      src={contributor.avatar_url || contributor.avatarUrl}
                      alt={contributor.login}
                    />
                    <p
                      class="text-ellipsis overflow-hidden w-max-16 mx-auto line-clamp-2"
                    >{contributor.name || contributor.login}</p>
                  </a>
                ))
              )}
            />
          </div>

        <div class="divider"></div>

        <h3 class="text-2xl mb-2">{t('about.contributors')}</h3>
        <p>
          {t('about.contributorsThanks')}<br />
          {t('about.contributorsSpecialThanks')}
        </p>
        <div class="flex flex-wrap gap-4 my-4 mx-auto">
          <Resource
            value={contributorsResource}
            onPending={() => <p>{t('misc.loading')}</p>}
            onResolved={(contributors: Contributor[]) => (
              contributors.map((contributor: Contributor) => (
                <a
                  class="w-16 tooltip tooltip-bottom"
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={contributor.login}
                  data-tip={`@${contributor.login} has contributed ${contributor.contributions} times\n\nClick to view their profile`}
                >
                  <img
                    class="avatar rounded"
                    width="64" height="64"
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                  <p
                    class="text-ellipsis overflow-hidden w-max-16 mx-auto"
                  >{contributor.login}</p>
                </a>
              ))
            )}
          />
        </div>

      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] my-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2" id="author">{t('about.author')}</h2>
          <p>
            {t('about.authorIntro')}{' '}
            <a href="https://aliciasykes.com" class="link link-primary">Alicia Sykes</a>
            - {t('about.authorHelp')}
          </p>
          <br />
          <div class="ml-4 float-right">
            <img class="rounded-lg" width="180" height="240" alt="Alicia Sykes" src="https://i.ibb.co/fq10qhL/DSC-0597.jpg" />
            <div class="flex gap-2 my-2 justify-between">
              {
                socials.map((social, index) => (
                  <a key={index} href={social.link}>
                    <Icon icon={social.icon} width={24} height={24} />
                  </a>
                ))
              }
            </div>
          </div>
          <p class="text-lg italic font-thin">
            {t('about.authorTagline')}
          </p>
          <br />
          <p>
            {t('about.authorInterests')}<br />
            {t('about.authorProjectsLead')}
          </p>
          <ul class="list-disc pl-8">
            {
              projects.map((project, index) => (
                <li key={index}>
                  <img class="rounded inline mr-1" width="20" height="20" alt={project.title} src={project.icon} />
                  <a href={project.link} class="link link-secondary" target="_blank" rel="noreferrer">
                    {project.title}
                  </a> - {project.description}
                </li>
              ))
            }
          </ul>
          <br />
          <p>
            {t('about.authorMoreApps')}{' '}
            <a href="https://apps.aliciasykes.com/" class="link link-primary">apps.aliciasykes.com</a>,
            {locale.value === 'fa' ? ' یا ' : ' or '}
            <a href="https://github.com/lissy93" class="link link-primary">follow me on GitHub</a>
          </p>

      </article>

      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">{t('about.license')}</h2>
        <p>
          This project is split-licensed, with the checklist content (located
          in <a class="link" href="https://github.com/Lissy93/personal-security-checklist/blob/HEAD/personal-security-checklist.yml">
            <code>personal-security-checklist.yml</code>
          </a>) being licensed
          under <b><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></b>.
          And everything else (including all the code), licensed
          under <b><a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></b>.
        </p>
        <pre class="bg-front whitespace-break-spaces rounded text-xs my-2 mx-auto p-2">
          {license}
        </pre>
        <details class="collapse">
          <summary class="collapse-title">
            <h3 class="mt-2">{t('about.licenseSummaryTitle')}</h3>
          </summary>
          <div class="collapse-content">
            <p class="mb-2">
              {t('about.licenseSummaryBody')}
            </p>
            <p class="mb-2">
              {t('about.licenseSummaryBody2')}
            </p>
          </div>
        </details>

      </article>

    </div>
  );
});

export const head: DocumentHead = {
  title: "About | Digital Defense",
  meta: [
    {
      name: "description",
      content: "This project aims to give you practical guidance on how to improve your digital security, and protect your privacy online",
    },
  ],
};
