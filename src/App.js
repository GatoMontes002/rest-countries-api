import './App.css';
import { Grilla } from './componente/grilla';
import { Encabezado } from './componente/encabezado';
import { useState, useEffect } from "react";
import { todosLosPaises} from './servicios/todosLosPaises'

function App() {
  const [pais, setPais] = useState();
  useEffect(() =>{ 

                todosLosPaises().then(res => { setPais(res)})
              
              }
              
              ,[]);
  

  return (
    <div className="App">
      <Encabezado/>
      <main>         
        <Grilla pais = {pais} />
      </main>
    </div>
  );
}

export default App;
