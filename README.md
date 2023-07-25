## 🐾 Benvenuti nel progetto Capstone "Urban Pet" 🐾

Questo repository contiene il codice sorgente per il progetto di un e-commerce di prodotti per animali chiamato "Urban Pet". 
Il progetto è un'applicazione web che offre una vasta gamma di prodotti per animali domestici, gli utenti possono navigare attraverso diverse categorie di prodotti, aggiungere articoli al carrello e completare l'ordine con facilità. 
Inoltre, l'applicazione offre funzionalità per la gestione degli account degli utenti, inclusa la possibilità di aggiungere prodotti preferiti alla lista dei desideri e visualizzare lo storico degli ordini.

## Tecnologie utilizzate 🛠️

Il progetto è stato sviluppato utilizzando diverse tecnologie per garantire un'esperienza utente ottimale e una solida infrastruttura. Di seguito sono elencate le principali tecnologie impiegate:

**Frontend**:

- HTML: per la struttura delle pagine web.
- CSS: per lo stile e il design del sito.
- JavaScript: per l'interattività e la gestione delle funzionalità lato client.
- React: come libreria JavaScript per la creazione di interfacce utente reattive e riutilizzabili.

**Backend**:

- Java: come linguaggio di programmazione principale per il backend.
- PostgreSQL: come sistema di gestione del database per memorizzare e gestire i dati dei prodotti, degli utenti e degli ordini.
- SQL: come linguaggio per interrogare e manipolare il database.

## Installazione del Lato Frontend 🚀

1. **Clona la Repository Frontend**: Assicurati di avere Git installato sul tuo sistema. Quindi, clona la repository frontend del progetto nella tua cartella locale utilizzando il seguente comando:

   ```
   git clone https://github.com/davidegalli93/Progetto_Capstone_FrontEnd
   ```

2. **Installazione delle Dipendenze**: Assicurati di avere Node.js e npm installati sul tuo sistema. Entra nella cartella "progetto" appena clonata e apri il terminale o il prompt dei comandi. Esegui il seguente comando per installare tutte le dipendenze necessarie:

   ```
   npm install
   ```

3. **Avvio dell'Applicazione**: Puoi avviare l'applicazione frontend utilizzando il seguente comando:

   ```
   npm start
   ```

   L'applicazione verrà avviata e sarà accessibile all'indirizzo http://localhost:3000 nel tuo browser.

## Installazione del Lato Backend 🔧

1. **Clona la Repository Backend**: Assicurati di avere Git installato sul tuo sistema. Quindi, clona la repository backend del progetto nella tua cartella locale utilizzando il seguente comando:

   ```
   git clone https://github.com/davidegalli93/Progetto_Capstone
   ```

2. **Importazione del Database**:

   Scarica PostgreSQL: Vai al sito ufficiale di PostgreSQL (https://www.postgresql.org/) e seleziona la versione più recente disponibile per il tuo sistema operativo. Segui le istruzioni di installazione specifiche per il tuo sistema.

   Configura l'utente amministratore: Durante l'installazione, ti verrà chiesto di impostare una password per l'utente amministratore predefinito "postgres". Ricorda questa password, poiché la useremo successivamente per configurare il backend.

   Importa il Database 🗄️: Ora che hai installato PostgreSQL, puoi importare il database "capstone.sql" fornito nella repository del backend. Assicurati di aver scaricato il file "capstone.sql" e posizionalo nella directory desiderata. Quindi, utilizza il seguente comando per importare il database:

   ```
   psql -U postgres -d capstone -f /percorso/del/file/capstone.sql
   ```

   Sostituisci "/percorso/del/file/capstone.sql" con il percorso completo del file "capstone.sql" sul tuo sistema.

3. **Configurazione del Backend**: Quindi, apri il progetto backend nel tuo IDE preferito e trova il file di configurazione del database (denominato "application.properties"). Modifica le seguenti informazioni per collegarti al tuo database PostgreSQL:

   ```
   spring.datasource.url=jdbc:postgresql://localhost:5432/capstone
   spring.datasource.username=postgres
   spring.datasource.password=passwordpostgres
   ```

   Sostituisci "passwordpostgres" con la password dell'utente "postgres" che hai impostato durante l'installazione di PostgreSQL.

4. **Avvio del Backend**:

 Dopo aver configurato il database e importato i dati, puoi avviare il backend. Utilizzando il tuo IDE o il terminale, avvia l'applicazione backend.

   - Se stai utilizzando un IDE, avvialo facendo clic destro sul file principale e seleziona "Run" con l'opzione Spring Boot.

   - Se stai utilizzando il terminale, naviga nella cartella del progetto backend e digita il seguente comando:

     ```
     mvn spring-boot:run
     ```

   L'applicazione backend verrà avviata e sarà pronta ad accettare le richieste del frontend.

## Accesso al Sito 🐶🐱

Offriamo due modi per accedere al sito:

1. **Accesso come Amministratore** 👑:
   Puoi accedere come amministratore utilizzando le seguenti credenziali:
   - Username: davideg
   - Password: prova1234

   L'account amministratore ti fornirà accesso a funzionalità avanzate, tra cui la gestione dei prodotti e degli utenti.

2. **Accesso come Utente Normale** 👨‍👩‍👦‍👦:
   Se preferisci, puoi anche registrarti come utente normale direttamente dal sito. Fai clic sul pulsante "Registrati" e fornisci le informazioni richieste per creare un nuovo account utente.

Ora hai installato sia il lato frontend che il lato backend del sito. Puoi visitare il sito all'indirizzo http://localhost:3000 e iniziare ad esplorare i prodotti e utilizzare le funzionalità di acquisto. 
Se hai bisogno di assistenza o incontri problemi durante l'installazione, non esitare a contattarmi. 
Grazie per la tua attenzione e buona esplorazione! 🛍️🐕🐈
