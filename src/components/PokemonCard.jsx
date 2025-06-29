// Importamos los estilos específicos de este componente
import "./PokemonCard.css";

function PokemonCard(props) {
  // Extraemos las propiedades que necesitamos
  const { pokemon, selectPokemon } = props;

  // Función para obtener el color según el tipo de Pokémon
  const getTypeColor = (type) => {
    // Objeto con los colores oficiales de cada tipo
    const colors = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return colors[type] || '#A8A878'; // Si no encuentra el tipo, usa normal
  };

  // Función para capitalizar la primera letra del nombre
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <li 
      className="pokemon-card"
      onClick={() => selectPokemon(pokemon)} // Al hacer clic, seleccionamos el Pokémon
    >
      {/* Número de ID del Pokémon */}
      <div className="pokemon-id">
        #{pokemon.id.toString().padStart(3, '0')}
      </div>

      {/* Contenedor de la imagen con badge de HP */}
      <div className="pokemon-image-container">
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} sprite`}
          className="pokemon-image"
        />
        {/* Badge que muestra el HP del Pokémon */}
        <div className="hp-badge">
          {pokemon.stats[0].base_stat}
        </div>
      </div>

      {/* Nombre del Pokémon */}
      <h3 className="pokemon-name">
        {capitalize(pokemon.name)}
      </h3>

      {/* Tipos del Pokémon */}
      <div className="pokemon-types">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className="pokemon-type"
            style={{ backgroundColor: getTypeColor(type.type.name) }}
          >
            {capitalize(type.type.name)}
          </span>
        ))}
      </div>

      {/* Estadísticas básicas del Pokémon */}
      <div className="pokemon-stats">
        <div className="pokemon-stat">
          <span>Ataque:</span>
          <span>{pokemon.stats[1].base_stat}</span>
        </div>
        <div className="pokemon-stat">
          <span>Defensa:</span>
          <span>{pokemon.stats[2].base_stat}</span>
        </div>
        <div className="pokemon-stat">
          <span>Velocidad:</span>
          <span>{pokemon.stats[5].base_stat}</span>
        </div>
      </div>
    </li>
  );
}

export default PokemonCard;