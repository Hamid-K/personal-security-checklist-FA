# دفاع دیجیتال / Digital Defense (Farsi localization)

این مخزن، نسخهٔ فارسی پروژهٔ **Digital Defense – Personal Security Checklist** است که با زبان پیش‌فرض فارسی روی دامنهٔ [https://amni.at](https://amni.at/) منتشر می‌شود، ولی با یک کلیک از نوار بالایی می‌توان هر صفحه را به‌صورت هم‌زمان در نسخهٔ انگلیسی نیز دید. در همان دامنه اکنون تقسیم‌بندی کامل [Awesome Privacy](https://amni.at/article/awesome-privacy/) قرار گرفته و به‌صورت دو زبانه، با ساختار، جست‌وجو و دیتای اصلی، میزبانی می‌شود.

## لینک‌های کلیدی
- [چک‌لیست کامل فارسی](CHECKLIST.fa.md)
- [Original English checklist](CHECKLIST.md)
- [سایت زنده (فارسی پیش‌فرض) — https://amni.at](https://amni.at/)
- [GitHub Pages mirror (English default) — https://hamid-k.github.io/personal-security-checklist-FA/](https://hamid-k.github.io/personal-security-checklist-FA/)
- [صفحه Awesome Privacy دو زبانه](https://amni.at/article/awesome-privacy/)

## معماری و اتوماسیون
- فولدر `web/` اپلیکیشن Qwik‌+Vite را شامل می‌شود که YAML چک‌لیست (`personal-security-checklist.en.yml` و `personal-security-checklist.fa.yml`) را می‌خواند، ترجمه‌ها را بارگذاری می‌کند، و مقاله‌ها + صفحهٔ Awesome Privacy را در همان پوستهٔ یکسان، واکنش‌گرا و هم‌خوان با حالت‌های روشن/تاریک نمایش می‌دهد.
- Markdownهای `CHECKLIST.md` و `CHECKLIST.fa.md` توسط اسکریپت `lib/generate.py` از همان YAMLها استخراج و وارد فایل‌های متن در ریشه می‌شوند. کاری که از طریق ورک‌فلو `.github/workflows/insert-checklist.yml` پس از هر تغییر در YAML انجام می‌گیرد.
- فایل دادهٔ Awesome Privacy (`web/src/data/awesome-privacy.yml`) با `.github/workflows/sync-awesome-privacy.yml` همیشه از ریپوی [Hamid-K/awesome-privacy-FA](https://github.com/Hamid-K/awesome-privacy-FA) به‌روز می‌شود، سپس `yarn build.static` اجرا و دادهٔ تازه در مخزن ثبت می‌شود.
- استقرار اصلی با `.github/workflows/gh-pages.yml` انجام می‌شود؛ این پیکربندی `PUBLIC_BASE_PATH=/`، `PUBLIC_ORIGIN=https://amni.at` و `CUSTOM_DOMAIN=amni.at` را تنظیم می‌کند، بستهٔ استاتیک را با `yarn build.static` می‌سازد و محتوا را روی شاخهٔ `gh-pages` منتشر می‌کند. خروجی استاتیک داخل `web/dist/` قرار می‌گیرد.

## توسعه
```bash
cd web
yarn install

# محیط توسعه با ssr:
yarn dev -- --host 127.0.0.1 --port 5173

# بستهٔ استاتیک برای GitHub Pages / GH Actions:
yarn build.static
```

برای تست صفحات تولیدی می‌توانید بعد از `yarn build.static` پوشهٔ `web/dist/` را با سرور ساده‌ای مثل `python -m http.server 4173 --directory web/dist` خدمت دهید. پاک‌سازی کش مرورگر یا اجرا در پنجرهٔ خصوصی به همراه `refresh` کامل، به‌ویژه بعد از تغییر زبان یا تم، بسیار کمک می‌کند.

## Credit
- Original checklist content by [Alicia Sykes](https://github.com/Lissy93/personal-security-checklist) under CC BY-NC-SA 4.0 — نام و ارجاع اصلی حفظ شده است.
- Translation, automation, theme integration and hosting maintenance by [Hamid K](https://github.com/hamid-k).
