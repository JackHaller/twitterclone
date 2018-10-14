import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {}

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-text">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <a className="navbar-brand">CryptoTracker</a>
          </Link>
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="mr-auto">
            <span className="navbar-text">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <a className="nav-link">Home</a>
              </Link>
            </span>
            <span className="navbar-text">
              <Link to="/favorites-page" style={{ textDecoration: 'none' }}>
                <a className="nav-link">Favorites</a>
              </Link>
            </span>
            <span className="navbar-text">
              <Link to="/portfolio-page" style={{ textDecoration: 'none' }}>
                <a className="nav-link">Portfolio</a>
              </Link>
            </span>
          </div>
          <span className="navbar-text">
            <Link to="/login-page" style={{ textDecoration: 'none' }}>
              <a className="nav-link" href="#">Login</a>
            </Link>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar