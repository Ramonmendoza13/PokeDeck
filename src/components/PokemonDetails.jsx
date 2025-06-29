// Importamos los estilos específicos de este componente
import "./PokemonDetails.css";

function PokemonDetails(props) {
  // Extraemos el Pokémon de las propiedades
  const { pokemon } = props;

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

  // Función para traducir los nombres de las estadísticas
  const getStatName = (statName) => {
    const names = {
      hp: 'HP',
      attack: 'Ataque',
      defense: 'Defensa',
      'special-attack': 'Ataque Esp.',
      'special-defense': 'Defensa Esp.',
      speed: 'Velocidad'
    };
    return names[statName] || statName;
  };

  // Función para calcular el porcentaje de la barra de progreso
  const getStatPercentage = (stat) => {
    return Math.min((stat / 255) * 100, 100); // Máximo 255 es el valor más alto posible
  };

  return (
    <div className="pokemon-details">
      {/* Encabezado con información básica */}
      <div>
        {/* ID del Pokémon */}
        <div className="pokemon-details-id">
          #{pokemon.id.toString().padStart(3, '0')}
        </div>
        
        {/* Nombre del Pokémon */}
        <h2 className="pokemon-details-name">
          {capitalize(pokemon.name)}
        </h2>
        
        {/* Tipos del Pokémon */}
        <div className="pokemon-details-types">
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

        {/* Información de altura y peso */}
        <div className="pokemon-details-info">
          <div>
            <span>Altura:</span> {pokemon.height / 10}m
          </div>
          <div>
            <span>Peso:</span> {pokemon.weight / 10}kg
          </div>
        </div>
      </div>

      {/* Imagen del Pokémon */}
      <div>
        <img 
          src={pokemon.sprites.front_default} 
          alt={`${pokemon.name} sprite`} 
          className="pokemon-details-image"
        />
      </div>

      {/* Sección de estadísticas */}
      <div className="stats-section">
        <h3 className="stats-title">📊 Estadísticas</h3>
        
        <div>
          {pokemon.stats.map((stat, index) => (
            <div key={index} className="stat-item">
              {/* Encabezado con nombre y valor */}
              <div className="stat-header">
                <span className="stat-name">
                  {getStatName(stat.stat.name)}:
                </span>
                <span className="stat-value">
                  {stat.base_stat}
                </span>
              </div>
              {/* Barra de progreso */}
              <div className="stat-bar">
                <div 
                  className="stat-fill"
                  style={{ width: `${getStatPercentage(stat.base_stat)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de habilidades */}
      <div className="abilities-section">
        <h3 className="abilities-title">⚡ Habilidades</h3>
        <div>
          {pokemon.abilities.map((ability, index) => (
            <div 
              key={index} 
              className="ability-item"
            >
              <span className="ability-name">
                {capitalize(ability.ability.name)}
              </span>
              {/* Mostramos si es una habilidad oculta */}
              {ability.is_hidden && (
                <span className="ability-hidden">
                  Oculta
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails