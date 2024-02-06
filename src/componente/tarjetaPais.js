import { Link } from "react-router-dom";
import "../estilos/tarjetaPais.css";

const TarjetaPais = ({ nombre, capital, poblacion, bandera,ccn3,region }) => {
    
  let valor = "tarjeta colorTarjetaDia colorDia";
  if (document.body.classList[0]!=="light-theme")
    valor = "tarjeta colorTarjetaNoche colorNoche";

  return (
    <article>
      <Link to={ `/detallepais/${ccn3}` }>
        <div className={valor}>
          { bandera.alt ?
            <div >
              <img src={bandera.png} alt={bandera.alt} className="bandera" />
            </div>
            :
            <div >
              <img src={bandera.png} alt={"Flag of the country: " + nombre} className="bandera" />
            </div>
          }

          <h2 className="fuente800">{nombre}</h2>
          <span className="fuente600">Population:</span>&nbsp;{" "}
          <span className="fuente300">{poblacion}</span>
          <br />
          <span className="fuente600">Capital:</span>&nbsp;{" "}
          <span className="fuente300">{capital}</span>
          <br />
          <span className="fuente600">Region:</span>&nbsp;{" "}
          <span className="fuente300">{region}</span>
          
        </div>
      </Link>
    </article>
  );
};

export { TarjetaPais };
