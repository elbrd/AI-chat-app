# AI-chat-app

En avskalad AI-chattapplikation utvecklad med React, Vite och Node.js. Applikationen använder Groq API för AI-genererade svar och har stöd för webbsökning genom Groqs `browser_search`.

Applikationen är uppdelad i en fristående klient och server där frontend hanterar användargränssnitt och state management, medan backend hanterar API-anrop, AI-integration, datalagring och felhantering. Projektet har främst fungerat som en plattform för att utforska AI-integration, kommunikation mellan frontend och backend samt hur externa API:er kan integreras i en fullstackapplikation.

## Teknik

### Frontend

* React
* Vite
* Zustand
* Tailwind CSS
* React Markdown
* Axios

### Backend

* Node.js
* Express
* Groq API
* Mongoose
* MongoDB

## Projektstruktur

```text
client/
└── src/
    ├── components/
    ├── pages/
    ├── stores/
    └── utils/

server/
├── middlewares/
├── models/
├── routes/
├── services/
└── utils/
```

## Funktionalitet

* AI-genererade svar via Groq API
* Webbsökning för aktuell information
* Markdown-rendering av AI-svar
* Chatsessioner med sparade frågor och svar
* Persistent lagring av chatsessioner i MongoDB
* Sessionhantering via `sessionStorage`
* Felhantering för externa API-anrop
* Separat klient och server

## Arkitektur

* Komponentbaserad frontend med React
* Separation mellan klient och server
* Zustand för centraliserad state management
* Modulär backend med Express
* Separata routes, services och utilities
* MongoDB och Mongoose för persistent lagring av chatsessioner
* Integration med Groq API för AI-genererade svar
* Chatsessioner används för att skicka tidigare meddelanden som kontext till AI-modellen
