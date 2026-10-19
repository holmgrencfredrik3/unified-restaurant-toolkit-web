import type { Lang, ModuleId } from "./copy";

export type Feature = { t: string; d: string };
export type Section = { tab: string; title: string; d: string; points: string[] };

export type ModulePageCopy = {
  kicker: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDesc: string;
  features: Feature[];
  sections: Section[];
};

const labelsSv: ModulePageCopy = {
  kicker: "Etikettskrivare & Lager",
  title: "Märkning, lager, katalog och designer — samma yta.",
  lead: "En tryckning märker burken och lägger batchen i lagret. Bäst-före, allergener och vem som märkte följer med. Layouten bygger ni själva, per område, och den syns på varje enhet som öppnar adressen.",
  metaTitle: "Etikettskrivare & Lager — Unified Kitchen Toolkit",
  metaDesc:
    "Märkning med allergener och bäst-före, lager med utgångsvarningar, produktkatalog och etikettdesigner för Brother QL.",
  features: [
    {
      t: "Märk och lägg i lager i samma tryck",
      d: "Välj område, produkt och initialer. Hållbarheten räknas själv: dygn, timmar, End of Day, eller bara produktionsdatum. Justera antal, datum och tid om passet kräver det. Etiketten går till Brother QL och batchen finns i lagret direkt.",
    },
    {
      t: "EU-14 på etiketten, inte i en pärm",
      d: "Allergenikoner och koder skrivs ut med namn, batch, förvaring och signatur. En ram tvingar raster så kanten blir skarp på löpande rulle.",
    },
    {
      t: "Se vad som måste bort innan service",
      d: "Rött är utgånget, gult är snart ute. Sök på namn, batch eller signatur. Skriv ut lagerlistan — allt, snart, eller bara det som gått ut — och en extra etikett för samma batch när den första sitter snett.",
    },
    {
      t: "Katalogen styr nästa etikett",
      d: "Namn, kategori, förvaring och hållbarhet per område. Följ kökets tre standardmallar eller välj en egen design. Dekorativa etiketter skriver bara namnet i en ram och hamnar inte i lagret. Redan utskrivna poster ändras inte.",
    },
    {
      t: "Bygg layouten en gång",
      d: "Dra fält på ett 4×4-rutnät: namn, datum, allergener, signatur, egen text, kryss och linjer. Typsnitt och justering per fält. Ram: heldragen, streckad, dubbel eller hörn. På löpande rulle sätter ni längden i millimeter.",
    },
    {
      t: "När produkten inte finns i katalogen",
      d: "En ospecificerad etikett tar tid, datum och egen text i farten. Lägg in produkten i katalogen när den ska märkas på riktigt nästa gång.",
    },
  ],
  sections: [
    {
      tab: "Märkning",
      title: "Skriv ut och lägg i lager i samma steg",
      d: "Kocken väljer område, produkt och initialer. Hållbarheten kommer från katalogen. Extra etikett på samma batch går att skriva ut från lagret.",
      points: [
        "Hållbarhet i dygn, timmar, End of Day eller utan utgång",
        "Signatur syns på etiketten — vem som märkte",
        "Antal, datum och tid kan justeras före utskrift",
        "Dekorativa etiketter skriver bara namnet och läggs inte i lagret",
      ],
    },
    {
      tab: "Lager",
      title: "Aktivt lager med utgång och listor",
      d: "Allt som märkts ligger här. Sök på namn, batch eller signatur. Filtrera på det som behöver åtgärd.",
      points: [
        "Färg: rött utgånget, gult snart ute",
        "Skriv ut lagerlista — allt, snart eller utgånget",
        "Skriv ut extra etikett för samma batch",
        "Per område (Kök, Bar …) eller hela restaurangen",
      ],
    },
    {
      tab: "Katalog",
      title: "Produkter, kategorier och hållbarhet",
      d: "Katalogen styr vad som syns vid märkning. Ändringar gäller nästa etikett — redan utskrivna poster ändras inte.",
      points: [
        "Kategorier grupperar produkterna på märkningsskärmen",
        "Följ kökets tre standardmallar eller välj egen design",
        "Förvaring, t.ex. kyl max +4 °C, följer med på etiketten",
      ],
    },
    {
      tab: "Designer",
      title: "Bygg hur etiketten ser ut",
      d: "De tre inbyggda layouterna går inte att ändra. Duplicera dem eller skapa ny. Produkter utan egen design använder den mall som passar.",
      points: [
        "Dra fält på 4×4-rutnätet: namn, datum, allergener, signatur, egen text, kryss, linjer",
        "Typsnitt, storlek och justering per fält",
        "Ram: heldragen, streckad, dubbel, hörn — tvingar raster så kanten blir skarp",
        "Löpande rulle: sätt längden i millimeter",
      ],
    },
  ],
};

