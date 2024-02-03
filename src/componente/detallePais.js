import { Link, useParams } from "react-router-dom";
import "../estilos/detallePais.css";
import { TarjetaPais } from "./tarjetaPais";

const DetallePais = () => {
  const nombrepais = useParams().nombrepais;
  function hacer() {
    console.log(nombrepais);
  }
  return (
    <div className="color">
      <h2 onClick={hacer}>Detalle</h2>
      <Link to="/"><p>volver</p></Link>
      <TarjetaPais nombre="Argentina" 
                capital="{el.capital}"
                poblacion="{el.poblacion}"
                bandera=""/>
    </div>
  );
};

export { DetallePais };
