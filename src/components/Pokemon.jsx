import { useState, useEffect } from "react";

export default function Pokemon({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemon(jsonResponse);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Failed to load Pokémon data");
        setLoading(false);
      });
  }, [name]);

  return (
    <article
      className="bg-white cursor-pointer shadow-lg rounded-lg p-4 m-2 max-w-xs text-center border border-gray-300 
      transition-transform transform hover:scale-110 hover:shadow-2xl hover:bg-gray-100
      duration-400 ease-in-out"
    >
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : pokemon ? (
        <>
          <img
            className="w-full h-40 object-contain mx-auto mb-2"
            src={pokemon.sprites?.other["official-artwork"]?.front_default}
            alt={name}
          />
          <h2 className="text-lg font-semibold text-gray-800 capitalize">
            {name}
          </h2>
        </>
      ) : (
        <p className="text-gray-500">No data available</p>
      )}
    </article>
  );
}