const labelsEn: ModulePageCopy = {
  kicker: "Labels & inventory",
  title: "Marking, stock, catalog and designer — one surface.",
  lead: "One print marks the container and puts the batch in stock. Best-before, allergens and who marked it come along. You build the layout yourselves, per area, and it shows on every device that opens the address.",
  metaTitle: "Labels & inventory — Unified Kitchen Toolkit",
  metaDesc:
    "Allergen and date labels, inventory with expiry alerts, product catalog and a label designer for Brother QL.",
  features: [
    {
      t: "Mark and stock in the same print",
      d: "Pick area, product and initials. Shelf life calculates itself: days, hours, End of Day, or production date only. Adjust quantity, date and time when service needs it. The label goes to the Brother QL and the batch is in stock immediately.",
    },
    {
      t: "EU-14 on the label, not in a binder",
      d: "Allergen icons and codes print with the name, batch, storage and initials. A border forces raster so the edge stays sharp on continuous roll.",
    },
    {
      t: "See what has to leave before service",
      d: "Red is expired, amber is soon. Search by name, batch or initials. Print the stock list — all, soon, or only what has gone — and an extra label for the same batch when the first one sits crooked.",
    },
    {
      t: "The catalog controls the next label",
      d: "Name, category, storage and shelf life per area. Follow the three kitchen defaults or pick a custom design. Decorative labels print only the name in a border and stay out of stock. Rows already printed do not change.",
    },
    {
      t: "Build the layout once",
      d: "Drag fields on a 4×4 grid: name, dates, allergens, initials, custom text, checks and lines. Type and alignment per field. Border: solid, dashed, double or corners. On continuous roll, set the cut length in millimetres.",
    },
    {
      t: "When the product is not in the catalog",
      d: "An unspecified label takes time, date and your own text in the moment. Add the product to the catalog when it should be marked properly next time.",
    },
  ],
  sections: [
    {
      tab: "Marking",
      title: "Print and add to stock in one step",
      d: "Choose area, product and initials. Shelf life comes from the catalog. Extra labels for the same batch print from inventory.",
      points: [
        "Shelf life in days, hours, End of Day, or no expiry",
        "Initials on the label — who marked it",
        "Quantity, date and time can be adjusted before print",
        "Decorative labels print the name only and skip inventory",
      ],
    },
    {
      tab: "Inventory",
      title: "Live stock with expiry and lists",
      d: "Everything labelled lives here. Search by name, batch or initials. Filter to what needs action.",
      points: [
        "Colour: red expired, amber soon",
        "Print a stock list — all, soon, or expired",
        "Print an extra label for the same batch",
        "Per area (Kitchen, Bar …) or the whole restaurant",
      ],
    },
    {
      tab: "Catalog",
      title: "Products, categories and shelf life",
      d: "The catalog controls what appears when marking. Changes apply to the next label — existing rows stay as printed.",
      points: [
        "Categories group products on the marking screen",
        "Follow the three kitchen defaults or pick a custom design",
        "Storage, e.g. fridge max +4 °C, prints on the label",
      ],
    },
    {
      tab: "Designer",
      title: "Build how the label looks",
      d: "The three built-in layouts cannot be edited. Duplicate them or create new. Products without their own design use the matching template.",
      points: [
        "Drag fields on a 4×4 grid: name, dates, allergens, initials, custom text, checks, lines",
        "Font, size and alignment per field",
        "Border: solid, dashed, double, corners — forces raster so the edge stays sharp",
        "Continuous roll: set cut length in millimetres",
      ],
    },
  ],
};

