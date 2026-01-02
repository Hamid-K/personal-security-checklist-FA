
import type { Locale } from '~/i18n/translations';

interface Article {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  slug: string;
  markdown: string;
  warningMessage?: Record<Locale, string>;
}

const articles: Article[] = [
  {
    title: {
      en: 'Why security matters?',
      fa: 'چرا امنیت مهم است؟',
    },
    description: {
      en: 'Why your personal digital security and privacy needs to be taken seriously.',
      fa: 'چرا امنیت دیجیتال و حریم خصوصی شما باید جدی گرفته شود.',
    },
    slug: 'importance-of-digital-security',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/0_Why_It_Matters.md',
  },
  {
    title: {
      en: 'Security List: Short Version',
      fa: 'فهرست امنیت: نسخه کوتاه',
    },
    description: {
      en: 'Main lists too long? Here\'s the TL;DR',
      fa: 'فهرست اصلی طولانی است؟ این خلاصه کوتاه را ببینید.',
    },
    slug: 'short-list',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/2_TLDR_Short_List.md',
  },
  {
    title: {
      en: 'Helpful Links',
      fa: 'لینک های مفید',
    },
    description: {
      en: 'Directory of links to additional tools, resources and information.',
      fa: 'فهرست ابزارها، منابع و اطلاعات تکمیلی.',
    },
    slug: 'helpful-links',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/4_Privacy_And_Security_Links.md',
    warningMessage: {
      en: 'This article was written in 2020, and needs updating.',
      fa: 'این مقاله در سال 2020 نوشته شده و نیاز به به روزرسانی دارد.',
    },
  },
  {
    title: {
      en: 'Security Gadgets',
      fa: 'گجت های امنیتی',
    },
    description: {
      en: 'Handy hardware devices that can help protect your privacy and security.',
      fa: 'دستگاه های سخت افزاری مفید برای حفاظت از حریم خصوصی و امنیت شما.',
    },
    slug: 'privacy-gadgets',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/6_Privacy_and-Security_Gadgets.md',
    warningMessage: {
      en: 'This article is outdated and may contain incorrect information. '
        +'It is recommended to verify the information before using any of the products listed.',
      fa: 'این مقاله قدیمی است و ممکن است اطلاعات نادرست داشته باشد. '
        +'پیشنهاد می شود قبل از استفاده از محصولات فهرست شده، اطلاعات را بررسی کنید.',
    },
  },
  {
    title: {
      en: 'Privacy-Respecting Software',
      fa: 'نرم افزارهای سازگار با حریم خصوصی',
    },
    description: {
      en: 'The ultimate list of privacy-respecting software alternatives to popular apps and services.',
      fa: 'فهرست جامع جایگزین های سازگار با حریم خصوصی برای برنامه ها و سرویس های محبوب.',
    },
    slug: 'awesome-privacy',
    markdown: 'https://raw.githubusercontent.com/Lissy93/awesome-privacy/main/README.md',
    warningMessage: {
      en: 'This resource has moved! You can now access it at github.com/Lissy93/awesome-privacy',
      fa: 'این منبع منتقل شده است. اکنون می توانید آن را در github.com/Lissy93/awesome-privacy ببینید.',
    },
  },
];

export default articles;
