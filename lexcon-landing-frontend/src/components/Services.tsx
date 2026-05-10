import { services } from "../data/content.ts"
import { ServiceCard } from "./ServiceCard"

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Услуги
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Основные направления работы
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}