const dispatchSv: ModulePageCopy = {
  kicker: "Kommunikation",
  title: "Lapputskick mellan kök, bar och matsal.",
  lead: "Kök, bar och matsal skickar en lapp till varandras skrivare. Mallen fylls i på några tryck — person, tid, allergi — och mottagaren får den på Star-skrivaren som redan står där.",
  metaTitle: "Kommunikation — Unified Kitchen Toolkit",
  metaDesc: "Skicka lappar mellan områden med mallar, platshållare, rast-tider och termisk förhandsvisning.",
  features: [
    {
      t: "Lappen skrivs ut där den ska läsas",
      d: "Välj vilket område ni skickar från. Mottagarens skrivare tar den — kök, bar eller matsal — utan att någon springer med en lapp.",
    },
    {
      t: "Mallar personalen faktiskt hinner använda",
      d: "Allergi, 86, special, rast. Text i hakparentes fylls i vid utskick. Fältet kan vara text, lista, personal, tid, nummer eller datum.",
    },
    {
      t: "Rast med klockan redan räknad",
      d: "Välj personen. [Current Time] + 30 fyller i när de ska vara tillbaka. En färdig rast-mall läggs in med en knapp.",
    },
    {
      t: "Rakt ut, eller en titt först",
      d: "Mallar som inte kräver ifyllning går direkt. Övriga visar lappen som den kommer att se ut, sedan Skicka. Saknas mall: skriv ett eget meddelande.",
    },
  ],
  sections: [
    {
      tab: "Utskick",
      title: "Skicka en lapp i passet",
      d: "Personal trycker på en mall, fyller i det som saknas, ser förhandsvisningen och skickar. Mottagarens skrivare tar den.",
      points: [
        "Allergi, 86, mer dryck, specialbeställning, rast",
        "Personväljare när mallen har [Staff Member]",
        "Aktuell tid och offset, t.ex. + 30 minuter",
        "Eget meddelande när ingen mall passar",
      ],
    },
    {
      tab: "Mallar",
      title: "Bygg lapparna köket faktiskt använder",
      d: "Varje mall hör till ett område. Infoga vanliga fält med knappar. Ställ in fälttyp per platshållare. Välj vilka skrivare som tar emot.",
      points: [
        "Platshållare i hakparentes i brödtexten",
        "Snabb utskrift bara när inget måste fyllas i (aktuell tid räknas inte)",
        "Break ticket som färdig rast-layout",
      ],
    },
  ],
};

const dispatchEn: ModulePageCopy = {
  kicker: "Communication",
  title: "Tickets between kitchen, bar and floor.",
  lead: "Kitchen, bar and floor send a ticket to each other’s printers. The template is filled in a few taps — person, time, allergy — and the destination gets it on the Star already standing there.",
  metaTitle: "Communication — Unified Kitchen Toolkit",
  metaDesc: "Dispatch tickets between areas with templates, placeholders, break times and a thermal preview.",
  features: [
    {
      t: "The ticket prints where it should be read",
      d: "Pick the area you are sending from. The destination printer takes it — kitchen, bar or dining — without anyone walking a slip across the pass.",
    },
    {
      t: "Templates staff actually have time to use",
      d: "Allergy, 86, specials, break. Bracketed text is filled at send time. A field can be text, a list, staff, time, a number or a date.",
    },
    {
      t: "A break with the clock already done",
      d: "Pick the person. [Current Time] + 30 fills in when they should be back. A ready break layout is inserted with one button.",
    },
    {
      t: "Straight out, or a look first",
      d: "Templates that need no input go immediately. The rest show the ticket as it will print, then Dispatch. No template: write your own message.",
    },
  ],
  sections: [
    {
      tab: "Dispatch",
      title: "Send a ticket during service",
      d: "Staff tap a template, fill in what is missing, check the preview and send. The destination printer takes it.",
      points: [
        "Allergy, 86, more drinks, specials, break",
        "Staff picker when the template has [Staff Member]",
        "Current time and offset, e.g. + 30 minutes",
        "Custom message when no template fits",
      ],
    },
    {
      tab: "Templates",
      title: "Build the tickets the kitchen actually uses",
      d: "Each template belongs to an area. Insert common fields with buttons. Set field type per placeholder. Choose which printers receive it.",
      points: [
        "Placeholders in brackets in the body",
        "Quick print only when nothing must be filled in (current time does not count)",
        "Break ticket as a ready break layout",
      ],
    },
  ],
};

