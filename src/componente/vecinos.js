import "../estilos/vecinos.css"
import { BotonVecino } from "./botonVecino";

const Vecinos = ({ listadoVecinos }) => {
  return (
    <div className="contenedor-vecinos">
        <div className="contenedor-vecinos-titulo">
            {listadoVecinos ?  <span className="color-text-vecino">Border Countries</span> : "No Borders"}
        </div>
        <div className="contenedor-vecinos-botones">
            {listadoVecinos?.map((el) => (
              
                <BotonVecino key={el} codigoVecino={el} />
              
            ))}
        </div>
    </div>
  );
};

export { Vecinos };
