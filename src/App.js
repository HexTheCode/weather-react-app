import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  // State

  const [busqueda, saveBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, saveConsultar] = useState(false);

  const [resultado, saveResultado] = useState({});

  const [error, saveError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const requestApi = async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=a68df70ae1b03d0b98b8b63072628120`;

      const res = await fetch(url);
      const json = await res.json();

      saveResultado(json);
      saveConsultar(false);

      if (resultado.cod === "404") {
        saveError(true);
      } else {
        saveError(false);
      }
    };
    requestApi();

    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error message="No match data" />;
  } else {
    componente = <Weather resultado={resultado} />;
  }

  return (
    <Fragment>
      <Header title="Weather App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                busqueda={busqueda}
                saveBusqueda={saveBusqueda}
                saveConsultar={saveConsultar}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
