# Huettenabend — CLAUDE.md

## Kontext

RUB Sportwissenschaft — Essensumfrage fuer den Huettenabend der Schneesport-Exkursion Valmorel.
Betreuer: Kilian. Laeuft auf GitHub Pages. Backend: JSONBin v3.

**Repo:** https://github.com/RUB-Sportwissenschaft/huettenabend
**Live:** https://rub-sportwissenschaft.github.io/huettenabend/
**Status:** Fertig — wird jaehrlich zur Exkursion reaktiviert.

---

## Projektstruktur

```
huettenabend/
  index.html        Single-File-App (Umfrage + Admin)
  altilogo.png      Logo Altiport
  CLAUDE.md
  README.md
  .gitignore
```

**Backend:** JSONBin v3, BIN-ID: `69b74a15b7ec241ddc700fd7`
**Admin:** `?admin=true` — Tabelle + PDF-Export

---

## Lokaler Kontext (Sammelordner `valmorel/`)

```
valmorel/                    Sammelordner (kein eigenes Repo)
├── huettenabend/  (.git)    ← dieses Repo
├── Feedback/      (.git)    Lehrgangskritik (RUB-Sportwissenschaft/feedback)
├── einstufung/    (.git)    Einstufungstest (RUB-Sportwissenschaft/einstufung)
├── pruefung/      (.git)    Pruefungsanmeldung (RUB-Sportwissenschaft/pruefung)
├── logos/                   Shared Assets (RUB Fonts + Logos, kein Repo)
└── Noten/                   Lokale Notenanalyse (kein Repo)
```

---

## Konventionen
- Windows/Git-Bash: Emojis in HTML als HTML-Entities (`&#x26F7;`), Umlaute direkt als UTF-8
- In JS-Strings: Unicode-Escapes (`\u00fc` etc.) sind valide
- Direkt auf `master` committen — kein PR-Workflow
