import stayHydrated from '/public/images/stay-hydrated.png'
import nutrition from '/public/images/nutrition.png'
import exercise from '/public/images/exercise.png'
import sleep from '/public/images/sleep.png'
import stressMgt from '/public/images/stress-mgt.png'
import handHygiene from '/public/images/hand-hygiene.png'
import { parseISO, format } from "date-fns";
import axios from 'axios'
import { ChatMessage } from '@/app/(authenticated)/(chatbox)/chatbox/page'


const openAiUrl = "https://api.openai.com/v1/chat/completions"
const openAiApiKey = process.env.NEXT_OPEN_AI_KEY



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
    const axiosResponse = await axios.post(openAiUrl, data, {
      headers: { 
        Authorization: `Bearer ${openAiApiKey}`, 
        'Content-Type': 'application/json'
      },
    });
    return axiosResponse.data;
  } catch (error) {
    console.log(error);
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
    console.log(axiosResponse);
    return axiosResponse.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};
