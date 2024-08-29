/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pokemonRed: "#ffcb05", // Color de fondo
        pokemonBlue: "#003a70", // Color de texto o acentos
        pokemonYellow: "#fdb927", // Color de detalles
        pokemonGreen: "#9bcc50", // Alternativo para detalles o botones
        pokemonGray: "#f1f1f1", // Fondo claro para cards
      },
    },
  },
  plugins: [],
};
