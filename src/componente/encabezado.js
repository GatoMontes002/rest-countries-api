import { useState } from "react";
import "../estilos/encabezado.css";
import { FaMoon, FaSun } from "react-icons/fa";

const Encabezado = () => {
  let [diaOnoche, setDiaOnoche] = useState("light-theme");
  function cliquear() {
    console.log(document.body.classList);
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    if (diaOnoche === "light-theme") {
      setDiaOnoche("dark-theme");
    } else {
      setDiaOnoche("light-theme");
    }
    let elementos = document.getElementsByClassName("tarjeta");
    //elementos.classList.toggle("colorTarjetaDia");
      //  elementos.classList.toggle("colorTarjetaNoche");
    console.log("***********");
    console.log(elementos);
    try {
      for (let element of elementos) {
        element.classList.toggle("colorTarjetaDia");
        element.classList.toggle("colorTarjetaNoche");
        element.classList.toggle("colorDia");
        element.classList.toggle("colorNoche");
      };
    } catch (Error) {
      console.log("**errrrrrrr**");
      console.error(Error);
    }

    //els.classList.toggle("colorDia");
    //els.classList.toggle("colorNoche");

    
  }

  return (
    <header className="encabezado">
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
