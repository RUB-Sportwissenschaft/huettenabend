# Valmorel — CLAUDE.md

## Kontext

RUB Sportwissenschaft — Tools für eine Skiausfahrt nach Valmorel mit ~80 Studierenden.
Betreuer: Kilian. Alles läuft auf GitHub Pages. JSONBin als serverless Backend.

---

## Projektstruktur

```
Valmorel/
  huettenabend/        Hüttenabend Single-File-App
  pruefung/            Prüfungsorganisation (eigenes Repo: RUB-Sportwissenschaft/pruefung)
  CLAUDE.md
  README.md
  .gitignore
```

**Einstufungstest** lebt in eigenem Repo: https://github.com/RUB-Sportwissenschaft/einstufung

---

## Hüttenabend (`huettenabend/index.html`)

**Zweck:** Essensumfrage für den Hüttenabend
**Live:** https://rub-sportwissenschaft.github.io/valmorel/huettenabend/
**Datei:** `huettenabend/index.html` (~463 KB)
**Format:** Single-File — CSS, JS, RUB-Fonts (RubFlama, RUB Scala) als Base64 inline
**Backend:** JSONBin v3, BIN-ID: `69b74a15b7ec241ddc700fd7`

---

## Prüfungsorganisation (`pruefung/`)

**Zweck:** Prüfungsanmeldung — Teilnahme, Abschlussart, Uni, Gruppe
**Live:** https://rub-sportwissenschaft.github.io/pruefung/
**Repo:** https://github.com/RUB-Sportwissenschaft/pruefung
**Lokal:** `C:\Users\kilia\OneDrive\Desktop\Valmorel\pruefung\`
**Format:** Single-File `index.html` (~38 KB) — Fonts + Logos als externe Dateien
**Struktur:**
```
pruefung/
  index.html
  img/sportwiss.png
  img/tu-dortmund.png
  fonts/RubFlama-Regular.ttf
  fonts/RubFlama-Bold.ttf
```
**Backend:** JSONBin v3, BIN-ID: `69bd6303b7ec241ddc88081a`
**Status:** App fertig — Abschluss-Beschreibungen und Einleitungstext noch Platzhalter (warten auf finalen Text)
**Formular-Logik:** Prüfungsbestätigung zuerst → danach Name, Gruppe, Uni, Abschluss sichtbar

---

## Konventionen
- Windows/Git-Bash: Emojis in HTML als HTML-Entities (`&#x26F7;`), Umlaute direkt als UTF-8
- In JS-Strings: Unicode-Escapes (`\u00fc` etc.) sind valide und korrekt
- Node.js für Skripte (kein Python — nicht installiert)
- Direkt auf `master` committen — kein PR-Workflow
