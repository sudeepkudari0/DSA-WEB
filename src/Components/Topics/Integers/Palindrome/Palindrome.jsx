import React, { useState } from "react";
import "./Palindrome.css";
import Integers from "../Integers";

const Palindrome = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("Result");
  const palindromeResult = () => {
    console.log("clicked");
    const str = String(inputValue);
    const revstr = str.split("").reverse().join("");
    if (str === revstr) {
      setResult("Palindrome");
    } else {
      setResult("Not a Palindrome");
    }
  };

  return (
    <>
      {/* <Topics /> */}
      <Integers />
      <p>Enter a Number to check if it is a Palindrome</p>
      <div className="main-palindrome">
        <div className="input-palindrome">
          <input
            type="Number"
            className="input-palindrome"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="button-palindrome" onClick={palindromeResult}>
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

export default Palindrome;
