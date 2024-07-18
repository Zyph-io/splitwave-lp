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
         'buttom-servide': "linear-gradient(270deg, rgba(37, 104, 239, 0.5) 0%, rgba(34, 34, 34, 0.5) 100%)",
         'buttom-servide-plus': "linear-gradient(135deg, #2492FF 8.58%, #0043AE 91.42%)"
      },
      fontFamily:{
        ubuntu:['Ubuntu'],
        inter:['Inter'],
        poppins: ['Poppins'],
        saira:['Saira']
      }
    },
  },
  plugins: [],
}
