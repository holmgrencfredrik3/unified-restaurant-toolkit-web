import { ChefHat } from "lucide-react";
import { copy, MODULES, type Lang } from "./copy";
import { MODULE_ICONS } from "./icons";
import { QuoteForm } from "./QuoteForm";
import { moduleHref } from "./route";

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <main id="top">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">{t.heroKicker}</p>
          <h1 className="serif mt-3 text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t.heroLead}</p>
          <p className="mt-3 text-sm font-semibold text-ink">{t.heroByline}</p>
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
              <div className="text-xs text-muted">{t.heroStack}</div>
            </div>
          </div>
          <ul className="mt-4 space-y-3">
            {MODULES.map((mod) => {
              const Icon = MODULE_ICONS[mod.id];
              return (
                <li key={mod.id}>
                  <a
                    href={moduleHref(mod.id)}
                    className="flex w-full items-center gap-3 rounded-xl text-left text-sm hover:bg-paper"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-paper text-gold-dark">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-semibold">{lang === "sv" ? mod.sv : mod.en}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="serif text-3xl font-semibold sm:text-4xl">{t.gearTitle}</h2>
          <p className="mt-3 max-w-2xl text-muted">{t.gearLead}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.gear.map((item) => (
              <article key={item.t} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="text-lg font-bold">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="serif text-3xl font-semibold sm:text-4xl">{t.modulesTitle}</h2>
        <p className="mt-3 max-w-2xl text-muted">{t.modulesLead}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod) => {
            const Icon = MODULE_ICONS[mod.id];
            return (
              <a
                key={mod.id}
                href={moduleHref(mod.id)}
                className="rounded-2xl border border-line bg-card p-5 text-left transition-colors hover:border-gold"
              >
                <Icon className="h-5 w-5 text-gold-dark" />
                <h3 className="mt-3 font-bold">{lang === "sv" ? mod.sv : mod.en}</h3>
                <p className="mt-1 text-sm text-muted">{t.demoHint}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="serif text-3xl font-semibold sm:text-4xl">{t.spineTitle}</h2>
          <p className="mt-3 max-w-2xl text-muted">{t.spineLead}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.spine.map((item) => (
              <article key={item.t} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="text-lg font-bold">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="serif text-3xl font-semibold sm:text-4xl">{t.howTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.how.map((step) => (
              <article key={step.n} className="rounded-2xl border border-line bg-paper p-6">
                <div className="text-xs font-bold tracking-[0.2em] text-gold-dark">{step.n}</div>
                <h3 className="mt-3 text-lg font-bold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="serif text-3xl font-semibold text-white">{t.trialTitle}</h2>
            <p className="mt-2 max-w-xl text-sm text-white/70">{t.trialLead}</p>
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="serif text-3xl font-semibold sm:text-4xl">{t.quoteTitle}</h2>
        <p className="mt-3 text-muted">{t.quoteLead}</p>
        <QuoteForm lang={lang} />
      </section>
    </main>
  );
}
