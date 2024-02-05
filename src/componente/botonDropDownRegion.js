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
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="/Africa">
          Africa
        </a>
        <a class="dropdown-item" href="/America">
          America
        </a>
        <a class="dropdown-item" href="/Asia">
          Asia
        </a>
        <a class="dropdown-item" href="/Europe">
          Europe
        </a>
        <a class="dropdown-item" href="/Oceania">
          Oceania
        </a>
        <a class="dropdown-item" href="/All">
          All
        </a>
      </div>
    </div>
  );
}

export { BotonDropDownRegion };
