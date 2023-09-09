import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        teste: '#875afd',
      },
    },
  },
  plugins: [],
}
export default config
