import React, { Component } from "react";
import { connect } from "react-redux";
import Room from "../GameLobby/Room"; //component for displaying the rooms
import CreateRoomForm from "./CreateRoomForm";
import { Link } from "react-router-dom";

export class GameLobby extends Component {
  populateRoomLists = rooms => {
    console.log("Rooms: ", rooms);
    return rooms.map(roomItem => {
      console.log("roomItem: ");
      return <Room id={roomItem.id} name={roomItem.name} />;
    });
  };

  render() {
    if (this.props.user) {
      if (!this.props.user.token) {
        return (
          <p>
            Login to access the game lobby <Link to="/">Return to login</Link>
          </p>
        );
      }
    }

    return (
      <div className="game-lobby-container">
        <CreateRoomForm />
        <div className="welcome-game-lobby">
          <h1>Welcome to the Game Lobby</h1>
        </div>
        <div className="room-list-container">
          {this.props.rooms && this.populateRoomLists(this.props.rooms)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.room.rooms,
  user: state.userdata.user
});

// const mapDispatchToProps = { joinRoom };

export default connect(mapStateToProps)(GameLobby);
