import React, { Component } from "react";

export class login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = async event => {
    event.preventDeefault();
  };

  handleChange = event => {
    const { value } = event.target;
    console.log("value in handleChange:", value);
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("state is", this.state)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          emailadres:{" "}
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.email}
            name="email"
          />
        </p>
        <p>
          password:{" "}
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.password}
            name="password"
          />
        </p>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default login;
