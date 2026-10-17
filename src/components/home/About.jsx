import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { CheckIcon } from '../ui/Icons';
import { site } from '../../data/site';

const modes = [
  {
    title: 'تنفيذ من الصفر',
    text: 'نبدأ من الأساس: التأسيس، ثم التركيب، ثم التشطيب، في كل خدمة من خدماتنا الأربعة.',
  },
  {
    title: 'صيانة لأي أعمال',
    text: 'نكشف العطل ونصلحه، سواء كانت الأعمال من تنفيذنا أو من تنفيذ غيرنا.',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading title={`من نحن`} />
          <p className="mt-6 text-base leading-8 text-navy-900/80">
            {site.nameAr} شركة مقاولات في {site.country}. نقدم أربع خدمات أساسية
            للمنازل والمحلات: السباكة والأصباغ والكهرباء و السيراميك والبورسلين.
          </p>
          <p className="mt-4 text-base leading-8 text-navy-900/80">
            تتعامل مع جهة واحدة بدل أربع جهات، وتتواصل مباشرة مع من ينفذ العمل.
          </p>
        </div>

        <ul className="grid gap-4">
          {modes.map((m) => (
            <li
              key={m.title}
              className="flex gap-4 rounded-2xl border border-navy-100 bg-paper p-5"
            >
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-navy-900">{m.title}</h3>
                <p className="mt-1 text-[15px] leading-7 text-navy-900/75">
                  {m.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
