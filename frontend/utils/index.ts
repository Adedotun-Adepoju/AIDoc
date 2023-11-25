import stayHydrated from '/public/images/stay-hydrated.png'
import nutrition from '/public/images/nutrition.png'
import exercise from '/public/images/exercise.png'
import sleep from '/public/images/sleep.png'
import stressMgt from '/public/images/stress-mgt.png'
import handHygiene from '/public/images/hand-hygiene.png'

export const cx = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ');
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