import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import '../estilos/botonDropDownRegion.css'

function BotonDropDownRegion() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter by Region
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop-down-cl" >
        <Dropdown.Item className="drop-down-cl-item" as={Link} to="/grilla/africa">Africa</Dropdown.Item>
        <Dropdown.Item className="drop-down-cl-item" as={Link} to="/grilla/america">America</Dropdown.Item>
        <Dropdown.Item className="drop-down-cl-item" as={Link} to="/grilla/asia">Asia</Dropdown.Item>
        <Dropdown.Item className="drop-down-cl-item" as={Link} to="/grilla/europe">Europa</Dropdown.Item>
        <Dropdown.Item className="drop-down-cl-item" as={Link} to="/grilla/oceania">Oceania</Dropdown.Item>
        <Dropdown.Item className="drop-down-cl-item" as={Link} to="/">All</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { BotonDropDownRegion };
