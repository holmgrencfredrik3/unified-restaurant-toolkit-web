export type Lang = "sv" | "en";

export const MODULES = [
  { id: "labels", sv: "Etikettskrivare & Lager", en: "Labels & inventory" },
  { id: "dispatch", sv: "Kommunikation", en: "Communication" },
  { id: "plan", sv: "Dagsplan", en: "Daily plan" },
  { id: "prep", sv: "Prepp", en: "Prep" },
  { id: "tasks", sv: "Uppgifter", en: "Tasks" },
] as const;

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
    download: "Ladda ner",
    langOther: "EN",
    heroKicker: "För kök som märker, kommunicerar och planerar varje pass",
    heroTitle: "Ett system för restaurangköket. Inte fem appar.",
    heroLead:
      "Skriv ut allergener och bäst-före på Brother-etiketter, skicka lappar till baren, lägg dagsplanen och hålla prepp — från en Windows-dator i köket och iPads som bara öppnar en webbläsare.",
    heroCta: "Be om offert",
    heroSecondary: "30 dagar utan licensnyckel",
    modulesTitle: "Fem områden. En licens per kökdator.",
    modulesLead:
      "Globala inställningar följer alltid med. Ni tar hela paketet eller bara de ytor ni behöver.",
    howTitle: "Så rullar ni ut det",
    how: [
      {
        n: "01",
        t: "En värddator i köket",
        d: "Installera på en Windows-PC. Den kör servern, skriver ut och håller lagret.",
      },
      {
        n: "02",
        t: "iPads i webbläsaren",
        d: "Kockar och servis öppnar adressen. Ingen app-butik, ingen synk-krångel.",
      },
      {
        n: "03",
        t: "Skrivare ni redan har",
        d: "Brother QL för etiketter. Star för lappar. En licens binds till den datorn.",
      },
    ],
    trialTitle: "30 dagars test på er egen maskin",
    trialLead:
      "Ladda ner, installera, kör. När ni är redo skickar vi en licensnyckel som aktiveras under Globala inställningar.",
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
    formMessagePh: "Antal kökdatorer, iPads, skrivare, när ni vill starta…",
    formSend: "Skicka förfrågan",
    formSending: "Skickar…",
    formOk: "Tack. Vi återkommer så snart vi kan.",
    formErr: "Kunde inte skicka. Prova igen eller mejla oss direkt.",
    footerDownload: "Senaste Windows-installationen",
    footerMail: "holmgren.c.fredrik@gmail.com",
    metaTitle: "Unified Restaurant Toolkit — kökssystem för etiketter, plan och prepp",
    metaDesc:
      "Windows-värd och iPads i webbläsaren. Etiketter, lager, kommunikation, dagsplan, prepp och uppgifter. 30 dagars test. Be om offert.",
  },
  en: {
    brand: "Unified Restaurant Toolkit",
    navProduct: "Product",
    navHow: "How it works",
    navQuote: "Quote",
    download: "Download",
    langOther: "SV",
    heroKicker: "For kitchens that label, dispatch and plan every service",
    heroTitle: "One system for the kitchen. Not five apps.",
    heroLead:
      "Print allergen and date labels on Brother printers, send tickets to the bar, run the daily plan and prep — from one Windows PC in the kitchen, with iPads that just open a browser.",
    heroCta: "Request a quote",
    heroSecondary: "30 days, no license key",
    modulesTitle: "Five areas. One license per kitchen PC.",
    modulesLead: "Global Settings always stays available. Take the full suite or only the areas you need.",
    howTitle: "How you roll it out",
    how: [
      {
        n: "01",
        t: "One host PC in the kitchen",
        d: "Install on Windows. That machine runs the server, prints, and holds inventory.",
      },
      {
        n: "02",
        t: "iPads in the browser",
        d: "Chefs and floor staff open the address. No app store, no sync maze.",
      },
      {
        n: "03",
        t: "Printers you already own",
        d: "Brother QL for labels. Star for tickets. A license binds to that host.",
      },
    ],
    trialTitle: "30-day trial on your own hardware",
    trialLead:
      "Download, install, run. When you are ready we send a license key you activate under Global Settings.",
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
    formMessagePh: "How many kitchen PCs, iPads, printers, when you want to start…",
    formSend: "Send request",
    formSending: "Sending…",
    formOk: "Thanks. We will get back to you shortly.",
    formErr: "Could not send. Try again or email us directly.",
    footerDownload: "Latest Windows installer",
    footerMail: "holmgren.c.fredrik@gmail.com",
    metaTitle: "Unified Restaurant Toolkit — kitchen software for labels, plan and prep",
    metaDesc:
      "Windows host and iPads in the browser. Labels, inventory, communication, daily plan, prep and tasks. 30-day trial. Request a quote.",
  },
} as const;

export const DOWNLOAD_URL =
  "https://github.com/holmgrencfredrik3/restaurant-toolkit-releases/releases/latest";

export const LICENSE_API =
  "https://europe-west1-unifiedrestauranttoolkit.cloudfunctions.net/licenseApi";

export const MAILTO = "holmgren.c.fredrik@gmail.com";
