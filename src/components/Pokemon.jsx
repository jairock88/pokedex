import clsx from "clsx";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../api";
import { useNavigate } from "react-router-dom";

export default function Pokemon({ name }) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.error("Fetch pokemon error: ", error));
  }, []);

  return (
    <article
      onClick={() => {
        navigate(`/pokemon/${name}`);
      }}
      className={clsx(
        "bg-gray-800 cursor-pointer shadow-lg rounded-lg p-4 m-2 max-w-xs text-center border border-gray-700",
        "transition-transform transform hover:scale-110 hover:shadow-[0_0_45px_30px_rgba(255,235,0,0.4)] hover:bg-gray-900",
        "duration-400 ease-in-out relative overflow-hidden"
      )}
    >
      <div className="relative">
        <img
          src={pokemon.sprites?.other["official-artwork"]?.front_default}
          alt={pokemon.name}
          className={clsx(
            "w-full h-40 object-contain mx-auto mb-2 transition-transform transform hover:scale-110 hover:rotate-[10deg]",
            {
              "w-full h-40 bg-gray-700 animate-pulse rounded-full ring-0":
                !pokemon.sprites,
            }
          )}
        />
      </div>
      <h2 className="text-lg font-semibold text-white capitalize">{name}</h2>
    </article>
  );
}
