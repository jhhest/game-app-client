import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Home from "./page/home";
import Login from "./components/login";
import Signup from "./components/signup";
import GameRoom from "./components/GameRoom";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/game_room" component={GameRoom} />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