const planSv: ModulePageCopy = {
  kicker: "Dagsplan",
  title: "Vem som jobbar var, med raster och täckning.",
  lead: "Dagens bemanning på en linje: vem som står var, när rasten ska tas, och var det saknas folk. Bygg dagen genom att lägga personal på stationer — eller kopiera gårdagen och justera.",
  metaTitle: "Dagsplan — Unified Kitchen Toolkit",
  metaDesc: "Schema med tidslinje, stationer, raster (30/45 min) och täckning per område.",
  features: [
    {
      t: "Hela dagen på en skala",
      d: "Varje rad är en person. Blocken visar station och klockslag. Raster syns som luckor i passet. Filtrera kök, bar, matsal — eller se alla områden samtidigt.",
    },
    {
      t: "Rasten är redan uträknad",
      d: "Pass på tio timmar eller mer får 45 minuter, kortare pass 30. Starta och avsluta rasten från schemat. Pågående rast syns direkt.",
    },
    {
      t: "Lägg ut personalen, eller börja från igår",
      d: "Lägg till vem som jobbar och sätt tiden med en gång. Dra till station, eller tryck för att placera. Tidsmallar som 11–19 och 15–23, eller egna klockslag. Kopiera gårdagen när veckan ser likadan ut.",
    },
    {
      t: "Stationer och det som inte är en person",
      d: "Underområdena ni skapat blir stationer — lucka, spis, ugn. Listan stannar synlig när tavlan skrollas. Extra uppgifter, till exempel varumottagning, läggs som egna kort på passet.",
    },
  ],
  sections: [
    {
      tab: "Schema",
      title: "Dagens bemanning på en linje",
      d: "Välj datum och område. Tryck på ett pass för att hoppa till Skapa plan och justera.",
      points: [
        "Block per station med namn och klockslag",
        "Starta och avsluta rast direkt på raden",
        "Filtrera ett område eller se hela restaurangen",
        "Tryck på ett pass för att justera det",
      ],
    },
    {
      tab: "Skapa plan",
      title: "Lägg ut personalen",
      d: "Bygg dagen: personal in, tid med, station på. Tidsmallarna redigeras i appen — inte i ett separat Excel.",
      points: [
        "Dra eller tryck för att placera på station",
        "Tidsmallar som ni själva definierar",
        "Kopiera gårdagen och ändra det som skiljer",
        "Extra uppgifter som egna kort på tavlan",
      ],
    },
  ],
};

const planEn: ModulePageCopy = {
  kicker: "Daily plan",
  title: "Who works where, with breaks and coverage.",
  lead: "The day’s staffing on one line: who stands where, when the break should happen, and where people are missing. Build the day by placing staff on stations — or copy yesterday and adjust.",
  metaTitle: "Daily plan — Unified Kitchen Toolkit",
  metaDesc: "Staffing timeline, stations, breaks (30/45 min) and coverage per area.",
  features: [
    {
      t: "The whole day on one scale",
      d: "Each row is a person. Blocks show station and hours. Breaks appear as gaps in the shift. Filter kitchen, bar, dining — or see every area at once.",
    },
    {
      t: "The break is already calculated",
      d: "Shifts of ten hours or more get 45 minutes; shorter shifts get 30. Start and end the break from the timeline. An ongoing break shows immediately.",
    },
    {
      t: "Place the staff, or start from yesterday",
      d: "Add who is working and set the hours at once. Drag onto a station, or tap to place. Time chips such as 11–19 and 15–23, or your own clocks. Copy yesterday when the week looks the same.",
    },
    {
      t: "Stations, and the work that is not a person",
      d: "The subareas you created become stations — pass, stove, oven. The list stays visible while the board scrolls. Extra tasks, such as receiving a delivery, sit as their own cards on the shift.",
    },
  ],
  sections: [
    {
      tab: "Timeline",
      title: "Today’s staffing on one line",
      d: "Pick date and area. Tap a shift to jump to Create plan and adjust it.",
      points: [
        "Blocks per station with name and hours",
        "Start and end a break directly on the row",
        "Filter one area or see the whole restaurant",
        "Tap a shift to adjust it",
      ],
    },
    {
      tab: "Create plan",
      title: "Place the staff",
      d: "Build the day: staff in, hours with them, station on. Shift templates are edited in the app — not in a separate spreadsheet.",
      points: [
        "Drag or tap to place on a station",
        "Time chips you define yourselves",
        "Copy yesterday and change what differs",
        "Extra tasks as their own cards on the board",
      ],
    },
  ],
};

