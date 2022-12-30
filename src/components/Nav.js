import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../images/logo.png";
import logo_orange from "../images/logo_orange.png";

function Nav() {
  const [show, handlshow] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };
  // const untoggleSearch = () => {
  //   isExpanded ? setIsExpanded(false) : setIsExpanded(false);
  // };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handlshow(true);
    } else {
      handlshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        {show ? (
          <img
            className="nav__logo_orange"
            src={logo_orange}
            alt="مدينة الأفلام"
          />
        ) : (
          <img className="nav__logo" src={logo} alt="مدينة الأفلام" />
        )}
        <div className={`search-box ${isExpanded ? "expanded" : ""}`}>
          <input type="text" placeholder="Search"></input>
          <div className="search-btn" onClick={toggleSearch}>
            <i className="fas fa-search"></i>
          </div>
          {/* <div className="cancel-btn" onClick={untoggleSearch}>
            <i className="fas fa-times"></i>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
