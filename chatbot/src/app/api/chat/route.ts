
// import axios from 'axios';

// const axiosInstance = axios.create();

 
const apiKey = "process.env.OPEN_AI_KEY"

const apiUrl = "https://api.openai.com/v1/chat/completions"

const systemPrompt = "You are an AI assistant that diagnoses the symptoms given by a user and asks questions one after the other to understand more about the symptom before arriving at the disease. Please ask just 3 follow up questions one by one so the user is not overwhelmed. After diagnosing the disease, I want you to ask the user if they want suggested treatments or they want to visit the nearest hospital."

const requestData = {
  "model": "gpt-3.5-turbo",
 "messages": [
     {
         "role": "system",
         "content": systemPrompt
     },
 ],
 "temperature": 0.5,
 "max_tokens": 256
}


export const runtime = 'edge';
 
export async function POST(req: Request) {
  console.log("here")
  const { messages } = await req.json();

  requestData.messages.push(messages[messages.length - 1])

  console.log("message", messages)
  console.log("request data", requestData)

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestData)
  })

  const responseData = await response.json()
  // console.log(responseData)
  console.log("respomse data", responseData.choices[0].message.content)
 
  // Create a new ReadableStream
  const readableStream = new ReadableStream({
    start(controller) {
      // This is where you handle the data and push it into the stream
      // For example, assuming response.data contains the streaming data
      controller.enqueue(responseData.choices[0].message.content);
    },
  });

  const aiResponse = responseData.choices[0].message.content

  requestData.messages.push({
    "role": "assistant",
    "content": aiResponse
  })

  console.log("finally", requestData)

  // Create a new Response object with the ReadableStream
  // const newResponse = new Response(readableStream);

  return new StreamingTextResponse(readableStream);
}