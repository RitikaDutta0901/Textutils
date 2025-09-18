import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleCapitalizeClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized format!", "success");
  };
  const handleOnChange = (event) => {
    console.log("Handled on change");
    setText(event.target.value);
  };

  const [text, setText] = useState(''); // State initialization

  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
        ></textarea>
        <button
          className="btn btn-primary mx-2"
          onClick={handleUpClick}

        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCapitalizeClick}
        >
          Convert to Capital Format
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} minutes to read</p>
      </div>
    </div>
  );
}