import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/about';
import Textform from './components/textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router, // Make sure Router is used
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // A slightly cleaner way to handle theme changes
  const changeMode = (newMode) => {
    setMode(newMode);
    
    // Define theme properties in an object for easier management
    const themes = {
      dark: { backgroundColor: '#2b3866', color: 'white' },
      grey: { backgroundColor: '#ced4da', color: 'black' },
      yellow: { backgroundColor: '#fff3cd', color: 'black' },
      light: { backgroundColor: 'white', color: 'black' },
    };

    const selectedTheme = themes[newMode] || themes['light'];

    document.body.style.backgroundColor = selectedTheme.backgroundColor;
    document.body.style.color = selectedTheme.color;
    
    const modeName = newMode.charAt(0).toUpperCase() + newMode.slice(1);
    document.title = `TextUtils - ${modeName} Mode`;
    showAlert(`${modeName} mode has been enabled`, "success");
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="textutils"
          name="Ritika"
          mode={mode}
          changeMode={changeMode}
        />
        
        {alert && <Alert alert={alert} />}

        <div className="container my-3">
          {/*
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Textform heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />} />
          </Routes>
          */}
          <Textform heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

