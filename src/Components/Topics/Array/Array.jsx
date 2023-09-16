import React from "react";
import Topics from "../../Topics";
import "./Array.css";
import { useNavigate, useLocation } from "react-router-dom";

const Array = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (event) => {
    const f = event.target.getAttribute("href");
    const re = "/Topics/Array/" + f;
    if (re && !location.pathname.includes("href")) {
      navigate(re);
      console.log(location.pathname);
      event.preventDefault();
    }
  };
  return (
    <>
      <Topics />
      <div className="main-div-topics-Array">
        <div className="topic-Array-container">
          <ul className="ul-topics-Arrays">
            <li>
              <a href="MoveZeros" onClick={handleLinkClick}>
                Move Zeros
              </a>
              Longest Common Prefix
            </li>
            <li>
              <a href="TwoSum" onClick={handleLinkClick}>
                Two Sum
              </a>
            </li>
            <li>
              <a href="TBA" onClick={handleLinkClick}>
                TBA
              </a>
            </li>
            <li>
              <a href="TBA" onClick={handleLinkClick}>
                TBA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Array;
