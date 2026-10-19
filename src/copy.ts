export type Lang = "sv" | "en";

export const MODULES = [
  { id: "labels", sv: "Etikettskrivare & Lager", en: "Labels & inventory" },
  { id: "dispatch", sv: "Kommunikation", en: "Communication" },
  { id: "plan", sv: "Dagsplan", en: "Daily plan" },
  { id: "prep", sv: "Prepp", en: "Prep" },
  { id: "tasks", sv: "Uppgifter", en: "Tasks" },
] as const;

export type ModuleId = (typeof MODULES)[number]["id"];

export const PERIODS = [
  { id: "monthly", sv: "Månadsvis", en: "Monthly" },
  { id: "quarterly", sv: "Kvartalsvis", en: "Quarterly" },
  { id: "annual", sv: "Årsvis", en: "Annual" },
  { id: "perpetual", sv: "Utan slutdatum", en: "Perpetual" },
] as const;

export const copy = {
  sv: {
    brand: "Unified Restaurant Toolkit",
    navProduct: "Produkten",
    navHow: "Så funkar det",
    navQuote: "Offert",
    langOther: "EN",
    heroKicker: "Samma utrustning. Fler jobb i köket.",
    heroTitle: "Ett system för restaurangköket. Inte fem appar.",
    heroLead:
      "Den Windows-dator och de skrivare ni redan har. Personalen öppnar adressen i webbläsaren — på den enhet de har till hands — och märker, kommunicerar och planerar. Ingen ny kassa, ingen ny pekskärm, ingen app-butik.",
    heroByline: "Byggt av en krögare, för krögare.",
    heroStack: "Windows · webbläsare · Brother QL · Star",
    heroCta: "Be om offert",
    heroSecondary: "30 dagar på er egen maskin",
    gearTitle: "Ni har redan hårdvaran. Toolkitet tar den längre.",
    gearLead:
      "En Windows-PC i köket blir värd. Personalen möter systemet i webbläsaren. Brother QL skriver etiketter, Star skriver lappar. Licensen binds till den dator ni redan står vid.",
    gear: [
      { t: "Windows-PC ni redan har", d: "Den kör servern, skriver ut och håller lagret. En licens per värddator." },
      { t: "Webbläsare ni redan har", d: "Kockar och servis öppnar adressen på vilken enhet som helst. Inget att installera." },
      { t: "Skrivare ni redan har", d: "Brother QL för etiketter med allergener och bäst-före. Star för lappar mellan kök, bar och matsal." },
    ],
    modulesTitle: "Fem områden. En licens per kökdator.",
    modulesLead: "Läs vad varje yta faktiskt gör. Ni tar hela paketet eller bara de områden ni behöver — på samma utrustning.",
    spineTitle: "Det som gäller i hela köket",
    spineLead:
      "Områden, personal och skrivare sätts en gång. Sedan använder märkning, lappar, schema, prepp och uppgifter samma register.",
    spine: [
      {
        t: "Områden ni själva namnger",
        d: "Kök, bar, matsal, disk — namn, färg och ikon. Varje område kan ingå i lager och etiketter, i kommunikation, eller båda. Primär skrivare och reserv. Underområden blir stationer på dagsplanen.",
      },
      {
        t: "Personal med initialer",
        d: "Namn, roll och vilka områden personen jobbar i. Initialerna skapas automatiskt och kan justeras. Samma lista märker etiketter, fyller schemat och väljs på rastlappen.",
      },
      {
        t: "Skrivarna ni redan har",
        d: "Brother QL som standard för etiketter. Star för lappar, listor och påminnelser. Namn, IP och modell. Testutskrift och ping innan passet.",
      },
      {
        t: "Varningar som inte väntar på att någon tittar",
        d: "Eget meddelande eller utskrift av lagerlistan — utgånget, snart ute, eller båda. Klockslag, intervall eller veckodagar. På skärmen, som notis, eller på Star. Kan också lägga en uppgift som måste bockas.",
      },
      {
        t: "Öppettider, även över midnatt",
        d: "Öppen eller stängd per veckodag, med klockslag. Nattpass fungerar. Intervallvarningar kan hålla sig inom de tiderna.",
      },
      {
        t: "En adress. Svenska eller engelska.",
        d: "Värddatorn visar LAN- och Bonjour-adress. Övriga enheter öppnar den i webbläsaren. Språket sparas på enheten. På pekskärm finns ett tangentbord med Å, Ä och Ö — av på telefon, där systemets eget räcker.",
      },
      {
        t: "Uppdatering och kopia på värden",
        d: "Nya versioner hämtas till köksdatorn. Övriga enheter får dem när sidan laddas om. Exportera JSON innan större ändringar. Import slår ihop eller skriver över.",
      },
    ],
    demoHint: "Bilder från appen",
    backHome: "Till startsidan",
    previewTitle: "Så ser ytan ut i köket",
    previewNote: "Stillbilder från appen. Resten ser ni i 30 dagars test på er egen maskin.",
    otherAreas: "Övriga områden",
    quoteThis: "Be om offert",
    howTitle: "Så rullar ni ut det",
    how: [
      {
        n: "01",
        t: "Sätt värden på köksdatorn",
        d: "Installera på Windows-PC:n som redan står där. Den blir servern — inget extra rack, ingen molnprenumeration för att köket ska gå.",
      },
      {
        n: "02",
        t: "En adress. Vilken enhet som helst.",
        d: "Kockar och servis öppnar länken i webbläsaren, på den enhet de har till hands. Därifrån skrivs det ut, skickas lappar och läggs planen — utan app-butik, utan ny skärm.",
      },
      {
        n: "03",
        t: "Skriv på skrivarna ni redan har",
        d: "Brother QL och Star fortsätter stå där de står. Nu gör de märkning, lagerlistor, lappar, prepp-sedlar och uppgiftsutskrift.",
      },
    ],
    trialTitle: "30 dagars test på er egen maskin",
    trialLead: "Installera på köksdatorn och kör. När ni är redo skickar vi en licensnyckel som ni aktiverar i appen.",
    quoteTitle: "Berätta vad köket behöver",
    quoteLead:
      "Inga priser på sidan ännu. Skicka en förfrågan så återkommer vi med offert — hela paketet eller valda områden, månad / kvartal / år / utan slutdatum.",
    formName: "Namn",
    formEmail: "E-post",
    formRestaurant: "Restaurang / bolag",
    formCity: "Stad",
    formModules: "Områden",
    formAll: "Hela paketet",
    formPeriod: "Önskad period",
    formMessage: "Meddelande",
    formMessagePh: "Antal kökdatorer, enheter, skrivare, när ni vill starta…",
    formSend: "Skicka förfrågan",
    formSending: "Skickar…",
    formOk: "Tack. Vi återkommer så snart vi kan.",
    formErr: "Kunde inte skicka. Prova igen eller mejla oss direkt.",
    footerMail: "holmgren.c.fredrik@gmail.com",
    metaTitle: "Unified Restaurant Toolkit — kökssystem för etiketter, plan och prepp",
    metaDesc:
      "Windows-värd och webbläsare på valfri enhet. Etiketter, lager, kommunikation, dagsplan, prepp och uppgifter. 30 dagars test. Be om offert.",
  },
  en: {
    brand: "Unified Restaurant Toolkit",
    navProduct: "Product",
    navHow: "How it works",
    navQuote: "Quote",
    langOther: "SV",
    heroKicker: "The kit you already have. More of the work it can do.",
    heroTitle: "One system for the kitchen. Not five apps.",
    heroLead:
      "The Windows PC and printers you already own. Staff open the address in a browser — on whatever is already in hand — and label, communicate and plan. No new POS, no new touchscreen, no app store.",
    heroByline: "Built by a restaurateur, for restaurateurs.",
    heroStack: "Windows · browser · Brother QL · Star",
    heroCta: "Request a quote",
    heroSecondary: "30 days on your own hardware",
    gearTitle: "You already have the hardware. The toolkit takes it further.",
    gearLead:
      "A Windows PC in the kitchen becomes the host. Staff meet the system in a browser. Brother QL prints labels, Star prints tickets. The license binds to the machine you already stand at.",
    gear: [
      { t: "Windows PCs you already have", d: "That machine runs the server, prints, and holds inventory. One license per host." },
      { t: "Browsers you already have", d: "Chefs and floor staff open the address on any device. Nothing to install." },
      { t: "Printers you already have", d: "Brother QL for allergen and date labels. Star for tickets between kitchen, bar and floor." },
    ],
    modulesTitle: "Five areas. One license per kitchen PC.",
    modulesLead: "See what each area actually does. Take the full suite or only the areas you need — on the same equipment.",
    spineTitle: "What holds the whole kitchen",
    spineLead:
      "Areas, staff and printers are set once. Labelling, tickets, the roster, prep and tasks then share the same registry.",
    spine: [
      {
        t: "Areas you name yourselves",
        d: "Kitchen, bar, dining, dish — name, colour and icon. Each area can belong to inventory and labels, to communication, or both. A primary printer and a fallback. Subareas become stations on the daily plan.",
      },
      {
        t: "Staff with initials",
        d: "Name, role and which areas the person works in. Initials are created automatically and can be edited. The same list marks labels, fills the roster and is picked on a break ticket.",
      },
      {
        t: "The printers you already have",
        d: "Brother QL as the default for labels. Star for tickets, lists and reminders. Name, IP and model. Test print and ping before service.",
      },
      {
        t: "Alerts that do not wait for someone to look",
        d: "A message of your own, or a printed stock list — expired, expiring, or both. A clock time, an interval, or weekdays. On screen, as a notification, or on the Star. Can also drop a task that has to be checked off.",
      },
      {
        t: "Opening hours, including past midnight",
        d: "Open or closed per weekday, with clock times. Overnight service works. Interval alerts can stay inside those hours.",
      },
      {
        t: "One address. Swedish or English.",
        d: "The host shows the LAN and Bonjour address. Other devices open it in a browser. Language is saved on the device. Touch screens get a keyboard with Å, Ä and Ö — off on phones, where the system keyboard is enough.",
      },
      {
        t: "Updates and a copy on the host",
        d: "New versions are fetched to the kitchen PC. Other devices get them when the page reloads. Export JSON before a big change. Import merges or overwrites.",
      },
    ],
    demoHint: "Shots from the app",
    backHome: "Back to home",
    previewTitle: "How the surface looks in the kitchen",
    previewNote: "Stills from the app. The rest you see in the 30-day trial on your own hardware.",
    otherAreas: "Other areas",
    quoteThis: "Request a quote",
    howTitle: "How you roll it out",
    how: [
      {
        n: "01",
        t: "Put the host on the kitchen PC",
        d: "Install on the Windows machine already there. It becomes the server — no extra rack, no cloud subscription for service to run.",
      },
      {
        n: "02",
        t: "One address. Any device.",
        d: "Chefs and floor staff open the link in a browser, on whatever is already in hand. From there they print, send tickets and follow the plan — no app store, no extra screen.",
      },
      {
        n: "03",
        t: "Print on the printers you already have",
        d: "Brother QL and Star stay where they are. Now they do labelling, stock lists, tickets, prep sheets and task printouts.",
      },
    ],
    trialTitle: "30-day trial on your own hardware",
    trialLead: "Install on the kitchen PC and run it. When you are ready we send a license key you activate in the app.",
    quoteTitle: "Tell us what the kitchen needs",
    quoteLead:
      "No public price list yet. Send a request and we will quote — full suite or chosen areas, monthly / quarterly / annual / perpetual.",
    formName: "Name",
    formEmail: "Email",
    formRestaurant: "Restaurant / company",
    formCity: "City",
    formModules: "Areas",
    formAll: "Full suite",
    formPeriod: "Preferred period",
    formMessage: "Message",
    formMessagePh: "How many kitchen PCs, devices, printers, when you want to start…",
    formSend: "Send request",
    formSending: "Sending…",
    formOk: "Thanks. We will get back to you shortly.",
    formErr: "Could not send. Try again or email us directly.",
    footerMail: "holmgren.c.fredrik@gmail.com",
    metaTitle: "Unified Restaurant Toolkit — kitchen software for labels, plan and prep",
    metaDesc:
      "Windows host and a browser on any device. Labels, inventory, communication, daily plan, prep and tasks. 30-day trial. Request a quote.",
  },
} as const;

export const LICENSE_API =
  "https://europe-west1-unifiedrestauranttoolkit.cloudfunctions.net/licenseApi";

export const MAILTO = "holmgren.c.fredrik@gmail.com";
