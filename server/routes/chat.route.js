import { Router } from "express";
import { main } from "../utils/groq.js";

const router = Router();

// POST send prompt
router.post("/", async (req, res, next) => {
  const { prompt } = req.body;
  console.log(prompt);

  const answer = await main(prompt);

  res.status(201).json({
    success: true,
    answer,
  });
});

export default router;
