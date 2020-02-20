import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Home from "./page/home";
import Login from "./components/login";
import Signup from "./components/signup";
import GameLobby from "./components/GameLobby/GameLobby";

import { connect } from "react-redux";
const baseUrl = "http://localhost:5000";
// import axios from "axios";

export class App extends Component {
  state = {
    rooms: [],
    room: "first"
  };

  stream = new EventSource(`${baseUrl}/stream`);

  componentDidMount() {
    console.log("did component mount? ")
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      const { type, payload } = action;
      console.log("stream action", action);
      this.props.dispatch(action);
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/game_lobby" component={GameLobby} />
          <Route exact path="/" component={Home} />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
