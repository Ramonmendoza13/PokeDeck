import { useState } from "react";
import "./GetForm.css";

function GetForm(props) {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(12);

  const handleFromInput = (e) => {
    setFrom(parseInt(e.target.value));
  };

  const handleToInput = (e) => {
    setTo(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from > to) {
      alert("El número inicial debe ser menor o igual al número final");
      return;
    }
    if (to - from > 20) {
      alert("Puedes cargar máximo 20 Pokémon a la vez");
      return;
    }
    props.getPokemons(from, to);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="from-pokemon">Desde:</label>
          <input
            type="number"
            value={from}
            min={1}
            max={151}
            id="from-pokemon"
            onChange={handleFromInput}
            placeholder="Ej: 1"
          />
        </div>

        <div className="form-group">
          <label htmlFor="to-pokemon">Hasta:</label>
          <input
            type="number"
            value={to}
            min={1}
            max={151}
            id="to-pokemon"
            onChange={handleToInput}
            placeholder="Ej: 12"
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        🎴 Cargar Pokémon
      </button>

      <p className="form-info">
        Puedes cargar hasta 20 Pokémon a la vez (1-151)
      </p>
    </form>
  );
}

export default GetForm;