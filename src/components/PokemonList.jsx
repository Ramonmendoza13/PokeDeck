import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import GetForm from "./GetForm";
import "./PokemonList.css";

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons(1, 12);
  }, []);

  const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data = await response.json();
    return data;
  };

  const getPokemons = async (from, to) => {
    setLoading(true);
    const pkmnArr = [];

    for (let i = from; i <= to; i++) {
      const pokemon = await fetchPokemon(i);
      pkmnArr.push(pokemon);
    }

    setPokemons(pkmnArr);
    setLoading(false);
  };

  const pokemonCards = pokemons.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
        selectPokemon={props.selectPokemon}
      ></PokemonCard>
    );
  });

  return (
    <div>
      {/* Form Section */}
      <div className="form-container">
        <h2 className="section-title">🔍 Buscar Pokémon</h2>
        <GetForm getPokemons={getPokemons} />
      </div>

      {/* Pokemon Grid */}
      <div className="pokemon-section">
        <h2 className="section-title">📋 Lista de Pokémon</h2>
        
        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <span className="loading-text">Cargando Pokémon...</span>
          </div>
        ) : (
          <ul className="pokemon-grid">
            {pokemonCards}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PokemonList;