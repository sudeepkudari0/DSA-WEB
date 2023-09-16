import React from "react";
import Topics from "../../Topics";
import "./integers.css";
import { useNavigate, useLocation } from "react-router-dom";

const Integers = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (event) => {
    const f = event.target.getAttribute("href");
    const re = "/Topics/Integers/" + f;
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
              <a href="Palindrome" onClick={handleLinkClick}>
                Palindrome
              </a>
            </li>
            <li>
              <a href="ReverseInteger" onClick={handleLinkClick}>
                Reverse Integer
              </a>
            </li>
            <li>
              <a href="Array" onClick={handleLinkClick}>
                Array
              </a>
            </li>
            <li>
              <a href="topics/Integers/Prime" onClick={handleLinkClick}>
                Prime Number"
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Integers;
