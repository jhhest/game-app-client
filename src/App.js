import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Home from "./page/home";
import Login from "./components/login";
import Signup from "./components/Signup";
import GameLobby from "./components/GameLobby/GameLobby";

import { connect } from "react-redux";
const baseUrl = "http://localhost:5000";
// import axios from "axios";

export class App extends Component {
  stream = new EventSource(`${baseUrl}/stream`);

  componentDidMount() {
    console.log("did component mount? ");
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      //const { type, payload } = action;
      console.log("stream action", action);
      this.props.dispatch(action);
    };
  }

  protectedRoute = (Component, routerProps) => {
    const user = this.props.user
    return user && user.token ? <Component {...routerProps} /> : <Redirect to="/login" />
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu />
          <switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/game_lobby" render={(routerProps) => this.protectedRoute(GameLobby, routerProps)} />
            <Route exact path="/" component={Home} />
          </switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userdata.user,
  }
};

//const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
