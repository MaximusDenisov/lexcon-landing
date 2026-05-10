export function Legal() {
  return (
    <section className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-16">
        <div
          id="privacy"
          className="scroll-mt-24 rounded-3xl border border-slate-800 bg-slate-950 p-8"
        >
          <h2 className="text-3xl font-bold">
            Политика конфиденциальности
          </h2>

          <div className="mt-6 space-y-4 leading-8 text-slate-300">
            <p>
              Настоящая политика конфиденциальности определяет порядок
              обработки и защиты персональных данных пользователей сайта.
            </p>

            <p>
              Оставляя заявку на сайте, пользователь соглашается на обработку
              персональных данных в целях обратной связи и оказания
              юридических услуг.
            </p>

            <p>
              Компания принимает необходимые меры для защиты персональных
              данных от неправомерного доступа, изменения и распространения.
            </p>
          </div>
        </div>

        <div
          id="consent"
          className="scroll-mt-24 rounded-3xl border border-slate-800 bg-slate-950 p-8"
        >
          <h2 className="text-3xl font-bold">
            Согласие на обработку персональных данных
          </h2>

          <div className="mt-6 space-y-4 leading-8 text-slate-300">
            <p>
              Пользователь, оставляя заявку на сайте, принимает настоящее
              согласие на обработку персональных данных.
            </p>

            <p>
              Пользователь предоставляет согласие на обработку имени,
              контактных данных и иной информации, указанной в форме заявки.
            </p>

            <p>
              Согласие действует до момента достижения целей обработки либо
              до его отзыва пользователем.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}