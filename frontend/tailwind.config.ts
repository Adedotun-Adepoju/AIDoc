import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueDark: {
          100: '#105E96',
          200: "#08426B",
        },
        blueLight: "#1CA1FE",
        green: "#08701F",
        white: "#FFFFFF",
        orange: "#f2994a",
        black: "#000000",
        gray: "#333333"
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
      },
    },
  },
  plugins: [],
}
export default config
