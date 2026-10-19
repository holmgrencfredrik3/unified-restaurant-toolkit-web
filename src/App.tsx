import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  CalendarDays,
  Check,
  ChefHat,
  Download,
  LayoutGrid,
  MessageSquare,
  Printer,
  Send,
  ShoppingBasket,
  Tablet,
} from "lucide-react";
import {
  copy,
  DOWNLOAD_URL,
  LICENSE_API,
  MAILTO,
  MODULES,
  PERIODS,
  type Lang,
} from "./copy";

const ICONS = {
  labels: Printer,
  dispatch: MessageSquare,
  plan: CalendarDays,
  prep: ShoppingBasket,
  tasks: LayoutGrid,
} as const;

function readLang(): Lang {
  const saved = localStorage.getItem("urt_site_lang");
  if (saved === "en" || saved === "sv") return saved;
  return navigator.language.toLowerCase().startsWith("sv") ? "sv" : "en";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(readLang);
  const t = copy[lang];

  useEffect(() => {
    localStorage.setItem("urt_site_lang", lang);
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDesc);
  }, [lang, t.metaDesc, t.metaTitle]);

  const toggleLang = () => setLang((prev) => (prev === "sv" ? "en" : "sv"));

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="serif text-lg font-semibold tracking-tight text-ink sm:text-xl">
            URT
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
            <a href="#product" className="hover:text-ink">
              {t.navProduct}
            </a>
            <a href="#how" className="hover:text-ink">
              {t.navHow}
            </a>
            <a href="#quote" className="hover:text-ink">
              {t.navQuote}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-full border border-line px-3 py-1.5 text-xs font-bold tracking-wide text-muted hover:border-gold hover:text-ink"
            >
              {t.langOther}
            </button>
            <a
              href={DOWNLOAD_URL}
              className="hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-bold text-ink hover:border-gold sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              {t.download}
            </a>
            <a
              href="#quote"
              className="inline-flex items-center rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-white hover:bg-gold-dark"
            >
              {t.heroCta}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">{t.heroKicker}</p>
            <h1 className="serif mt-3 text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t.heroLead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#quote"
                className="inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-sm font-bold text-white hover:bg-gold-dark"
              >
                {t.heroCta}
              </a>
              <span className="text-sm text-muted">{t.heroSecondary}</span>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-card p-6 shadow-[0_20px_60px_-40px_rgba(10,17,13,0.45)]">
            <div className="flex items-center gap-3 border-b border-line pb-4">
              <ChefHat className="h-5 w-5 text-gold-dark" />
              <div>
                <div className="text-sm font-bold">{t.brand}</div>
                <div className="text-xs text-muted">Windows · iPad · Brother QL · Star</div>
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {MODULES.map((mod) => {
                const Icon = ICONS[mod.id];
                return (
                  <li key={mod.id} className="flex items-center gap-3 text-sm">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-paper text-gold-dark">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-semibold">{lang === "sv" ? mod.sv : mod.en}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="product" className="border-y border-line bg-card">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="serif text-3xl font-semibold sm:text-4xl">{t.modulesTitle}</h2>
            <p className="mt-3 max-w-2xl text-muted">{t.modulesLead}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MODULES.map((mod) => {
                const Icon = ICONS[mod.id];
                return (
                  <article key={mod.id} className="rounded-2xl border border-line bg-paper p-5">
                    <Icon className="h-5 w-5 text-gold-dark" />
                    <h3 className="mt-3 font-bold">{lang === "sv" ? mod.sv : mod.en}</h3>
                  </article>
                );
              })}
              <article className="rounded-2xl border border-dashed border-gold/50 bg-paper p-5">
                <Tablet className="h-5 w-5 text-gold-dark" />
                <h3 className="mt-3 font-bold">{lang === "sv" ? "Globala inställningar" : "Global Settings"}</h3>
                <p className="mt-1 text-sm text-muted">
                  {lang === "sv" ? "Alltid tillgängligt, även utan betald yta." : "Always available, even without a paid area."}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="serif text-3xl font-semibold sm:text-4xl">{t.howTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.how.map((step) => (
              <article key={step.n} className="rounded-2xl border border-line bg-card p-6">
                <div className="text-xs font-bold tracking-[0.2em] text-gold-dark">{step.n}</div>
                <h3 className="mt-3 text-lg font-bold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-ink text-paper">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="serif text-3xl font-semibold text-white">{t.trialTitle}</h2>
              <p className="mt-2 max-w-xl text-sm text-white/70">{t.trialLead}</p>
            </div>
            <a
              href={DOWNLOAD_URL}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-white hover:bg-gold-dark"
            >
              <Download className="h-4 w-4" />
              {t.download}
            </a>
          </div>
        </section>

        <section id="quote" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="serif text-3xl font-semibold sm:text-4xl">{t.quoteTitle}</h2>
          <p className="mt-3 text-muted">{t.quoteLead}</p>
          <QuoteForm lang={lang} />
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span className="serif text-base font-semibold text-ink">{t.brand}</span>
          <a href={DOWNLOAD_URL} className="hover:text-ink">
            {t.footerDownload}
          </a>
          <a href={`mailto:${MAILTO}`} className="hover:text-ink">
            {t.footerMail}
          </a>
        </div>
      </footer>
    </div>
  );
}

function QuoteForm({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [fullSuite, setFullSuite] = useState(true);
  const [modules, setModules] = useState<string[]>([]);
  const [period, setPeriod] = useState("annual");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const selected = useMemo(() => (fullSuite ? "all" : modules), [fullSuite, modules]);

  const toggleMod = (id: string) => {
    setFullSuite(false);
    setModules((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      action: "inquiry",
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      restaurant: String(data.get("restaurant") || "").trim(),
      city: String(data.get("city") || "").trim(),
      message: String(data.get("message") || "").trim(),
      period,
      modules: selected,
      lang,
    };
    if (!payload.name || !payload.email) return;
    setStatus("sending");
    try {
      const res = await fetch(LICENSE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("ok");
      form.reset();
      setFullSuite(true);
      setModules([]);
      setPeriod("annual");
    } catch {
      const body = [
        payload.name,
        payload.email,
        payload.restaurant,
        payload.city,
        `period: ${period}`,
        `modules: ${Array.isArray(selected) ? selected.join(", ") : selected}`,
        payload.message,
      ]
        .filter(Boolean)
        .join("\n");
      window.location.href = `mailto:${MAILTO}?subject=${encodeURIComponent("URT quote")}&body=${encodeURIComponent(body)}`;
      setStatus("err");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-3xl border border-line bg-card p-5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label={t.formName} required />
        <Field name="email" label={t.formEmail} type="email" required />
        <Field name="restaurant" label={t.formRestaurant} />
        <Field name="city" label={t.formCity} />
      </div>

      <fieldset>
        <legend className="text-xs font-bold uppercase tracking-wider text-muted">{t.formModules}</legend>
        <label className="mt-2 flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold">
          <input
            type="checkbox"
            checked={fullSuite}
            onChange={(e) => {
              setFullSuite(e.target.checked);
              if (e.target.checked) setModules([]);
            }}
          />
          {t.formAll}
        </label>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
          {MODULES.map((mod) => (
            <label key={mod.id} className="flex min-h-11 cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!fullSuite && modules.includes(mod.id)}
                onChange={() => toggleMod(mod.id)}
              />
              {lang === "sv" ? mod.sv : mod.en}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-xs font-bold uppercase tracking-wider text-muted">
        {t.formPeriod}
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="mt-2 block w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-sm font-semibold text-ink"
        >
          {PERIODS.map((row) => (
            <option key={row.id} value={row.id}>
              {lang === "sv" ? row.sv : row.en}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-bold uppercase tracking-wider text-muted">
        {t.formMessage}
        <textarea
          name="message"
          rows={4}
          placeholder={t.formMessagePh}
          className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-sm text-ink"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-white hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "ok" ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
        {status === "sending" ? t.formSending : t.formSend}
      </button>
      {status === "ok" && <p className="text-sm font-semibold text-emerald-800">{t.formOk}</p>}
      {status === "err" && <p className="text-sm text-muted">{t.formErr}</p>}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-xs font-bold uppercase tracking-wider text-muted">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-sm font-medium text-ink"
      />
    </label>
  );
}
