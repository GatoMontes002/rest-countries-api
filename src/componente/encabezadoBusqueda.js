import { BotonBusqueda } from "./botonBusqueda";
import { BotonDropDownRegion } from "./botonDropDownRegion";

const EncabezadoBusqueda = (setPalabraBusqueda) => {
  return (
    <div className="contenedor-filtros">
        <div className="contenedor-por-nombre">
            <span className="margen-filtros"><BotonBusqueda setPalabraBusqueda={setPalabraBusqueda} /></span>
        </div>
        <div className="contenedor-por-region">
            <span className="margen-filtros" ><BotonDropDownRegion/></span>
        </div>
    </div>
  );
};

export {EncabezadoBusqueda};
