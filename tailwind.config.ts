import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'yellow': {
          1000: '#f8c444',
          2000: '#f59e0b',
        },
        'blue': {
          1000: '#488ccc',
          2000: '#437cad',
        },
        'white': '#fff',
        'black': '#000000'
      },
      screens: {
        'xs': '350px',
      }

    },
  },
  plugins: [],
}
export default config
