import { CalendarDays, LayoutGrid, MessageSquare, Printer, ShoppingBasket } from "lucide-react";
import type { ModuleId } from "./copy";

export const MODULE_ICONS = {
  labels: Printer,
  dispatch: MessageSquare,
  plan: CalendarDays,
  prep: ShoppingBasket,
  tasks: LayoutGrid,
} as const satisfies Record<ModuleId, typeof Printer>;
