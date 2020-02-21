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
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">
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
