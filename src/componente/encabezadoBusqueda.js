import { BotonBusqueda } from "./botonBusqueda";
import { BotonDropDownRegion } from "./botonDropDownRegion";



const EncabezadoBusqueda = ({handlepalabra}) => {
  const palabraretorno = (e) => { handlepalabra(e); 
                                };

  return (
    <div className="contenedor-filtros">
        <div className="contenedor-por-nombre">
            <span className="margen-filtros"><BotonBusqueda palabraretorno={palabraretorno} /></span>
        </div>
        <div className="contenedor-por-region">
            <span className="margen-filtros" ><BotonDropDownRegion/></span>
        </div>
    </div>
  );
};

export {EncabezadoBusqueda};
