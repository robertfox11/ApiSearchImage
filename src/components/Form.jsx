import React, { useState } from "react";
import Error from "./Error.jsx";
const Form = ({ saveSearch }) => {
  const [term, saveTerm] = useState("");
  //validando el error
  const [error, saveError] = useState(false);
  const searchImage = (e) => {
    e.preventDefault();
    // validar
    if (term.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);
    saveSearch(term);
  };
  return (
    <form onSubmit={searchImage}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: futbol o café"
            onChange={(e) => saveTerm(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            value="Buscar"
          />
        </div>
      </div>
      {error ? <Error message="Agrega un termino de busqueda" /> : null}
    </form>
  );
};

export default Form;
