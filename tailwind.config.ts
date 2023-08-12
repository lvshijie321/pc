import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern':
          'linear-gradient(to right, #1F242A -105%,#2A3139 95%, #1F242A)',
        driver: 'linear-gradient(to right, #c3c3c3 65%, transparent 65%)',
      },
    },
  },
  plugins: [],
};
export default config;
