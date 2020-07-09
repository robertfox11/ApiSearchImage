import React, { useState } from "react";

const Form = () => {
  const [term, saveTerm] = useState("");
  return (
    <form>
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
    </form>
  );
};

export default Form;
