# Valmorel — CLAUDE.md

## Kontext

RUB Sportwissenschaft — Tools für eine Skiausfahrt nach Valmorel mit ~80 Studierenden.
Betreuer: Kilian. Alles läuft auf GitHub Pages, kein Backend.

---

## App 1: Einstufungstest (React/Vite)

**Zweck:** Ski-Einstufungstest für Studierende (10 Fragen, Level 1–8)
**Live:** https://rub-sportwissenschaft.github.io/valmorel/
**Entry:** `index.html` → `src/main.jsx`

### Stack
- React 19, Vite 6, Tailwind v4 (`@tailwindcss/vite`), jsPDF (devDep)
- Kein Backend — Name als einziger Identifier

### Struktur
```
src/
  App.jsx
  main.jsx
  index.css
  components/    WelcomeScreen, QuestionScreen, ProgressBar, AnswerButton, ResultScreen, AnswerSummary
  data/          questions.js  ← Herzstück, Fragen noch als DRAFT
  hooks/
  logic/
  utils/
dist/            Build-Output (→ GitHub Pages)
```

### Fragen-Logik
- 5 feste Fragen (Fragen 1–5, Grundprofil)
- 2 adaptive Pool-Fragen nach Frage 5: `< 8 Pkt → low`, `8–14 → mid`, `≥ 14 → high`
- 3 gemeinsame Abschlussfragen
- Scoring: Summe 0–40 → Level 1–8

### Offener Arbeitsstand
Fragen in `src/data/questions.js` sind noch **DRAFT** — müssen einzeln präzisiert werden.

### Deployment
```bash
npm run build && npx gh-pages -d dist && git push
```

---

## App 2: Essensumfrage (`valmorel.html`)

**Zweck:** Einmalige Essensauswahl (Raclette / Raclette vegetarisch / Vegan)
**Status:** Fertig ✓
**Datei:** `valmorel.html` (Single-File, ~452 KB, 512 Zeilen)

### Wichtige Stellen
- **Zeilen 371–372:** `JSONBIN_API_KEY` + `JSONBIN_BIN_ID` — Credentials hier eintragen (Placeholder!)
- **Admin:** `?admin=true` (kein Passwort) — Tabelle + PDF-Export
- `window._adminRecords` — globales Array, von Admin-Tabelle und PDF geteilt
- `escHtml()` — function declaration (hoisted), von Admin + PDF genutzt

### Storage
JSONBin.io: GET aktuellen Stand → lokal pushen → PUT zurück

---

## App 3: Hüttenabend (`huettenabend/index.html`)

Separates HTML-File für Hüttenabend-Inhalt.

---

## Konventionen (alle Apps)
- Windows/Git-Bash: Emojis und deutsche Umlaute in JS-Strings als Unicode-Escapes
- Node.js für Base64-Asset-Konvertierung (kein Python)
- Direkt auf `master` committen — kein PR-Workflow
