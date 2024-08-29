# Pokédex

## Descripción

Pokédex construido con React. Muestra una lista de Pokémon en cards. La aplicación utiliza la [Pokémon API](https://pokeapi.co/) para recuperar datos sobre Pokémon y muestra información básica como el nombre y la imagen del Pokémon. Incluye funcionalidad de paginación para cargar más Pokémon a medida que se hace clic en el botón "Load More".

## Características

- **Visualización de Pokémon**: Muestra una lista de Pokémon en tarjetas con nombre y imagen.
- **Paginación**: Permite cargar más Pokémon con un botón "Load More".
- **Interactividad**: Las tarjetas de Pokémon tienen un efecto de hover.
- **Diseño Responsive**: La aplicación se adapta a diferentes tamaños de pantalla.

## Tema personalizado en Tailwind (tailwind.config.js)


```json

module.exports = {
  theme: {
    extend: {
      colors: {
        pokemonRed: "#ffcb05",    // Color de fondo
        pokemonBlue: "#003a70",   // Color de texto
        pokemonYellow: "#fdb927", // Color de detalles
        pokemonGreen: "#9bcc50",  // Alternativo para detalles o botones
        pokemonGray: "#f1f1f1",   // Fondo claro para cards
      },
    },
  },
  variants: {},
  plugins: [],
};
```
