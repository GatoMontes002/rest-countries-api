function BotonDropDownRegion() {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Filter by Region
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="/detalleporregion/Africa">
          Africa
        </a>
        <a class="dropdown-item" href="/detalleporregion/America">
          America
        </a>
        <a class="dropdown-item" href="/detalleporregion/Asia">
          Asia
        </a>
        <a class="dropdown-item" href="/detalleporregion/Europe">
          Europe
        </a>
        <a class="dropdown-item" href="/detalleporregion/Oceania">
          Oceania
        </a>
        <a class="dropdown-item" href="/">
          All
        </a>
      </div>
    </div>
  );
}

export { BotonDropDownRegion };
