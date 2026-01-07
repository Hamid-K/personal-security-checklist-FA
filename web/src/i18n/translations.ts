export type Locale = 'en' | 'fa';

export const defaultLocale: Locale = 'fa';

type Translations = {
  appName: string;
  meta: {
    description: string;
  };
  language: {
    label: string;
    english: string;
    farsi: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    viewGithub: string;
  };
  nav: {
    viewAllPages: string;
    checklists: string;
    viewSource: string;
    settings: string;
    home: string;
    articles: string;
    about: string;
    contributing: string;
    license: string;
    author: string;
    contact: string;
    moreApps: string;
    theme: string;
    data: string;
    deleteAll: string;
    close: string;
    deleteConfirm: string;
  };
  footer: {
    licensedUnder: string;
    viewSource: string;
  };
  progress: {
    noStatsTitle: string;
    noStatsBody: string;
    noStatsCta: string;
    yourProgress: string;
    completedOutOf: string;
    essential: string;
    optional: string;
    advanced: string;
    nextUp: string;
    recommendedDirectory: string;
    completedTooltip: string;
    sectionCompletedTooltip: string;
  };
  sections: {
    done: string;
    items: string;
    notStarted: string;
  };
  checklist: {
    viewFull: string;
    usefulLinks: string;
    recommendedSoftware: string;
  };
  filters: {
    reset: string;
    showFilters: string;
    hideFilters: string;
    show: string;
    all: string;
    remaining: string;
    completed: string;
    filter: string;
    essential: string;
    optional: string;
    advanced: string;
    done: string;
    advice: string;
    level: string;
    details: string;
    ignore: string;
    progressSummary: string;
  };
  articles: {
    title: string;
    notFound: string;
    warning: string;
  };
  about: {
    title: string;
    contributing: string;
    acknowledgments: string;
    sponsors: string;
    sponsorsThanks: string;
    contributors: string;
    contributorsThanks: string;
    contributorsSpecialThanks: string;
    author: string;
    authorIntro: string;
    authorHelp: string;
    authorTagline: string;
    authorInterests: string;
    authorProjectsLead: string;
    authorMoreApps: string;
    license: string;
    sponsorThanksTooltip: string;
    contributorTooltip: string;
    followOnGithub: string;
    licenseIntroLead: string;
    licenseIntroChecklist: string;
    licenseIntroCode: string;
    licenseSummaryTitle: string;
    licenseSummaryBody: string;
    licenseSummaryBody2: string;
  };
  misc: {
    loading: string;
    loadingFailed: string;
    articlesTitle: string;
    or: string;
  };
  notFound: {
    title: string;
    message: string;
    back: string;
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    appName: 'Digital Defense',
    meta: {
      description: 'The ultimate personal security checklist to secure your digital life',
    },
    language: {
      label: 'Language',
      english: 'English',
      farsi: 'Farsi',
    },
    hero: {
      kicker: 'The Ultimate',
      title: 'Personal Security Checklist',
      subtitle: 'Your guide to securing your digital life and protecting your privacy',
      viewGithub: 'View on GitHub',
    },
    nav: {
      viewAllPages: 'View all Pages',
      checklists: 'Checklists',
      viewSource: 'View / Edit Source & Data',
      settings: 'Settings',
      home: 'Home',
      articles: 'Articles',
      about: 'About',
      contributing: 'Contributing',
      license: 'License',
      author: 'Author',
      contact: 'Contact',
      moreApps: 'More Apps',
      theme: 'Theme',
      data: 'Data',
      deleteAll: 'Delete All',
      close: 'Close',
      deleteConfirm: 'Are you sure you want to delete all local data? This will erase your progress.',
    },
    footer: {
      licensedUnder: 'Licensed under',
      viewSource: 'View source on',
    },
    progress: {
      noStatsTitle: 'No stats yet',
      noStatsBody: "You'll see your progress here, once you start ticking items off the checklists",
      noStatsCta: 'Get started, by selecting a checklist below',
      yourProgress: 'Your Progress',
      completedOutOf: "You've completed {completed} out of {outOf} items",
      essential: 'Essential',
      optional: 'Optional',
      advanced: 'Advanced',
      nextUp: 'Next up, consider switching to more secure and privacy-respecting apps and services.',
      recommendedDirectory: 'View our directory of recommended software, at',
      completedTooltip: 'Completed {percent}% of {label} items',
      sectionCompletedTooltip: 'Completed {percent}% of {count} items.',
    },
    sections: {
      done: 'Done',
      items: 'Items',
      notStarted: 'Not yet started',
    },
    checklist: {
      viewFull: 'View Full Checklist ➜',
      usefulLinks: 'Useful Links',
      recommendedSoftware: 'Recommended Software',
    },
    filters: {
      reset: 'Reset Filters',
      showFilters: 'Show Filters',
      hideFilters: 'Hide Filters',
      show: 'Show',
      all: 'All',
      remaining: 'Remaining',
      completed: 'Completed',
      filter: 'Filter',
      essential: 'Essential',
      optional: 'Optional',
      advanced: 'Advanced',
      done: 'Done?',
      advice: 'Advice',
      level: 'Level',
      details: 'Details',
      ignore: 'Ignore',
      progressSummary: '{done} out of {total} ({percent}%) complete, {disabled} ignored',
    },
    articles: {
      title: 'Articles',
      notFound: '404 Article Not Found',
      warning: 'Warning',
    awesomePrivacy: {
      kicker: 'Awesome Privacy Directory',
      title: 'Awesome Privacy | Private Software Directory',
      description: 'A curated directory of privacy-respecting apps, services and tools; now merged into the amni.at site with bilingual navigation.',
      categoryCount: '{count} categories',
      openSource: 'Open source',
      audited: 'Security audited',
      cryptoAccepted: 'Crypto accepted',
      searchLabel: 'Search the directory',
      searchPlaceholder: 'Try searching by app, category, or description',
      resultsTitle: '{count} results for “{query}”',
      searchEmpty: 'No matches found — try another keyword',
      categorySections: 'Browse sections',
      services: 'services',
      viewOriginal: 'Visit awesome-privacy.xyz',
      viewSource: 'View source on GitHub',
      detailTitle: 'Service details',
      categoryLabel: 'Category',
      sectionLabel: 'Section',
      followWithLabel: 'Platform focus',
      viewProduct: 'Visit service',
      selectService: 'Select a service to see its details here.',
      searchHint: 'Press Enter to view all available results.',
      savedTitle: 'Saved Items',
      savedDescription: 'Use the filters above to highlight the services you care about, then save them to your inventory for quick access.',
      aboutTitle: 'About Awesome Privacy',
      aboutParagraphOne: 'Awesome Privacy is a community-driven directory of privacy-respecting services, curated to help you escape big tech companies.',
      aboutParagraphTwo: 'If you spot something that should be added, removed, or amended, the project welcomes contributions of all kinds.',
      orJust: 'Or, just',
      viewEverything: 'View Everything',
      navSearch: 'Search',
      navBrowse: 'Browse',
      pageTitle: 'Awesome Privacy',
    },
    },
    about: {
      title: 'About the Security Checklist',
      contributing: 'Contributing',
      acknowledgments: 'Acknowledgments',
      sponsors: 'Sponsors',
      sponsorsThanks: 'Huge thanks to the following sponsors, for their ongoing support 💖',
      contributors: 'Contributors',
      contributorsThanks: "This project exists thanks to all the people who've helped build and maintain it.",
      contributorsSpecialThanks: 'Special thanks to the below, top-100 contributors 🌟',
      author: 'About the Author',
      authorIntro: 'This project was originally started by me,',
      authorHelp: 'with a lot of help from the community.',
      authorTagline: 'I write apps which aim to help people escape big tech, secure their data, and protect their privacy.',
      authorInterests: 'I have a particular interest in self-hosting, Linux, security and OSINT.',
      authorProjectsLead: 'The Farsi localization is maintained by Hamid K.',
      authorMoreApps: 'For more open source apps I have published, see',
      license: 'License',
      sponsorThanksTooltip: 'Thank you @{login}',
      contributorTooltip: '@{login} has contributed {contributions} times\n\nClick to view their profile',
      followOnGithub: 'Follow the maintainer on GitHub',
      licenseIntroLead: 'This project is split-licensed, with the checklist content (located in',
      licenseIntroChecklist: ') being licensed under',
      licenseIntroCode: 'And everything else (including all the code), licensed under',
      licenseSummaryTitle: 'What does this mean for you?',
      licenseSummaryBody: 'This means that for everything (except the checklist YAML file), you have almost unlimited freedom to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software. All that we ask is that you include the original copyright notice and permission notice in any copies of the software.',
      licenseSummaryBody2: 'And for the security-list content you can share and adapt this content as long as you give appropriate credit, do not use it for commercial purposes, and distribute your contributions under the same license.',
    },
    misc: {
      loading: 'Loading...',
      loadingFailed: 'Unable to load right now.',
      articlesTitle: 'Articles',
      or: 'or',
    },
    notFound: {
      title: '404 Not Found',
      message: "The page you're looking for doesn't exist.",
      back: 'Go back to the homepage',
    },
  },
  fa: {
    appName: 'دفاع دیجیتال',
    meta: {
      description: 'کامل ترین چک لیست امنیت شخصی برای امن کردن زندگی دیجیتال شما',
    },
    language: {
      label: 'زبان',
      english: 'انگلیسی',
      farsi: 'فارسی',
    },
    hero: {
      kicker: 'کامل ترین',
      title: 'چک لیست امنیت شخصی',
      subtitle: 'راهنمای امن کردن زندگی دیجیتال و حفاظت از حریم خصوصی شما',
      viewGithub: 'مشاهده در گیت هاب',
    },
    nav: {
      viewAllPages: 'مشاهده همه صفحه ها',
      checklists: 'چک لیست ها',
      viewSource: 'مشاهده یا ویرایش منبع و داده ها',
      settings: 'تنظیمات',
      home: 'خانه',
      articles: 'مقالات',
      about: 'درباره',
      contributing: 'مشارکت',
      license: 'مجوز',
      author: 'نویسنده',
      contact: 'تماس',
      moreApps: 'برنامه های بیشتر',
      theme: 'پوسته',
      data: 'داده ها',
      deleteAll: 'حذف همه',
      close: 'بستن',
      deleteConfirm: 'آیا مطمئن هستید که می خواهید تمام داده های محلی را حذف کنید؟ این کار پیشرفت شما را پاک می کند.',
    },
    footer: {
      licensedUnder: 'دارای مجوز',
      viewSource: 'مشاهده منبع در',
    },
    progress: {
      noStatsTitle: 'هنوز آماری وجود ندارد',
      noStatsBody: 'وقتی شروع به علامت زدن موارد کنید، پیشرفت خود را اینجا خواهید دید',
      noStatsCta: 'برای شروع، یکی از چک لیست های زیر را انتخاب کنید',
      yourProgress: 'پیشرفت شما',
      completedOutOf: 'شما {completed} مورد از {outOf} مورد را تکمیل کرده اید',
      essential: 'ضروری',
      optional: 'اختیاری',
      advanced: 'پیشرفته',
      nextUp: 'قدم بعدی این است که به سراغ برنامه ها و سرویس های امن تر و احترام گذار به حریم خصوصی بروید.',
      recommendedDirectory: 'فهرست نرم افزارهای پیشنهادی را ببینید در',
      completedTooltip: '{percent}% از موارد {label} تکمیل شده است',
      sectionCompletedTooltip: '{percent}% از {count} مورد تکمیل شده است.',
    },
    sections: {
      done: 'انجام شده',
      items: 'مورد',
      notStarted: 'هنوز شروع نشده',
    },
    checklist: {
      viewFull: 'مشاهده چک لیست کامل ➜',
      usefulLinks: 'لینک های مفید',
      recommendedSoftware: 'نرم افزارهای پیشنهادی',
    },
    filters: {
      reset: 'بازنشانی فیلترها',
      showFilters: 'نمایش فیلترها',
      hideFilters: 'پنهان کردن فیلترها',
      show: 'نمایش',
      all: 'همه',
      remaining: 'باقی مانده',
      completed: 'تکمیل شده',
      filter: 'فیلتر',
      essential: 'ضروری',
      optional: 'اختیاری',
      advanced: 'پیشرفته',
      done: 'انجام شده؟',
      advice: 'پیشنهاد',
      level: 'سطح',
      details: 'جزئیات',
      ignore: 'نادیده گرفتن',
      progressSummary: '{done} از {total} ({percent}%) تکمیل شده، {disabled} مورد نادیده گرفته شده',
    },
    articles: {
      title: 'مقالات',
      notFound: 'مقاله پیدا نشد',
      warning: 'هشدار',
      awesomePrivacy: {
        kicker: 'دایرکتوری Awesome Privacy',
        title: 'Awesome Privacy | فهرست نرم‌افزارهای حریم‌محور',
        description: 'دایرکتوری منتخب نرم‌افزارها و سرویس‌های حریم‌محور؛ حالا به amni.at منتقل شده و گزینه‌های انگلیسی/فارسی را یکجا دارد.',
        categoryCount: '{count} دسته‌بندی',
        openSource: 'متن‌باز',
        audited: 'ممیزی امنیتی',
        cryptoAccepted: 'پذیرش رمزارز',
        searchLabel: 'جست‌وجوی دایرکتوری',
        searchPlaceholder: 'نام، دسته یا توضیح را جست‌وجو کنید',
        resultsTitle: '{count} نتیجه برای «{query}»',
        searchEmpty: 'موردی پیدا نشد؛ عبارت دیگری امتحان کنید.',
      categorySections: 'بخش‌های فهرست',
        services: 'سرویس‌ها',
        viewOriginal: 'دیدن نسخه اصلی',
        viewSource: 'مشاهده کد منبع',
        detailTitle: 'جزئیات سرویس',
        categoryLabel: 'دسته',
        sectionLabel: 'بخش',
      followWithLabel: 'هدف پلتفرم',
      viewProduct: 'بازدید از سرویس',
      selectService: 'یک سرویس را انتخاب کنید تا جزئیات آن اینجا نشان داده شود.',
      searchHint: 'برای نمایش همه نتایج Enter را فشار دهید.',
      savedTitle: 'موارد ذخیره‌شده',
      savedDescription: 'از فیلترهای بالا استفاده کنید تا سرویس‌هایی را که برایتان مهم است برجسته کرده و آنها را برای دسترسی سریع ذخیره کنید.',
      aboutTitle: 'درباره Awesome Privacy',
      aboutParagraphOne: 'Awesome Privacy مجموعه‌ای از سرویس‌ها و ابزارهای احترام‌گذار به حریم خصوصی است که برای کمک به دوری از غول‌های فناوری گردآوری شده است.',
      aboutParagraphTwo: 'اگر چیزی می‌بینید که باید اضافه، حذف یا اصلاح شود، خوشحال می‌شویم مشارکت شما را ببینیم.',
      orJust: 'یا اینکه',
      viewEverything: 'همه را ببینید',
      navSearch: 'جست‌وجو',
      navBrowse: 'مرور',
      pageTitle: 'فهرست Awesome Privacy',
    },
    },
    about: {
      title: 'درباره چک لیست امنیت',
      contributing: 'مشارکت',
      acknowledgments: 'قدردانی',
      sponsors: 'حامیان',
      sponsorsThanks: 'از حامیان زیر بابت حمایت مداومشان صمیمانه سپاسگزاریم',
      contributors: 'مشارکت کنندگان',
      contributorsThanks: 'این پروژه به لطف همه کسانی که به ساخت و نگهداری آن کمک کرده اند وجود دارد.',
      contributorsSpecialThanks: 'سپاس ویژه از 100 مشارکت کننده برتر',
      author: 'درباره نویسنده',
      authorIntro: 'این پروژه در ابتدا توسط من آغاز شد،',
      authorHelp: 'با کمک فراوان جامعه کاربری.',
      authorTagline: 'من برنامه هایی می نویسم که هدفشان کمک به مردم برای دوری از غول های فناوری، امن کردن داده ها و حفظ حریم خصوصی است.',
      authorInterests: 'علاقه ویژه ای به میزبانی شخصی، لینوکس، امنیت و OSINT دارم.',
      authorProjectsLead: 'نسخه فارسی توسط حمید ک نگه‌داری می‌شود.',
      authorMoreApps: 'برای دیدن برنامه های متن باز بیشتری که منتشر کرده ام، به',
      license: 'مجوز',
      sponsorThanksTooltip: 'از @{login} بابت حمایت متشکریم',
      contributorTooltip: '@{login} تاکنون {contributions} بار مشارکت کرده است\n\nبرای مشاهده پروفایل کلیک کنید',
      followOnGithub: 'نگه‌دارنده را در گیت‌هاب دنبال کنید',
      licenseIntroLead: 'این پروژه با دو مجوز منتشر شده است؛ محتوای چک لیست (که در',
      licenseIntroChecklist: ') تحت مجوز',
      licenseIntroCode: 'و سایر بخش ها (از جمله تمام کد)، تحت مجوز',
      licenseSummaryTitle: 'این برای شما چه معنایی دارد؟',
      licenseSummaryBody: 'این یعنی برای همه چیز (به جز فایل چک لیست YAML)، تقریباً آزادی کامل برای استفاده، کپی، تغییر، ادغام، انتشار، توزیع، ارائه مجوز فرعی یا فروش نسخه ها دارید. فقط کافی است اعلان حق نشر و مجوز اصلی را در نسخه های نرم افزار بیاورید.',
      licenseSummaryBody2: 'و برای محتوای چک لیست امنیتی، می توانید محتوا را به اشتراک بگذارید و تطبیق دهید؛ به شرطی که اعتبار مناسب بدهید، از آن استفاده تجاری نکنید و مشارکت های خود را تحت همان مجوز منتشر کنید.',
    },
    misc: {
      loading: 'در حال بارگذاری...',
      loadingFailed: 'در حال حاضر بارگذاری ممکن نیست.',
      articlesTitle: 'مقالات',
      or: 'یا',
    },
    notFound: {
      title: 'یافت نشد 404',
      message: 'صفحه ای که دنبال آن هستید وجود ندارد.',
      back: 'بازگشت به صفحه اصلی',
    },
  },
};
