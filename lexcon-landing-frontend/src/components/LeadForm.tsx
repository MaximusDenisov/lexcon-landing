import { useState } from "react";

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setErrorMessage("");
    setIsSubmitted(false);
    if (!name.trim()) {
      setErrorMessage("Введите имя");
      return;
    }

    if (!message.trim()) {
      setErrorMessage("Опишите вопрос");
      return;
    }

    if (!phone.trim() && !email.trim()) {
      setErrorMessage("Укажите телефон, Telegram или email");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            phone,
            email,
            message,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
          errorData.message || "Ошибка отправки заявки"
        );
      }

      setIsSubmitted(true);

      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Не удалось отправить заявку");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-slate-950 px-6 pb-32 py-28 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Консультация
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Обсудим вашу ситуацию
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Поможем оценить риски, проверить документы и подобрать оптимальный
            правовой сценарий для бизнеса или сделки.
          </p>

          <div className="mt-10 grid gap-4 text-slate-300">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-amber-400" />
              <p>Ответим в течение рабочего дня</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-amber-400" />
              <p>Конфиденциальное обсуждение ситуации</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-amber-400" />
              <p>Работаем с бизнесом и частными клиентами</p>
            </div>
          </div>

          <a
            href="https://t.me/lexcon_lawyer_bot"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-amber-400 hover:text-amber-300"
          >
            Написать в Telegram
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <div className="grid gap-5">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ваше имя"
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
            />

            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Телефон или Telegram @username"
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
            />

            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email (необязательно)"
              type="email"
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-amber-400"
            />

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Кратко опишите задачу"
              rows={5}
              className="resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
            />

            <label className="flex gap-3 text-sm leading-6 text-slate-300">
              <input type="checkbox" required className="mt-1" />
              <span>
                Я согласен на обработку персональных данных
              </span>
            </label>

            <button
              disabled={isLoading}
              className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                  Отправка...
                </span>
              ) : (
                "Отправить заявку"
              )}
            </button>

            {errorMessage && (
              <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200 backdrop-blur-sm">
                {errorMessage}
              </p>
            )}
            {isSubmitted && (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 animate-in fade-in duration-500">
                <p className="text-sm font-medium text-emerald-300">
                  Заявка отправлена успешно
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Мы скоро свяжемся с вами.
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}