import type { Lang, ModuleId } from "./copy";

type Shot = { file: string; sv: string; en: string };

const SHOTS: Record<ModuleId, Shot[]> = {
  labels: [
    { file: "labels-marking.png", sv: "Märkning", en: "Marking" },
    { file: "labels-stock.png", sv: "Lager", en: "Inventory" },
    { file: "labels-catalog.png", sv: "Katalog", en: "Catalog" },
    { file: "labels-designer.png", sv: "Designer", en: "Designer" },
  ],
  dispatch: [
    { file: "dispatch.png", sv: "Utskick", en: "Dispatch" },
    { file: "dispatch-templates.png", sv: "Mallar", en: "Templates" },
  ],
  plan: [
    { file: "plan.png", sv: "Schema", en: "Timeline" },
    { file: "plan-edit.png", sv: "Skapa plan", en: "Create plan" },
  ],
  prep: [
    { file: "prep.png", sv: "Rätter", en: "Dishes" },
    { file: "prep-recipes.png", sv: "Ingredienser", en: "Ingredients" },
  ],
  tasks: [
    { file: "tasks.png", sv: "Idag", en: "Today" },
    { file: "tasks-lists.png", sv: "Listor", en: "Lists" },
  ],
};

export function ModuleShots({ id, lang }: { id: ModuleId; lang: Lang }) {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="space-y-8">
      {SHOTS[id].map((shot) => {
        const caption = lang === "sv" ? shot.sv : shot.en;
        return (
          <figure key={shot.file} className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_20px_60px_-40px_rgba(10,17,13,0.45)]">
            <img src={`${base}shots/${shot.file}`} alt={caption} className="block w-full" />
            <figcaption className="border-t border-line px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
              {caption}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
