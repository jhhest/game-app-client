import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../store/users/actions";
import { Link } from "react-router-dom";

export class login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log("this.state", this.state);
    console.log("what is props dispatch", this.props.dispatch);
    this.props.dispatch(userLogin(email, password));
  };

  handleChange = event => {
    const { value } = event.target;
    console.log("value in handleChange:", value);
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("state is", this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          emailadres:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.email}
            name="email"
          />
        </p>
        <p>
          password:
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.password}
            name="password"
          />
        </p>
        <button type="submit">submit</button>
        <Link to="/signup"><p>Signup</p></Link>
      </form>
    );
  }
}



export default connect()(login);
