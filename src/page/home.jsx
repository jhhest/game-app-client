import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../components/login";

export class home extends Component {
  render() {
    console.log("this.props;", this.props);
    return <section>{<Login />}</section>;
  }
}

const mapStateToProps = state => {};

export default connect()(home);
