# Gym Console

Web app offline-first senza dipendenze, framework o build step, progettata per un vecchio iPad Air.

## Avvio locale

Da questa cartella eseguire `python3 -m http.server 8080`, quindi aprire `http://localhost:8080`.

## Configurazione

Gli allenamenti sono modificabili in `data/workouts.json`. `js/workouts.js` contiene una copia di sicurezza usata se il file JSON non può essere letto.

## Compatibilità

Il target verificato è iPad Air con iOS 12.5.7 / Safari 12. Il codice applicativo usa sintassi ES5, `service-worker.js` per l'uso offline e `localStorage` per dati e sessione in corso. `legacy.html` usa AppCache soltanto come fallback per browser precedenti senza service worker, evitando due sistemi di cache contemporaneamente sulla pagina principale.

Versione applicazione: 3.3.0 (27/08/2026). Include il frontend “gym control console”, layout allenamento ottimizzato per 1024×768, 15 GIF locali a due posizioni con immagini muscolari statiche di fallback, timer visuale e viste storico/progressi compatte. Storage, timer interno e progressione restano compatibili con la versione precedente.

Programma dati 3.3.0: nuova scheda A/B con priorità dorso, spalle, polpacci e caviglia-gamba; modalità Fase iniziale configurabile; metadati muscolari primari/secondari; attività finale facoltativa di equilibrio monopodalico.
