import tiling1 from '../assets/images/tiling/tiling-1.webp'
import tiling2 from '../assets/images/tiling/tiling-2.webp'
import tiling3 from '../assets/images/tiling/tiling-3.webp'
import tiling4 from '../assets/images/tiling/tiling-4.webp'
import tiling5 from '../assets/images/tiling/tiling-5.webp'
import tiling6 from '../assets/images/tiling/tiling-6.webp'

import plumbing1 from '../assets/images/plumbing/plumbing-1.webp'
import plumbing2 from '../assets/images/plumbing/plumbing-2.webp'
import plumbing3 from '../assets/images/plumbing/plumbing-3.webp'

import painting1 from '../assets/images/painting/painting-1.webp'
import painting2 from '../assets/images/painting/painting-2.webp'
import painting3 from '../assets/images/painting/painting-3.webp'
import painting4 from '../assets/images/painting/painting-4.webp'

import electrical1 from '../assets/images/electrical/electrical-1.webp'
import electrical2 from '../assets/images/electrical/electrical-2.webp'
import electrical3 from '../assets/images/electrical/electrical-3.webp'
import electrical4 from '../assets/images/electrical/electrical-4.webp'
import electrical5 from '../assets/images/electrical/electrical-5.webp'
import electrical6 from '../assets/images/electrical/electrical-6.webp'

/**
 * الخدمات الأربعة.
 * - slug: يظهر في الرابط  /services/<slug>
 * - images: كل صورة لها وصف (caption) بيظهر تحتها في البانر
 * - لإضافة صورة: حطها في assets/images/<service>/ واستوردها هنا وأضفها في images
 */
