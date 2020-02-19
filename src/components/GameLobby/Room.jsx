import React, { Component } from "react";

export default class Room extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div className="roomItem">
        <div>{name}</div>
        <button className="joinRoom btn btn-primary">
          {" "}
          Cum In!
          {/* onClick={() => props.joinClick(props.id)}> JOIN */}
        </button>
        {/* <div>{props.users}</div> */}
      </div>
    );
  }
}
