# Valmorel — CLAUDE.md

## Kontext

RUB Sportwissenschaft — Tools für eine Skiausfahrt nach Valmorel mit ~80 Studierenden.
Betreuer: Kilian. Alles läuft auf GitHub Pages. Backends: JSONBin (Hüttenabend, Prüfung) + Supabase (Feedback).

---

## Projektstruktur

```
Valmorel/
  huettenabend/        Hüttenabend Single-File-App (eigenes Repo: RUB-Sportwissenschaft/valmorel)
  pruefung/            Prüfungsanmeldung (eigenes Repo: RUB-Sportwissenschaft/pruefung)
  Feedback/            Lehrgangskritik (eigenes Repo: RUB-Sportwissenschaft/feedback)
  Noten/               Lokale Notenanalyse — kein eigenes Repo, kein Deployment
  logos/               Geteilte Logos + Fonts (lokale Assets, nicht deployed)
  CLAUDE.md
  README.md
  .gitignore
```

**Einstufungstest** lebt in eigenem Repo: https://github.com/RUB-Sportwissenschaft/einstufung

---

## Hüttenabend (`huettenabend/index.html`)

**Zweck:** Essensumfrage — fertig, nicht mehr aktiv bearbeitet.
**Live:** https://rub-sportwissenschaft.github.io/valmorel/huettenabend/
**Backend:** JSONBin v3, BIN-ID: `69b74a15b7ec241ddc700fd7`
**Struktur:**
```
huettenabend/
  index.html
  altilogo.png
  fonts/
  img/
```

---

## Prüfungsanmeldung (`pruefung/`)

**Zweck:** Anmeldung Seminarabschluss / Prüfung Schneesport Exkursion 2026
**Live:** https://rub-sportwissenschaft.github.io/pruefung/
**Admin:** https://rub-sportwissenschaft.github.io/pruefung/?admin=true
**Repo:** https://github.com/RUB-Sportwissenschaft/pruefung
**Lokal:** `C:\Users\kilia\Dropbox\Claude\valmorel\pruefung\`
**Format:** Single-File `index.html` — Fonts + Logos als externe Dateien
**Struktur:**

```
pruefung/
  index.html
  img/sportwiss.png
  img/tu-dortmund.png
  fonts/RubFlama-Regular.ttf
  fonts/RubFlama-Bold.ttf
  Infos_Pruefungen_Lizenzen_2026.pdf
```
**Backend:** JSONBin v3, BIN-ID: `69bd6303b7ec241ddc88081a`
**Status:** App fertig und live
**Formular-Felder:** Name, Uni, Studienrichtung (3 Optionen), Gruppe, Abschluss
**Abschluss-Logik:**
- 3 Optionen: Studienleistung, (Modul)Prüfung, Lizenzen
- Studienleistung und (Modul)Prüfung schließen sich gegenseitig aus
- Lizenzen ist mit beiden kombinierbar
- (Modul)Prüfung-Label passt sich dynamisch an Uni-Auswahl an (RUB: M4 Praxis, TU: Natursport)
**Admin-Export:** Excel (.xlsx) via SheetJS — Anmeldungen + Zusammenfassung

---

## Lehrgangskritik (`Feedback/index.html`)

**Zweck:** Lehrgangskritik Schneesport Exkursion Valmorel 2026
**Live:** https://rub-sportwissenschaft.github.io/feedback/
**Admin:** https://rub-sportwissenschaft.github.io/feedback/?admin=true
**Repo:** https://github.com/RUB-Sportwissenschaft/feedback
**Lokal:** `C:\Users\kilia\Dropbox\Claude\valmorel\Feedback\`
**Format:** Multi-File — `index.html` + `style.css` + `script.js` + `admin.js` + externe Fonts/Logos
**Struktur:**

```
Feedback/
  index.html
  style.css
  script.js
  admin.js
  summary.html          (statische KI-Zusammenfassung, Stand 27.03.2026, n=41)
  fonts/
  img/
  supabase/             (lokale Supabase-Config: config.toml + migrations/)
```
**Backend:** Supabase (Projekt: feedback-valmorel, `yhymncieopgmqsmdybsl`), Tabelle: `feedbacks`
**Status:** App fertig und live
**Formular:** 7 Sektionen (S1–S6 Rating + S7 Abschluss), 18 Rating-Fragen (Kacheln 1–5),
  Sektions-Freitext (öffnet nur bei Rating ≤ 2), Ausbilder-Feedback einzeln pro Ausbilder*in
**Payload-Struktur:** `{ ratings: {}, freitexte: {S1…S6, feedback_general}, ausbilder: {Name: text} }`
**Admin-Dashboard:** `?admin=true` — 4 Tabs:

- **Übersicht**: KPIs (gesamt/RUB/TU), Sektions-Chart, KI-Zusammenfassung (hardcoded `SUMMARY_HTML` in `admin.js`, Stand 27.03.2026, n=41)
- **Ausbilder**: Radar-Chart (9 Fragen, Gruppe vs. Gesamtø), Balkenliste, Ausbilder-Freitextkarten
- **Gruppen**: Gruppenauswahl, alle Fragen mit Gruppenø vs. Gesamtø
- **Details**: Fragen nach Sektion filterbar + "Allg. Feedback"-Pill

**Bipolar**: `rating_workload` + `rating_exam_difficulty` — Balkenbreite = Nähe zu 3 (Ideal), Radar-Wert = `5 - |v-3|*2`
**Labels**: `QUESTION_LABELS` und `AUSBILDER_Q_SHORT` dashboard-weit abgeglichen (z.B. "Fahrentwicklung", "Lehrfähigkeit")
**ⓘ-Tooltips**: Tap/Hover auf Fragelabel zeigt Originalfragestellung als Popover (`QUESTION_TOOLTIPS` in `script.js`, Bubble-Logik in `admin.js`)
**Excel-Export**: SheetJS, 5 Sheets (Einzelantworten, Zusammenfassung, Ausbilder-Feedback, Gruppenvergleich, Freitexte)

---

## Notenanalyse (`Noten/`)

**Zweck:** Lokale Auswertung der Prüfungsnoten nach der Exkursion — kein Deployment, kein Repo.
**Struktur:**

```
Noten/
  analyse.js                          Node.js-Skript: Statistiken aus CSV (Ø, Verteilung, Labels)
  Ski_Pruefung_2026_benotet.csv/.xlsx
  Ski_Pruefung_2026_unbenotet.csv/.xlsx
  fonts/                              (lokale Kopie der RUB-Fonts)
  img/                                (lokale Kopie der Logos)
```

**Ausführung:** `node Noten/analyse.js`

---

## Geteilte Assets (`logos/`)

Lokale Sammlung von RUB-Fonts und Logos — wird nicht deployed, dient als Quelle beim Aufsetzen neuer Apps.

---

## Konventionen
- Windows/Git-Bash: Emojis in HTML als HTML-Entities (`&#x26F7;`), Umlaute direkt als UTF-8
- In JS-Strings: Unicode-Escapes (`\u00fc` etc.) sind valide und korrekt
- Node.js bevorzugt für Skripte — Python wenn sinnvoller
- Direkt auf `master` committen — kein PR-Workflow
