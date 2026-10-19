import { MODULES, type ModuleId } from "./copy";

export function parseRoute(hash = window.location.hash): ModuleId | "home" {
  const raw = hash.replace(/^#/, "");
  const id = raw.replace(/^\//, "").split("/")[0];
  if (MODULES.some((m) => m.id === id)) return id as ModuleId;
  return "home";
}

export function moduleHref(id: ModuleId) {
  return `#/${id}`;
}
