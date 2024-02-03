import { useState } from "react";
import "../estilos/encabezado.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Encabezado = () => {
  let [diaOnoche, setDiaOnoche] = useState("light-theme");
  function cliquear() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    if (diaOnoche === "light-theme") {
      setDiaOnoche("dark-theme");
    } else {
      setDiaOnoche("light-theme");
    }

    let valor = "colorTarjetaDia";
    if (document.body.classList[0]!=="light-theme")
      valor = "colorTarjetaNoche";

    let valor2 = "colorDia";
    if (document.body.classList[0]!=="light-theme")
      valor2 = "colorNoche";
    
    let elementos = document.getElementsByClassName("tarjeta");
    for (let item of elementos) {
      item.classList.remove("colorTarjetaNoche");
      item.classList.remove("colorTarjetaDia");
      item.classList.remove("colorDia");
      item.classList.remove("colorNoche");
      item.classList.add(valor);
      item.classList.add(valor2);
    }

    elementos = document.getElementsByClassName("encabezado");
    
    for (let item of elementos) {
      item.classList.remove("colorDia");
      item.classList.remove("colorNoche");
      item.classList.add(valor2);
    }
    
  }

  return (
    <header className="encabezado colorDia">
      <h1 className="izq">Where in the world?</h1>
      <span className="der">
        {diaOnoche === "light-theme" ? (
          <span className="modo-dia-noche" onClick={cliquear}>
            <FaMoon />
            &nbsp;<span className="tema">Dark Mode</span>
          </span>
        ) : (
          <span className="modo-dia-noche" onClick={cliquear}>
            <FaSun />
            &nbsp;<span className="tema">Light Mode</span>
          </span>
        )}
      </span>
    </header>
  );
};

export { Encabezado };
