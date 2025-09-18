import React from 'react';
import PropTypes from 'prop-types';
// 1. 'Link' import is commented out as react-router-dom is not being used
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // Helper to decide whether to turn a mode on or off (revert to light)
  const handleModeClick = (clickedMode) => {
    const newMode = props.mode === clickedMode ? 'light' : clickedMode;
    props.changeMode(newMode);
  };

  // Define specific, darker colors for the navbar
  const navbarStyle = {
    dark: { backgroundColor: '#343a40' },
    grey: { backgroundColor: '#495057' },
    yellow: { backgroundColor: '#ffc107' },
    light: { backgroundColor: '#f8f9fa' }
  };
  
  // Determine if navbar text should be light or dark for readability
  const navbarTextColorClass = (props.mode === 'dark' || props.mode === 'grey' || props.mode === 'yellow') ? 'navbar-dark' : 'navbar-light';
  
  // Determine the text color for the switch labels
  const switchLabelColor = (props.mode === 'dark' || props.mode === 'grey' || props.mode === 'yellow') ? 'text-light' : 'text-dark';

  return (
    <nav 
      className={`navbar navbar-expand-lg ${navbarTextColorClass}`}
      style={navbarStyle[props.mode]}
    >
      <div className="container-fluid">
        {/* 2. Changed <Link> back to <a> and 'to' to 'href' */}
        <a className="navbar-brand" href="#">{props.title}</a>
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
              {/* 2. Changed <Link> back to <a> and 'to' to 'href' */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* 3. Changed <Link> back to <a> */}
              <a className="nav-link" href="#">{props.aboutText}</a>
            </li>
          </ul>
          <div className="d-flex">
            <div className={`form-check form-switch ${switchLabelColor}`}>
              <input
                className="form-check-input"
                onClick={() => handleModeClick('dark')}
                checked={props.mode === 'dark'}
                type="checkbox"
                role="switch"
                id="darkSwitch"
                readOnly
              />
              <label className="form-check-label" htmlFor="darkSwitch">Dark Mode</label>
            </div>
            <div className={`form-check form-switch ${switchLabelColor} mx-2`}>
              <input
                className="form-check-input"
                onClick={() => handleModeClick('grey')}
                checked={props.mode === 'grey'}
                type="checkbox"
                role="switch"
                id="greySwitch"
                readOnly
              />
              <label className="form-check-label" htmlFor="greySwitch">Grey Mode</label>
            </div>
            <div className={`form-check form-switch ${switchLabelColor} mx-2`}>
              <input
                className="form-check-input"
                onClick={() => handleModeClick('yellow')}
                checked={props.mode === 'yellow'}
                type="checkbox"
                role="switch"
                id="yellowSwitch"
                readOnly
              />
              <label className="form-check-label" htmlFor="yellowSwitch">Yellow Mode</label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  name: "Guest",
  aboutText: "About Us",
};

