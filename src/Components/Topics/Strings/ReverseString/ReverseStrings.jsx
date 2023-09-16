import React, { useState } from "react";
import "./ReverseString.css";
import Strings from "../Strings";

const ReverseString = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("Result");
  const reverseResult = () => {
    console.log("clicked");
    const str = inputValue;
    const revstr = str.split("").reverse().join("");
    setResult(revstr);
  };

  return (
    <>
      <Strings />
      <p>Reverse String</p>
      <div className="main-ReverseString">
        <div className="input-ReverseString">
          <input
            type="text"
            className="input-ReverseString"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="button-ReverseString" onClick={reverseResult}>
            Submit
          </button>
        </div>
        <div className="result">
          <input
            type="textbox"
            id="result"
            className="textbox"
            value={result}
          />
        </div>
      </div>
    </>
  );
};

export default ReverseString;
