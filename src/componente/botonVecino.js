import "../estilos/botonVecino.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { obtenerNombrePorCodigo } from "../servicios/todosLosPaises";

const BotonVecino = ({ codigoVecino }) => {
  console.log("estoy", codigoVecino);
  const [pais, setPais] = useState();
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    obtenerNombrePorCodigo(codigoVecino).then((res) => {
        console.log("quitar",res);
      setPais(res);
      setIsloading(true);
    });
  }, [codigoVecino]);

  return (
    <span>
      {isloading && (
        <Link to={`/detallepais/${pais[0].ccn3}`}>
          <button className="boton-vacino-formato">
             {pais[0].nombre}
          </button>
        </Link>
      )}
    </span>
  );
};

export { BotonVecino };
