/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter": "Inter, sans-serif",
        "liu": "Liu Jian Mao Cao, cursive",
        "julius" : "Julius Sans One, sem serifa"
      },
      colors : {
        "amarelo" : "#FBF107",
        "brancoC" : "rgba('255,255,255,0');",
        "preto" : "#000000",
        "pretoT" : "#333"
      },
      backgroundImage : theme => ({
        "raio" : "url('/src/img/raio.png')",
        "delivery" : "url('/src/img/projetos/delivery.png')"
      }),
      boxShadow : {
        "bx1": "5px 9px 4px"
      }

    },
  },
  plugins: [],
}

