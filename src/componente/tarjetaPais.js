import '../estilos/tarjetaPais.css';

const TarjetaPais = ({nombre,capital,poblacion,bandera}) => {
    return <article className="tarjeta">
        <div>
            <img src={bandera.png} alt={bandera.alt} className="bandera" />
        </div>
        <h2 className='fuente800 colorDia'>{nombre}</h2>

        <span className='fuente600 colorDia'>Capital:</span>&nbsp; <span className='fuente300'>{capital}</span>
        <br/>
        <span className='fuente600 colorDia'>Population:</span>&nbsp; <span className='fuente300'>{poblacion}</span>
        
        
    </article>;
};
  
export {TarjetaPais};