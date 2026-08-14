import { Router } from "express";
import { main } from "../utils/groq.js";
import { saveChat } from "../services/chat.service.js";

const router = Router();

// POST send prompt
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

export default router;
