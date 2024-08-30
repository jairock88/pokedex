import { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import { getPokemonList } from "../api";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonList()
      .then((pokemonListResponse) => setPokemons(pokemonListResponse))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <main className="font-sans min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <header>
          <h1 className="text-4xl font-bold text-amber-400 mb-4 text-center flex items-center justify-center p-5">
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

        <div className="flex justify-center mt-4"></div>
      </div>
    </main>
  );
}
