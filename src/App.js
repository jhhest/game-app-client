import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Home from "./page/home";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Menu />
          <Home />
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
