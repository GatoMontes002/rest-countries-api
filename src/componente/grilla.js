import "../estilos/grilla.css";
import { TarjetaPais } from "./tarjetaPais";
import { useState, useEffect } from "react";
import { paisesPorRegion, todosLosPaises } from "../servicios/todosLosPaises";
import { useParams } from "react-router-dom";
import { BotonDropDownRegion } from "./botonDropDownRegion";

const Grilla = () => {
  const [pais, setPais] = useState();
  const miregion = useParams().miregion;
  
  useEffect(() => {
    miregion
      ? paisesPorRegion(miregion).then((res) => {
          setPais(res);
        })
      : todosLosPaises().then((res) => {
          setPais(res);
        });
  }, [miregion]);

  return (
    <>
        <div className="contenedor-filtros">
            <div className="contenedor-por-nombre">
              <BotonDropDownRegion/>
            </div>
            <div className="contenedor-por-region">
              <BotonDropDownRegion/>
            </div>
        </div>
        <section className="contenedor">
          <div className="tipoGrilla">
            {pais ? (
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
              ))
            ) : (
              <h2>Buscando ....</h2>
            )}
          </div>
        </section>
    </>
  );
};

export { Grilla };
