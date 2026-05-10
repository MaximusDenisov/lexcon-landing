import { companyInfo } from "../data/content";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
        Юридическая фирма «{companyInfo.brandName}»
      </p>

      <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
        Юридическое сопровождение бизнеса, сделок и грузоперевозок в России
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        Помогаем снизить правовые риски, подготовить документы и защитить
        интересы компании в переговорах, претензиях и коммерческих спорах.
      </p>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#contact"
          className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          Получить консультацию
        </a>

        <a
          href="https://t.me/lexcon_lawyer_bot"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
        >
          Написать в мессенджер
        </a>
      </div>
    </section>
  );
}