import React, { Component } from "react";

export default class Room extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <li>
        <div className="roomItem" id={id}>
          <i class="fa fa-rocket"></i>
          <span>{name}</span>
          <button class="fa fa-times pull-right">join</button>
          {/* <i class="fa fa-times pull-right"></i> */}
        </div>
      </li>
    );
  }
}
