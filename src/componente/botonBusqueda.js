import { FaSearch } from "react-icons/fa";

function BotonBusqueda({setPalabraBusqueda}) {
    
    return (
      <div>
        <FaSearch className="search-icon" />
        <input
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