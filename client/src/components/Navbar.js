import React, { useState } from "react";

const Navbar = (props) => {
  const [navOpacity, setNavOpacity] = useState(100);
  document.onscroll = () => {
    let navHolder = document.getElementById("navHolder").offsetHeight;
    let percentage = (navHolder - window.pageYOffset) / navHolder;
    if (percentage >= 0 && percentage < 100) {
      setNavOpacity(percentage * 100);
    }
  };
  const handleNewNavState = (stateString) => {
    props.setNavState(stateString);
  };
  const handleTagFilter = (e) => {
    props.setNavState("By Topic");
  };
  return (
    <div
      id="navHolder"
      style={{
        position: "fixed",
        width: "100%",
        opacity: `${navOpacity}%`,
      }}
    >
      <nav style={{ backgroundColor: "transparent" }}>
        <div className="nav-wrapper" style={{ width: "85%", margin: "auto" }}>
          <img
            src={require("./logo_transparent_background.png")}
            className="brand-logo"
            style={{ maxHeight: "100%" }}
          />
          <ul className="right">
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown">
                Look Around
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul
        id="dropdown"
        className="dropdown-content"
        style={{ marginTop: "80px", top: "80px" }}
      >
        {props.navState === "From The Beginning" ? (
          <li
            onClick={() => props.setNavState("From The Beginning")}
            style={{ background: "#47afa4" }}
          >
            <a href="#!" style={{ color: "white" }}>
              From The Beginning
            </a>
          </li>
        ) : (
          <li onClick={() => props.setNavState("From The Beginning")}>
            <a href="#!">From The Beginning</a>
          </li>
        )}
        <li className="divider"></li>
        {props.navState === "Most Recent" ? (
          <li
            onClick={() => props.setNavState("Most Recent")}
            style={{ background: "#47afa4" }}
          >
            <a href="#!" style={{ color: "white" }}>
              Most Recent
            </a>
          </li>
        ) : (
          <li onClick={() => props.setNavState("Most Recent")}>
            <a href="#!">Most Recent</a>
          </li>
        )}
        <li className="divider"></li>
        {props.navState === "By Topic" ? (
          <li
            onClick={() => props.setNavState("By Topic")}
            style={{ background: "#47afa4" }}
          >
            <a href="#!" style={{ color: "white" }}>
              By Topic
            </a>
          </li>
        ) : (
          <li>
            <a onClick={() => handleTagFilter()}>By Topic</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