const prepSv: ModulePageCopy = {
  kicker: "Prepp",
  title: "Veckoplan, recept, historik och prognos.",
  lead: "Veckan är både planen och listan ni prepppar mot. Recepten räknar mängderna. Prognosen föreslår, ni bockar det som faktiskt blev gjort, och inköpslistan skrivs ut när det är dags att handla.",
  metaTitle: "Prepp — Unified Kitchen Toolkit",
  metaDesc: "Prepp-vecka, recept med batchstorlek, historik, inköpslista och försäljning mot prognos.",
  features: [
    {
      t: "Planera och bocka i samma vecka",
      d: "Lägg rätter, komponenter och råvaror på rätt dag. Prognosen kan föreslå mängder. När ni prepppar bockar ni på listan — inte i planeraren — och anger hur mycket som faktiskt blev gjort.",
    },
    {
      t: "Hoppa över eller flytta, utan att tappa spåret",
      d: "Skip om det inte ska göras. Flytta till en annan dag, även en annan vecka. Historiken sparar bockat, hoppat och flyttat, med mängd och vem.",
    },
    {
      t: "Recepten räknar veckan",
      d: "Råvaror med enhet och förpackning först, sedan komponenter, sist rätter. Yield och batchstorlek gör att en rätt kan räknas om till det som ska preppas och köpas.",
    },
    {
      t: "Papper när stationen behöver det",
      d: "Skriv ut prepp-listan, inköpslistan eller ett receptkort. Samma uppgifter som på skärmen, på skrivaren ni redan har.",
    },
    {
      t: "Försäljning mot prognosen",
      d: "Fyll i eller importera periodens siffror och jämför med det som planerades. Prognosen själv är daglig, per månad, och kan importeras som CSV. Den driver nästa veckas förslag.",
    },
  ],
  sections: [
    {
      tab: "Vecka",
      title: "Planera och bocka samma vecka",
      d: "Prognosen kan föreslå mängder. När ni prepppar: bocka raden och ange utfall.",
      points: [
        "Rätter, komponenter och råvaror på rätt dag",
        "Skriv ut prepp-lista eller inköpslista",
        "Flytta över veckogränsen om det behövs",
      ],
    },
    {
      tab: "Recept",
      title: "Vad som ingår i vad",
      d: "Katalogen som veckan räknar på. Skriv ut receptkort till stationen.",
      points: [
        "Råvaror → komponenter → rätter",
        "Batchstorlek och yield",
        "Enheter och förpackningar för inköp",
      ],
    },
    {
      tab: "Historik",
      title: "Vad som faktiskt hände",
      d: "Filtrera på dag, vecka, månad eller datum. Varje händelse visar mängd, vem och när.",
      points: ["Bockat, hoppat över, flyttat", "Standardfilter: idag"],
    },
    {
      tab: "Försäljning",
      title: "Siffror mot prognos",
      d: "Fyll i eller importera periodens försäljning. Prognosen som styr prepp redigeras separat.",
      points: ["Jämför utfall med det som planerades", "Driver nästa veckas förslag"],
    },
  ],
};

const prepEn: ModulePageCopy = {
  kicker: "Prep",
  title: "Week plan, recipes, history and forecast.",
  lead: "The week is both the plan and the list you prep against. Recipes scale the amounts. The forecast suggests, you check off what was actually made, and the shopping list prints when it is time to buy.",
  metaTitle: "Prep — Unified Kitchen Toolkit",
  metaDesc: "Prep week, recipes with batch size, history, shopping list and sales versus forecast.",
  features: [
    {
      t: "Plan and check off in the same week",
      d: "Put dishes, components and ingredients on the right day. The forecast can suggest amounts. When you prep, check off on the list — not in the planner — and enter how much was actually made.",
    },
    {
      t: "Skip or move, without losing the trail",
      d: "Skip if it should not be done. Move to another day, including another week. History stores finished, skipped and moved, with quantity and who.",
    },
    {
      t: "The recipes scale the week",
      d: "Ingredients with unit and pack first, then components, dishes last. Yield and batch size let a dish scale into what should be prepped and bought.",
    },
    {
      t: "Paper when the station needs it",
      d: "Print the prep list, the shopping list or a recipe card. The same figures as on screen, on the printer you already have.",
    },
    {
      t: "Sales against the forecast",
      d: "Enter or import the period’s figures and compare them with what was planned. The forecast itself is daily, per month, and can be imported as CSV. It drives next week’s suggestions.",
    },
  ],
  sections: [
    {
      tab: "Week",
      title: "Plan and check off the same week",
      d: "The forecast can suggest amounts. When prepping: check the row and enter the actual yield.",
      points: [
        "Dishes, components and ingredients on the right day",
        "Print prep list or shopping list",
        "Move across week boundaries if needed",
      ],
    },
    {
      tab: "Recipes",
      title: "What goes into what",
      d: "The catalog the week calculates from. Print a recipe card for the station.",
      points: ["Ingredients → components → dishes", "Batch size and yield", "Units and packs for purchasing"],
    },
    {
      tab: "History",
      title: "What actually happened",
      d: "Filter by day, week, month or dates. Each event shows quantity, who and when.",
      points: ["Finished, skipped, moved", "Default filter: today"],
    },
    {
      tab: "Sales",
      title: "Figures versus forecast",
      d: "Enter or import sales for the period. The forecast that drives prep is edited separately.",
      points: ["Compare outcome with what was planned", "Drives next week’s suggestions"],
    },
  ],
};

