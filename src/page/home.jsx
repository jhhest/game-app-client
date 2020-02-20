import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../components/login";
import { GameLobby } from "../components/GameLobby/GameLobby";

export class home extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return <p>loading... </p>;
    } else {
      return (
        <section>
          {!this.props.user && <Login />}
          {this.props.user && <GameLobby />}
        </section>
      );
    }
  }
}

// const mapStateToProps = state => ({
//   rooms: state.room.rooms,
//   user: state.userdata.user
// });

const mapStateToProps = state => ({
  user: state.userdata.user
});

export default connect(mapStateToProps)(home);
