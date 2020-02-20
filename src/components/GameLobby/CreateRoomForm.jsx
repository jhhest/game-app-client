import React, { Component } from "react";
import axios from "axios";

export default class CreateRoomForm extends Component {
  state = {
    room: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    const url = `http://localhost:5000/room/new`;

    await axios.post(url, { name: this.state.room });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <p>Why not make your own room?</p>
        <input
          type="text"
          name="room"
          placeholder="give a super cool room name"
          values={this.state.room}
          onChange={event => this.onChange(event)}
        ></input>
        <button type="submit">materialize my room</button>
      </form>
    );
  }
}
