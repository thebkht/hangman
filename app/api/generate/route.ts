import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export async function GET(_: Request): Promise<Response> {
  try {
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "") {
      return new Response(
        "Missing OPENAI_API_KEY – make sure to add it to your .env file.",
        {
          status: 400,
        }
      );
    }

    const prompt = "Generate a random word.";

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a word generator assistant for a hangman game.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      stream: true,
    });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error((error as Error).message);
    return new Response("Internal server error", { status: 500 });
  }
}
