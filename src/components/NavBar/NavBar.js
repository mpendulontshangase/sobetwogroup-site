import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Home from "../Home/Home";

function NavBar({ setContact, contact }) {
  const handleClick = () => {
    contact ?
      setContact(false) : setContact(true)// ✅ show the contact details when the user clicks on the contact link
  };

  const handleHomeClick = () => {
    setContact(false);  // ✅ Hide the contact details when the user navigates to the home page
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Sobetwo Group
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={{ pathname: "/", state: { contact } }}
                  onClick={handleHomeClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
