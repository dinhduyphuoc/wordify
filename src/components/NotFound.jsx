import React from "react";
import "../styles/NotFound.css";
import img from "../media/404-not-found.svg";

function NotFound(props) {
  return (
    <div className="errorContainer">
      <img src={img} alt="not-found" />
      <h2>Sorry the page you are looking is not found...</h2>
    </div>
  );
}

export default NotFound;
