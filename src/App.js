import React, { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
function App() {
  const [search, saveSearch] = useState("");
  useEffect(() => {
    // Creamos una funcion para consultar la api
    const consultApi = async () => {
      //validamos  la busqueda
      if (search === "") return;
      const imagePerPage = 20;
      const key = "17403963-01695487f8e9b771a23983074";
      //pasamos los parametros necesario
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagePerPage}`;

      const resp = await fetch(url);
      const res = await resp.json();
      console.log(res.hits);
    };
    //llamamos la funcion una vez consultada
    consultApi();
    //dependencia search
  }, [search]);
  return (
    <div className="container ">
      <div className="jumbotron bg-info ">
        <p className="lead text-center">Buscador De imagenes</p>
        <Form saveSearch={saveSearch} />
      </div>
    </div>
  );
}

export default App;
