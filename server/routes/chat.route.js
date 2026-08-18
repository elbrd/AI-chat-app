import { Router } from "express";
import { main } from "../utils/groq.js";
import {
  createChatsession,
  getChatsession,
  saveChat,
} from "../services/chat.service.js";

const router = Router();

// GET chatsession
router.get("/", async (req, res, next) => {
  const sessionId = req.headers["authorization"]?.split(" ")[1];

  const result = await getChatsession(sessionId);
  if (!result.success) {
    return next({
      message: result.message,
    });
  }

  res.status(201).json({
    success: true,
    chatsession: result.chatsession,
  });
});

// POST send prompt
router.post("/", async (req, res, next) => {
  const { prompt } = req.body;
  const sessionId = req.headers["authorization"]?.split(" ")[1];

  // Om finns historik/kontext från redan befintlig chatsession skicka med i anrop
  // Annars skicka bara med prompt och skapa ny chatsession efteråt
  let answer;
  let chatsession;
  const findChatsession = await getChatsession(sessionId);
  if (findChatsession.success) {
    chatsession = findChatsession.chatsession;

    const context = chatsession.messages.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    answer = await main(prompt, context);
  } else {
    answer = await main(prompt);
  }

  if (!answer.success) {
    if (answer.error.status === 413) {
      return next({
        status: 413,
        message:
          "AI-sökningen blev för omfattande. Försök med en mer specifik fråga.",
      });
    }
    return next({
      message: "Kunde inte hämta svar från AI:n",
    });
  }

  // Vid lyckat AI-svar spara i hämtad chatsession om finns
  // Annars skapa ny chatsession och spara där
  if (findChatsession.success) {
    chatsession.messages.push(
      {
        role: "user",
        content: prompt,
      },
      {
        role: "assistant",
        content: answer.content,
      },
    );
    await chatsession.save();
  }

  let newChatsession;
  if (!findChatsession.success) {
    newChatsession = await createChatsession({
      messages: [
        {
          role: "user",
          content: prompt,
        },
        {
          role: "assistant",
          content: answer.content,
        },
      ],
    });

    if (!newChatsession.success) {
      return next({
        message: newChatsession.message,
      });
    }
  }

  // Skicka AI-svar till frontend
  res.status(201).json({
    success: true,
    answer: answer.content,
    sources: answer.sources,
    sessionId: newChatsession?.chatsession._id || null,
  });
});

// POST send prompt
/*
router.post("/", async (req, res, next) => {
  const { prompt } = req.body;

  if (!prompt)
    return next({
      status: 400,
      message: "Din fråga var tom",
    });

  const answer = await main(prompt);

  if (!answer.success) {
    if (answer.error.status === 413) {
      return next({
        status: 413,
        message:
          "AI-sökningen blev för omfattande. Försök med en mer specifik fråga.",
      });
    }
    return next({
      message: "Kunde inte hämta svar från AI:n",
    });
  }

  const result = await saveChat(prompt, answer.content);

  if (!result.success) {
    return next({
      message: result.message,
    });
  }

  res.status(201).json({
    success: true,
    answer: answer.content,
    sources: answer.sources,
  });
});
*/

export default router;
