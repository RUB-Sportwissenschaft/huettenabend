---
id: SEED-001
status: dormant
planted: 2026-04-05
planted_during: post-milestone-v1.0
trigger_when: manuell — wenn Planung für Valmorel 2027 beginnt
scope: large
---

# SEED-001: Valmorel 2027 — vollständige Plattform mit Login & Progress-Tracker

## Why This Matters

Die bisherigen Valmorel-Apps (einstufung, pruefung, Feedback, huettenabend) sind separate Einzellösungen ohne gemeinsame Nutzeridentität. Für 2027 soll eine zentrale Plattform entstehen, auf der Studierende und Ausbilder eingeloggt sind und alle Aktionen unter einem Account zusammenlaufen. Der Progress-Tracker zeigt Studierenden live wo sie stehen — welche Pflichtaktionen erledigt sind, was noch fehlt.

## When to Surface

**Trigger:** Manuell — wenn du `/gsd:new-milestone` im valmorel-Projekt startest und die Planung für 2027 beginnen soll.

Passende Bedingungen:
- Neues Milestone mit Scope "Valmorel 2027" oder "Login" oder "Plattform"
- Saisonvorbereitung Herbst/Winter 2026

## Scope Estimate

**Large** — Volles Milestone, mehrere Monate. Grobe Phasen-Ideen:
- Auth-System (Login Studierende + Ausbilder, Rollen)
- Progress-Tracker (hybrid: automatisch via App-Aktionen + manuell durch Ausbilder)
- Integration bestehender Apps: einstufung, pruefung, Feedback, huettenabend
- Admin-Dashboard für Ausbilder
- Mobile-first UI (RUB Corporate Design)

## Bestehende Apps (Ausgangsbasis)

| App | Pfad | Stack | Status |
|-----|------|-------|--------|
| Einstufung | `einstufung/` | React + Vite + Tailwind | aktiv |
| Prüfungsanmeldung | `pruefung/` | Single HTML | aktiv 2026 |
| Exkursionsreflexion | `Feedback/` | Multi-file HTML + Supabase + Chart.js | aktiv 2026 |
| Hüttenabend | `huettenabend/` | Single HTML + JSONBin | aktiv |

**Noten-Feature:** Bewusst ausgeklammert — kommt als separater Input zu einem späteren Zeitpunkt.

## Breadcrumbs

- `einstufung/src/` — React-Komponenten, Ausgangsbasis für neues Frontend
- `Feedback/supabase/` — bestehende Supabase-Integration (DB-Schema, RLS)
- `pruefung/index.html` — Anmeldungslogik die in Progress-Tracker einfließt
- `huettenabend/index.html` — Essensauswahl-Trigger für Progress-Tracker
- `valmorel/logos/` — RUB-Fonts und Logos für neues UI

## Notes

- Supabase ist bereits in Feedback/ im Einsatz — Auth und DB wahrscheinlich gleiche Instanz
- Progress-Tracker: Schritt gilt als erledigt wenn a) Ausbilder manuell einträgt ODER b) Studierende die jeweilige App-Aktion abschließen (Essen gewählt, Prüfung angemeldet, etc.)
- Stack-Empfehlung wenn bereit: SvelteKit (wie schulsporttag) oder React — entscheiden wenn Planung startet
