import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };
    const handleLoClick = () => {
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
        setText(event.target.value);
    };

    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

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
            style={{backgroundColor: props.mode==='dark'?'#495057':'white', color: props.mode==='dark'?'white':'black'}}
            ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>Capitalize Text</button>
        
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{wordCount} words and {text.length} characters</p>
            <p>{0.008 * wordCount} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </div>
  );
}