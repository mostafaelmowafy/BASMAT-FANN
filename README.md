# موقع بصمة فن للصيانة العامة

React + Vite + Tailwind CSS + React Router (RTL / Responsive)

## التشغيل
```
npm install
npm run dev       # للتجربة
npm run build     # للنشر (الناتج في مجلد dist)
```

## هيكل المشروع
```
src/
  data/site.js          بيانات الشركة والأرقام (غيّر الأرقام من هنا فقط)
  data/services.js      الخدمات الأربعة + نصوصها + صورها ووصف كل صورة
  utils/phone.js        تحويل الأرقام لروابط اتصال وواتساب
  components/layout/    الهيدر، الفوتر، الواتساب العائم
  components/home/      أقسام الصفحة الرئيسية
  components/service/   البانر، اللايت بوكس، تفاصيل الخدمة
  components/ui/        عناصر مشتركة (أيقونات، أزرار، زخرفة البصمة)
  pages/                Home / ServicePage / NotFound
  assets/               اللوجو والصور (مجلد لكل خدمة)
```

## روابط الخدمات
`/services/plumbing` · `/services/painting` · `/services/electrical` · `/services/tiling`

## ملاحظة النشر
الموقع Single Page App، فلازم السيرفر يحوّل كل الروابط إلى index.html.
الملفان `public/_redirects` (Netlify / Cloudflare) و `vercel.json` (Vercel) جاهزان.
