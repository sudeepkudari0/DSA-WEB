import React, { useState } from "react";
import "./ReverseInteger.css";
import Integers from "../Integers";

const ReverseInteger = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("Result");
  const ReverseResult = () => {
    console.log("clicked");
    const reversed = parseInt(num.toString().split("").reverse().join(""));
    const maxInt32 = Math.pow(2, 31) - 1;
    const minInt32 = Math.pow(-2, 31);
    if (reversed > maxInt32 || reversed < minInt32) {
      setNum("Out of Range");
    } else {
      setResult(reversed);
    }
  };

  return (
    <>
      {/* <Topics /> */}
      <Integers />
      <p>Enter a Number to Reverse </p>
      <div className="main-palindrome">
        <div className="input-palindrome">
          <input
            type="Number"
            className="input-palindrome"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <button className="button-palindrome" onClick={ReverseResult}>
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

export default ReverseInteger;
