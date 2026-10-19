import type { ReactNode } from "react";
import { copy, MAILTO, type Lang } from "./copy";

export function SiteChrome({
  lang,
  onToggleLang,
  children,
}: {
  lang: Lang;
  onToggleLang: () => void;
  children: ReactNode;
}) {
  const t = copy[lang];
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#/" className="serif text-[15px] font-semibold tracking-tight text-ink sm:text-xl">
            Unified Kitchen Toolkit
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
              onClick={onToggleLang}
              className="rounded-full border border-line px-3 py-1.5 text-xs font-bold tracking-wide text-muted hover:border-gold hover:text-ink"
            >
              {t.langOther}
            </button>
            <a
              href="#quote"
              className="inline-flex items-center rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-white hover:bg-gold-dark"
            >
              {t.heroCta}
            </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span className="serif text-base font-semibold text-ink">{t.brand}</span>
          <a href={`mailto:${MAILTO}`} className="hover:text-ink">
            {t.footerMail}
          </a>
        </div>
      </footer>
    </div>
  );
}
