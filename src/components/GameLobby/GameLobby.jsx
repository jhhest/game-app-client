import React, { Component } from "react";
import { connect } from "react-redux";
import Room from "../GameLobby/Room"; //component for displaying the rooms

export class GameLobby extends Component {
  populateRoomLists = rooms => {
    console.log("Rooms: ", rooms);
    return rooms.map(roomItem => {
      console.log("roomItem: ");
      return <Room id={roomItem.id} name={roomItem.name} />;
    });
  };

  render() {
    console.log("Redux State of Rooms: ", this.props.rooms);
    return (
      <div className="game-lobby-container">
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
  rooms: state.room.rooms
});

// const mapDispatchToProps = { joinRoom };

export default connect(mapStateToProps)(GameLobby);
