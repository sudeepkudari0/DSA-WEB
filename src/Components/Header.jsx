import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (event) => {
    const href = event.target.getAttribute("href");
    if (href && !location.pathname.includes(href)) {
      navigate(href);
      event.preventDefault();
    }
  };
  return (
    <nav className="conatiner">
      <div className="main-div">
        <div className="title-div">
          <p className="title">DSA-WEB</p>
        </div>
        <div className="search-div">
          <input type="text" className="search-bar" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <ul className="ul-main">
          <li className="">
            <a href="Home" onClick={handleLinkClick} className="li1">
              Home
            </a>
          </li>
          <li className="li2">
            <a href="Topics" onClick={handleLinkClick}>
              Topics
            </a>
          </li>
          <li className="li3">
            <a href="Report" onClick={handleLinkClick}>
              Report
            </a>
          </li>
          <li className="li4">
            <a href="COntact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
