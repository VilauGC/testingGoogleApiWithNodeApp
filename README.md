# testingGoogleApiWithNodeApp
Connect to a google sheet document using Nodejs and Google Sheet API with Service Account
Cerinta: Sa se preia informatii dintr-un document google sheet privat, folosind javascript si Google Sheets API.

Google pune la dispozitia dezvoltatorului librarii pe partea de client prin care browserele pot accesa Google Sheets API.

Pentru a putea accesa Google Sheets API va trebui sa parcurgi urm etape:
1.	Sa creezi un cont google
2.	Sa creezi un proiect google cloud.
3.	Sa activezi API-ul pe care doresti sa-l accesezi
4.	Sa alegi o metoda de autentificare/autorizare prin care aplicatia ta sa se poata conecta la Google Sheets API.

In cazul in care documentul google sheet ar fi facut accesibil pentru public cu drept de READ atunci ne-ar trebui urmatoarele: 
1.	Link-ul documentului
2.	Intr-un browser codul urm: 
 
3.	Intr-un fisier local javascript de test (test.js) am avea nevoie sa importam un pachet auxiliar pe care il descarcam cu urm comanda:
npm install node-fetch –save-dev

„The --save-dev option allows you to save packages under the devDependencies object in your package. json file. Any packages listed under the devDependencies will not be installed when you are in the production environment. For example, a test runner like karma won't be needed for the production build” from https://sebhastian.com/npm-save-dev/ 

 
Cum obtinem link-ul de la pasul 1:
Deschidem documentul google sheet din Google Drive.
Fisier -> Trimiteti -> Publicati pe web -> In tabul Link alegeti Intreg documentul sau ce alta Foaie doriti sa partajati din document; tot aici alegeti valori separate prin virgula (.csv) -> apoi copiati link-ul generat.
Pentru a-l putea accesa trebuie mai intai sa-l publicam apasand pe Publicare din popul de la pasul anterior.

Partea grea incepe cand vrei sa accesezi documente private care nu sunt facute accesibile pentru public. 
Din Google Cloud -> APIs Services -> Credentials -> CREATE CREDENTIALS -> Help me choose -> Select the Google Sheets API (must be enabled first from Enabled APIs & services) -> What data will you be accesing? Application data (data belonging to your own application) -> Check No, I’m not using them (Compute Engine, Kubernetes Engine, App Engine or Cloud Functions) Next -> Create service account.
Acum trebuie sa mergem in google drive la documentul google sheet pe care vrem sa-l accesam si sa adaugam adresa de email a service account-ului proaspat creat la colaboratori: Deschid documentul si in dreapta sus click pe Share -> Adaug email-ul in primul camp si aleg Cititor si salvez. 
Totodata trebuie sa downloadam credentialele service_accountului ca un fisier json. Pe care il vom folosi in aplicatia noastra Nodejs.
Acum trebuie sa construim o aplicatie Nodejs care sa acceseze google sheets api cu ajutorul unui pachet predefinit numit googleapis. Vezi codul pe github: https://github.com/VilauGC/testingGoogleApiWithNodeApp.git




