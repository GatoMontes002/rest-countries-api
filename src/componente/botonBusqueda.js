import { FaSearch } from "react-icons/fa";
import '../estilos/botonBusqueda.css'

function BotonBusqueda({setPalabraBusqueda}) {
    
    return (
      <div class="caja">
        <FaSearch className="search-icon" />
        <input className="boton-busqueda"
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={(e) => setPalabraBusqueda(e.target.value.toLowerCase() )}
        />
        
        
      </div>
    );
  }
  
  export { BotonBusqueda };