import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dictionary">
            Wordify
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dictionary">
                  Dictionary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/flash-card">
                  Flashcard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
