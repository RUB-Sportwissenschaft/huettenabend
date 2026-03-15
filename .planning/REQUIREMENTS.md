# Requirements: Valmorel Essensumfrage

**Defined:** 2026-03-15
**Core Value:** Jeder Teilnehmer kann in unter 30 Sekunden seine Essenswahl abgeben — auch auf dem Handy, ohne Account, ohne Installation.

## v1 Requirements

### Formular

- [ ] **FORM-01**: Teilnehmer kann Vorname eingeben (Pflichtfeld, min. 2 Zeichen)
- [ ] **FORM-02**: Teilnehmer kann Nachname eingeben (Pflichtfeld, min. 2 Zeichen)
- [ ] **FORM-03**: Teilnehmer wählt Gruppe (1–8, Pflichtfeld — Dropdown oder Radio-Buttons)
- [ ] **FORM-04**: Teilnehmer wählt genau eine Essensoption via Radio-Button: 🧀 Raclette | 🥦 Raclette vegetarisch | 🌱 Vegan
- [ ] **FORM-05**: Absenden-Button ist deaktiviert bis alle Pflichtfelder ausgefüllt und eine Option gewählt ist
- [ ] **FORM-06**: Formular-Validierung zeigt klare Fehlermeldungen auf Deutsch

### Speicherung

- [ ] **STOR-01**: Beim Absenden wird die Antwort (Vorname, Nachname, Gruppe, Wahl, Zeitstempel) via JSONBin.io API gespeichert
- [ ] **STOR-02**: JSONBin.io API-Key und Bin-ID sind als Konstanten im HTML-File konfigurierbar
- [ ] **STOR-03**: Fehler beim Speichern zeigt eine benutzerfreundliche Fehlermeldung

### Bestätigung

- [ ] **CONF-01**: Nach erfolgreichem Absenden erscheint Bestätigungsscreen: "Danke, [Vorname]! Deine Wahl wurde gespeichert."
- [ ] **CONF-02**: Bestätigungsscreen zeigt die gewählte Option und Gruppe noch einmal an
- [ ] **CONF-03**: Kein Zurück-Button — einmalige Abstimmung pro Gerät (sessionStorage-Flag)

### Admin-Ansicht

- [ ] **ADMN-01**: Admin-Ansicht erreichbar unter ?admin=true (kein Passwort)
- [ ] **ADMN-02**: Admin lädt alle Antworten aus JSONBin.io und zeigt Tabelle: Nachname | Vorname | Gruppe | Wahl | Zeitstempel
- [ ] **ADMN-03**: Tabelle sortierbar nach Nachname (alphabetisch) und nach Gruppe
- [ ] **ADMN-04**: "PDF herunterladen"-Button lädt jsPDF + AutoTable via CDN und generiert PDF
- [ ] **ADMN-05**: PDF enthält: Titel "Essensumfrage Valmorel", Datum, Teilnehmerliste als Tabelle (mit Gruppe), Auswertung (Anzahl pro Option, optional auch pro Gruppe)

### Design & UX

- [ ] **DSGN-01**: Logo `logo-wortmarke_sportwissenschaft_tartan-orange.png` als Base64 eingebettet, oben zentriert, auf RUB-Blau (#003560) Hintergrund-Header
- [ ] **DSGN-02**: Primärfarbe RUB Orange #EC633A für Buttons und Akzente
- [ ] **DSGN-03**: System-Fonts (font-family: system-ui, -apple-system, sans-serif)
- [ ] **DSGN-04**: Mobile-first, responsive — funktioniert auf Smartphones (min. 320px Breite)
- [ ] **DSGN-05**: Warm und simpel — kein Schnickschnack, keine Animationen

### Deployment & Setup

- [ ] **DEPL-01**: Gesamte App als Single HTML-File (alles inline: CSS + JS + Base64-Assets)
- [ ] **DEPL-02**: README.md mit Schritt-für-Schritt-Anleitung: JSONBin.io Key eintragen → GitHub pushen → Pages aktivieren → WhatsApp-Link teilen
- [ ] **DEPL-03**: Am Ende der HTML-Generierung nach GitHub-Username fragen für die fertige GitHub-Pages-URL

## v2 Requirements

- **V2-01**: Export als CSV zusätzlich zu PDF
- **V2-02**: Admin: Antworten löschen oder bearbeiten
- **V2-03**: Passwortschutz für Admin-Bereich
- **V2-04**: Auswertung gruppiert nach Gruppen-Nummer

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend / Server | JSONBin.io ersetzt das vollständig für diesen Use-Case |
| Mehrfachauswahl | Genau eine Wahl pro Person ist das Design |
| Mehrsprachigkeit | UI komplett auf Deutsch |
| Bearbeitung/Löschung in App | Nur Lesen im Admin, kein Write-Back |
| Echtzeit-Updates Admin | Manuelles Reload reicht für einmalige Umfrage |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FORM-01 bis FORM-06 | Phase 1 | Pending |
| STOR-01 bis STOR-03 | Phase 1 | Pending |
| CONF-01 bis CONF-03 | Phase 1 | Pending |
| DSGN-01 bis DSGN-05 | Phase 1 | Pending |
| ADMN-01 bis ADMN-05 | Phase 2 | Pending |
| DEPL-01 bis DEPL-03 | Phase 2 | Pending |

**Coverage:**
- v1 requirements: 23 total
- Mapped to phases: 23
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-15*
*Last updated: 2026-03-15 — Gruppe (1–8) als Pflichtfeld hinzugefügt*