export const services = [
  {
    slug: 'plumbing',
    title: 'السباكة',
    icon: 'plumbing',
    short: 'تأسيس شبكات المياه والصرف وتركيب الأدوات الصحية، وإصلاح التسريبات والأعطال.',
    intro:
      'نتولى أعمال السباكة كاملة، من تأسيس الخطوط في المبنى الجديد إلى تركيب الأحواض والخلاطات والدش، ونصلح الأعطال في أي سباكة قائمة حتى لو لم ننفذها نحن.',
    fromScratch: [
      'تأسيس خطوط المياه والصرف',
      'تركيب الأحواض والمراحيض والدش والخلاطات',
      'تركيب السخانات وخزانات المياه',
      'اختبار الشبكة قبل التسليم',
    ],
    maintenance: [
      'كشف وإصلاح تسريبات المياه',
      'فك انسداد المجاري والأحواض',
      'استبدال السيفونات والخلاطات والوصلات',
      'صيانة السخانات وأدوات الحمّام',
    ],
    images: [
      { src: plumbing1, alt: 'فك وتركيب سيفون الحوض', caption: 'فك وتركيب سيفون الحوض بالعدة المناسبة لكل وصلة.' },
      { src: plumbing2, alt: 'تركيب وصلات الحوض', caption: 'ربط وصلات الحوض المعدنية بإحكام لمنع التسريب.' },
      { src: plumbing3, alt: 'حمّام بدش علوي ويدوي', caption: 'تركيب الدش العلوي والدش اليدوي والخلاط على جدار الحمّام.' },
    ],
  },
  {
    slug: 'painting',
    title: 'الأصباغ',
    icon: 'painting',
    short: 'دهان داخلي وخارجي بتشطيب ناعم، مع مساعدتك في اختيار الألوان المناسبة.',
    intro:
      'ندهن الجدران والأسقف من مرحلة تجهيز السطح حتى اللمسة الأخيرة، وننفذ إعادة دهان وترميم للأسطح القديمة بنفس الجودة.',
    fromScratch: [
      'تجهيز الجدران ومعالجتها قبل الدهان',
      'دهان داخلي وخارجي للجدران والأسقف',
      'تنفيذ حليات وتفاصيل جدارية بألوان مختلفة',
      'مساعدتك في اختيار الألوان',
    ],
    maintenance: [
      'إعادة دهان الغرف والواجهات',
      'ترميم الشروخ والتقشر',
      'معالجة آثار الرطوبة قبل إعادة الدهان',
      'تجديد الألوان دون الحاجة لتغيير شكل المكان',
    ],
    images: [
      { src: painting1, alt: 'لوحة ألوان الأصباغ', caption: 'اختيار درجة اللون المناسبة من لوحة الألوان قبل البدء.' },
      { src: painting2, alt: 'غرفة بعد الدهان', caption: 'غرفة بعد الدهان بتشطيب ناعم ونظيف.' },
      { src: painting3, alt: 'دهان الجدران والأسقف', caption: 'دهان الجدران والأسقف بلون موحد وحواف مستقيمة.' },
      { src: painting4, alt: 'دهان مع حليات جدارية', caption: 'دهان بلونين مع تنفيذ حليات على أحد الجدران.' },
    ],
  },
  {
    slug: 'electrical',
    title: 'الكهرباء',
    icon: 'electrical',
    short: 'تأسيس وتمديدات كهرباء، وتصميم وتركيب الإضاءة، وكشف الأعطال وإصلاحها.',
    intro:
      'ننفذ أعمال الكهرباء من التأسيس وتمديد الأسلاك إلى تركيب المفاتيح والإضاءة، ونفحص ونصلح أي عطل في التمديدات الموجودة.',
    fromScratch: [
      'تأسيس التمديدات الكهربائية للمبنى',
      'تركيب لوحات التوزيع والمفاتيح والأفياش',
      'تصميم وتركيب إضاءة السقف وإضاءة الليد المخفية',
      'تركيب النجف والإضاءة الخطية',
    ],
    maintenance: [
      'كشف الأعطال وتحديد سببها',
      'استبدال المفاتيح والأفياش والأسلاك التالفة',
      'صيانة الإضاءة وتغيير وحدات الليد',
      'فحص التمديدات وسلامتها',
    ],
    images: [
      { src: electrical1, alt: 'إضاءة ليد مخفية في السقف', caption: 'إضاءة ليد زرقاء مخفية داخل السقف المعلّق.' },
      { src: electrical2, alt: 'إضاءة خطية ونجفة', caption: 'إضاءة خطية في السقف مع نجفة في منتصف الغرفة.' },
      { src: electrical3, alt: 'تصميم إضاءة هندسية', caption: 'تصميم إضاءة بخطوط متقاطعة يعطي السقف شكلاً مميزاً.' },
      { src: electrical4, alt: 'تركيب المفاتيح والأفياش', caption: 'تركيب المفاتيح والأفياش على الجدار بعد ضبط المستوى بالليزر.' },
      { src: electrical5, alt: 'تركيب إضاءة السقف', caption: 'تركيب إطار الإضاءة الخطية في السقف.' },
      { src: electrical6, alt: 'غرفة بإضاءة خطية ونجفة', caption: 'غرفة بعد التشطيب بإضاءة خطية ونجفة في السقف.' },
    ],
  },
  {
    slug: 'tiling',
    title: 'البلاط',
    icon: 'tiling',
    short: 'تركيب بلاط وسيراميك وبورسلين للأرضيات والجدران والحمّامات بتسوية دقيقة.',
    intro:
      'نركّب البلاط للأرضيات والجدران والحمّامات بتسوية وفواصل منتظمة، ونصلح الأرضيات القديمة من بلاط مكسور أو مرتخٍ.',
    fromScratch: [
      'تركيب بلاط الأرضيات والجدران',
      'تكسية الحمّامات والمطابخ',
      'ضبط المناسيب والفواصل لسطح متساوٍ',
      'تركيب البورسلين والبلاط كبير المقاس',
    ],
    maintenance: [
      'استبدال البلاط المكسور أو المتشقق',
      'إعادة تثبيت البلاط المرتخي',
      'إعادة تعبئة الفواصل (الترويب)',
      'تجديد تكسية الحمّام دون هدم كامل',
    ],
    images: [
      { src: tiling1, alt: 'تثبيت البلاط على اللاصق', caption: 'فرد البلاط على اللاصق وتثبيته يدوياً بسطح متساوٍ.' },
      { src: tiling2, alt: 'تركيب بلاط كبير المقاس', caption: 'تركيب بلاط كبير المقاس باستخدام فواصل التسوية.' },
      { src: tiling3, alt: 'حمّام مكسو ببلاط داكن', caption: 'حمّام مكسو بالكامل ببلاط داكن مع دش علوي ورف مدمج.' },
      { src: tiling4, alt: 'ضبط فواصل الأرضية', caption: 'ضبط الفواصل ومحاور التركيب على أرضية الصالة.' },
      { src: tiling5, alt: 'تكسية جدار حمّام', caption: 'تكسية جدار الحمّام ببلاط داكن مع شريط حجري بارز.' },
      { src: tiling6, alt: 'حمّام مع لوحة دش', caption: 'تكسية الحمّام ببلاط سيراميك وتركيب لوحة الدش.' },
    ],
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
