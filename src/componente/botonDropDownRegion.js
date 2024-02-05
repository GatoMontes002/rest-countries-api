//import { Link } from "react-router-dom";



import Dropdown from 'react-bootstrap/Dropdown';

function BotonDropDownRegion() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/grilla/Africa">Africa</Dropdown.Item>
        <Dropdown.Item href="/grilla/America">America</Dropdown.Item>
        <Dropdown.Item href="/grilla/Asia">Asia</Dropdown.Item>
        <Dropdown.Item href="/grilla/Europe">Europe</Dropdown.Item>
        <Dropdown.Item href="/grilla/Oceania">Oceania</Dropdown.Item>
        <Dropdown.Item href="/">All</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { BotonDropDownRegion };
