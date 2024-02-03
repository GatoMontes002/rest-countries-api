import "./App.css";
import { Grilla } from "./componente/grilla";
import { Encabezado } from "./componente/encabezado";
import { DetallePais } from "./componente/detallePais";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Encabezado />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Grilla/>} />
            <Route path="/detallepais/:nombrepais" element={<DetallePais  />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
