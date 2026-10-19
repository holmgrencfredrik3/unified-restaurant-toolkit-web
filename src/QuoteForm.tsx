import { useMemo, useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { copy, LICENSE_API, MAILTO, MODULES, PERIODS, type Lang } from "./copy";

export function QuoteForm({ lang }: { lang: Lang }) {
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
