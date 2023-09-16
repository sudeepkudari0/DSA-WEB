import React from "react";
import Topics from "../../Topics";
import "./Strings.css";
import { useNavigate, useLocation } from "react-router-dom";

const Strings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (event) => {
    const f = event.target.getAttribute("href");
    const re = "/Topics/Strings/" + f;
    if (re && !location.pathname.includes("href")) {
      navigate(re);
      console.log(location.pathname);
      event.preventDefault();
    }
  };
  return (
    <>
      <Topics />
      <div className="main-div-topics-integer">
        <div className="topic-integer-container">
          <ul className="ul-topics-integers">
            <li>
              <a href="ReverseString" onClick={handleLinkClick}>
                Reverse String
              </a>
            </li>
            <li>
              <a href="Anagram" onClick={handleLinkClick}>
                Anagram
              </a>
            </li>
            <li>
              <a href="Palindrome" onClick={handleLinkClick}>
                Palindrome
              </a>
            </li>
            <li>
              <a href="LongestCommonPrefix" onClick={handleLinkClick}>
                Longest Common Prefix
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Strings;
