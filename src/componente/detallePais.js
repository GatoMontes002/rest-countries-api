import { Link, useParams } from "react-router-dom";
import "../estilos/detallePais.css";

const DetallePais = () => {
  const nombrepais = useParams().nombrepais;
  function hacer() {
    console.log(nombrepais);
  }
  return (
    <div className="color">
      <h2 onClick={hacer}>Detalle</h2>
      <Link to="/"><p>volver</p></Link>
    </div>
  );
};

export { DetallePais };
