/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter": "Inter, sans-serif",
        "liu": "Liu Jian Mao Cao, cursive",
        "julius" : "Liu Jian Mao Cao, cursive;"
      },
      colors : {
        "amarelo" : "#FBF107",
        "preto" : "#070707"
      },
      backgroundImage : theme => ({
        "raio" : "url('/src/img/raio.png')"
      })

    },
  },
  plugins: [],
}

