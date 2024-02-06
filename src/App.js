import "./App.css";
import { Grilla } from "./componente/grilla";
import { Encabezado } from "./componente/encabezado";
import { DetallePais } from "./componente/detallePais";
import { HashRouter,  Route, Routes } from "react-router-dom";


function App() {
  return (
    <div id="claseprincipal" >
      
      <Encabezado />
      <main>
        <HashRouter>
          <Routes>
          <Route path="/" element={<Grilla/>} />
          <Route path="/grilla/:miregion" element={<Grilla/>} />
          <Route path="/detallepais/:nombrepais" element={<DetallePais  />} />
          <Route path='*' element={<Grilla/>} />
        </Routes>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
