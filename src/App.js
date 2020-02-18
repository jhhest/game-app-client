import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Home from "./page/home";
import Login from "./components/login";
import Signup from "./components/Signup"


export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HyperJ2 Games</h1>
        <Menu/>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
