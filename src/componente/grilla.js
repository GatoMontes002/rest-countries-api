import '../estilos/grilla.css'
import { TarjetaPais } from './tarjetaPais'

const Grilla = ({pais}) => {
    return <section className='contenedor'>
        <div className='tipoGrilla'>
            { pais &&
            pais.map(el => <span><TarjetaPais key = {el.nombre+el.capital+el.poblacion}
                    nombre={el.nombre} 
                    capital={el.capital} 
                    poblacion={el.poblacion} 
                    bandera={el.bandera} 
                    /></span>)
            }
        </div>
    </section>;
};
  
export {Grilla};