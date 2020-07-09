import React, { useState } from "react";
import Form from "./components/Form.jsx";
function App() {
  const [search, saveSearch] = useState("");
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
