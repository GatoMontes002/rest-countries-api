import { FaSearch } from "react-icons/fa";
import '../estilos/botonBusqueda.css'

function BotonBusqueda({palabraretorno}) {
    
    return (
      <div className="caja">
        <FaSearch className="search-icon" />
        <input className="boton-busqueda"
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={(e) => { console.log('cambio');  palabraretorno(e);}} //= e.target.value.toLowerCase(); }}
        />
        
        
      </div>
    );
  }
  
  export { BotonBusqueda };