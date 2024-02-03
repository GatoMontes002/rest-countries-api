import { Link } from "react-router-dom";
import "../estilos/tarjetaPais.css";

const TarjetaPais = ({ nombre, capital, poblacion, bandera }) => {
  function cliquearTarjeta() {
    console.log("tarjata nro " + nombre);
  }

  return (
    <article
      onClick={cliquearTarjeta}
      className="tarjeta colorTarjetaDia colorDia"
    >
      <Link to={ `/detallepais/${nombre}` }>
        <div>
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
