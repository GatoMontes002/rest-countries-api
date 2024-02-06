import "./App.css";
import { Grilla } from "./componente/grilla";
import { Encabezado } from "./componente/encabezado";
import { DetallePais } from "./componente/detallePais";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <div id="claseprincipal" >
      
      <Encabezado />
      <main>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Grilla/>} />
          <Route path="/grilla/:miregion" element={<Grilla/>} />
          <Route path="/detallepais/:nombrepais" element={<DetallePais  />} />
          <Route path='*' element={<Grilla/>} />
        </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
