import { Link, useParams } from "react-router-dom";
import "../estilos/detallePais.css";
import { TarjetaPais } from "./tarjetaPais";
import { useState, useEffect } from "react";
import { obtenerNombrePorCodigo } from "../servicios/todosLosPaises";
import { Vecinos } from "./vecinos";

const DetallePais = () => {
  const nombrepais = useParams().nombrepais;
  console.log("logdetallepais",nombrepais)
  const [pais, setPais] = useState();
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    obtenerNombrePorCodigo(nombrepais).then((res) => {
      setPais(res);
      setIsloading(true);
    });
  }, [nombrepais]);

  return (
    <div className="color">
      <h2>Detalle</h2>
      <Link to="/">
        <p>volver</p>
      </Link>
      {isloading ? (
        <div>
          <span key={pais[0].nombre + pais[0].capital + pais[0].poblacion}>
            <TarjetaPais
              nombre={pais[0].nombre}
              capital={pais[0].capital}
              poblacion={pais[0].poblacion}
              bandera={pais[0].bandera}
            />
          </span>
          <Vecinos 
          listadoVecinos = {pais[0].limitrofes}/>
          
        </div>
      ) : (
        <h2>Buscando ...</h2>
      )}
    </div>
  );
};

export { DetallePais };
