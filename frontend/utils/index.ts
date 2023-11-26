import stayHydrated from '/public/images/stay-hydrated.png'
import nutrition from '/public/images/nutrition.png'
import exercise from '/public/images/exercise.png'
import sleep from '/public/images/sleep.png'
import stressMgt from '/public/images/stress-mgt.png'
import handHygiene from '/public/images/hand-hygiene.png'
import { compareDesc, parseISO, format } from "date-fns";
import axios from 'axios'

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

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: '/api/chat/conversation',
//   headers: { 
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYmU4ODQ2NC0yOTFiLTRmMzktYmJmMi0yNzgzNDZmYjM3YTgiLCJ1c2VybmFtZSI6ImQuZS5hZGVwb2p1QGdtYWlsLmNvbSIsImlhdCI6MTcwMDkzMDIyMywiZXhwIjoxNzAxMTg5NDIzfQ.nrJsCxnzZ95x_9xpn0ILMWxG9S03yDQFHjSfEuyW2eM', 
//     'Content-Type': 'application/json'
//   },
//   data : JSON.stringify({title: userInput, user_id: "1be88464-291b-4f39-bbf2-278346fb37a8"})
// };


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

    // console.log(JSON.stringify(axiosResponse.data));
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

    // console.log(JSON.stringify(axiosResponse.data));
    return axiosResponse.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};


// export const savePromptt = async ({token, body }:savePromptType) => {
//   axios.request({
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: '/api/chat/prompt',
//     headers: { 
//       'Authorization': token,\
//       'Content-Type': 'application/json'
//     },
//     data : JSON.stringify(body),
//   })
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//     return response.data;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };