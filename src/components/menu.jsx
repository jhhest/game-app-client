import React, { Component } from "react";

export class menu extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="index.php">
            <img width="130px" src="" />
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
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default menu;
