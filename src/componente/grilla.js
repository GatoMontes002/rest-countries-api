import "../estilos/grilla.css";
import { TarjetaPais } from "./tarjetaPais";
import { useState, useEffect } from "react";
import { paisesPorRegion, todosLosPaises } from "../servicios/todosLosPaises";
import { useParams } from "react-router-dom";
import { EncabezadoBusqueda } from "./encabezadoBusqueda";

const Grilla = () => {
  const [pais, setPais] = useState();
  const [paisFiltrado, setPaisFiltrado] = useState();
  const miregion = useParams().miregion;
  const [palabraBusqueda, setPalabraBusqueda] = useState("");
    
  useEffect(() => 
      {   if (pais){
            setPaisFiltrado(pais.filter((el) => el.nombre.toLowerCase().includes(palabraBusqueda)));
          }
      },
    [palabraBusqueda,pais]);
    
  useEffect(() => {
    miregion
      ? paisesPorRegion(miregion).then((res) => {
          setPais(res);
          setPaisFiltrado(res);
        })
      : todosLosPaises().then((res) => {
          setPais(res);
          setPaisFiltrado(res);
        });
  }, [miregion]);

  const handlepalabra = (e) => { 
    setPalabraBusqueda(e.target.value.toLowerCase()); 
  };

  return (
    <>  
        {   setPalabraBusqueda &&
            <EncabezadoBusqueda handlepalabra={handlepalabra} /> 
        }
        
        <section className="contenedor">
          <div className="tipoGrilla">
            {paisFiltrado ? (
              paisFiltrado.map((el) => (
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
