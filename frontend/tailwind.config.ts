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
        grayLight: "#BDBDBD",
        grayDark: "#333333",
        red: "#DE0C18"
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
      },
      screens: {
        'xs': '425px',
        // => @media (min-width: 992px) { ... }
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
},
    },
  },
  plugins: [],
}
export default config
