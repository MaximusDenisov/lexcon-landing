import { useEffect, useState } from "react";
import { companyInfo } from "../data/content";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-amber-400">
            {companyInfo.brandName}
          </p>
        </div>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="transition hover:text-white">
            О компании
          </a>

          <a href="#services" className="transition hover:text-white">
            Услуги
          </a>

          <a href="#process" className="transition hover:text-white">
            Как работаем
          </a>

          <a href="#contact" className="transition hover:text-white">
            Контакты
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl bg-amber-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-amber-300 md:block"
        >
          Консультация
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="text-sm font-semibold text-white md:hidden"
        >
          {isMenuOpen ? "Закрыть" : "Меню"}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-full z-50 w-full border-t border-slate-800 bg-slate-950 px-6 py-6 shadow-2xl transition-all duration-300 md:hidden"
        >
          <nav className="flex flex-col gap-5 text-sm text-slate-300">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="transition hover:text-white"
            >
              О компании
            </a>

            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="transition hover:text-white"
            >
              Услуги
            </a>

            <a
              href="#process"
              onClick={() => setIsMenuOpen(false)}
              className="transition hover:text-white"
            >
              Как работаем
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="transition hover:text-white"
            >
              Контакты
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-amber-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Консультация
            </a>
          </nav>
        </div>
      )}
      </header>
    </>
  );
}