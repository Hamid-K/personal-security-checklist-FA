import type { Locale } from '~/i18n/translations';

const aboutContent: Record<Locale, {
  intro: string[];
  contributing: string[];
  projects: {
    title: string;
    description: string;
    icon: string;
    link: string;
  }[];
}> = {
  en: {
    intro: [
      'The objective of this project is to give you practical guidance on how to improve your digital security, and protect your privacy online.',
      'The checklist is a living document, and will be updated regularly to reflect the latest threats and best practices. This is made possible by open sourcing the content, and making it a community maintained resource, meaning that anyone can suggest changes, make additions or update the guidance. All edits are then reviewed by maintainers before being merged and going live.',
    ],
    contributing: [
      'This project is only possible thanks to contributors like you!',
      'You can make changes to any of the checklist content, by editing [`personal-security-checklist.yml`](https://github.com/Lissy93/personal-security-checklist/blob/master/personal-security-checklist.yml).',
    ],
    projects: [
      {
        title: 'Web-Check',
        description: 'OSINT tool for analysing any website',
        icon: 'https://icon.horse/icon/web-check.xyz',
        link: 'https://github.com/lissy93/web-check',
      },
      {
        title: 'Dashy',
        description: 'Dashboard app, for organising your self-hosted services',
        icon: 'https://dashy.to/img/dashy.png',
        link: 'https://github.com/lissy93/dashy',
      },
      {
        title: 'Email Comparison',
        description: 'Objective comparison of private/secure mail providers',
        icon: 'https://email-comparison.as93.net/favicon.png',
        link: 'https://github.com/lissy93/email-comparison',
      },
      {
        title: 'Awesome Privacy',
        description: 'A list of privacy-respscting software and services',
        icon: 'https://awesome-privacy.xyz/awesome-privacy.png',
        link: 'https://github.com/lissy93/awesome-privacy',
      },
      {
        title: 'Portainer-Templates',
        description: 'Compiled repository of 1-click Docker apps for self-hosting',
        icon: 'https://portainer-templates.as93.net/favicon.png',
        link: 'https://github.com/lissy93/portainer-templates',
      },
      {
        title: 'AdGuardian',
        description: 'CLI tool for monitoring your networks traffic and AdGuard DNS stats',
        icon: 'https://adguardian.as93.net/favicon.png',
        link: 'https://github.com/lissy93/adguardian-term',
      },
      {
        title: 'Bug-Bounties',
        description: 'Database of websites which accept responsible vulnerability discolsure',
        icon: 'https://bug-bounties.as93.net/favicon.png',
        link: 'https://github.com/lissy93/bug-bounties',
      },
      {
        title: 'Git-In',
        description: 'Tools and resources to help beginners get into open source',
        icon: 'https://www.git-in.to/favicon.png',
        link: 'https://github.com/lissy93/git-in',
      },
    ],
  },
  fa: {
    intro: [
      'هدف این پروژه ارائه راهنمای عملی برای بهبود امنیت دیجیتال و حفاظت از حریم خصوصی آنلاین شماست.',
      'چک لیست یک سند زنده است و به طور منظم برای بازتاب تازه ترین تهدیدها و بهترین روش ها به روز می شود. این کار با متن باز کردن محتوا و نگهداری جامعه محور آن ممکن شده است؛ یعنی هر کسی می تواند تغییر پیشنهاد دهد، موردی اضافه کند یا راهنما را به روزرسانی کند. سپس همه ویرایش ها قبل از انتشار توسط نگهدارندگان بازبینی و ادغام می شوند.',
    ],
    contributing: [
      'این پروژه فقط به لطف مشارکت کنندگانی مثل شما ممکن است!',
      'می توانید با ویرایش [`personal-security-checklist.yml`](https://github.com/Lissy93/personal-security-checklist/blob/master/personal-security-checklist.yml) در محتوای چک لیست تغییر ایجاد کنید.',
    ],
    projects: [
      {
        title: 'Web-Check',
        description: 'ابزار OSINT برای تحلیل هر وب سایت',
        icon: 'https://icon.horse/icon/web-check.xyz',
        link: 'https://github.com/lissy93/web-check',
      },
      {
        title: 'Dashy',
        description: 'برنامه داشبورد برای سامان دهی سرویس های میزبان شخصی',
        icon: 'https://dashy.to/img/dashy.png',
        link: 'https://github.com/lissy93/dashy',
      },
      {
        title: 'Email Comparison',
        description: 'مقایسه بی طرفانه ارائه دهندگان ایمیل خصوصی و امن',
        icon: 'https://email-comparison.as93.net/favicon.png',
        link: 'https://github.com/lissy93/email-comparison',
      },
      {
        title: 'Awesome Privacy',
        description: 'فهرست نرم افزارها و سرویس های سازگار با حریم خصوصی',
        icon: 'https://awesome-privacy.xyz/awesome-privacy.png',
        link: 'https://github.com/lissy93/awesome-privacy',
      },
      {
        title: 'Portainer-Templates',
        description: 'مخزن گردآوری شده از برنامه های داکر یک کلیکی برای میزبانی شخصی',
        icon: 'https://portainer-templates.as93.net/favicon.png',
        link: 'https://github.com/lissy93/portainer-templates',
      },
      {
        title: 'AdGuardian',
        description: 'ابزار خط فرمان برای پایش ترافیک شبکه و آمار DNS ادگارد',
        icon: 'https://adguardian.as93.net/favicon.png',
        link: 'https://github.com/lissy93/adguardian-term',
      },
      {
        title: 'Bug-Bounties',
        description: 'پایگاه داده وب سایت هایی که افشای مسئولانه آسیب پذیری را می پذیرند',
        icon: 'https://bug-bounties.as93.net/favicon.png',
        link: 'https://github.com/lissy93/bug-bounties',
      },
      {
        title: 'Git-In',
        description: 'ابزارها و منابع برای کمک به تازه کاران برای ورود به متن باز',
        icon: 'https://www.git-in.to/favicon.png',
        link: 'https://github.com/lissy93/git-in',
      },
    ],
  },
};

export const getAboutContent = (locale: Locale) => aboutContent[locale];

export const socials = [
  {
    title: 'GitHub',
    icon: 'hub',
    link: 'https://github.com/lissy93',
  },
  {
    title: 'Twitter',
    icon: 'twitter',
    link: 'https://x.com/lissy_sykes',
  },
  {
    title: 'Mastodon',
    icon: 'mastodon',
    link: 'https://mastodon.social/@lissy93',
  },
  {
    title: 'Dev',
    icon: 'dev',
    link: 'https://dev.to/lissy93',
  },
  {
    title: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://linkedin.com/in/aliciasykes',
  },
];

export const license = `
The MIT License (MIT)
Copyright (c) Alicia Sykes <alicia@aliciasykes.com> 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included install 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;
