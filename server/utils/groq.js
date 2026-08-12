import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function main(prompt) {
  const chatCompletion = await getGroqChatCompletion(prompt);
  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
          Use Markdown for formatting when appropriate.

          Under no circumstances use Markdown tables.
          When comparing multiple items, use bullet points instead of a table.
          Prefer short paragraphs and bullet lists.
        `,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "openai/gpt-oss-120b",
  });
}
