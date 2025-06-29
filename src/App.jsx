// Importamos los componentes que necesitamos
import PokemonDetails from './components/PokemonDetails'
import PokemonList from './components/PokemonList'
import { useState } from "react";
// Importamos los estilos específicos de este componente
import './App.css'

function App() {
  // Estado para guardar el Pokémon seleccionado
  const [selectedPokemon, setSelectedPokemon] = useState()

  return (
    <div className="container">
      {/* Encabezado principal de la aplicación */}
      <header className="header">
        <h1>🎴 PokéDeck</h1>
        <p>Explora el mundo Pokémon</p>
      </header>

      {/* Contenido principal con grid de 2 columnas */}
      <div className="main-content">
        {/* Columna izquierda: Lista de Pokémon */}
        <div>
          <PokemonList selectPokemon={setSelectedPokemon} />
        </div>

        {/* Columna derecha: Detalles del Pokémon seleccionado */}
        <div className="details-section">
          {selectedPokemon ? (
            // Si hay un Pokémon seleccionado, mostramos sus detalles
            <PokemonDetails pokemon={selectedPokemon} />
          ) : (
            // Si no hay Pokémon seleccionado, mostramos mensaje
            <div className="details-card">
              <div className="details-emoji">🎴</div>
              <h3 className="details-title">Selecciona un Pokémon</h3>
              <p className="details-text">Haz clic en cualquier carta para ver sus detalles</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
