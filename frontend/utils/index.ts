import stayHydrated from '/public/images/stay-hydrated.png'
import nutrition from '/public/images/nutrition.png'
import exercise from '/public/images/exercise.png'
import sleep from '/public/images/sleep.png'
import stressMgt from '/public/images/stress-mgt.png'
import handHygiene from '/public/images/hand-hygiene.png'
import { parseISO, format } from "date-fns";
import axios from 'axios'
import { ChatMessage } from '@/app/(authenticated)/(chatbox)/chatbox/page'
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export const systemPrompt =
  "As an AI doctor, your task is to analyze symptoms provided by a user and inquire further to gain a deeper understanding. Ask precisely three follow-up questions, one at a time, to gather additional information without overwhelming the user. Once the diagnosis is made, inquire whether the user prefers suggested treatments or if they would like guidance on visiting the nearest hospital for further assistance.";

export const openAiApiKey = assertValue(
  process.env.NEXT_PUBLIC_OPEN_AI_KEY,
  'Missing environment variable: NEXT_PUBLIC_OPEN_AI_KEY',
)
export const TOKEN_KEY = assertValue(
  process.env.NEXT_PUBLIC_TOKEN_KEY,
  'Missing environment variable: NEXT_PUBLIC_TOKEN_KEY',
  
  )
  export const OPEN_AI_URL = assertValue(
    process.env.NEXT_PUBLIC_OPEN_AI_URL,
    'Missing environment variable: NEXT_PUBLIC_OPEN_AI_URL',
  )
  export const BACKEND_TOKEN = assertValue(
    process.env.NEXT_PUBLIC_BACKEND_TOKEN,
    'Missing environment variable: NEXT_PUBLIC_BACKEND_TOKEN',
  )
  export const BEARER_KEY = assertValue(
    process.env.NEXT_PUBLIC_BEARER_KEY,
    'Missing environment variable: NEXT_PUBLIC_BACKEND_TOKEN',
  )

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}


export const cx = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ');
}

export const formatDate = (date:string, dateFormat='MMMM dd, yyyy') => {
  return format(parseISO(date), dateFormat);
}

export const healthTips = [
  {
    title: 'Stay Hydrated',
    image: stayHydrated,
    description: 'Drink an adequate amount of water throughout the day to maintain hydration, support bodily functions, and promote overall health.'
  },
  {
    title: 'Balanced Nutrition',
    image: nutrition,
    description: 'Ensure a well-balanced diet rich in fruits, vegetables, lean proteins, and whole grains to provide essential nutrients for your body.'
  },
  {
    title: 'Regular Exercise',
    image: exercise,
    description: 'Incorporate regular physical activity into your routine to boost cardiovascular health, improve mood, and maintain a healthy weight.'
  },
  {
    title: 'Adequate Sleep',
    image: sleep,
    description: 'Aim for 7-9 hours of quality sleep each night to support physical and mental well-being.'
  },
  {
    title: 'Stress Management',
    image: stressMgt,
    description: 'Practice stress-reducing activities such as deep breathing, meditation, or yoga to promote mental health and resilience.'
  },
  {
    title: 'Hand Hygiene',
    image: handHygiene,
    description: 'Wash your hands regularly to prevent the spread of germs and reduce the risk of infections.'
  }
]

type SaveConvoType = {
  token: string;
  body: {
    title: string;
    user_id: string;
  };
};

export const saveConvo = async ({ token, body }: SaveConvoType): Promise<any> => {
  try {
    const axiosResponse = await axios.post('/api/chat/conversation', body, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    return axiosResponse.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};


type savePromptType = {
  token: string,
  body: {
    conversation_id: string,
    role: string
    content: string
  }
}
export const savePrompt = async ({ token, body }: savePromptType): Promise<any> => {
  try {
    const axiosResponse = await axios.post('/api/chat/prompt', body, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    return axiosResponse.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};


export const queryGPT = async (messages: ChatMessage[]): Promise<any> => {
  let data = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": messages,
    "temperature": 0.5,
    "max_tokens": 256
  });
  
  try {
    const axiosResponse = await axios.post(OPEN_AI_URL, data, {
      headers: { 
        Authorization: `Bearer ${openAiApiKey}`, 
        'Content-Type': 'application/json'
      },
    });
    return axiosResponse.data;
  } catch (error) {
    return
  }
};

export type getConversationsType = {
  user_id: string;
  token: string;
};

export const getConversations = async ({user_id, token}: getConversationsType): Promise<any> => {
  try {
    const axiosResponse = await axios.get(`/api/chat/conversations/${user_id}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return axiosResponse.data;
  } catch (error) {
    console.error(`Error getting conversations(getConversations): ${error}`);
    // throw error; // Re-throw the error to propagate it to the caller
  }
};


export type getPrompts = {
  conversation_id: string;
  token: string;
};

export const getPrompts = async ({ conversation_id, token }: getPrompts): Promise<any> => {
  try {
    const axiosResponse = await axios.get(`/api/chat/prompts/${conversation_id}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return axiosResponse.data;
  } catch (error) {
    console.error(`Error getting prompts of conversation(getPrompts): ${error}`);
    // throw error; // Re-throw the error to propagate it to the caller
  }
};

export const checkLoggedIn = (): { isLoggedIn: boolean; user_data?: any; bearerToken?: string } => {
  const jtw = Cookies.get(TOKEN_KEY);

  if (jtw) {
    try {
      const data = jwt.verify(jtw, TOKEN_KEY);
      return { isLoggedIn: true, user_data: data, bearerToken: jtw };
    } catch (error) {
      console.error('Error verifying token:', error);
      return { isLoggedIn: false };
    }
  } else {
    return { isLoggedIn: false };
  }
};

export const bearerToken = (): string | undefined => {
  const jtw = Cookies.get(BEARER_KEY);

  if (jtw) {
    try {
      return jtw;
    } catch (error) {
      console.error('Bearer Token does not exist:', error);
    }
  } else {
    return undefined;
  }
}