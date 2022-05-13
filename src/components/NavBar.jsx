import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import "../styles/NavBar.css";

const navBar = [
  {
    path: "/",
    name: "Home",
    isDropdown: false,
  },
  {
    path: "dictionary",
    name: "Dictionary",
    isDropdown: false,
  },
  {
    path: "flash-card",
    name: "Flashcard",
    isDropdown: false,
    dropdownItems: [
      { path: "/flash-card/create", name: "Create flashcard" },
      { path: "/flash-card/explore", name: "Explore" },
    ],
  },
];

function NavBar(props) {
  const { pathname } = useLocation();
  const [tab, setTab] = useState(pathname);

  function setBadge(path) {
    return path === tab ? "text-warning" : "";
  }

  return (
    <div className="nav-bar">
      <Nav className="nav1">
        <Nav.Item>
          <Link className="logo" to="/">
            Wordify
          </Link>
        </Nav.Item>
      </Nav>

      <Nav className="nav2">
        {navBar.map((nav) => {
          if (!nav.dropdownItems)
            return (
              <Nav.Item key={nav.path} path={nav.path}>
                <Link className="nav-link item" to={nav.path}>
                  {nav.name}
                </Link>
              </Nav.Item>
            );
          return (
            <NavDropdown
              key={nav.path}
              path={nav.path}
              title={<span className="item">{nav.name}</span>}
            >
              {nav.dropdownItems.map((item) => (
                <Link key={item.path} className="dropdown-item" to={item.path}>
                  {item.name}
                </Link>
              ))}
            </NavDropdown>
          );
        })}
      </Nav>
    </div>
  );
}

export default NavBar;
