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
      message: "No request body provided",
    });

  const answer = await main(prompt);

  if (answer.length < 1)
    return next({
      message: "No answer was provided",
    });

  const result = await saveChat(prompt, answer);

  if (result.success) {
    res.status(201).json({
      success: true,
      answer,
    });
  }
});

export default router;
