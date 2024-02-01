import './App.css';
import { Grilla } from './componente/grilla';
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
      <main>
        <h1>Hola Mundo 2</h1>            
          <Grilla pais = {pais} />
      </main>
    </div>
  );
}

export default App;
