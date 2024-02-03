import { Link } from "react-router-dom";
import "../estilos/tarjetaPais.css";

const TarjetaPais = ({ nombre, capital, poblacion, bandera }) => {
  function cliquearTarjeta() {
    console.log("tarjata nro " + nombre);
    console.log(document.body.classList[0]);
    
  }
  
  let valor = "tarjeta colorTarjetaDia colorDia";
  if (document.body.classList[0]!=="light-theme")
    valor = "tarjeta colorTarjetaNoche colorNoche";

  return (
    <article
      onClick={cliquearTarjeta}
      
    >
      <Link to={ `/detallepais/${nombre}` }>
        <div className={valor}>
          <div>
            <img src={bandera.png} alt={bandera.alt} className="bandera" />
          </div>
          <h2 className="fuente800">{nombre}</h2>
          <span className="fuente600">Capital:</span>&nbsp;{" "}
          <span className="fuente300">{capital}</span>
          <br />
          <span className="fuente600">Population:</span>&nbsp;{" "}
          <span className="fuente300">{poblacion}</span>
        </div>
      </Link>
    </article>
  );
};

export { TarjetaPais };