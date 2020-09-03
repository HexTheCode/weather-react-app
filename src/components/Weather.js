import React from "react";
import PropTypes from "prop-types";

const Weather = ({ resultado }) => {
  const { name, main } = resultado;

  const kelvin = 273.15;

  if (!name) return null;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>Weather in {name} is:</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>
          Maximum temperature:
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>
          Minimum temperature:
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
        <p>
          Thermal sensation:
          {parseFloat(main.feels_like - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Weather;
