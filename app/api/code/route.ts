import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { Messages } from "openai/resources/beta/threads/index.mjs";
import { CreateChatCompletionRequestMessage } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, //
});
const instructionMessage: CreateChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a helpful code assistant that can teach a junior developer how to code. Don't explain the code, just generate the code block itself. After generating the code, explain how it works..",
};
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });
    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
