import { ArrowLeft } from "lucide-react";
import { copy, MODULES, type Lang, type ModuleId } from "./copy";
import { MODULE_ICONS } from "./icons";
import { moduleGear, modulePages } from "./pages";
import { moduleHref } from "./route";

export function ModulePage({ id, lang }: { id: ModuleId; lang: Lang }) {
  const t = copy[lang];
  const page = modulePages[id][lang];
  const Icon = MODULE_ICONS[id];

  return (
    <main className="pb-16">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <a href="#/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-ink">
          <ArrowLeft className="h-4 w-4" />
          {t.backHome}
        </a>
        <p className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
          <Icon className="h-3.5 w-3.5" />
          {page.kicker}
        </p>
        <h1 className="serif mt-3 max-w-3xl text-3xl font-semibold leading-[1.15] text-ink sm:text-5xl">{page.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{page.lead}</p>
        <p className="mt-4 max-w-2xl text-sm font-medium text-ink/80">{moduleGear[id][lang]}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#quote"
            className="inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-sm font-bold text-white hover:bg-gold-dark"
          >
            {t.quoteThis}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {page.features.map((feat) => (
            <article key={feat.t} className="rounded-2xl border border-line bg-card p-5">
              <h3 className="font-bold">{feat.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feat.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl space-y-10 px-4 py-14 sm:px-6">
          {page.sections.map((section) => (
            <article key={section.tab}>
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">{section.tab}</div>
              <h2 className="serif mt-2 text-2xl font-semibold sm:text-3xl">{section.title}</h2>
              <p className="mt-3 max-w-2xl text-muted">{section.d}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {section.points.map((point) => (
                  <li key={point} className="rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="serif text-2xl font-semibold">{t.otherAreas}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.filter((mod) => mod.id !== id).map((mod) => {
            const Other = MODULE_ICONS[mod.id];
            return (
              <a
                key={mod.id}
                href={moduleHref(mod.id)}
                className="rounded-2xl border border-line bg-card p-4 hover:border-gold"
              >
                <Other className="h-4 w-4 text-gold-dark" />
                <div className="mt-2 text-sm font-bold">{lang === "sv" ? mod.sv : mod.en}</div>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
