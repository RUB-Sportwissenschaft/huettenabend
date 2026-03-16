# Essensumfrage Valmorel

Einfache Essensumfrage fuer Ski-Fahrten. Teilnehmer geben ihre Essenswahl auf dem Handy ab, Organisatoren sehen alle Antworten in einer Tabelle und koennen ein PDF exportieren.

## Schnellstart (unter 5 Minuten)

### 1. JSONBin.io einrichten

1. Konto erstellen: https://jsonbin.io (kostenlos)
2. Neuen Bin anlegen: "+ Create Bin" → Inhalt: `[]` → speichern
3. **Master Key** kopieren (Einstellungen → API Keys)
4. **Bin ID** kopieren (aus der URL: `https://jsonbin.io/app/bins/DIESE_ID`)

### 2. Credentials in valmorel.html eintragen

Datei `valmorel.html` in einem Text-Editor oeffnen. **Zeilen 371–372** aendern:

```
const JSONBIN_API_KEY = 'DEIN_API_KEY_HIER';   // ← deinen Master Key eintragen
const JSONBIN_BIN_ID  = 'DEINE_BIN_ID_HIER';   // ← deine Bin ID eintragen
```

Datei speichern.

### 3. Auf GitHub pushen

```bash
git add valmorel.html
git commit -m "add JSONBin credentials"
git push
```

Noch kein GitHub-Repo? Neues Repo erstellen unter https://github.com/new (Name z. B. `valmorel`), dann:

```bash
git remote add origin https://github.com/USERNAME/valmorel.git
git branch -M main
git push -u origin main
```

### 4. GitHub Pages aktivieren

1. Repo auf GitHub oeffnen → **Settings** → **Pages**
2. Source: **Deploy from a branch** → Branch: `main` → Ordner: `/ (root)` → **Save**
3. Nach ~1 Minute erscheint die URL:

   **https://RUB-Sportwissenschaft.github.io/valmorel/**

Diese URL per WhatsApp an alle Teilnehmer senden.

### 5. Admin-Auswertung aufrufen

```
https://RUB-Sportwissenschaft.github.io/valmorel/valmorel.html?admin=true
```

Tabelle zeigt alle Antworten. "PDF herunterladen" exportiert die Auswertung (Internet-Verbindung benoetigt).

---

## Technische Details

| Merkmal | Wert |
|---------|------|
| Deployment | Einzelne HTML-Datei, kein Build-Step |
| Datenspeicherung | JSONBin.io (kostenlos, 10k Requests/Monat) |
| Admin-Zugang | ?admin=true (kein Passwort) |
| PDF-Export | jsPDF + AutoTable (CDN, nur im Admin) |
| Mobile | Mobile-first, ab 320px |

---

*Essensumfrage Valmorel — Erstellt 2026*
