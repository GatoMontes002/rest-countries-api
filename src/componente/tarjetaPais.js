import '../estilos/tarjetaPais.css';

const TarjetaPais = ({nombre,capital,poblacion,bandera}) => {
    return <article className="tarjeta">
        <div>
            <img src={bandera.png} alt={bandera.alt} className="bandera" />
        </div>
        <h3>{nombre}</h3>
        <p>{capital}</p>
        <p>{poblacion}</p>
        
    </article>;
};
  
export {TarjetaPais};