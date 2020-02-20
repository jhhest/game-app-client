import React, { Component } from "react";
import { connect } from "react-redux";
import Room from "../GameLobby/Room"; //component for displaying the rooms
import CreateRoomForm from "./CreateRoomForm";

export class GameLobby extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.setState({ loading: false });
  }

  populateRoomLists = rooms => {
    return rooms.map(roomItem => {
      return <Room id={roomItem.id} name={roomItem.name} />;
    });
  };
  render() {
    console.log("GameLobby check token: ", this.props.user);

    // if (!this.props.user) {
    //   return (
    //     <p>
    //       Login to access the game lobby <Link to="/">Return to login</Link>
    //     </p>
    //   );
    // }
    if (this.state.loading) {
      console.log("what is this.state.loading", this.state.loading)
      return (<p>loading</p>);
    } else {
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
}

const mapStateToProps = state => ({
  rooms: state.room.rooms,
  user: state.userdata.user
});

// const mapDispatchToProps = { joinRoom };

export default connect(mapStateToProps)(GameLobby);
