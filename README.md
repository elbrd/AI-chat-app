# AI-Chat

En avskalad AI-chattapplikation utvecklad med React, Vite och Node.js. Applikationen använder Groq API för AI-genererade svar och har stöd för webbsökning genom Groqs Compound Mini, vilket gör det möjligt att hämta aktuell information och presentera relevanta källor tillsammans med svaret.

Applikationen är uppdelad i en fristående klient och server där frontend hanterar användargränssnitt och state management, medan backend hanterar API-anrop, AI-integration, webbsökning, datalagring och felhantering. Projektet har främst fungerat som en plattform för att utforska AI-integration, kommunikation mellan frontend och backend samt hur externa API:er kan integreras i en fullstackapplikation.

## Teknik

### Frontend

- React
- Vite
- Zustand
- Tailwind CSS
- React Markdown

### Backend

- Node.js
- Express
- Groq API
- Mongoose
- MongoDB

## Projektstruktur

```

client/
└── src/
├── components/
├── pages/
├── stores/
└── styles/

server/
├── middlewares/
├── models/
├── routes/
├── services/
└── utils/

```

## Funktionalitet

- AI-genererade svar via Groq API
- Webbsökning för aktuell information
- Presentation av relevanta källor från webbsökningen
- Markdown-rendering av AI-svar
- Lagring av frågor och svar i MongoDB
- Felhantering för externa API-anrop
- Separat klient och server

## Arkitektur

- Komponentbaserad frontend med React
- Separation mellan klient och server
- Zustand för centraliserad state management
- Modulär backend med Express
- Separata routes, services och utilities
- MongoDB för persistent datalagring
- Integration med externt AI-API

