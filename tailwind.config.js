/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'; 

export default {
  content: {files:[
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extract
},
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      colors: {
        "brand-blue": "#4876ff",
        "brand-lime": "#d9f154",
        "brand-navy": "#2e3192",
        "brand-orange": "#ff7347",
        "brand-pink": "#f7d0e9",
        "brand-purple": "#692e54",
        "brand-gray": "#fffdf9",
        "brand-green": "#288A57",
      },
    },
    screens: {

      'xxxs': '280px',
      // => @media (min-width: 280px) { ... }

      'xxs': '360px',
      // => @media (min-width: 360px) { ... }

      'xs': '414px',
      // => @media (min-width: 414px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '',


    }
  },
  plugins: [fluid],
}

