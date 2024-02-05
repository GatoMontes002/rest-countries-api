import { Link } from "react-router-dom";



import Dropdown from 'react-bootstrap/Dropdown';

function BotonDropDownRegion() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/detalleporregion/Europe">Action</Dropdown.Item>
        <Dropdown.Item Link to="/detalleporregion/Europe">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { BotonDropDownRegion };
