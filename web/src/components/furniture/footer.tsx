import { component$ } from "@builder.io/qwik";

import { useTranslations } from "~/i18n/use-translations";

export default component$(() => {
  const { t } = useTranslations();

  const ghLink = 'https://github.com/Lissy93/personal-security-checklist/';
  const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>{t('footer.licensedUnder')} <a href={licenseLink} class="link link-primary">MIT</a> -
      © <a href={authorLink} class="link link-primary">Alicia Sykes</a> 2024 - 
      {t('footer.viewSource')} <a href={ghLink} class="link link-primary">GitHub</a></p>
    </aside>
  </footer>
  );
});
