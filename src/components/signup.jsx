import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { userSignUp } from "../store/users/actions";

export class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    console.log("this.state", this.state);

    this.props.dispatch(userSignUp(username, email, password));
    this.clear();
    this.props.history.push("/login");
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

  clear = () => {
    console.log("clear test");
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <form class="sign-up-form" role="form" onSubmit={this.handleSubmit}>
              <h2 class="text-center">Sign Up</h2>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  onChange={this.handleChange}
                  type="text"
                  class="form-control"
                  placeholder="username"
                  value={this.state.username}
                  name="username"
                  tabindex="1"
                />
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  onChange={this.handleChange}
                  type="text"
                  class="form-control"
                  placeholder="email"
                  value={this.state.email}
                  name="email"
                  tabindex="2"
                />
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  onChange={this.handleChange}
                  type="text"
                  class="form-control"
                  placeholder="password"
                  value={this.state.password}
                  name="password"
                  tabindex="3"
                />
              </div>
              <div class="row">
                <div class="col-xs-4 col-sm-3 col-md-3">
                  <span class="button-checkbox">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        class="btn btn-primary"
                        data-dismiss="modal"
                        tabindex="4"
                      />
                      I Agree
                    </label>
                  </span>
                </div>
                <div class="col-xs-8 col-sm-9 col-md-9">
                  By clicking{" "}
                  <strong class="label label-primary">Register</strong>, you
                  agree to the{" "}
                  <a href="#" data-toggle="modal" data-target="#t_and_c_m">
                    Terms and Conditions
                  </a>{" "}
                  set out by this site, including our Cookie Use.
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <input
                    type="submit"
                    value="Register"
                    class="btn btn-primary btn-block btn-lg"
                    tabindex="5"
                  />
                </div>
                <div class="col-xs-12 col-md-6">
                  <a href="/login" class="btn btn-success btn-block btn-lg">
                    Sign In
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Signup);
