 # 🎴 PokéDeck --> Despleagado en https://ramonmendoza13.github.io/PokeDeckDeploy/

Una aplicación web interactiva para explorar el mundo Pokémon, desarrollada con React y CSS.

## 🌟 Características

- **📋 Lista de Pokémon**: Visualiza cartas de Pokémon con información detallada
- **🔍 Búsqueda por rango**: Busca Pokémon específicos por número de ID
- **📊 Estadísticas completas**: Ve todas las estadísticas con barras de progreso
- **⚡ Habilidades**: Información detallada de habilidades, incluyendo ocultas
- **🎨 Diseño responsive**: Se adapta perfectamente a móviles y tablets
- **🌈 Colores oficiales**: Tipos de Pokémon con colores auténticos

## 🚀 Tecnologías Utilizadas

- **React 19.1.0** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 6.3.5** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos y responsive
- **PokéAPI** - API pública para datos de Pokémon

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Ramonmendoza13/PokeDeck.git
   cd PokeDeck
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - Ve a `http://localhost:5173/`
   - ¡Disfruta explorando Pokémon!

## 🛠️ Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción

## 📱 Funcionalidades

### 🎴 Cartas de Pokémon
- ID único de cada Pokémon
- Imagen oficial del sprite
- Nombre capitalizado
- Tipos con colores oficiales
- Estadísticas básicas (Ataque, Defensa, Velocidad)
- Badge de HP

### 📊 Detalles Completos
- Información física (altura y peso)
- Todas las estadísticas con barras de progreso
- Lista de habilidades con indicador de ocultas
- Animaciones suaves

### 🔍 Búsqueda Inteligente
- Rango personalizable (1-151)
- Validación de entrada
- Límite de 20 Pokémon por búsqueda
- Interfaz intuitiva

## 🎨 Estructura del Proyecto

```
src/
├── components/
│   ├── PokemonCard.jsx      # Tarjetas individuales
│   ├── PokemonCard.css
│   ├── PokemonList.jsx      # Lista y formulario
│   ├── PokemonList.css
│   ├── PokemonDetails.jsx   # Detalles completos
│   ├── PokemonDetails.css
│   ├── GetForm.jsx          # Formulario de búsqueda
│   └── GetForm.css
├── App.jsx                  # Componente principal
├── App.css
├── index.css               # Estilos globales
└── main.jsx               # Punto de entrada
```

## 🌐 API Utilizada

Este proyecto utiliza la [PokéAPI](https://pokeapi.co/), una API RESTful gratuita que proporciona datos completos sobre Pokémon.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Ramon Mendoza** - Desarrollador Full Stack

