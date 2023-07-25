# Benvenuti nel progetto Capstone "Urban Pet"

Questo repository contiene il codice sorgente per il progetto di un e-commerce di prodotti per animali chiamato "Urban Pet". Il progetto è un'applicazione web che offre una vasta gamma di prodotti per animali domestici. Gli utenti possono navigare attraverso diverse categorie di prodotti, aggiungere articoli al carrello e completare l'ordine con facilità. Inoltre, l'applicazione offre funzionalità per la gestione degli account degli utenti, inclusa la possibilità di aggiungere prodotti preferiti alla lista dei desideri e visualizzare lo storico degli ordini.

## Tecnologie utilizzate

Il progetto è stato sviluppato utilizzando diverse tecnologie per garantire un'esperienza utente ottimale e una solida infrastruttura. Di seguito sono elencate le principali tecnologie impiegate:

Frontend:
HTML: per la struttura delle pagine web.
CSS: per lo stile e il design del sito.
JavaScript: per l'interattività e la gestione delle funzionalità lato client.
React: come libreria JavaScript per la creazione di interfacce utente reattive e riutilizzabili.

Backend:
Java: come linguaggio di programmazione principale per il backend.
PostgreSQL: come sistema di gestione del database per memorizzare e gestire i dati dei prodotti, degli utenti e degli ordini.
SQL: come linguaggio per interrogare e manipolare il database.

## Installazione del Lato Frontend:

1. **Clona la Repository**: Assicurati di avere Git installato sul tuo sistema. Quindi, clona la repository frontend del progetto nella tua cartella locale utilizzando il seguente comando:

   ```
   git clone https://github.com/davidegalli93/Progetto_Capstone_FrontEnd
   ```

2. **Installazione delle Dipendenze**: Assicurati di avere Node.js e npm installati sul tuo sistema. Naviga nella cartella del progetto frontend appena clonato e apri il terminale o il prompt dei comandi. Esegui il seguente comando per installare tutte le dipendenze necessarie:

   ```
   cd progetto
   npm install
   ```

3. **Avvio dell'Applicazione**: Una volta configurato l'endpoint del backend, puoi avviare l'applicazione frontend utilizzando il seguente comando:

   ```
   npm start
   ```

   L'applicazione verrà avviata e sarà accessibile all'indirizzo http://localhost:3000 nel tuo browser.

## Installazione del Lato Backend:

1. **Clona la Repository**: Assicurati di avere Git installato sul tuo sistema. Quindi, clona la repository backend del progetto nella tua cartella locale utilizzando il seguente comando:

   ```
   git clone https://github.com/davidegalli93/Progetto_Capstone
   ```

2. **Configurazione del Database**: Installa PostgreSQL se non l'hai già fatto e assicurati di avere un database vuoto creato per il progetto. Quindi, apri il progetto backend nel tuo IDE preferito e trova il file di configurazione del database (potrebbe essere denominato "application.properties" o simile). Modifica le seguenti informazioni per collegarti al tuo database PostgreSQL:

   ```
   spring.datasource.url=jdbc:postgresql://localhost:5432/nomedeldatabase
   spring.datasource.username=postgres
   spring.datasource.password=passwordpostgres
   ```

   Sostituisci "nomedeldatabase" con il nome del database creato e "passwordpostgres" con la password dell'utente "postgres" che hai impostato durante l'installazione di PostgreSQL.

3. **Importazione del Database**: Nel tuo IDE o nel terminale, esegui il codice SQL per importare lo schema del database e i dati iniziali. Di solito, puoi trovare il file SQL all'interno della repository backend (ad esempio "database.sql"). Esegui il codice SQL per creare le tabelle e popolare il database con dati iniziali (se disponibili).

4. **Avvio del Backend**: Dopo aver configurato il database e importato i dati, puoi avviare il backend. Utilizzando il tuo IDE o il terminale, avvia l'applicazione backend.

   Se stai utilizzando un IDE, cerca il file principale dell'applicazione Java (solitamente chiamato "Application.java" o simile) e avvialo facendo clic destro sul file e selezionando "Run" o "Avvia".

   Se stai utilizzando il terminale, naviga nella cartella del progetto backend e digita il seguente comando:

   ```
   mvn spring-boot:run
   ```

   L'applicazione backend verrà avviata e sarà pronta ad accettare le richieste del frontend.


## Accesso al Sito
Benvenuti nel nostro sito di e-commerce per prodotti di animali! Abbiamo due modi per accedere al sito:

Accesso come Amministratore:
Puoi accedere come amministratore utilizzando le seguenti credenziali:
Username: davideg
Password: prova1234
L'account amministratore ti fornirà accesso a funzionalità avanzate, tra cui la gestione dei prodotti e degli utenti.

Accesso come Utente Normale:
Se preferisci, puoi anche registrarti come utente normale direttamente dal sito. Fai clic sul pulsante "Registrati" e fornisci le informazioni richieste per creare un nuovo account utente.

Ora hai installato sia il lato frontend che il lato backend del sito di e-commerce per prodotti di animali. Puoi visitare il sito all'indirizzo http://localhost:3000 e iniziare ad esplorare i prodotti e utilizzare le funzionalità di acquisto. Se hai bisogno di assistenza o incontri problemi durante l'installazione, non esitare a contattarci. Buon divertimento!
