// Navbar by Yao, login/ logout conditional rendering by Aaron Leung
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/context";
import "../styles/NavBar.css";

// use isLoggedIn global variable for login and logout conditional rendering
const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn, userId, setUserId } =
    useContext(MovieContext);
  const logout = async () => {
    setIsLoggedIn(false);
    setUserId();
    try {
      await fetch("/api/login/logout");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <nav className="navbar  navbar-expand-md">
      <div className="container-fluid">
        <Link to="/" title="Navigate to search menu" className="navbar-brand">
          <i className="fas fa-bi bi-search fa-20x"></i>
          Moviewer
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            {isLoggedIn && (
              <Link to={`./dashboard/${userId}`} className="nav-link">
                Dashboard
              </Link>
            )}
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <Link to="./login" onClick={logout} className="nav-link">
                Logout
              </Link>
            ) : (
              <Link to="./login" className="nav-link">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

NavBar.prototype = {};
export default NavBar;
