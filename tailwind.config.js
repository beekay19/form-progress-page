/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens:{
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },
    extend: {
      colors:{
        marineBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        pastelBlue:'hsl(228, 100%, 84%)',
        strawberryRed:'hsl(354, 84%, 57%)',
        coolGray:'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        mongolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)'
      }
    },
  },
  plugins: [],
}

