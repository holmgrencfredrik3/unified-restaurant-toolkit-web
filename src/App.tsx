import { useEffect, useState } from "react";
import { copy, type Lang } from "./copy";
import { HomePage } from "./HomePage";
import { ModulePage } from "./ModulePage";
import { parseRoute } from "./route";
import { SiteChrome } from "./SiteChrome";
import { modulePages } from "./pages";

function readLang(): Lang {
  const saved = localStorage.getItem("urt_site_lang");
  if (saved === "en" || saved === "sv") return saved;
  return navigator.language.toLowerCase().startsWith("sv") ? "sv" : "en";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(readLang);
  const [hash, setHash] = useState(() => window.location.hash);
  const route = parseRoute(hash);
  const t = copy[lang];

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    localStorage.setItem("urt_site_lang", lang);
    document.documentElement.lang = lang;
    if (route === "home") {
      document.title = t.metaTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t.metaDesc);
      return;
    }
    const page = modulePages[route][lang];
    document.title = page.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", page.metaDesc);
  }, [lang, route, t.metaDesc, t.metaTitle]);

  useEffect(() => {
    const raw = hash.replace(/^#/, "");
    if (route !== "home") {
      window.scrollTo({ top: 0 });
      return;
    }
    if (!raw || raw.startsWith("/")) {
      window.scrollTo({ top: 0 });
      return;
    }
    requestAnimationFrame(() => {
      document.getElementById(raw)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash, route]);

  return (
    <SiteChrome lang={lang} onToggleLang={() => setLang((prev) => (prev === "sv" ? "en" : "sv"))}>
      {route === "home" ? <HomePage lang={lang} /> : <ModulePage id={route} lang={lang} />}
    </SiteChrome>
  );
}
