import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ busqueda, saveBusqueda, saveConsultar }) => {
  const [error, saveError] = useState(false);

  const { ciudad, pais } = busqueda;

  const handleChange = (e) => {
    saveBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ciudad.trim() === "" || pais.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);

    saveConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <Error
          message="All fields 
required"
        />
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">City</label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Select Country --</option>
          <option value="US">USA</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Country</label>
      </div>
      <div className="input-field col s12">
        <button
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
          type="submit"
          style={{ color: "black" }}
        >
          Check
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  busqueda: PropTypes.object.isRequired,
  saveBusqueda: PropTypes.func.isRequired,
  saveConsultar: PropTypes.func.isRequired,
};

export default Form;
