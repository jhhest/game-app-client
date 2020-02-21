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

  componentDidMount() {
    console.log(
      "Just a test. Is the component mounted and what is the value of this.props",
      this.props
    );
  }

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
        <div className="row">
          <div className="col-lg-12">
            <div className="box">
              <div className="chat-room">
                <aside className="kiri-side">
                  <div className="user-head">
                    <i className="fa fa-lobby-o"></i>
                    <h3>Plug&Play</h3>
                  </div>
                  <ul className="chat-list">
                    <li className="active">
                      <a className="lobby" href="#">
                        <h4>
                          <i className="fa fa-list"></i>
                          Rooms
                        </h4>
                      </a>
                    </li>

                    {this.props.rooms &&
                      this.populateRoomLists(this.props.rooms)}
                  </ul>
                  <footer>
                    <a className="chat-avatar" href="#javascript:;">
                      <img
                        alt=""
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      />
                    </a>
                    <div className="user-status">
                      <i className="fa fa-circle text-success">
                        {this.props.user.username}
                      </i>
                    </div>
                    <a
                      className="chat-dropdown pull-right"
                      href="#javascript:;"
                    >
                      <i className="fa fa-chevron-down"></i>
                    </a>
                  </footer>
                </aside>
                <aside className="tengah-side">
                  <div className="chat-room-head">
                    <h3>Lobby @ Codaisseur code-34</h3>
                    <form action="#" className="pull-right position">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control search-btn "
                      />
                    </form>
                  </div>
                  <div className="room-desk">
                    <CreateRoomForm />
                    <div className="room-box">
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
