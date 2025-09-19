import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Corrected the casing of the component imports to match the likely filenames
import Navbar from './components/Navbar';
import About from './components/about';
import Textform from './components/textform';
import Alert from './components/Alert';

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

  const changeMode = (newMode) => {
    setMode(newMode);
    
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
      <Router >
        <Navbar
          title="TextUtils"
          name="Ritika"
          mode={mode}
          changeMode={changeMode}
        />
        
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<Textform heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

