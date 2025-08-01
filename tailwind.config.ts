import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        imperialIndigo:'#0A1D3C',
      },
      fontFamily:{
        times: ['"Times New Roman"', 'Times', 'serif']
      },
    },
  },
  plugins: [],
}
export default config
