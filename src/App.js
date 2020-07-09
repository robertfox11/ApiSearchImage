import React, { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import ListImage from "./components/ListImage.jsx";
function App() {
  const [search, saveSearch] = useState("");
  const [images, saveImages] = useState([]);
  //paginacion pagina actual
  const [pageActual, savepageActual] = useState(1);
  //Guardar Total Paginas
  const [pagetotal, savePagetotal] = useState(5);

  useEffect(() => {
    // Creamos una funcion para consultar la api
    const consultApi = async () => {
      //validamos  la busqueda
      if (search === "") return;
      const imagePerPage = 20;
      const key = "17403963-01695487f8e9b771a23983074";
      //pasamos los parametros necesario
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagePerPage}&page=${pageActual}`;

      const resp = await fetch(url);
      const res = await resp.json();
      console.log(res.hits);
      saveImages(res.hits);
      //guardamos el total de las paginas
      const calcularTotalPage = Math.ceil(res.totalHits / imagePerPage);
      savePagetotal(calcularTotalPage);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({
        behavior: "smooth",
      });
    };
    //llamamos la funcion una vez consultada
    consultApi();
    //dependencia search
  }, [search, pageActual]);
  const previousPage = () => {
    const newpageActual = pageActual - 1;
    if (newpageActual === 0) return;
    savepageActual(newpageActual);
  };
  const nextPage = () => {
    const newpageActual = pageActual + 1;
    if (newpageActual > pagetotal) return;
    savepageActual(newpageActual);
  };
  return (
    <div className="container ">
      <div className="jumbotron bg-info ">
        <p className="lead text-center">Buscador De imagenes</p>
        <Form saveSearch={saveSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImage images={images} />
        {pageActual === 1 ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={previousPage}
          >
            &laquo; Anterior
          </button>
        )}
        {pageActual === pagetotal ? null : (
          <button type="button" className="bbtn btn-info" onClick={nextPage}>
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
