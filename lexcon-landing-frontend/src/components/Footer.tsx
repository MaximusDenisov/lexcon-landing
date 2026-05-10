import { companyInfo } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <p className="text-sm font-bold tracking-[0.3em] text-amber-400">
            {companyInfo.brandName}
          </p>

          <p className="mt-4 leading-7 text-slate-300">
            {companyInfo.activity} в России.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Контакты</h3>

          <div className="mt-4 space-y-1 text-slate-300">
            <p>{companyInfo.city}</p>
            <p>Телефон: {companyInfo.phone}</p>
            <p>Email: {companyInfo.email}</p>
            <p>Telegram: {companyInfo.telegram}</p>
          </div>
        </div>

        <div>
            <h3 className="font-semibold">Реквизиты</h3>

            <div className="text-sm text-slate-400">
              <p>{companyInfo.shortName}</p>
              <p>ИНН: {companyInfo.inn}</p>
              <p>ОГРН: {companyInfo.ogrn}</p>
              <p>{companyInfo.address}</p>
            </div>
          </div>
        <div>
          <h3 className="font-semibold">Документы</h3>

          <div className="mt-4 space-y-1 text-slate-300">
            <a href="/privacy.html" className="block transition hover:text-amber-400">
              Политика конфиденциальности
            </a>

            <a href="/consent.html" className="block transition hover:text-amber-400">
              Согласие на обработку персональных данных
            </a>

            <p className="pt-4 text-sm text-slate-500">
              Реквизиты будут добавлены на этапе запуска.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        © 2026 {companyInfo.shortName}. {companyInfo.legalNotice}
      </div>
    </footer>
  );
}