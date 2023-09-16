import React from "react";
import "../styles/topics.css";
import { useNavigate, useLocation } from "react-router-dom";

const Topics = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (event) => {
    const href = "/Topics";
    if (href && !location.pathname.includes(href)) {
      navigate(href);
      event.preventDefault();
      console.log(location.pathname);
    }
  };
  return (
    <>
      <div className="main-div-topics">
        <div className="topic-container">
          <ul className="ul-topics">
            <li>
              <a href="Topics/Integers" onClick={handleLinkClick}>
                Integers
              </a>
            </li>
            <li>
              <a href="Topics/Strings" onClick={handleLinkClick}>
                Strings
              </a>
            </li>
            <li>
              <a href="Topics/Array" onClick={handleLinkClick}>
                Array
              </a>
            </li>
            <li>
              <a href="Topics/Two-pointers" onClick={handleLinkClick}>
                Two-Pointers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Topics;
