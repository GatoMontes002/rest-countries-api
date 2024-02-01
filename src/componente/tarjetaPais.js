import '../estilos/tarjetaPais.css';

const TarjetaPais = ({nombre,capital,poblacion,bandera}) => {
    return <article className="tarjeta">
        <h3>{nombre}</h3>
        <p>{capital}</p>
        <p>{poblacion}</p>
        <div>
            <img src={bandera.png} alt={bandera.alt} width="100" />
        </div>
    </article>;
};
  
export {TarjetaPais};