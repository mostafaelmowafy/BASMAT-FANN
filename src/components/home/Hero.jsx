import Container from '../ui/Container';
import ContactButtons from '../ui/ContactButtons';
import Fingerprint from '../ui/Fingerprint';
import heroImage from '../../assets/images/painting/painting-4.webp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <Fingerprint className="pointer-events-none absolute -end-20 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 text-gold-500/20 sm:h-[44rem] sm:w-[44rem]" />

      <Container className="relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-[1.25] sm:text-5xl lg:text-6xl">
            نبني من الصفر،
            <br />
            ونصلح ما بناه غيرنا.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-navy-100 sm:text-lg">
            سباكة وأصباغ وكهرباء و السيراميك والبورسلين في مكان واحد. ننفذ العمل
            كاملاً من البداية، أو نتولى الصيانة والإصلاح لأي أعمال قائمة حتى لو
            لم ننفذها نحن.
          </p>
          <ContactButtons variant="onDark" className="mt-8" />
        </div>

        {/* الصورة داخل إطار بيضاوي مثل إطار اللوجو */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[999px] border-2 border-gold-500"
            aria-hidden="true"
          />
          <img
            src={heroImage}
            alt="غرفة بعد التشطيب بدهان وإضاءة سقف"
            className="relative aspect-[3/4] w-full rounded-[999px] object-cover lg:aspect-[4/5]"
            fetchpriority="high"
          />
        </div>
      </Container>
    </section>
  );
}
