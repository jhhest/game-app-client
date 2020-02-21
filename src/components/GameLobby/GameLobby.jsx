import React, { Component } from "react";
import { connect } from "react-redux";
import Room from "../GameLobby/Room"; //component for displaying the rooms
import CreateRoomForm from "./CreateRoomForm";
import OnlineUsersList from "./OnlineUsersList";
import { Link } from "react-router-dom";
import "../../css/gamelobby.css";

export class GameLobby extends Component {
  populateRoomLists = rooms => {
    console.log("Rooms: ", rooms);
    return rooms.map(roomItem => {
      console.log("roomItem: ");
      return <Room id={roomItem.id} name={roomItem.name} />;
    });
  };

  render() {
    console.log("GameLobby check token: ", this.props.user);

    if (!this.props.user) {
      return (
        <p>
          Login to access the game lobby <Link to="/">Return to login</Link>
        </p>
      );
    }

    return (
      //<div className="game-lobby-container">
      <div className="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="box">
              <div class="chat-room">
                <aside class="kiri-side">
                  <div class="user-head">
                    <i class="fa fa-lobby-o"></i>
                    <h3>Plug&Play</h3>
                  </div>
                  <ul class="chat-list">
                    <li class="active">
                      <a class="lobby" href="#">
                        <h4>
                          <i class="fa fa-list"></i>
                          Rooms
                        </h4>
                      </a>
                    </li>

                    {this.props.rooms &&
                      this.populateRoomLists(this.props.rooms)}
                  </ul>
                  <footer>
                    <a class="chat-avatar" href="#javascript:;">
                      <img
                        alt=""
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                    </a>
                    <div class="user-status">
                      <i class="fa fa-circle text-success">
                        {this.props.user.username}
                      </i>
                    </div>
                    <a class="chat-dropdown pull-right" href="#javascript:;">
                      <i class="fa fa-chevron-down"></i>
                    </a>
                  </footer>
                </aside>
                <aside class="tengah-side">
                  <div class="chat-room-head">
                    <h3>Lobby @ Codaisseur code-34</h3>
                    <form action="#" class="pull-right position">
                      <input
                        type="text"
                        placeholder="Search..."
                        class="form-control search-btn "
                      />
                    </form>
                  </div>
                  <div class="room-desk">
                    <CreateRoomForm />
                    <div class="room-box">
                      Active Room
                      {/* Reserve for the component to display the message of the chat (specially for Jan!!) */}
                    </div>
                  </div>
                  <OnlineUsersList />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      //</div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.room.rooms,
  user: state.userdata.user
});

// const mapDispatchToProps = { joinRoom };

export default connect(mapStateToProps)(GameLobby);
