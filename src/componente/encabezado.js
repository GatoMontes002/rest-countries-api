import '../estilos/encabezado.css';
import { FaMoon, FaSun } from "react-icons/fa";

const Encabezado = () => {
    return <header className="encabezado">
        <h1>Where in the world?</h1>  
       <FaMoon/><FaSun/>
        
    </header>;
};

export {Encabezado};