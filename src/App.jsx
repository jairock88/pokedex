import React, { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Para saber si hay más Pokémon para cargar

  // Fetch initial data
  useEffect(() => {
    fetchPokemons(nextUrl);
  }, []);

  const fetchPokemons = (url) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemons((prevPokemons) => [
          ...prevPokemons,
          ...jsonResponse.results,
        ]);
        setNextUrl(jsonResponse.next); // Actualiza la URL para la siguiente página
        setHasMore(!!jsonResponse.next); // Actualiza el estado de "más datos"
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };

  const loadMorePokemons = () => {
    if (hasMore && !loading) {
      fetchPokemons(nextUrl);
    }
  };

  return (
    <main className="min-h-screen bg-pokemonGray flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <header>
          <h1 className="text-4xl font-bold text-pokemonBlue mb-4 text-center flex items-center justify-center">
            <img
              width="40"
              height="40"
              src="https://fc03.deviantart.net/fs70/f/2013/019/b/6/pokeball_by_zel_duh-d5s04qj.gif"
              alt="Pokeball"
              className="mr-2"
            />
            Pokedex
          </h1>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} name={pokemon.name} />
          ))}
        </section>
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMorePokemons}
            disabled={loading || !hasMore}
            className="bg-pokemonBlue text-white py-2 px-4 rounded-lg shadow-md hover:bg-pokemonRed focus:outline-none focus:ring-2 focus:ring-pokemonYellow"
          >
            {loading ? "Loading..." : hasMore ? "Load More" : "No More Pokémon"}
          </button>
        </div>
      </div>
    </main>
  );
}
