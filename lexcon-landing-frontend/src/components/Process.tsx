const steps = [
  {
    number: "01",
    title: "Первичная консультация",
    description:
      "Кратко разбираем ситуацию, определяем задачу и необходимые документы.",
  },
  {
    number: "02",
    title: "Правовой анализ",
    description:
      "Проверяем риски, договоры, переписку, претензии и позицию контрагента.",
  },
  {
    number: "03",
    title: "План действий",
    description:
      "Предлагаем понятный сценарий: переговоры, претензия, подготовка документов или сопровождение сделки.",
  },
  {
    number: "04",
    title: "Сопровождение",
    description:
      "Берём на себя юридическую часть и держим клиента в курсе ключевых этапов.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Процесс
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Как проходит работа
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            Прозрачный порядок взаимодействия: без лишней бюрократии,
            но с понятной фиксацией задач, сроков и результата.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400"
            >
              <p className="text-sm font-bold text-amber-400">
                {step.number}
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}