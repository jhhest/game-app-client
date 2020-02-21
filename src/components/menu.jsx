import React, { Component } from "react";
import { Link } from "react-router-dom";

export class menu extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="index.php">
            <img width="130px" src="" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/">
                  About us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default menu;