const tasksSv: ModulePageCopy = {
  kicker: "Uppgifter",
  title: "Listor, temperaturer, avvikelser och historik.",
  lead: "Öppning, stängning och temperaturer som listor per område. Värden utanför spannet blir en avvikelse som måste stängas. Det som påbörjats och inte avslutats ligger kvar tills någon gör klart det.",
  metaTitle: "Uppgifter — Unified Kitchen Toolkit",
  metaDesc: "HACCP-listor, temperaturlogg, avvikelser, ofullständiga listor och historik per område.",
  features: [
    {
      t: "Det här passets lista, i kökets ordning",
      d: "Välj område eller alla. Starta listan, fyll i punkterna, skriv ut när den är klar. «Uppgift idag» är en engångslista som bara gäller dygnet.",
    },
    {
      t: "Temperatur som måste hanteras",
      d: "Varje mätpunkt kan peka på en kyl, frys eller annan utrustning, med min och max. Utanför spannet blir det en avvikelse — inte en röd siffra som försvinner.",
    },
    {
      t: "De fält rutinen faktiskt har",
      d: "Checkbox, lista, flera val, tal, temperatur, datum och fri text. Följdfrågor visas bara efter ett visst svar. Ett val kan i sig skapa en avvikelse.",
    },
    {
      t: "Inget påbörjat får tystna",
      d: "Ofullständiga listor får en siffra på fliken tills de avslutas. Avvikelser ligger kvar, röda, tills någon läst, åtgärdat och stängt posten.",
    },
    {
      t: "Bygg rutinen en gång",
      d: "Namn, område och typ: rutin, städning eller checklista. Schema varje dag, valda veckodagar, en dag i månaden, eller vid behov. Starta idag även utanför schemat.",
    },
    {
      t: "Underlag när någon frågar",
      d: "Avslutade listor, temperaturer och utskrifter från tidigare dagar. Bläddra eller filtrera på datum.",
    },
  ],
  sections: [
    {
      tab: "Idag",
      title: "Det som ska göras det här passet",
      d: "Välj område eller Alla. Starta listan om den inte redan är igång.",
      points: [
        "Temperaturer med tillåtet spann",
        "Skriv ut listan när den är klar",
        "Engångsuppgift som bara gäller idag",
      ],
    },
    {
      tab: "Ofullständiga / Avvikelser",
      title: "Inget som påbörjats får tystna",
      d: "Ofullständiga: gör klart. Avvikelser: läs vad som avvek, åtgärda, stäng posten.",
      points: ["Badge på fliken med antal som väntar", "Kommentar och åtgärd på avvikelsen"],
    },
    {
      tab: "Listor",
      title: "Bygg de återkommande rutinerna",
      d: "Öppning, stängning, temperaturronder. Punkter, område och vilka dagar de ska synas.",
      points: [
        "Följdfrågor som visas efter ett visst val",
        "Ett val kan i sig skapa avvikelse",
        "Temperaturpunkten kan peka på en viss utrustning",
        "Schema: varje dag, veckodagar, en dag i månaden, eller vid behov",
      ],
    },
    {
      tab: "Historik",
      title: "Vad som fylldes i igår",
      d: "Öppna en avslutad lista för svar, temperaturer och utskrifter.",
      points: ["Bläddra eller filtrera på datum", "Underlag vid kontroll"],
    },
  ],
};

