import React from 'react';
import { Link } from "react-router-dom";
function Navbar(props) {
  const handleModeClick = (clickedMode) => {
    const newMode = props.mode === clickedMode ? 'light' : clickedMode;
    props.changeMode(newMode);
  };

  const navbarStyle = {
    dark: { backgroundColor: '#343a40' },
    grey: { backgroundColor: '#495057' },
    yellow: { backgroundColor: '#ffc107' },
    light: { backgroundColor: '#f8f9fa' }
  };
  
  const navbarTextColorClass = ['dark', 'grey', 'yellow'].includes(props.mode) ? 'navbar-dark' : 'navbar-light';
  const switchLabelColor = ['dark', 'grey', 'yellow'].includes(props.mode) ? 'text-light' : 'text-dark';

  return (
    <nav 
      className={`navbar navbar-expand-lg ${navbarTextColorClass}`}
      style={navbarStyle[props.mode] || navbarStyle['light']}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <span className="navbar-text"> {props.name}!</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className={`form-check form-switch ${switchLabelColor}`}>
              <input
                className="form-check-input"
                onChange={() => handleModeClick('dark')}
                checked={props.mode === 'dark'}
                type="checkbox"
                role="switch"
                id="darkSwitch"
              />
              <label className="form-check-label" htmlFor="darkSwitch">Dark</label>
            </div>
            <div className={`form-check form-switch ${switchLabelColor} mx-2`}>
              <input
                className="form-check-input"
                onChange={() => handleModeClick('grey')}
                checked={props.mode === 'grey'}
                type="checkbox"
                role="switch"
                id="greySwitch"
              />
              <label className="form-check-label" htmlFor="greySwitch">Grey</label>
            </div>
            <div className={`form-check form-switch ${switchLabelColor}`}>
              <input
                className="form-check-input"
                onChange={() => handleModeClick('yellow')}
                checked={props.mode === 'yellow'}
                type="checkbox"
                role="switch"
                id="yellowSwitch"
              />
              <label className="form-check-label" htmlFor="yellowSwitch">Yellow</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
