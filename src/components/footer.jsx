import React, { Component } from "react";

export class footer extends Component {
  render() {
    return (
      <div className=" kilimanjaro_bottom_header_one section_padding_50 text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                © All Rights Reserved by{" "}
                <a href="/">
                  Plug&Play.codaissuer -(with all love)
                  <i className="fa fa-love"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