const tasksEn: ModulePageCopy = {
  kicker: "Tasks",
  title: "Lists, temperatures, deviations and history.",
  lead: "Opening, closing and temperatures as lists per area. A value outside the range becomes a deviation that has to be closed. What was started and not finished stays until someone completes it.",
  metaTitle: "Tasks — Unified Kitchen Toolkit",
  metaDesc: "HACCP lists, temperature log, deviations, incomplete lists and history per area.",
  features: [
    {
      t: "This shift’s list, in kitchen order",
      d: "Pick an area or all. Start the list, fill the items, print when it is done. «Task for today» is a one-off that only applies to this day.",
    },
    {
      t: "A temperature that has to be handled",
      d: "Each reading can point at a fridge, freezer or other piece of equipment, with min and max. Outside the range it becomes a deviation — not a red number that disappears.",
    },
    {
      t: "The fields the routine actually has",
      d: "Checkbox, list, multiple choice, number, temperature, date and free text. Follow-ups appear only after a given answer. A choice can itself create a deviation.",
    },
    {
      t: "Nothing started is allowed to go quiet",
      d: "Incomplete lists keep a count on the tab until they are finished. Deviations stay red until someone has read, fixed and closed the item.",
    },
    {
      t: "Build the routine once",
      d: "Name, area and type: routine, cleaning or checklist. Schedule every day, chosen weekdays, one day a month, or on demand. Start today even off the schedule.",
    },
    {
      t: "Evidence when someone asks",
      d: "Finished lists, temperatures and printouts from earlier days. Browse or filter by date.",
    },
  ],
  sections: [
    {
      tab: "Today",
      title: "What this shift needs to do",
      d: "Pick an area or All. Start the list if it is not already running.",
      points: [
        "Temperatures with an allowed range",
        "Print the list when it is done",
        "One-off task that only applies today",
      ],
    },
    {
      tab: "Incomplete / Deviations",
      title: "Nothing started is allowed to go quiet",
      d: "Incomplete: finish them. Deviations: read what went out of range, fix it, close the item.",
      points: ["Badge on the tab with how many are waiting", "Note and action on the deviation"],
    },
    {
      tab: "Lists",
      title: "Build the recurring routines",
      d: "Opening, closing, temperature rounds. Items, area, and which days they should appear.",
      points: [
        "Follow-ups that appear after a given choice",
        "A choice can itself create a deviation",
        "A temperature item can point at a specific piece of equipment",
        "Schedule: every day, weekdays, one day a month, or on demand",
      ],
    },
    {
      tab: "History",
      title: "What was filled in yesterday",
      d: "Open a finished list for answers, temperatures and printouts.",
      points: ["Browse or filter by date", "Evidence at inspection"],
    },
  ],
};

export const modulePages: Record<ModuleId, Record<Lang, ModulePageCopy>> = {
  labels: { sv: labelsSv, en: labelsEn },
  dispatch: { sv: dispatchSv, en: dispatchEn },
  plan: { sv: planSv, en: planEn },
  prep: { sv: prepSv, en: prepEn },
  tasks: { sv: tasksSv, en: tasksEn },
};

export const moduleGear: Record<ModuleId, Record<Lang, string>> = {
  labels: {
    sv: "Brother QL ni redan har. Nu skriver den allergener, bäst-före, batch och lagerlistor — inte bara ett namn.",
    en: "The Brother QL you already have. Now it prints allergens, best-before, batch and stock lists — not just a name.",
  },
  dispatch: {
    sv: "Star-skrivarna i baren och köket stannar där de står. Lappar mellan områden utan ny hårdvara.",
    en: "The Star printers in the bar and kitchen stay put. Tickets between areas, no new hardware.",
  },
  plan: {
    sv: "Samma adress i webbläsaren, på den skärm som redan ligger framme. Schema där ni redan tittar.",
    en: "The same address in the browser, on the screen already on the pass. The roster where you already look.",
  },
  prep: {
    sv: "Ingen ny prepp-terminal. Veckan, recepten och inköpslistan körs på värddatorn och i webbläsaren ni redan öppnar.",
    en: "No new prep terminal. The week, recipes and shopping list run on the host and in the browser you already open.",
  },
  tasks: {
    sv: "Temperaturer och öppningslistor i samma webbläsare som märkning och plan — utrustningen ni redan har, fler kontroller per pass.",
    en: "Temperatures and opening lists in the same browser as labelling and plan — the kit you already have, more checks per service.",
  },
};
