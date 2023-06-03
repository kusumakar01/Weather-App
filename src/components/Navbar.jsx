function Navbar(props) {
  return (
    <nav className={`navbar ${props.theme ? "night" : "day"}`}>
      <div className="container-fluid">
        <div className="brand ms-3">Weather App</div>
        <label className="switch">
          <input
            className="theme-checkbox"
            type="checkbox"
            checked={props.theme}
            onChange={() => {
              document.body.classList.toggle("night-bg");
              props.setTheme(!props.theme);
            }}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
