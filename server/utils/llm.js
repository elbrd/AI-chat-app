import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { ChatOllama } from "@langchain/ollama";

/*
const llm = new ChatOllama({
  model: "llama3.2:3b",
});
*/

dotenv.config();

const llm = new ChatGroq({
  model: "openai/gpt-oss-20b",
  apiKey: process.env.GROQ_API_KEY,
});

export async function getLLMResponse(prompt, context) {
  try {
    const chatCompletion = await invokeLLM(prompt, context);

    const content = chatCompletion.content || "";
    const cleanContent = content.replace(/【\d+†L\d+-L\d+】/g, "");

    return { success: true, cleanContent };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

export async function invokeLLM(prompt, context) {
  const systemMessage = new SystemMessage(`
    Du är en hjälpsam AI-assistent.

    Svara tydligt och korrekt på användarens frågor.
    Använd Markdown när det förbättrar läsbarheten.
    Använd korta stycken och punktlistor när det passar.

    Använd aldrig Markdown-tabeller.
    När du jämför flera saker, använd punktlistor istället.

    Anpassa svarets längd efter frågan och undvik onödig information.
  `);

  const userMessage = new HumanMessage(prompt);

  if (context) {
    const recentContext = context?.slice(-6);
    return llm.invoke([systemMessage, ...recentContext, userMessage]);
  } else {
    return llm.invoke([systemMessage, userMessage]);
  }
}

// Källor sparas i nuläget inte i DB och används inte av client
/*
const tools = chatCompletion.choices[0]?.message?.executed_tools;
const searchResults = tools?.[0]?.search_results?.results;

let sources;
if (searchResults) {
  sources = [...searchResults]
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((result) => ({
      title: result.title,
      url: result.url,
      score: result.score,
    }));
}
*/

/*
if (context) {
  return groq.chat.completions.create({
    messages: [
      systemMessage,
      ...context,
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "openai/gpt-oss-20b",
    tools: [
      {
        type: "browser_search",
      },
    ],
  });
} else {
  return groq.chat.completions.create({
    messages: [
      systemMessage,
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "openai/gpt-oss-20b",
    tools: [
      {
        type: "browser_search",
      },
    ],
  });
}
*/
