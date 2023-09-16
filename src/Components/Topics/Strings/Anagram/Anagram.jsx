import React, { useState } from "react";
import "./Anagram.css";
import Strings from "../Strings";

const Anagram = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [result, setResult] = useState("Result");
  const anagramResult = () => {
    console.log("clicked");
    const str1 = inputValue;
    const str2 = inputValue2;

    const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, "");
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, "");

    const sortedStr1 = cleanStr1.split("").sort().join("");
    const sortedStr2 = cleanStr2.split("").sort().join("");

    if (sortedStr1 === sortedStr2) {
      setResult("Anagram");
    } else {
      setResult("Not Anagram");
    }
  };

  return (
    <>
      <Strings />
      <p>Anagram</p>
      <div className="main-Anagram">
        <div className="input-Anagram">
          <input
            type="text"
            className="input-Anagram"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input
            type="text"
            className="input-Anagram"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          />
          <button className="button-Anagram" onClick={anagramResult}>
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

export default Anagram;
