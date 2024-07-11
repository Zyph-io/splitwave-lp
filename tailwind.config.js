import maquina from './src/assets/maquimaCartao.png'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
         'buttom-color': "linear-gradient(90deg, #3DA1DD 50%, #6AC7F9 100%)",
         
       

      },
      fontFamily:{
        ubuntu:['Ubuntu'],
        inter:['Inter']
      }
    },
  },
  plugins: [],
}
