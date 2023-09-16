import React, { useState } from "react";
import "./MoveZeros.css";
import Array from "../Array";

const MoveZeros = () => {
  const [inputArr, setInputArr] = useState("");
  const [result, setResult] = useState("Result");
  const moveResult = () => {
    console.log("clicked");
    let nonZeroIndex = 0;
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] !== 0) {
        inputArr[nonZeroIndex] = inputArr[i];
        nonZeroIndex++;
      }
    }
    for (let i = nonZeroIndex; i < inputArr.length; i++) {
      inputArr[i] = 0;
    }
    setResult(inputArr);
  };

  return (
    <>
      <Array />
      <p>Move Zeroes : Enter Numbers Separated by Comma(,)</p>
      <div className="main-MoveZeros">
        <div className="input-MoveZeros">
          <input
            type="text"
            className="input-MoveZeros"
            value={inputArr}
            onChange={(e) => setInputArr(e.target.value)}
          />
          <button className="button-MoveZeros" onClick={moveResult}>
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

export default MoveZeros;
