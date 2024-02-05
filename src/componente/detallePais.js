import { Link, useParams } from "react-router-dom";
import "../estilos/detallePais.css";
import { useState, useEffect } from "react";
import { obtenerNombrePorCodigo } from "../servicios/todosLosPaises";
import { Vecinos } from "./vecinos";

const DetallePais = () => {
  const nombrepais = useParams().nombrepais;
  console.log("logdetallepais", nombrepais);
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
      <Link to="/">
        <button className="boton-volver">
          <span>&larr;&nbsp; </span>Back
        </button>
      </Link>
      {isloading ? (
        <div>
          <div className="contenedor-pais-detalle">
            <div className="contenedor-imagen-detalle">
              <img
                src={pais[0].bandera.png}
                alt={pais[0].bandera.alt}
                width="100%"
              ></img>
            </div>
            <div className="contenedor-info-detalle">
              <h2 className="titulopais">{pais[0].nombre}</h2>
            <div className="limitrofes-columna">
              <div className="contenedor-info-detalle-aux">
                <div className="contenedor-info-detalle-izq">
                  <ul className="sinmarks">
                    <li>
                      <span className="letragruesa">Native name:</span>&nbsp;
                      <span className="letrafina">{pais[0].nombrenativo}</span>
                    </li>
                    <li>
                      <span className="letragruesa">Population:</span>&nbsp;
                      <span className="letrafina">{pais[0].poblacion}</span>
                    </li>
                    <li>
                      <span className="letragruesa">Region:</span>&nbsp;
                      <span className="letrafina">{pais[0].region}</span>
                    </li>
                    <li>
                      <span className="letragruesa">Sub Region:</span>&nbsp;
                      <span className="letrafina">{pais[0].subregion}</span>
                    </li>
                    <li>
                      <span className="letragruesa">Capital:</span>&nbsp;
                      <span className="letrafina">{pais[0].capital}</span>
                    </li>
                  </ul>
                </div>
                <div className="contenedor-info-detalle-der">
                  <ul className="sinmarks">
                    <li>
                      <span className="letragruesa">Top Level Domain:</span>
                      &nbsp;<span className="letrafina">{pais[0].tld}</span>
                    </li>
                    <li>
                      <span className="letragruesa">Currencies:</span>&nbsp;
                      <span className="letrafina">{pais[0].currencies}</span>
                    </li>
                    <li>
                      <span className="letragruesa">Languages:</span>&nbsp;
                      <span className="letrafina">{pais[0].languages}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
                        
            <Vecinos listadoVecinos={pais[0].limitrofes} />

            </div>
          </div>

          
        </div>
      ) : (
        <h2>Buscando ...</h2>
      )}
    </div>
  );
};

export { DetallePais };
