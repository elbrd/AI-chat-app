import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function main(prompt, context) {
  try {
    const chatCompletion = await getGroqChatCompletion(prompt, context);
    // Print the completion returned by the LLM.
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

    const content = chatCompletion.choices[0]?.message?.content || "";

    return { success: true, content, sources };
  } catch (error) {
    console.log("GROQ ERROR:");
    console.log(error);
    console.log("STATUS:", error.status);
    console.log("MESSAGE:", error.message);
    return {
      success: false,
      error,
    };
  }
}

export async function getGroqChatCompletion(prompt, context) {
  const systemMessage = {
    role: "system",
    content: `
            Use Markdown for formatting when appropriate.
  
            Under no circumstances use Markdown tables.
            When comparing multiple items, use bullet points instead of a table.
            Prefer short paragraphs and bullet lists.
          `,
  };

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
}
