import '../estilos/tarjetaPais.css';

const TarjetaPais = ({nombre,capital,poblacion,bandera}) => {
    return <article className="tarjeta colorTarjetaDia colorDia">
        <div>
            <img src={bandera.png} alt={bandera.alt} className="bandera" />
        </div>
        <h2 className='fuente800'>{nombre}</h2>

        <span className='fuente600'>Capital:</span>&nbsp; <span className='fuente300'>{capital}</span>
        <br/>
        <span className='fuente600'>Population:</span>&nbsp; <span className='fuente300'>{poblacion}</span>
        
        
    </article>;
};
  
export {TarjetaPais};