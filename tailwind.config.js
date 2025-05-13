import fluid, {
  extract, 
  screens, 
  fontSize, 
} from 'fluid-tailwind'; 

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
    screens, 
    fontSize,
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        sharetech:['var(--font-share-tech)'],
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
      screens: {
        xs: '20rem'
      }
    },
  },
  plugins: [fluid],
}

