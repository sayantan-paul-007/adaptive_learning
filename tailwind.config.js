/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      // 'fourk': '2560px',
      'laptop': '1367px',
      'tablet': '1025px',
      'mobile': '431px'
      
    },
    colors:{
      logo_blue: "#44b4e6",
      logo_yellow: "#fdee0b",
      logo_green: "#81c240",
      logo_pink: "#ec238f",
      neutral: {
          100: "#fdfdf8",
          200: "#fbfbf1",
          300: "#f9f9ea",
          400: "#f7f7e3",
          500: "#f5f5dc",
          600: "#c4c4b0",
          700: "#939384",
          800: "#626258",
          900: "#31312c"
},
      primary: {
          100: "#ccd8de",
          200: "#99b1be",
          300: "#668b9d",
          400: "#33647d",
          500: "#003d5c",
          600: "#00314a",
          700: "#002537",
          800: "#001825",
          900: "#000c12"
},
accent: {
          100: "#feeccf",
          200: "#fdd99f",
          300: "#fcc570",
          400: "#fbb240",
          500: "#fa9f10",
          600: "#c87f0d",
          700: "#965f0a",
          800: "#644006",
          900: "#322003"
}, 
    },
    fontFamily:{
      montserrat :['Montserrat', 'sans-serif'],
      notosans:['Noto Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}

