# AI Chat App

## Uppgift

Bygg en enkel fullstack-applikation där användaren kan skriva meddelanden
och få svar från en AI-tjänst.

Applikationen ska bestå av en React-klient och en Node/Express-server.
Servern ansvarar för kommunikationen med AI-tjänsten.

Målet är inte att bygga en avancerad chattapp, utan att träna på att själv
planera, strukturera och bygga en mindre fullstack-applikation från grunden.

---

## 1. Kartläggning

Innan du börjar koda, skissa upp applikationen och tänk igenom:

- Vilka delar behöver frontend?
- Vilka delar behöver backend?
- Hur ska data flöda mellan frontend och backend?
- Vilka komponenter och filer behöver du?
- Vilka API-anrop behövs?
- Vilka states behöver hanteras?
- Vilka environment variables behövs?

Skissa gärna detta i Figma, FigJam, Excalidraw eller på papper.

Du behöver inte ha en perfekt arkitektur från början.
Syftet är att skapa en första teknisk plan innan du börjar bygga.

---

## 2. Bygg projektets grund

Skapa:

- React-klient
- Node/Express-server
- Git-repository

Få frontend och backend att kommunicera med varandra innan du kopplar
in AI-tjänsten.

---

## 3. Bygg chatten

Användaren ska kunna:

- skriva ett meddelande
- skicka meddelandet
- se sitt meddelande i chatten
- se AI:ns svar
- se ett loading-state medan svaret hämtas
- få ett tydligt felmeddelande om något går fel

Håll gränssnittet enkelt.

---

## 4. Koppla in AI-tjänsten

Frontend ska skicka meddelandet till din egen backend.

Backend ska:

1. ta emot meddelandet
2. skicka det vidare till AI-tjänsten
3. ta emot svaret
4. skicka tillbaka svaret till frontend

API-nyckeln ska hanteras som en environment variable och inte finnas i
frontend-koden.

---

## 5. Testa och förbättra

När grundfunktionen fungerar:

- testa olika typer av meddelanden
- testa tomma meddelanden
- testa vad som händer om API-anropet misslyckas
- kontrollera loading och error states
- städa upp kod och filstruktur där det behövs

Refaktorera inte bara för att kunna refaktorera.
Ändra sådant som faktiskt förbättrar förståelsen eller strukturen.

---

## 6. Deploy

När applikationen fungerar lokalt:

- pusha projektet till GitHub
- deploya frontend
- deploya backend
- konfigurera environment variables
- kontrollera att frontend och backend fungerar tillsammans i production

---

## Begränsningar

Börja med en så liten lösning som möjligt.

Implementera inte från början:

- inloggning
- databas
- chatthistorik
- flera användare
- streaming
- avancerad state management
- RAG/vector databases
- avancerad design

Om du senare har en fungerande grund kan du själv välja om någon av dessa
funktioner är värd att lägga till.

---

## Arbetssätt

Försök i första hand lösa problem själv.

När du behöver hjälp:

1. Försök förstå problemet.
2. Läs felmeddelandet.
3. Slå upp dokumentationen.
4. Använd AI som bollplank.
5. Be om förklaringar när du inte förstår lösningen.
6. Implementera själv när du kan.

Målet är inte att memorera all syntax.

Målet är att kunna förstå problemet, bryta ner det i mindre delar och veta
ungefär hur du ska gå tillväga för att lösa det.
