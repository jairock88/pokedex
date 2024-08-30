import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../api";
import { typeColors } from "../components/typeColor";

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.error("[Get Pokemon By Name]: ", error));
  }, []);

  if (!pokemon.name) {
    return (
      <main className="w-screen h-screen flex items-center justify-center font-bold text-red-500">
        POKEMON NOT FOUND
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full rounded-lg shadow-lg bg-gray-800 p-6 text-center hover:shadow-[0_0_45px_30px_rgba(255,235,0,0.4)]">
        <img
          src={pokemon.sprites?.other["official-artwork"]?.front_default}
          alt={name}
          className="mx-auto font-black mb-4 w-50 h-50 object-contain"
        />
        <h1 className="text-xl font-semibold text-amber-400 mb-2 uppercase">
          {name}
        </h1>
        <section className="text-gray-300 mb-4 ">
          <span className="block">Height: {pokemon.height}m</span>
          <span className="block">Weight: {pokemon.weight}kg</span>
        </section>
        <section className="flex justify-center space-x-2">
          {pokemon.types?.map((type) => (
            <span
              key={type.slot}
              className="px-2 py-1 rounded-full text-sm text-black cursor-pointer"
              style={{ backgroundColor: typeColors[type.type.name] || "#ccc" }}
            >
              {type?.type?.name}
            </span>
          ))}
        </section>
      </div>
    </main>
  );
}
