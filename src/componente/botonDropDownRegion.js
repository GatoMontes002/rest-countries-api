//import { Link } from "react-router-dom";



import Dropdown from 'react-bootstrap/Dropdown';

function BotonDropDownRegion() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/grilla/africa">Africa</Dropdown.Item>
        <Dropdown.Item href="/grilla/america">America</Dropdown.Item>
        <Dropdown.Item href="/grilla/asia">Asia</Dropdown.Item>
        <Dropdown.Item href="/grilla/europe">Europe</Dropdown.Item>
        <Dropdown.Item href="/grilla/oceania">Oceania</Dropdown.Item>
        <Dropdown.Item href="/">All</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { BotonDropDownRegion };
