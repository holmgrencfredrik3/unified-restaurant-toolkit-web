export type Lang = "sv" | "en";

export const MODULES = [
  {
    id: "labels",
    sv: "Etikettskrivare & Lager",
    en: "Labels & inventory",
    blurbSv:
      "Systemet hjälper er att hålla koll på hur mycket och av vad ni har preppat, så att ni bara behöver fokusera på att servera era gäster. Välj från förinställda etikettmallar eller designa era egna. När något i lagret närmar sig utgång kommer en varning.",
    blurbEn:
      "The system helps you keep track of how much you have prepped, and of what, so you only need to focus on serving your guests. Choose a preset label template or design your own. When something in stock nears expiry, a warning arrives.",
  },
  {
    id: "dispatch",
    sv: "Kommunikation",
    en: "Communication",
    blurbSv:
      "Slipp springandet mellan stationerna. Skicka det som behövs direkt på en bong till baren, hovmästaren eller köket, med förinställda mallar som ni kan redigera efter era egna behov.",
    blurbEn:
      "Skip the running between stations. Send what is needed straight onto a ticket to the bar, the maître d’ or the kitchen, with preset templates you can edit to fit your own needs.",
  },
  {
    id: "plan",
    sv: "Dagsplan",
    en: "Daily plan",
    blurbSv:
      "Vem som står var, när rasten ska tas, och var det saknas folk. Lägg personal på stationer, eller kopiera gårdagen och justera det som skiljer.",
    blurbEn:
      "Who stands where, when the break should happen, and where people are missing. Place staff on stations, or copy yesterday and change what differs.",
  },
  {
    id: "prep",
    sv: "Prepp",
    en: "Prep",
    blurbSv:
      "Skapa recept och rätter, och använd tidigare försäljning och framtida prognoser för att ta fram en tydlig veckoplan för vad som behöver preppas, och när. Låt datan bekräfta känslan.",
    blurbEn:
      "Create recipes and dishes, and use past sales and future forecasts to draw up a clear weekly plan of what needs prepping, and when. Let the data confirm the instinct.",
  },
  {
    id: "tasks",
    sv: "Uppgifter",
    en: "Tasks",
    blurbSv:
      "Slipp laminerade rutinlistor på varje vägg. Lägg upp återkommande listor för era områden, som skapas automatiskt den dag de ska utföras. Underhåll och EKP blir enklare att hantera, så mer tid går till att laga den godaste maten.",
    blurbEn:
      "Skip the laminated routine lists on every wall. Set up recurring lists for your areas, created automatically on the day they are due. Maintenance and own-checks become easier to handle, so more time goes to cooking the best food.",
  },
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
    heroSecondary: "Hör av er för ett demo",
    gearTitle: "Ni har redan hårdvaran. Toolkitet tar den längre.",
    gearLead:
      "En Windows-PC i köket blir värd. Personalen möter systemet i webbläsaren. Brother QL skriver etiketter, Star skriver lappar. Licensen binds till den dator ni redan står vid.",
    gear: [
      { t: "Windows-PC ni redan har", d: "Den kör servern, skriver ut och håller lagret. En licens per värddator." },
      { t: "Webbläsare ni redan har", d: "Kockar och servis öppnar adressen på vilken enhet som helst. Inget att installera." },
      { t: "Skrivare ni redan har", d: "Etikettskrivare för markering av era produkter. Bongskrivare för att skicka information mellan stationer, påminnelser om uppgifter och recept för komponenter ni planerat att förbereda." },
    ],
    modulesTitle: "Fem områden. En licens per kökdator.",
    modulesLead: "Fem ytor på samma licens. Ta hela paketet eller bara de områden ni behöver — på samma utrustning.",
    backHome: "Till startsidan",
    otherAreas: "Övriga områden",
    quoteThis: "Be om offert",
    howTitle: "Så rullar ni ut det",
    how: [
      {
        n: "01",
        t: "Sätt värden på köksdatorn",
        d: "Installera på Windows-PC:n som redan står där. Den blir servern — inget extra rack, ingen molnprenumeration för att köket ska gå. All data sparas hos er på den maskinen.",
      },
      {
        n: "02",
        t: "En adress. Vilken enhet som helst.",
        d: "Kockar och servis öppnar länken i webbläsaren, på den enhet de har till hands. Därifrån skrivs det ut, skickas lappar och läggs planen — utan app-butik, utan ny skärm.",
      },
      {
        n: "03",
        t: "Skriv på skrivarna ni redan har",
        d: "Etikettskrivare för markering av era produkter. Bongskrivare för att skicka information mellan stationer, påminnelser om uppgifter och recept för komponenter ni planerat att förbereda.",
      },
    ],
    trialTitle: "Är ni intresserade av att testa vår produkt?",
    trialLead: "Hör av er nedan så kan vi ordna ett demo av produkten och hjälpa er komma igång.",
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
      "Windows-värd och webbläsare på valfri enhet. Etiketter, lager, kommunikation, dagsplan, prepp och uppgifter. Hör av er för ett demo. Be om offert.",
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
    heroSecondary: "Get in touch for a demo",
    gearTitle: "You already have the hardware. The toolkit takes it further.",
    gearLead:
      "A Windows PC in the kitchen becomes the host. Staff meet the system in a browser. Brother QL prints labels, Star prints tickets. The license binds to the machine you already stand at.",
    gear: [
      { t: "Windows PCs you already have", d: "That machine runs the server, prints, and holds inventory. One license per host." },
      { t: "Browsers you already have", d: "Chefs and floor staff open the address on any device. Nothing to install." },
      { t: "Printers you already have", d: "Label printers for marking your products. Ticket printers to send information between stations, task reminders, and recipes for components you planned to prepare." },
    ],
    modulesTitle: "Five areas. One license per kitchen PC.",
    modulesLead: "Five surfaces on the same license. Take the full suite or only the areas you need — on the same equipment.",
    backHome: "Back to home",
    otherAreas: "Other areas",
    quoteThis: "Request a quote",
    howTitle: "How you roll it out",
    how: [
      {
        n: "01",
        t: "Put the host on the kitchen PC",
        d: "Install on the Windows machine already there. It becomes the server — no extra rack, no cloud subscription for service to run. All data is stored with you on that machine.",
      },
      {
        n: "02",
        t: "One address. Any device.",
        d: "Chefs and floor staff open the link in a browser, on whatever is already in hand. From there they print, send tickets and follow the plan — no app store, no extra screen.",
      },
      {
        n: "03",
        t: "Print on the printers you already have",
        d: "Label printers for marking your products. Ticket printers to send information between stations, task reminders, and recipes for components you planned to prepare.",
      },
    ],
    trialTitle: "Interested in trying the product?",
    trialLead: "Get in touch below and we can arrange a demo and help you get started.",
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
      "Windows host and a browser on any device. Labels, inventory, communication, daily plan, prep and tasks. Get in touch for a demo. Request a quote.",
  },
} as const;

export const LICENSE_API =
  "https://europe-west1-unifiedrestauranttoolkit.cloudfunctions.net/licenseApi";

export const MAILTO = "holmgren.c.fredrik@gmail.com";
