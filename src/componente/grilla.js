import "../estilos/grilla.css";
import { TarjetaPais } from "./tarjetaPais";
import { useState, useEffect } from "react";
import { todosLosPaises } from "../servicios/todosLosPaises";

const Grilla = () => {
  const [pais, setPais] = useState();
  useEffect(() => {
    todosLosPaises().then((res) => {
      setPais(res);
    });
  }, []);

  return (
    <section className="contenedor">
      <div className="tipoGrilla">
        {pais &&
          pais.map((el) => (
            <span key={el.nombre + el.capital + el.poblacion}>
              <TarjetaPais
                nombre={el.nombre}
                capital={el.capital}
                poblacion={el.poblacion}
                bandera={el.bandera}
                ccn3={el.ccn3}
                region={el.region}
              />
            </span>
          ))}
      </div>
    </section>
  );
};

export { Grilla };
