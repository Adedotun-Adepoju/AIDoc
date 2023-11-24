import { ReplicateStream, StreamingTextResponse } from 'ai';
import Replicate from 'replicate';
import { experimental_buildLlama2Prompt } from 'ai/prompts';
 
// Create a Replicate API client (that's edge friendly!)
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY || '',
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  console.log("here")
  const { messages } = await req.json();
  console.log(messages)
 
  const response = await replicate.predictions.create({
    // You must enable streaming.
    stream: true,
    // The model must support streaming. See https://replicate.com/docs/streaming
    // This is the model ID for Llama 2 70b Chat
    version: '2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1',
    // Format the message list into the format expected by Llama 2
    // @see https://github.com/vercel/ai/blob/99cf16edf0a09405d15d3867f997c96a8da869c6/packages/core/prompts/huggingface.ts#L53C1-L78C2
    input: {
      prompt: experimental_buildLlama2Prompt(messages),
      system_prompt: "You are an AI that diagnoses the symptoms given by a user and asks questions in steps to understand more about the symptom before arriving at the disease. Please ask the follow up questions in a conversational manner one at a time in a way they can produce their answer in Yes/No/I don't know. After diagnosing the disease, I want you to ask the user if they want suggested treatments or they want to visit the nearest hospital."
    },
  });
 
  // Convert the response into a friendly text-stream
  const stream = await ReplicateStream(response, {
    onStart: async () => {
      console.log("start")
    },
    onCompletion: async (completion: string) => {
      console.log("completion", completion)
    }
  })
  // const stream = await ReplicateStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}