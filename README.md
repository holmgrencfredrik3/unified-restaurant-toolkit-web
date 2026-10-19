# Unified Restaurant Toolkit — sales site

Public marketing site for [Unified Restaurant Toolkit](https://github.com/holmgrencfredrik3/restaurant-toolkit). Quote requests go to the existing Firebase license API (`action: inquiry`). Card payments are not wired yet.

## Run

```bash
npm install
npm run dev
```

## Hosting

The site is on Firebase Hosting, project `unifiedrestauranttoolkit`, site `unified-kitchen-toolkit`:

https://unified-kitchen-toolkit.web.app

That site is separate from the license admin on `unifiedrestauranttoolkit.web.app`. Deploy only this repo’s hosting target:

```bash
npm run build
firebase deploy --only hosting:sales
```

Pushes to `main` deploy the same target through GitHub Actions.
